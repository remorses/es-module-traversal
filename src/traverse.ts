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

// TODO use a cache and hash of file paths with contents as key that maps to the imports paths, this way i don't have to run the lexer or run transforms in vite server (does this make sense? serializing result will be slower)
// TODO add a watcher argument, this mode lets you get the import graph over time, when the watcher emits a change to a file, i try to parse it and add the import to the graph if not already existing
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

    // entryPoint = cleanUrl(entryPoint)
    let toProcess: [path: string, importer: string][] = [
        ...entryPoints.map((x): [string, string] => [x, x]),
    ] // TODO if the format here is path and then resolver returns another format (like url) i can have duplicates
    await init

    // first onEntry
    if (onEntry) {
        await Promise.all(entryPoints.map((x) => onEntry(x, x)))
    }

    while (toProcess.length) {
        // read files to process concurrently
        const files = await batchedPromiseAll(
            toProcess,
            async ([filePath, importer]) => {
                alreadyProcessed.add(filePath)
                return {
                    importPaths: getImportPaths(
                        await read(filePath, importer),
                        filePath,
                    ), // you can transpile modules from jsx and tsx here
                    filePath,
                }
            },
            concurrency,
        )
        let newResults: TraversalResultType[] = []
        // for every files get its imports and add them to results
        for (let { filePath, importPaths } of files) {
            debug(`traversing ${filePath}`)
            // const importPaths = getImportPaths(content, filePath)
            const objects = importPaths
                .map(
                    (importPath): TraversalResultType => {
                        // you can resolve to a local running server (vite) here if you want
                        const resolvedImportPath = resolver(
                            isomorphicDirname(filePath),
                            importPath,
                        )
                        if (!resolvedImportPath) {
                            if (onNonResolved) {
                                onNonResolved(filePath)
                            } else {
                                console.error(
                                    `WARNING: could not resolve '${importPath}' imported by '${filePath}'`,
                                )
                            }
                            return
                        }

                        return {
                            importPath,
                            importer: filePath,
                            resolvedImportPath: resolvedImportPath || undefined,
                        }
                    },
                )
                .filter(Boolean)
            newResults.push(...objects)
        }
        // add new found imports to the results
        newResults.forEach((x) => results.add(x))
        if (onEntry) {
            await batchedPromiseAll(
                newResults.filter(Boolean),
                (x) => onEntry(x.resolvedImportPath, x.importer),
                MAX_IO_OPS,
            )
        }
        // process the relative imports found in current path
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
                    // isJsModule(x.resolvedImportPath) &&
                    !ignoreFiles.has(cleanUrl(x.resolvedImportPath)) &&
                    !alreadyProcessed.has(x.resolvedImportPath)
                )
            })
            // .map((x) => x.resolvedImportPath)
            // .map(cleanUrl)
            .filter(Boolean)
            .map((x) => [x.resolvedImportPath, x.importer])

        // .filter((x) => !stopTraversing(x))

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
        // error message is @:line:column
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
