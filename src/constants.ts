import os from 'os'
export const PACKAGE_NAME = 'es-module-traversal'

export const MAX_IO_OPS: number = 1 // os.cpus().length * 4

export const JS_EXTENSIONS = new Set([
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mjs',
    '.cjs',
    '.vue',
    '.scss',
    '.css',
])
