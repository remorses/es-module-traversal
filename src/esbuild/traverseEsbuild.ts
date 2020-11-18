import { build, BuildOptions, Metadata, Plugin } from 'esbuild'
import { promises as fsp } from 'fs'
import fsx from 'fs-extra'
import deepmerge, { Options } from 'deepmerge'
import os from 'os'
import path from 'path'
import slash from 'slash'
import { defaultResolver, flatten, unique } from '../support'
import { TraversalResultType } from '../types'
import { CustomResolverPlugin, StopTraversingPlugin } from './plugins'

// TODO support tsconfig paths,
// TODO make any non js module external
// use the right resolver in esbuild
// maybe can add support for vue and other stuff by loading a vue file to a js file? i will let people pas the loaders for esbuild directly, this way they can pass them if they want
// mark as external modules that make stopTraversing true

type Args = {
    entryPoints: string[]
    esbuildOptions?: Partial<BuildOptions>
    resolver?: (cwd: string, id: string) => string
    stopTraversing?: (importPath: string, context: string) => boolean
}

// resolver = defaultResolver,
// onEntry,
// stopTraversing,
// ignore = [],
// readFile = defaultRead,
export async function traverseWithEsbuild({
    entryPoints,
    resolver = defaultResolver,
    esbuildOptions = { plugins: [] },
    stopTraversing,
}: Args): Promise<TraversalResultType[]> {
    const destLoc = path.resolve(
        await fsp.mkdtemp(path.join(os.tmpdir(), 'dest')),
    )

    entryPoints = entryPoints.map((x) => path.resolve(x))

    try {
        const metafile = path.join(destLoc, 'meta.json')

        const esbuildCwd = process.cwd()
        await build(
            deepmerge(
                {
                    // splitting: true, // needed to dedupe modules
                    // external: externalPackages,

                    minifyIdentifiers: false,
                    minifySyntax: false,
                    minifyWhitespace: false,
                    mainFields: ['module', 'browser', 'main'],
                    sourcemap: false,
                    define: {
                        'process.env.NODE_ENV': JSON.stringify('dev'),
                        global: 'window',
                        // TODO defined to make any package work
                        // ...generateEnvReplacements(env),
                    },
                    // TODO allow importing from node builtins when using allowNodeImports
                    // TODO add plugin for pnp resolution
                    // tsconfig: ,
                    loader: {
                        '.js': 'jsx',
                    },
                    plugins: [
                        CustomResolverPlugin({ resolver }),
                        stopTraversing &&
                            StopTraversingPlugin({ stopTraversing }),
                    ].filter(Boolean),
                    bundle: true,
                    format: 'esm',
                    write: true,
                    entryPoints,
                    outdir: destLoc,
                    minify: false,
                    logLevel: 'info',
                    metafile,
                } as BuildOptions,
                esbuildOptions,
            ),
        )

        const meta: Metadata = JSON.parse(
            await (await fsp.readFile(metafile)).toString(),
        )

        const res = flatten(
            entryPoints.map((entry) => {
                return metaToTraversalResult({ meta, entry, esbuildCwd })
            }),
        )
        return res
    } finally {
        await fsx.remove(destLoc)
    }
}

// TODO i cannot get the import paths with esbuild, output will only be with resolvedPath and importer

export function metaToTraversalResult({
    meta,
    entry,
    esbuildCwd = '.',
}: {
    meta: Metadata
    esbuildCwd: string
    entry: string
}): TraversalResultType[] {
    if (!path.isAbsolute(esbuildCwd)) {
        throw new Error('esbuildCwd must be an absolute path')
    }
    if (!path.isAbsolute(entry)) {
        throw new Error('entry must be an absolute path')
    }
    const alreadyProcessed = new Set<string>()
    let toProcess = [slash(path.relative(esbuildCwd, entry))]
    let result: TraversalResultType[] = []
    while (toProcess.length) {
        const newImports = flatten(
            toProcess.map((newEntry) => {
                if (alreadyProcessed.has(newEntry)) {
                    return
                }
                alreadyProcessed.add(newEntry)
                // newEntry = path.posix.normalize(newEntry) // TODO does esbuild always use posix?
                const input = meta.inputs[newEntry]
                if (!input) {
                    throw new Error(
                        `entry ${newEntry} is not present in esbuild metafile`,
                    )
                }
                const currentImports = input.imports.map((x) => x.path)
                // newImports.push(...currentImports)
                result.push(
                    ...currentImports.map(
                        (x): TraversalResultType => {
                            return {
                                importPath: '',
                                importer: path.join(esbuildCwd, newEntry),
                                resolvedImportPath: path.join(esbuildCwd, x),
                            }
                        },
                    ),
                )
                return currentImports
            }),
        ).filter(Boolean)
        toProcess = newImports
    }
    return unique(result, (x) => x.importPath + x.resolvedImportPath)
    // find the right output getting the key of the right output.inputs == input
    // get the imports of the inputs.[entry].imports and attach them the importer
    // do the same with the imports just found
    // return the list of input files
}