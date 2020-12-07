import os from 'os'
export const PACKAGE_NAME = 'es-module-traversal'

export const MAX_IO_OPS: number = os.cpus().length * 4

export const JS_EXTENSIONS = new Set([
    '.ts',
    '.tsx',
    '.mjs',
    '.js',
    '.jsx',
    '.cjs',
    // '.vue',
    // '.scss',
    // '.css',
])
