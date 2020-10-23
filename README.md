# es-module-traversal

**unstable, under heavy development**

Gather all imported files from some ES modules entrypoints,

You can also customize the `resolver` and `readFile` functions to traverse the import graph from a static server

```
npm install es-module-traversal
```

## Example

```ts
import path from 'path'
import { traverseEsModules } from 'es-module-traversal'

const res = await traverseEsModules({
    entryPoints: [path.resolve(__dirname, __filename)],
    onFile: (path) => {
        console.log('traversed ' + path)
    },
})

console.log(res)
// [{
//     importPath: './someImport',
//     resolvedImportPath: '/path/to/file',
//     importer: '/path/to/importer'
// }, ...]
```

## Using a static server

```ts
// customize resolution to use a server instead of disk
import path from 'path'
import {
    traverseEsModules,
    urlResolver,
    readFromUrlOrPath,
} from 'es-module-traversal'

const port = '3000'
const res = await traverseEsModules({
    entryPoint: `http://localhost:${port}/main.tsx`,
    // like require.resolve but support urls and paths
    resolver: urlResolver({
        root: __dirname,
        baseUrl: `http://localhost:${port}/`,
    }),
    readFile: readFromUrlOrPath,
    onFile: (path) => {
        console.log('traversed ' + path)
    },
})
console.log(JSON.stringify(res, null, 4))

// [
//     {
//         importPath: '/firstLevel.js',
//         importer: 'http://localhost:9000/deep/file.js',
//         resolvedImportPath: 'http://localhost:9000/firstLevel.js',
//     },
//     ...
// ]
```
