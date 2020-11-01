import { Plugin } from 'esbuild'
import builtins from 'builtin-modules'

// resolve node builtins

// mark node modules as external

export function StopTraversingPlugin({ stopTraversing }): Plugin {
    return {
        name: 'stop-traversing',
        setup: function setup({ onLoad, onResolve }) {
            onResolve({ filter: /.*/ }, (args) => {
                console.log({ args })
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
    const builtinsSet = new Set(builtins)
    return {
        name: 'stop-traversing',
        setup: function setup({ onLoad, onResolve }) {
            onResolve({ filter: /.*/ }, (args) => {
                if (builtinsSet.has(args.path)) {
                    return {
                        external: true,
                    }
                }
                const resolved = resolver(args.importer, args.path)

                // console.log({ resolved })
                return {
                    external: !resolved,
                    path: resolved,
                }
            })
        },
    }
}
