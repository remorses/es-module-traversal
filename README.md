# es-module-traversal

Gather all imported files from some ES modules entrypoints,

You can also customize the `resolver` and `read` functions to traverse the import graph from a static server

```
npm install es-module-traversal
```

## Benchmarks

Run the benchmarks with the `yarn test:bench` command

It traverses the graph of 780 modules in about 0.30 seconds, most of the time is spent by `es-module-lexer` (this means that the time will increase with the size of the javascript modules)

It takes about 5 seconds to traverse the graph of a big typescript app with 3900 files of 30 lines each, the overhead here is given by the time vite takes to transform the typescript files

## Example

```ts
import path from 'path'
import { traverseEsModules } from 'es-module-traversal'

const res = await traverseEsModules({
    entryPoints: [path.resolve(__dirname, __filename)],
    onEntry: (path) => {
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

## Fetching from a static server

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
    onEntry: (path) => {
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
