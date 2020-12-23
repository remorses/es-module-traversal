import { batchedPromiseAll } from 'batched-promise-all'
import { init, parse } from 'es-module-lexer'
import isBuiltin from 'is-builtin-module'
import path from 'path'
import url from 'url'
import { MAX_IO_OPS } from './constants'
import { getHtmlScriptsUrls } from './html'
import { readFromUrlOrPath } from './server-functions'
import {
    cleanUrl,
    debug,
    defaultResolver,
    flatten,
    isJsModule,
    isRelative,
    isUrl,
} from './support'
import { TraversalResultType, TraverseArgs } from './types'

export const defaultRead = readFromUrlOrPath

export async function traverseEsModules({
    entryPoints,
    resolver = defaultResolver,
    onEntry,
    stopTraversing,
    ignore = [],
    read = defaultRead,
    concurrency = MAX_IO_OPS,
    onNonResolved,
}: TraverseArgs): Promise<TraversalResultType[]> {
    // TODO add entrypoints in result? but what do i put in importerPath?
    let results: Set<TraversalResultType> = new Set()
    const ignoreFiles = new Set(ignore.map(cleanUrl))
    const alreadyProcessed = new Set([])

    // add entries found in html
    entryPoints = flatten(
        await Promise.all(
            entryPoints.map(async (entry) => {
                if (
                    isUrl(entry) &&
                    ['.html', '.htm'].includes(path.extname(entry))
                ) {
                    const baseUrlParsed = url.parse(entry)
                    const baseUrl = `${baseUrlParsed.protocol}//${baseUrlParsed.host}` // TODO add the starting path
                    let entries = await getHtmlScriptsUrls(
                        await readFromUrlOrPath(entry),
                    )
                    entries.forEach((x) => {
                        results.add({
                            importPath: x,
                            importer: entry,
                            resolvedImportPath: new url.URL(
                                x,
                                baseUrl,
                            ).toString(),
                        })
                    })
                    return entries.map((p) =>
                        new url.URL(p, baseUrl).toString(),
                    )
                }
                return [entry]
            }),
        ),
    )

    let toProcess: TraversalResultType[] = [
        ...entryPoints.map((x) => ({
            importPath: '',
            importer: '',
            resolvedImportPath: x,
        })),
    ] // TODO if the format here is path and then resolver returns another format (like url) i can have duplicates
    await init

    while (toProcess.length) {
        // for every files get its imports and add them to results
        const newResults: TraversalResultType[] = flatten(
            await batchedPromiseAll(
                toProcess,
                async ({ resolvedImportPath, importer }) => {
                    alreadyProcessed.add(resolvedImportPath)
                    const contents = await read(resolvedImportPath, importer)
                    const importPaths = getImportPaths(
                        contents,
                        resolvedImportPath,
                    ) // you can transpile modules from jsx and tsx here
                    if (onEntry) {
                        await onEntry(resolvedImportPath, importer, contents)
                    }
                    debug(`traversing ${resolvedImportPath}`)
                    function importPathToResult(
                        importPath,
                    ): TraversalResultType {
                        // you can resolve to a local running server (vite) here if you want
                        const newResolvedImportPath = resolver(
                            isomorphicDirname(resolvedImportPath),
                            importPath,
                        )
                        if (!newResolvedImportPath) {
                            if (onNonResolved) {
                                onNonResolved(newResolvedImportPath)
                            } else {
                                console.error(
                                    `WARNING: could not resolve '${importPath}' imported by '${resolvedImportPath}'`,
                                )
                            }
                            return
                        }

                        return {
                            importPath,
                            importer: resolvedImportPath,
                            resolvedImportPath:
                                newResolvedImportPath || undefined,
                        }
                    }
                    const newResults = importPaths
                        .map(importPathToResult)
                        .filter(Boolean)
                    return newResults
                },
                concurrency,
            ),
        )

        newResults.forEach((x) => results.add(x))

        toProcess = newResults
            .filter((x) => isRelative(x.importPath)) // TODO do not process only relative imports
            .filter((x) => {
                if (stopTraversing) {
                    const stop = stopTraversing(x.resolvedImportPath)
                    if (stop) {
                        debug(`stop traversing at ${x.resolvedImportPath}`)
                    }
                    return !stop
                }
                return true
            })
            .filter((x) => {
                return (
                    !ignoreFiles.has(cleanUrl(x.resolvedImportPath)) &&
                    !alreadyProcessed.has(x.resolvedImportPath)
                )
            })
            .filter(Boolean)

        debug(`traversing inside [${toProcess.join(', ')}]`)
    }
    return [...results]
}

// works on file paths and on urls
export function isomorphicDirname(p: string) {
    const queryMatch = p.match(/\?.*$/)
    const query = queryMatch ? queryMatch[0] : ''
    return path.dirname(p) + query
}

function getImportPaths(source: string, filePath?: string) {
    // strip UTF-8 BOM
    if (source.charCodeAt(0) === 0xfeff) {
        source = source.slice(1)
    }
    // console.log(source)
    const result: string[] = []
    const imports = tryParseImports(source, filePath)
    for (const { s, e, d } of imports) {
        let importPath = source.slice(s, e).trim()
        const isDynamicImport = d > -1
        if (isDynamicImport) {
            // dynamic import paths are expressions, if they are dimple strings i can get the importPath
            importPath = getImportPathFromExpression(importPath)
            if (!importPath) {
                continue
            }
        }
        const isImportMeta = d === -2
        if (isImportMeta) {
            debug(`skipping import meta ${importPath}`)
            continue
        }
        // debug(importPath)
        if (isBuiltin(importPath)) {
            continue
        }

        result.push(importPath)
    }
    debug(`parsed imports [${result.join(', ')}]`)
    return result
}

function getImportPathFromExpression(id: string) {
    // remove comment
    id = id.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
    const literalIdMatch = id.match(/^\s*(?:'([^']+)'|"([^"]+)")\s*$/)
    if (literalIdMatch) {
        id = literalIdMatch[1] || literalIdMatch[2]
    }
    return id
}

function tryParseImports(source, filename = '') {
    try {
        const [imports] = parse(source)
        return imports
    } catch (e) {
        const line = source.slice(0, e.idx).split('\n').length
        throw new Error(
            `cannot parse ES imports in '${filename}', code is:\n${source
                .split('\n')
                .slice(abs(line - 1), line + 1)
                .join('  \n')}\n`,
        )
    }
}

const abs = (x) => (x < 0 ? 0 : x)
