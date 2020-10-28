import { Metadata } from 'esbuild'
import { metaToTraversalResult } from '../src/traverseEsbuild'

it('metaToTraversalResult', async () => {
    const meta: Metadata = {
        outputs: {},
        inputs: {
            'entry': {
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
    })
    // console.log(res)
    expect(res).toMatchSnapshot('simple metaToTraversalResult')
})
