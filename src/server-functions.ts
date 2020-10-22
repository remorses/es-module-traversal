import fetch from 'node-fetch'
import path from 'path'
import { URL } from 'url'
import { defaultReadFile, defaultResolver, isRelative } from '.'

export async function readFromUrlOrPath(url: string) {
    let content = ''
    if (!url.startsWith('http')) {
        content = await defaultReadFile(url)
    } else {
        const res = await fetch(url, {})
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

export const urlResolver = ({
    root,
    baseUrl,
}: {
    root: string
    baseUrl: string
}) => {
    return function resolveUrlOrPath(ctx: string, importPath: string) {
        let importerDirectory = ctx.startsWith('http')
            ? path.posix.resolve(root, urlToRelativePath(ctx))
            : ctx
        if (!isRelative(importPath)) {
            // console.log('defaultResolver from', importerDirectory, importPath)
            return defaultResolver(importerDirectory, importPath)
        }
        importerDirectory = path.posix.relative(root, importerDirectory)
        // console.log({ importerDirectory, importPath, root })
        if (importPath.startsWith('/')) {
            // import from / means import from the root of the website
            importPath = importPath.slice(1)
        } else {
            // resolve relative to the importer file
            importPath = path.posix.join(importerDirectory, importPath)
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
