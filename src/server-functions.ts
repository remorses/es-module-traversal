import fetch from 'node-fetch'
import path from 'path'
import slash from 'slash'
import { URL } from 'url'
import { defaultRead, defaultResolver, isRelative } from '.'
import { PACKAGE_NAME } from './constants'
import { cleanUrl, debug, isUrl, readFromDisk } from './support'

export async function readFromUrlOrPath(url: string, importer?: string) {
    let content = ''
    if (!isUrl(url)) {
        content = await readFromDisk(url)
    } else {
        const isHtml =
            path.extname(cleanUrl(url).split('/').reverse()[0]) === '.html'
        const Accept =  isHtml ? 'text/html' : '*/*'
        const res = await fetch(url, {
            headers: {
                ...(importer ? { Referer: importer } : {}),
                Accept,
                'User-Agent': PACKAGE_NAME,
            },
        })
        if (!res.ok) {
            throw new Error(
                `Cannot fetch '${url}', referer is '${importer}', content type is '${Accept}': ${
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
    return function resolveUrlOrPath(ctx: string, importPath: string = '') {
        debug(`resolveUrlOrPath from '${ctx}' to '${importPath}'`)
        let importerDirectory = isUrl(ctx)
            ? urlToRelativePath(ctx)
            : slash(path.relative(root, ctx)) // TODO assumes importer files paths are always absolute
        if (!isRelative(importPath)) {
            // console.log('defaultResolver from', importerDirectory, importPath)
            return defaultResolver(importerDirectory, importPath)
        }
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
