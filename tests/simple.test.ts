import { init } from 'es-module-lexer'
import glob from 'glob'
import slash from 'slash'
import path from 'path'
import fs from 'fs-extra'
import { readFromUrlOrPath, traverseEsModules, urlResolver } from '../src'
import { serve } from './support'

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

describe('snapshots', () => {
    const ENTRY_NAME = 'entry.js'
    const PORT = '9000'
    const casesPath = 'tests/cases'
    const cases = fs
        .readdirSync(casesPath, {
            withFileTypes: true,
        })
        .filter((x) => x.isDirectory())
        .map((x) => x.name)
        .map((x) => path.join(casesPath, x))
    console.log({ cases })
    const baseUrl = `http://localhost:${PORT}`
    for (let casePath of cases) {
        const snapshotFile = path.resolve(casePath, '__snapshots__')
        it(`traverseEsModules with server case ${slash(casePath)}`, async () => {
            const stop = await serve({ port: PORT, cwd: casePath })
            const downloadFilesToDir = path.join(casePath, 'mirror')
            const res = await traverseEsModules({
                entryPoints: [path.join(casePath, ENTRY_NAME)],
                resolver: urlResolver({ root: casePath, baseUrl }),
                readFile: readFromUrlOrPath,
                onFile: makeFilesDownloader({
                    root: casePath,
                    downloadFilesToDir,
                }),
            })
            expect(res.map((x) => x.importPath)).toMatchSpecificSnapshot(
                snapshotFile,
                'importPaths',
            )
            const allFiles = glob.sync(`**/*`, {
                ignore: ['__snapshots__'],
                cwd: downloadFilesToDir,
                nodir: true,
            })
            expect(allFiles).toMatchSpecificSnapshot(snapshotFile, 'mirror')
            await stop()
        })
    }
})

function makeFilesDownloader({ root, downloadFilesToDir }) {
    return async (url) => {
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
