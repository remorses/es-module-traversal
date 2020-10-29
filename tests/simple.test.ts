import { init } from 'es-module-lexer'
import glob from 'glob'
import { URL } from 'url'
import slash from 'slash'
import path from 'path'
import fs from 'fs-extra'
import {
    readFromUrlOrPath,
    TraversalResultType,
    traverseEsModules,
    urlResolver,
} from '../src'
import { osAgnosticResult, serve } from './support'

require('jest-specific-snapshot')

declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchSpecificSnapshot(path: string, name?: string): R
        }
    }
}

it('works', async () => {
    const currentFile = path.resolve(__dirname, __filename)
    const res = await traverseEsModules({
        entryPoints: [currentFile],
    })
})
it('path.dirname on urls', async () => {
    expect(path.dirname('http://localhost/x/y')).toEqual('http://localhost/x')
})

describe('snapshots', () => {
    const ENTRY_NAME = 'entry.js'
    const casesPath = 'tests/cases'
    const cases = fs
        .readdirSync(casesPath, {
            withFileTypes: true,
        })
        .filter((x) => x.isDirectory())
        .map((x) => x.name)
        .map((x) => path.posix.join(casesPath, x))

    for (let casePath of cases) {
        const snapshotFile = path.resolve(casePath, '__snapshots__')
        if (!casePath.includes('server')) {
            it(`case ${slash(casePath)}`, async () => {
                const res = await traverseEsModules({
                    entryPoints: [path.join(casePath, ENTRY_NAME)],
                })
                expect(res.map(osAgnosticResult)).toMatchSpecificSnapshot(
                    snapshotFile,
                    'traverse result',
                )
            })
        }
        it(`server case ${slash(casePath)}`, async () => {
            const PORT = '9000'
            const baseUrl = `http://localhost:${PORT}`
            const stop = await serve({ port: PORT, cwd: casePath })
            try {
                const downloadFilesToDir = path.join(casePath, 'mirror')
                const res = await traverseEsModules({
                    entryPoints: [new URL(ENTRY_NAME, baseUrl).toString()],
                    resolver: urlResolver({ root: casePath, baseUrl }),
                    readFile: readFromUrlOrPath,
                    onFile: makeFilesDownloader({
                        root: casePath,
                        downloadFilesToDir,
                    }),
                })
                expect(res.map(osAgnosticResult)).toMatchSpecificSnapshot(
                    snapshotFile,
                    'traverse result',
                )
                const allFiles = glob.sync(`**/*`, {
                    ignore: ['__snapshots__'],
                    cwd: downloadFilesToDir,
                    nodir: true,
                })
                expect(allFiles).toMatchSpecificSnapshot(snapshotFile, 'mirror')
            } finally {
                await stop()
            }
        })
    }
})

function makeFilesDownloader({ root, downloadFilesToDir }) {
    return async (url) => {
        // console.log('traversed ' + url)
        // recreate server files structure on disk
        const content = await readFromUrlOrPath(url)
        let filePath = url.startsWith('http')
            ? urlToRelativePath(url)
            : path.relative(root, url)

        filePath = path.join(downloadFilesToDir, filePath)

        await fs.createFile(filePath)
        await fs.writeFile(filePath, content)
    }
}

function urlToRelativePath(ctx) {
    let pathname = new URL(ctx).pathname
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname
    return pathname
}

