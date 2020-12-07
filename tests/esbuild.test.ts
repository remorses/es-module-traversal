import { Metadata } from 'esbuild'
import path from 'path'
import { metaToTraversalResult, traverseWithEsbuild } from '../src/esbuild'
import { traverseEsModules } from '../src/traverse'
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
        meta,
        entry: path.resolve(process.cwd(), 'someFolder/entry'),
        esbuildCwd: path.resolve(process.cwd(), 'someFolder'),
    })
        .map(osAgnosticResult)
        .sort((a, b) =>
            a.resolvedImportPath.localeCompare(b.resolvedImportPath),
        )
    // console.log(res)
    expect(res).toMatchSnapshot('simple metaToTraversalResult')
})
it('traverseWithEsbuild', async () => {
    const currentFile = path.resolve(__dirname, __filename)
    const entryPoints = [currentFile]
    const stopTraversing = (p) => {
        return p.includes('node_modules')
    }
    let res1 = await traverseWithEsbuild({
        entryPoints,
        stopTraversing,
        esbuildOptions: {
            platform: 'node',
        },
    })
    let res2 = await traverseEsModules({
        entryPoints,
        stopTraversing,
    })

    const normalize = (x: string[]) => {
        return [...new Set(x)].sort()
    }

    const expected = normalize(res2.map((x) => x.resolvedImportPath)) // can be a superset
    expect(
        normalize(res1.map((x) => x.resolvedImportPath)).filter((x) =>
            expected.includes(x),
        ),
    ).toEqual(expected)

    res1 = res1
        .map(osAgnosticResult)
        .sort((a, b) =>
            a.resolvedImportPath.localeCompare(b.resolvedImportPath),
        )
    // console.log(res)
    expect(res1).toMatchSnapshot('traverseWithEsbuild')
})

it('traverseWithEsbuild stop traversing', async () => {
    // TODO esbuild plugins tests
    const currentFile = path.resolve(__dirname, __filename)
    let res = await traverseWithEsbuild({
        entryPoints: [currentFile],
        stopTraversing: (file) => {
            return file.includes('node_modules')
        },
        esbuildOptions: {
            platform: 'node',
        },
    })
    res = res
        .map(osAgnosticResult)
        .sort((a, b) =>
            a.resolvedImportPath.localeCompare(b.resolvedImportPath),
        )
    const deps = res
        .map((x) => x.importer)
        .filter((x) => x.includes('node_modules'))
    expect(deps.length).toBe(0)
    // console.log(res)
    expect(res).toMatchSnapshot('traverseWithEsbuild stop traversing')
})
