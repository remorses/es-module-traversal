# es-module-traversal

**unstable, under heavy development**

This package exports 1 function

-   `traverseEsModules` gather all imported files from an entry-point, you can also customize the resolver and readFile functions

```ts
import fetch from 'node-fetch'
import { traverseEsModules } from 'es-module-traversal'

const res = await traverseEsModules({
    entryPoint: currentFile,
    onFile: (path) => {
        console.log('traversed ' + path)
    },
})

console.log(res)
// [{
//     importPath: './someImport',
//     resolvedImportPath: 'path/to/file',
//     importer: 'path/to/importer'
// }, ...]

// customize resolution to use a server instead of disk
import path from 'path'
import { makeServerFunctions, traverseEsModules } from '../src'

const port = '3000'
const res = await traverseEsModules({
    entryPoint: `http://localhost:${port}/main.tsx`,
    ...makeServerFunctions({
        downloadFilesToDir: './mirror',
        port,
        root: path.resolve('/Users/morse/Documents/GitHub/test-vite/src'),
    }),
})
console.log(JSON.stringify(res, null, 4))
```
