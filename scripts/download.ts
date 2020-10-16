import path from 'path'
import { makeServerFunctions, traverseEsModules } from '../src'

async function main() {
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
}


main()