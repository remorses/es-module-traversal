import path from 'path'
import { walkEsModules } from '../src'
import { from } from 'ix/asynciterable'
import assert from 'assert'

it('works', async () => {
    const currentFile = path.resolve(__dirname, __filename)
    await from(
        walkEsModules(path.resolve(__dirname, __filename)),
    ).forEach((x) => console.log(x))
})
