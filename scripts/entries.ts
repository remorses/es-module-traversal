import path from 'path'
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
        stopTraversing: (importPath) => {
            return moduleRE.test(importPath)
        },
        ...makeServerFunctions({
            // downloadFilesToDir: dest,
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

// Plugin
// add the plugin at the end of middleware
// when the first request comes in, start taking all the imports using the traverser
// then use fileToRequestId to get the original importPath and create the entryPoints map
// create the bundles and save them in root/web_modules
// add the aliases to the resolver to point to the created web_modules files

main()
