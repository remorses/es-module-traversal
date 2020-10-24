import resolve from 'resolve'
import { init, parse } from 'es-module-lexer'
import { promises as fsp } from 'fs'
import isBuiltin from 'is-builtin-module'
import path from 'path'
import { MAX_IO_OPS } from './constants'
import { batchedPromiseAll } from 'batched-promise-all'
import { cleanUrl, debug, isRunningWithYarnPnp } from './support'

const JS_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'])

export type ResultType = {
    importPath: string
    resolvedImportPath?: string
    importer: string
}

export async function defaultReadFile(filePath: string): Promise<string> {
    return await (await fsp.readFile(filePath)).toString()
}

export type Args = {
    entryPoints: string[]
    ignore?: string[]
    stopTraversing?: (importPath: string) => boolean
    resolver?: (cwd: string, id: string) => string
    // | ((cwd: string, id: string) => Promise<string>)
    readFile?: ((path: string) => string) | ((path: string) => Promise<string>)
    onFile?: ((path: string) => any) | ((path: string) => Promise<any>)
}

// TODO use a cache and hash of file paths with contents as key that maps to the imports paths, this way i don't have to run the lexer or run transforms in vite server (does this make sense? serializing result will be slower)
// TODO add a watcher argument, this mode lets you get the import graph over time, when the watcher emits a change to a file, i try to parse it and add the import to the graph if not already existing
export async function traverseEsModules({
    entryPoints,
    resolver = defaultResolver,
    onFile,
    stopTraversing,
    ignore = [],
    readFile = defaultReadFile,
}: Args): Promise<ResultType[]> {
    let results: Set<ResultType> = new Set()
    const ignoreFiles = new Set(ignore.map(cleanUrl))
    const alreadyProcessed = new Set([])
    // entryPoint = cleanUrl(entryPoint)
    let toProcess = [...entryPoints] // TODO if the format here is path and then resolver returns another format (like url) i can have duplicates
    await init

    // first onFile
    if (onFile) {
        await Promise.all(entryPoints.map((x) => onFile(x)))
    }

    while (toProcess.length) {
        // read files to process concurrently
        const files = await batchedPromiseAll(
            toProcess,
            async (filePath) => {
                alreadyProcessed.add(filePath)
                return {
                    importPaths: getImportPaths(await readFile(filePath), filePath), // you can transpile modules from jsx and tsx here
                    filePath,
                }
            },
            MAX_IO_OPS,
        )
        let newResults: ResultType[] = []
        // for every files get its imports and add them to results
        for (let { filePath, importPaths } of files) {
            debug(`traversing ${filePath}`)
            const objects = map(
                importPaths,
                (importPath: string): ResultType => {
                    // TODO maybe throw when import is not resolved?
                    // you can resolve to a local running server (vite) here if you want
                    const resolvedImportPath = resolver(
                        path.dirname(filePath), // TODO does dirname work on urls?
                        importPath,
                    )

                    return {
                        importPath,
                        importer: filePath,
                        resolvedImportPath: resolvedImportPath || undefined,
                    }
                },
                MAX_IO_OPS,
            )
            newResults.push(...objects)
        }
        // add new found imports to the results
        newResults.forEach((x) => results.add(x))
        if (onFile) {
            await batchedPromiseAll(
                newResults.map((x) => x.resolvedImportPath).filter(Boolean),
                onFile,
                MAX_IO_OPS,
            )
        }
        // process the relative imports found in current path
        toProcess = newResults
            .filter((x) => isRelative(x.importPath))
            .filter((x) => {
                if (stopTraversing) {
                    // stopTraversing is necessary because some relative imports could take to node_modules directories in vite
                    return !stopTraversing(x.importPath)
                }
                return true
            })
            .map((x) => x.resolvedImportPath)
            .filter(Boolean)
            // .map(cleanUrl)
            .filter(isJsModule)
            // .filter((x) => !stopTraversing(x))
            .filter((x) => {
                x = cleanUrl(x)
                return !ignoreFiles.has(x)
            })
            .filter((x) => !alreadyProcessed.has(x))

        debug(`traversing inside [${toProcess.join(', ')}]`)
    }
    return [...results]
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
            try {
                // dynamic import paths are expressions, if they are dimple strings i can get the importPath
                importPath = eval(importPath) // TODO replace eval with remove comments regex and remove quotes regex
            } catch {
                debug(`could not evaluate dynamic import ${importPath}`)
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

function tryParseImports(source, message = '') {
    try {
        const [imports] = parse(source)
        return imports
    } catch {
        throw new Error('cannot parse ES modules, ' + message)
    }
}

// this map has same signature as batchedPromiseAll in case i want to refactor and make resolver asynchronous
const map = <T, Z>(x: T[], func: (x: T) => Z, _n?: number): Z[] => {
    return x.map(func)
}

export const defaultResolver = (root: string, id: string) => {
    try {
        return (
            resolve.sync(id, {
                basedir: root,
                extensions: [...JS_EXTENSIONS],
                // necessary to work with pnpm
                preserveSymlinks: isRunningWithYarnPnp || false,
            }) || ''
        )
    } catch (e) {
        console.error(`WARN: cannot resolve '${id}' from '${root}'`)
        return ''
    }
}

export function isRelative(x: string) {
    x = cleanUrl(x)
    return x.startsWith('.') || x.startsWith('/')
}

function isJsModule(x: string) {
    const ext = path.posix.extname(cleanUrl(x))
    return !ext || JS_EXTENSIONS.has(ext)
}
