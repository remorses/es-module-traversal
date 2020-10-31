import path from 'path'
import resolve from 'resolve'
import { promises as fsp } from 'fs'
import slash from 'slash'
import { JS_EXTENSIONS, PACKAGE_NAME } from './constants'

export const queryRE = /\?.*$/
export const hashRE = /#.*$/

export const cleanUrl = (url: string) => {
    return url.replace(hashRE, '').replace(queryRE, '')
}

export const debug = require('debug')(PACKAGE_NAME)

export let isRunningWithYarnPnp: boolean
try {
    isRunningWithYarnPnp = Boolean(require('pnpapi'))
} catch {}

export const sleep = (t) => new Promise((res) => setTimeout(res, t))

export async function defaultReadFile(filePath: string): Promise<string> {
    return await (await fsp.readFile(filePath)).toString()
}

export const defaultResolver = (root: string, id: string) => {
    try {
        return (
            resolve.sync(id, {
                basedir: root,
                extensions: [...JS_EXTENSIONS],
                // necessary to work with pnpm
                preserveSymlinks: isRunningWithYarnPnp || false,
            }) || ''
        )
    } catch (e) {
        console.error(`WARN: cannot resolve '${id}' from '${root}'`)
        return ''
    }
}

// this map has same signature as batchedPromiseAll in case i want to refactor and make resolver asynchronous
// export const map = <T, Z>(x: T[], func: (x: T) => Z, _n?: number): Z[] => {
//     return x.map(func)
// }

export function isRelative(x: string) {
    x = cleanUrl(x)
    return x.startsWith('.') || x.startsWith('/')
}

export function isJsModule(x: string) {
    const ext = path.posix.extname(cleanUrl(x))
    return !ext || JS_EXTENSIONS.has(ext)
}

export function flatten<T>(arr: T[][]): T[] {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten as any) : toFlatten,
        )
    }, [])
}
