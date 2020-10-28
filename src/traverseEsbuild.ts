import { build, Metadata } from 'esbuild'
import path from 'path'
import slash from 'slash'
import { promises as fsp } from 'fs'
import { defaultResolver, defaultReadFile } from '.'
import { TraverseArgs, TraversalResultType } from './types'
import { flatten } from './support'

// TODO support tsconfig paths,
// TODO make any non js module external
// use the right resolver in esbuild
// maybe can add support for vue and other stuff by loading a vue file to a js file? i will let people pas the loaders for esbuild directly, this way they can pass them if they want
// mark as external modules that make stopTraversing true
export async function traverseWithEsbuild({
    entryPoints,
    resolver = defaultResolver,
    onFile,
    stopTraversing,
    ignore = [],
    readFile = defaultReadFile,
}: TraverseArgs): Promise<TraversalResultType[]> {
    const destLoc = path.resolve(await fsp.mkdtemp('dest'))

    entryPoints = entryPoints.map((x) => path.resolve(x))

    const metafile = path.join(destLoc, 'meta.json')

    await build({
        splitting: true, // needed to dedupe modules
        // external: externalPackages,
        minifyIdentifiers: false,
        minifySyntax: false,
        minifyWhitespace: false,
        mainFields: ['module', 'browser', 'main'].filter(Boolean),
        // sourcemap: 'inline', // TODO sourcemaps panics and gives a lot of CPU load
        define: {
            'process.env.NODE_ENV': JSON.stringify('dev'),
            global: 'window',
            // TODO defined to make any package work
            // ...generateEnvReplacements(env),
        },
        // TODO inject polyfills for runtime globals like process, ...etc
        // TODO allow importing from node builtins when using allowNodeImports
        // TODO add plugin for pnp resolution
        // tsconfig: ,
        bundle: true,
        format: 'esm',
        write: true,
        entryPoints,
        outdir: destLoc,
        minify: false,
        logLevel: 'info',
        metafile,
    })

    const meta: Metadata = JSON.parse(
        await (await fsp.readFile(metafile)).toString(),
    )

    const res = flatten(
        entryPoints.map((entry) => {
            return metaToTraversalResult({ meta, entry, esbuildCwd: destLoc })
        }),
    )
    return res
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
    let imports = [slash(path.relative(esbuildCwd, entry))]
    let result: TraversalResultType[] = []
    while (imports.length) {
        const newImports = []
        imports.forEach((newEntry) => {
            // newEntry = path.posix.normalize(newEntry) // TODO does esbuild always use posix?
            const input = meta.inputs[newEntry]
            if (!input) {
                throw new Error(
                    `entry ${newEntry} is not present in esbuild metafile`,
                )
            }
            const currentImports = input.imports.map((x) => x.path)
            newImports.push(...currentImports)
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
        })
        imports = newImports
    }
    return result
    // find the right output getting the key of the right output.inputs == input
    // get the imports of the inputs.[entry].imports and attach them the importer
    // do the same with the imports just found
    // return the list of input files
}
