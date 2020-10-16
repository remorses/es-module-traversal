import { init } from 'es-module-lexer'
import path from 'path'
import { URL } from 'url'
import fetch from 'node-fetch'
var serveStatic = require('serve-static')

import os from 'os'
import {
    defaultReadFile,
    defaultResolver,
    isRelative,
    traverseEsModules,
} from '../src'
import { serve } from './support'

it('works', async () => {
    await init
    const currentFile = path.resolve(__dirname, __filename)
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
})

it('example', async () => {
    const currentFile = path.resolve('tests/example/entry.js')
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
    expect(res.map((x) => x.importPath)).toMatchSnapshot()
})
it('with server', async () => {
    const PORT = '7000'
    const stop = await serve(PORT)
    const currentFile = path.resolve('tests/example/entry.js')
    const res = await traverseEsModules({
        entryPoint: currentFile,
        resolver: (ctx, importPath) => {
            let importerDirectory = ctx.startsWith('http')
                ? relativePathFromUrl(ctx)
                : ctx
            if (!isRelative(importPath)) {
                return defaultResolver(
                    path.resolve(importerDirectory),
                    importPath,
                )
            }
            importerDirectory = path.relative(process.cwd(), importerDirectory)
            importPath = path.join(importerDirectory, importPath)
            // console.log({ importPath, pathname: importerDirectory })
            return `http://localhost:${PORT}/${importPath}`
        },
        readFile: async (url) => {
            console.log({ url })
            if (!url.startsWith('http')) {
                return defaultReadFile(url)
            }
            // read from the server
            const res = await fetch(url, { headers: {} })
            const content = await res.text()
            return content
        },
    })
    expect(res.map((x) => x.importPath)).toMatchSnapshot()
    await stop()
})

function relativePathFromUrl(ctx) {
    let pathname = new URL(ctx).pathname
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
    return pathname
}
