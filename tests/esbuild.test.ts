import { Metadata } from 'esbuild'
import path from 'path'
import {
    metaToTraversalResult,
    traverseWithEsbuild,
} from '../src/traverseEsbuild'
import { osAgnosticResult } from './support'

it('metaToTraversalResult', async () => {
    const meta: Metadata = {
        outputs: {},
        inputs: {
            entry: {
                bytes: 0,
                imports: [{ path: 'some-file' }],
            },
            'some-file': {
                bytes: 0,
                imports: [{ path: 'other-file' }],
            },
            'other-file': {
                bytes: 0,
                imports: [],
            },
        },
    }
    const res = metaToTraversalResult({
        meta: meta as any,
        entry: '/usr/someFolder/entry',
        esbuildCwd: '/usr/someFolder',
    }).map(osAgnosticResult)
    // console.log(res)
    expect(res).toMatchSnapshot('simple metaToTraversalResult')
})
it('traverseWithEsbuild', async () => {
    const currentFile = path.resolve(__dirname, __filename)
    let res = await traverseWithEsbuild({
        entryPoints: [currentFile],
        esbuildOptions: {
            platform: 'node',
        },
    })
    res = res.map(osAgnosticResult)
    console.log(res)
    expect(res).toMatchSnapshot('traverseWithEsbuild')
})
