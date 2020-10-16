import { Args, defaultReadFile, defaultResolver, isRelative } from '.'
import fs from 'fs-extra'
import fetch from 'node-fetch'
import { URL } from 'url'
import path from 'path'

export function makeServerFunctions({
    root = process.cwd(),
    port,
    host = 'localhost',
    protocol = 'http',
    downloadFilesToDir,
    headers = {},
}): Partial<Args> {
    const readFile = async (url) => {
        let content = ''
        if (!url.startsWith('http')) {
            content = await defaultReadFile(url)
        } else {
            const res = await fetch(url, { headers: { ...headers } })
            if (!res.ok) {
                throw new Error(`Cannot fetch '${url}': ${res.statusText}`)
            }
            content = await res.text()
        }
        return content
    }
    return {
        resolver: (ctx, importPath) => {
            let importerDirectory = ctx.startsWith('http')
                ? urlToRelativePath(ctx)
                : ctx
            if (!isRelative(importPath)) {
                return defaultResolver(
                    path.resolve(importerDirectory),
                    importPath,
                )
            }
            importerDirectory = path.relative(root, importerDirectory)
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
            const url = `${protocol}://${host}:${port}/${importPath}`
            // console.log({url})
            return url
        },
        readFile,
        onFile:
            downloadFilesToDir &&
            (async (url) => {
                // recreate server files structure on disk
                const content = await readFile(url)
                await writeUrlFileToDisk({
                    content,
                    url,
                    dest: downloadFilesToDir,
                    root,
                })
            }),
    }
}

function urlToRelativePath(ctx) {
    let pathname = new URL(ctx).pathname
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
    return pathname
}

// add this to readFile to recreate the server files
export async function writeUrlFileToDisk({ url, content, dest, root }) {
    // console.log({ url })
    let filePath = url.startsWith('http')
        ? urlToRelativePath(url)
        : path.relative(root, url)

    filePath = path.join(dest, filePath)

    await fs.createFile(filePath)
    await fs.writeFile(filePath, content)
    return
}
