import path from 'path'
import { walkEsModulesSync } from '../src'
import { from } from 'ix/iterable'
import { init, parse } from 'es-module-lexer'
import assert from 'assert'

it('works', async () => {
    await init
    const currentFile = path.resolve(__dirname, __filename)
    await from(
        walkEsModulesSync(path.resolve(__dirname, __filename)),
    ).forEach((x) => console.log(x.importPath))
})
