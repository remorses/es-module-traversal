# es-module-traversal

**unstable, under heavy development**

This package exports 1 function

-   `traverseEsModules` gather all imported files from an entry-point, you can also customize the resolver and readFile functions

```ts
import fetch from 'node-fetch'
import { traverseEsModules } from 'es-module-traversal'

const res = await traverseEsModules({
    entryPoint: currentFile,
})

console.log(res)
// [{
//     importPath: './someImport',
//     resolvedImportPath: 'path/to/file',
//     importer: 'path/to/importer'
// }, ...]

// customize resolution
const res = await traverseEsModules({
    entryPoint: currentFile,
    resolver: (ctx, importPath) => {
        // resolve to a local server
        return `https://localhost:3000${importPath}`
    },
    readFile: async (url) => {
        // read from the server
        const res = await fetch(url)
        return await res.text()
    },
})
```
