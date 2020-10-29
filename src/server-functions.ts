import fetch from 'node-fetch'
import path from 'path'
import slash from 'slash'
import { URL } from 'url'
import { defaultReadFile, defaultResolver, isRelative } from '.'
import { debug } from './support'

export async function readFromUrlOrPath(url: string, importer?: string) {
    let content = ''
    if (!url.startsWith('http')) {
        content = await defaultReadFile(url)
    } else {
        const res = await fetch(url, { headers: { Referer: importer } })
        if (!res.ok) {
            throw new Error(
                `Cannot fetch '${url}': ${
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
export const urlResolver = ({
    root,
    baseUrl,
}: {
    root: string
    baseUrl: string
}) => {
    // root = slash(root)
    return function resolveUrlOrPath(ctx: string, importPath: string) {
        debug(`resolveUrlOrPath from '${ctx}' to '${importPath}'`)
        let importerDirectory = ctx.startsWith('http')
            ? path.resolve(root, urlToRelativePath(ctx))
            : ctx
        if (!isRelative(importPath)) {
            // console.log('defaultResolver from', importerDirectory, importPath)
            return defaultResolver(importerDirectory, importPath)
        }
        importerDirectory = slash(path.relative(root, importerDirectory))
        // console.log({ importerDirectory, importPath, root })
        if (importPath.startsWith('/')) {
            // import from / means import from the root of the website
            importPath = importPath.slice(1)
        } else {
            // resolve relative to the importer file
            importPath = path.join(importerDirectory, importPath)
        }
        // console.log(importPath)
        // console.log({ importPath, pathname: importerDirectory })
        const url = new URL(importPath, baseUrl).toString()
        // console.log({url})
        return url
    }
}

function urlToRelativePath(ctx) {
    let pathname = new URL(ctx).pathname
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
    return pathname
}
