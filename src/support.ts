import path from 'path'

export const queryRE = /\?.*$/
export const hashRE = /#.*$/

export const cleanUrl = (url: string) => {
    return url.replace(hashRE, '').replace(queryRE, '')
}

export let isRunningWithYarnPnp: boolean
try {
    isRunningWithYarnPnp = Boolean(require('pnpapi')) 
} catch {}
