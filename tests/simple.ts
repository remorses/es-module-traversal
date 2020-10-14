import { init } from 'es-module-lexer'
import path from 'path'
import { walkEsModulesSync } from '../src'

it('works', async () => {
    await init
    const currentFile = path.resolve(__dirname, __filename)
    walkEsModulesSync({
        entryPoint: currentFile,
    }).forEach((x) => console.log(x.importPath))
})

it('example', async () => {
    await init
    const currentFile = path.resolve('tests/example/entry.js')
    walkEsModulesSync({
        entryPoint: currentFile,
    }).forEach((x) => console.log(x.importPath))
})
