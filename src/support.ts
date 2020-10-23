import path from 'path'
import slash from 'slash'

export const queryRE = /\?.*$/
export const hashRE = /#.*$/

export const cleanUrl = (url: string) => {
    return url.replace(hashRE, '').replace(queryRE, '')
}

export let isRunningWithYarnPnp: boolean
try {
    isRunningWithYarnPnp = Boolean(require('pnpapi'))
} catch {}

export const unixPath = (x: string) => {
    if (!x.startsWith('http')) {
        return slash(x)
    }
    return x
}
