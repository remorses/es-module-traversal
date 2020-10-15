import resolve from 'enhanced-resolve'
import { init, parse } from 'es-module-lexer'
import { promises as fsp } from 'fs'
import isBuiltin from 'is-builtin-module'
import path from 'path'
import os from 'os'
import { debug } from './constants'
import { batchedPromiseAll } from 'batched-promise-all'

const JS_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'])

const _defaultResolver = resolve.create.sync({
    extensions: [...JS_EXTENSIONS],
})

function defaultResolver(cwd: string, id: string) {
    return _defaultResolver(cwd, id) || ''
}

function isRelative(x: string) {
    return x.startsWith('.') || x.startsWith('/')
}

function isJsModule(x: string) {
    return JS_EXTENSIONS.has(path.extname(x))
}

export type ResultType = {
    importPath: string
    resolvedImportPath?: string
    importer: string
}

const MAX_IO_OPS: number = os.cpus().length * 4

// change the resolver and readFile function to be injectable, this way
// - in vite i can read the file from the server, this way the server will transpile the file before sending it
// - resolver returns the url of the server for relative paths, with t=1 to skip rewrite caching
// problems are
// maybe before sending the file the server want to process other files?
// cache can use previous rewrites (before the _analyze.json has been generated)

// another use case for this plugin is asset export, get all the imports from the entrypoiny in html, save them on disk with right content type

export async function defaultReadFile(filePath: string): Promise<string> {
    return await (await fsp.readFile(filePath)).toString()
}

export type Args = {
    entryPoint: string
    resolver?: (cwd: string, id: string) => string
    // | ((cwd: string, id: string) => Promise<string>)
    readFile?: ((path: string) => string) | ((path: string) => Promise<string>)
}

// TODO return an import graph? with nodes and edges arrays
export async function walkEsModules({
    entryPoint,
    resolver = defaultResolver,
    readFile = defaultReadFile,
}: Args): Promise<ResultType[]> {
    let results: Set<ResultType> = new Set()
    let toProcess = [entryPoint]
    await init

    while (toProcess.length) {
        // read files to process concurrently
        const files = await batchedPromiseAll(
            toProcess,
            async (filePath) => {
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
        // process the relative imports found in current path
        toProcess = newResults
            .filter((x) => isRelative(x.importPath))
            .map((x) => x.resolvedImportPath)
            .filter(Boolean)
            .filter(isJsModule)
    }
    return [...results]
}

function getImportPaths(content) {
    const result: string[] = []
    const [imports] = parse(content)
    for (const { s, e, d } of imports) {
        let importPath = content.slice(s, e).trim()
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

const map = <T, Z>(x: T[], func: (x: T) => Z, _n?: number): Z[] => {
    return x.map(func)
}
