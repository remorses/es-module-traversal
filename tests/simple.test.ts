import { init } from 'es-module-lexer'
import path from 'path'
import { makeServerFunctions, traverseEsModules } from '../src'
import { serve } from './support'

it('works', async () => {
    const currentFile = path.resolve(__dirname, __filename)
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
})

it('example', async () => {
    const currentFile = path.resolve('tests/example/entry.js')
    const res = await traverseEsModules({
        entryPoint: currentFile,
    })
    expect(res.map((x) => x.importPath)).toMatchSnapshot()
})

it('with server', async () => {
    const PORT = '9000'
    const stop = await serve(PORT)
    const currentFile = `http://localhost:${PORT}/tests/example/entry.js`
    const root = process.cwd()
    const res = await traverseEsModules({
        entryPoint: currentFile,
        ...makeServerFunctions({
            downloadFilesToDir: './tests/mirror/example',
            port: PORT,
            root,
        }),
    })
    expect(res.map((x) => x.importPath)).toMatchSnapshot()
    await stop()
})
it('with server and root paths', async () => {
    const PORT = '7000'
    const stop = await serve(PORT)
    const currentFile = `http://localhost:${PORT}/tests/example-with-root/entry.js`
    const root = process.cwd()
    const res = await traverseEsModules({
        entryPoint: currentFile,
        ...makeServerFunctions({
            downloadFilesToDir: './tests/mirror/example-with-root',
            port: PORT,
            root,
        }),
    })
    expect(res).toMatchSnapshot()
    await stop()
})
