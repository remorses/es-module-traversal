import { init } from 'es-module-lexer'
import path from 'path'
import { traverseEsModules } from '../src'

it('works', async () => {
    await init
    const currentFile = path.resolve(__dirname, __filename)
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
})

it('example', async () => {
    await init
    const currentFile = path.resolve('tests/example/entry.js')
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
    expect(res.map((x) => x.importPath)).toMatchSnapshot()
})
