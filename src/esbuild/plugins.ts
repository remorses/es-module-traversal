import { Plugin } from 'esbuild'
import isBuiltin from 'is-builtin-module'



// TODO implement custom node resolver that also adds a stopTraversing callback
export function CustomResolverPlugin({ resolver }): Plugin {
    return {
        name: 'custom-resolver',
        setup: function setup({ onLoad, onResolve }) {
            onResolve({ filter: /.*/ }, (args) => {
                if (isBuiltin(args.path)) {
                    return {
                        external: true,
                    }
                }
                // TODO win paths
                if (args.path.startsWith('.') || args.path.startsWith('/')) {
                    return null
                }
                // console.log(args.importer, args.path)
                const resolved = resolver(args.importer, args.path)

                // console.log({ resolved })
                if (!resolved) {
                    return {
                        external: true,
                    }
                }
                return {
                    path: resolved,
                }
            })
        },
    }
}
