import { Plugin } from 'esbuild'
import isBuiltin from 'is-builtin-module'

// resolve node builtins

// mark node modules as external

export function StopTraversingPlugin({ stopTraversing }): Plugin {
    return {
        name: 'stop-traversing',
        setup: function setup({ onLoad, onResolve }) {
            onResolve({ filter: /.*/ }, (args) => {
                console.log({ args })
                // args.path
                const external = stopTraversing(
                    args.resolveDir, // TODO replace resolveDir with the complete path to file
                    args.importer,
                )
                return {
                    external,
                }
            })
        },
    }
}

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
