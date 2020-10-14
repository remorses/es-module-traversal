import resolve from 'enhanced-resolve'
import { parse } from 'es-module-lexer'
import { promises as fsp } from 'fs'
import isBuiltin from 'is-builtin-module'
import path from 'path'
import os from 'os'
import { debug } from './constants'
import { batchedPromiseAll } from 'batched-promise-all'

const defaultResolver = resolve.create.sync({
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
})

function isRelative(x: string) {
    return x.startsWith('.') || x.startsWith('/')
}

export type ResultType = {
    importPath: string
    resolvedImportPath?: string
    importer: string
}

const MAX_IO_OPS: number = os.cpus().length * 4

export async function walkEsModules({
    entryPoint,
    resolver = defaultResolver,
}): Promise<ResultType[]> {
    let results: Set<ResultType> = new Set()
    let toProcess = [entryPoint]

    while (toProcess.length) {
        // read files to process concurrently
        const files = await batchedPromiseAll(
            toProcess,
            async (filePath) => {
                return {
                    content: await (await fsp.readFile(filePath)).toString(),
                    filePath,
                }
            },
            MAX_IO_OPS,
        )
        let newResults: ResultType[] = []
        // for every files get its imports and add them to results
        for (let { filePath, content } of files) {
            const importPaths = getImportPaths(content)
            newResults.push(
                ...importPaths.map(
                    (importPath): ResultType => {
                        // TODO maybe throw when import is not resolved?
                        const resolvedImportPath =
                            resolver(path.dirname(filePath), importPath) ||
                            undefined
                        return {
                            importPath,
                            importer: filePath,
                            resolvedImportPath,
                        }
                    },
                ),
            )
        }
        // add new found imports to the results
        newResults.forEach((x) => results.add(x))
        // process the relative imports found in current path
        toProcess = newResults
            .filter((x) => isRelative(x.importPath))
            .map((x) => x.resolvedImportPath)
            .filter(Boolean)
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
