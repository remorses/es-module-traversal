import fetch from 'node-fetch'
import path from 'path'
import slash from 'slash'
import { URL } from 'url'
import { defaultReadFile, defaultResolver, isRelative } from '.'
import { debug } from './support'

export async function readFromUrlOrPath(url: string, importer: string) {
    let content = ''
    if (!url.startsWith('http')) {
        content = await defaultReadFile(url)
    } else {
        debug({ url, referer: importer })
        const res = await fetch(url, {
            headers: importer ? { Referer: importer } : {},
        })
        if (!res.ok) {
            throw new Error(
                `Cannot fetch '${url}', referer is '${importer}': ${
                    res.statusText
                } ${await res.text().catch(() => '')}`,
            )
        }
        content = await res.text()
    }

    return content
}

/*
 * Create a resolver function that support urls and paths
 * It assumes a static server behind `baseUrl` with `root` folder mounted at /
 */
// TODO rename to browserEmulator
export const urlResolver = ({
    root,
    baseUrl,
}: {
    root: string
    baseUrl: string
}) => {
    // resolves relative paths to absolute paths and adds the root baseUrl
    return function resolveUrlOrPath(ctx: string, importPath: string) {
        debug(`resolveUrlOrPath from '${ctx}' to '${importPath}'`)
        let importerDirectory = ctx.startsWith('http')
            ? path.resolve(root, urlToRelativePath(ctx)) // TODO does not work with vite
            : ctx
        if (!isRelative(importPath)) {
            // console.log('defaultResolver from', importerDirectory, importPath)
            return defaultResolver(importerDirectory, importPath)
        }
        importerDirectory = slash(path.relative(root, importerDirectory))
        // console.log({ importerDirectory, importPath, root })
        if (importPath.startsWith('.')) {
            // resolve relative to the importer file
            importPath = path.join(importerDirectory, importPath)
        } else if (importPath.startsWith('/')) {
            // new URL adds // if import path starts with /
            importPath = importPath.slice(1)
        }
        // console.log(importPath)
        // console.log({ importPath, pathname: importerDirectory })
        const url = new URL(importPath, baseUrl).toString()
        // debug({ from: importPath, to: url, ctx })
        return url
    }
}

function urlToRelativePath(ctx) {
    let pathname = new URL(ctx).pathname
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
    return pathname
}
