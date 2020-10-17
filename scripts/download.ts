import path from 'path'
import { URL } from 'url'
import fetch from 'node-fetch'
import fs from 'fs-extra'
import { makeServerFunctions, traverseEsModules } from '../src'

async function main() {
    const port = '3000'
    const dest = './mirror'
    const base = `http://localhost:${port}`
    await fs.remove(dest)
    const entryPoint = `/main.tsx.js?addedExtension`
    const res = await traverseEsModules({
        entryPoint: base + entryPoint,
        ignore: [`${base}/vite/client`],
        ...makeServerFunctions({
            downloadFilesToDir: dest,
            port,
            root: path.resolve('/Users/morse/Documents/GitHub/test-vite/src'),
        }),
    })
    await fs.writeFile(path.join(dest, 'index.html'), await getHtmlCode(base))
    console.log(JSON.stringify(res, null, 4))
}

async function getHtmlCode(base) {
    const url = new URL('index.html', base).toString()
    // console.log({ url })
    const res = await fetch(url, { headers: {} })
    if (!res.ok) {
        throw new Error(`Cannot fetch '${url}': ${res.statusText}`)
    }
    const content = await res.text()
    // console.log({ content })
    return content
}

main().catch(console.error)
