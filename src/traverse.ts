import resolve from 'enhanced-resolve'
import { init, parse } from 'es-module-lexer'
import { promises as fsp } from 'fs'
import isBuiltin from 'is-builtin-module'
import path from 'path'
import { debug, MAX_IO_OPS } from './constants'
import { batchedPromiseAll } from 'batched-promise-all'

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
    entryPoint: string
    resolver?: (cwd: string, id: string) => string
    // | ((cwd: string, id: string) => Promise<string>)
    readFile?: ((path: string) => string) | ((path: string) => Promise<string>)
    onFile?: ((path: string) => any) | ((path: string) => Promise<any>)
}

// TODO return an import graph? with nodes and edges arrays
export async function traverseEsModules({
    entryPoint,
    resolver = defaultResolver,
    onFile,
    readFile = defaultReadFile,
}: Args): Promise<ResultType[]> {
    let results: Set<ResultType> = new Set()
    const alreadyProcessed = new Set([])
    let toProcess = [entryPoint] // TODO if the format here is path and then resolver returns another format (like url) i can have duplicates
    await init

    // first onFile
    if (onFile) {
        await onFile(entryPoint)
    }

    while (toProcess.length) {
        // read files to process concurrently
        const files = await batchedPromiseAll(
            toProcess,
            async (filePath) => {
                alreadyProcessed.add(filePath)
                return {
                    content: await readFile(filePath), // you can transpile modules from jsx and tsx here
                    filePath,
                }
            },
            MAX_IO_OPS,
        )
        let newResults: ResultType[] = []
        // for every files get its imports and add them to results
        for (let { filePath, content } of files) {
            const importPaths = getImportPaths(content)
            const objects = map(
                importPaths,
                (importPath): ResultType => {
                    // TODO maybe throw when import is not resolved?
                    // you can resolve to a local running server (vite) here if you want
                    const resolvedImportPath = resolver(
                        path.dirname(filePath),
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
            .map((x) => x.resolvedImportPath)
            .filter(Boolean)
            .filter(isJsModule)
            .filter((x) => !alreadyProcessed.has(x))
    }
    return [...results]
}

function getImportPaths(source: string) {
    // strip UTF-8 BOM
    if (source.charCodeAt(0) === 0xfeff) {
        source = source.slice(1)
    }
    // console.log(source)
    const result: string[] = []
    const [imports] = parse(source)
    for (const { s, e, d } of imports) {
        let importPath = source.slice(s, e).trim()
        const isDynamicImport = d > -1
        if (isDynamicImport) {
            try {
                // dynamic import paths are expressions, if they are dimple strings i can get the importPath
                importPath = eval(importPath)
            } catch {
                continue
            }
        }
        const isImportMeta = d === -2
        if (isImportMeta) {
            continue
        }
        debug(importPath)
        if (isBuiltin(importPath)) {
            continue
        }

        result.push(importPath)
    }
    return result
}

// this map has same signature as batchedPromiseAll in case i want to refactor and make resolver asynchronous
const map = <T, Z>(x: T[], func: (x: T) => Z, _n?: number): Z[] => {
    return x.map(func)
}

const _defaultResolver = resolve.create.sync({
    extensions: [...JS_EXTENSIONS],
})

export function defaultResolver(cwd: string, id: string) {
    return _defaultResolver(cwd, id) || ''
}

export function isRelative(x: string) {
    return x.startsWith('.') || x.startsWith('/')
}

function isJsModule(x: string) {
    const ext = path.extname(x)
    return !ext || JS_EXTENSIONS.has(ext)
}
