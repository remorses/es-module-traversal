import {
    NodeResolvePlugin
} from '@esbuild-plugins/all'
import deepmerge from 'deepmerge'
import { build, BuildOptions, Metadata, Plugin } from 'esbuild'
import { promises as fsp } from 'fs'
import fsx from 'fs-extra'
import os from 'os'
import path from 'path'
import slash from 'slash'
import { JS_EXTENSIONS } from '../constants'
import {
    defaultResolver,
    flatten,
    isRunningWithYarnPnp,
    unique
} from '../support'
import { TraversalResultType } from '../types'

// TODO support tsconfig paths,
// TODO make any non js module external
// use the right resolver in esbuild
// maybe can add support for vue and other stuff by loading a vue file to a js file? i will let people pas the loaders for esbuild directly, this way they can pass them if they want
// mark as external modules that make stopTraversing true

type Args = {
    entryPoints: string[]
    esbuildOptions?: Partial<BuildOptions>
    resolver?: (cwd: string, id: string) => string
    stopTraversing?: (resolvedPath: string) => boolean
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
                        // ...generateEnvReplacements(env),
                    },
                    inject: [
                        // require.resolve(
                        //     '@esbuild-plugins/node-globals-polyfill/process.js',
                        // ),
                    ],
                    // tsconfig: ,
                    loader: {
                        '.js': 'jsx',
                    },
                    plugins: [
                        ExternalButInMetafile(),
                        // NodeModulesPolyfillPlugin({ fs: true, crypto: true }), // TODO enable if in browser?
                        NodeResolvePlugin({
                            external: function external(resolved) {
                                if (
                                    stopTraversing &&
                                    stopTraversing(resolved)
                                ) {
                                    return {
                                        namespace: externalNamespace,
                                        path: resolved,
                                    }
                                }
                                return false
                            },
                            onUnresolved: () => {
                                return {
                                    external: true,
                                }
                            },
                            resolveOptions: {
                                preserveSymlinks: isRunningWithYarnPnp || false,
                                extensions: [...JS_EXTENSIONS],
                            },
                        }),
                    ].filter(Boolean),
                    bundle: true,
                    platform: 'node',
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
        // console.log(await (await fsp.readFile(metafile)).toString())

        const res = flatten(
            entryPoints.map((entry) => {
                return metaToTraversalResult({ meta, entry, esbuildCwd })
            }),
        ).map((x) => {
            return {
                ...x,
                resolvedImportPath: removeColon(x.resolvedImportPath),
                importer: removeColon(x.importer),
            }
        })
        return res
    } finally {
        await fsx.remove(destLoc)
    }
}

const externalNamespace = 'external-but-keep-in-metafile'
function ExternalButInMetafile(): Plugin {
    return {
        name: externalNamespace,
        setup(build) {
            const externalModule = 'externalModuleXXX'
            build.onResolve({ filter: new RegExp(externalModule) }, (args) => {
                if (args.path !== externalModule) {
                    return
                }
                return {
                    external: true,
                }
            })
            build.onLoad(
                {
                    filter: /.*/,
                    namespace: 'external-but-keep-in-metafile',
                },
                (args) => {
                    const contents = `export * from '${externalModule}'`
                    return { contents, loader: 'js' }
                },
            )
        },
    }
}

function removeColon(input: string) {
    const index = input.indexOf(':')
    if (index === -1) {
        return input
    }
    const clean = input.slice(index + 1)
    return clean
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
