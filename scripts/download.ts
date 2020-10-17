import path from 'path'
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
    await fs.writeFile(path.join(dest, 'index.html'), getHtmlCode(entryPoint))
    console.log(JSON.stringify(res, null, 4))
}

function getHtmlCode(entryPoint) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Vite App</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="${entryPoint}"></script>
    </body>
    </html>
    `
}

main()
