import path from 'path'
import { URL } from 'url'
import fetch from 'node-fetch'
import fs from 'fs-extra'
import { makeServerFunctions, traverseEsModules } from '../src'

const PATH = '/Users/morse/Documents/GitHub/sterblue0/packages/apps/cloud/'

const moduleRE = /^\/@modules\//

// takes node modules imports from a vite website
async function main() {
    const port = '3000'
    // const dest = './mirror'
    const base = `http://localhost:${port}`
    // await fs.remove(dest)
    const entryPoint = `/src/index.tsx`
    const res = await traverseEsModules({
        entryPoints: [base + entryPoint],
        ...makeServerFunctions({
            // downloadFilesToDir: dest,
            stopTraversing: (importPath) => {
                return moduleRE.test(importPath)
            },
            port,
            root: path.resolve(PATH),
        }),
    })
    // await fs.writeFile(path.join(dest, 'index.html'), await getHtmlCode(base))
    const paths = [
        ...new Set(
            res
                .map((x) => x.importPath)
                .filter((x) => moduleRE.test(x))
                .map((x) => x.replace(moduleRE, '')),
        ),
    ]
    console.log(JSON.stringify(paths, null, 4))
}

main()
