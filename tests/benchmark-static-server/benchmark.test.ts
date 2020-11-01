import { URL } from 'url'
import { readFromUrlOrPath, traverseEsModules, urlResolver } from '../../src'
import { serve, timedRun } from '../support'

jest.setTimeout(100 * 1000)

const test = process.env.BENCHMARK ? it : it.skip

test('benchmark static server', async () => {
    const port = '9072'

    const stop = await serve({ port, cwd: __dirname })

    try {
        const ENTRY_NAME = 'src/main.js'
        const baseUrl = `http://localhost:${port}`
        const ms = await timedRun(async () => {
            await traverseEsModules({
                entryPoints: [new URL(ENTRY_NAME, baseUrl).toString()],
                resolver: urlResolver({ root: __dirname, baseUrl }),
                readFile: readFromUrlOrPath,
            })
        })

        process.stdout.write(`\n\ntook ${ms / 1000} seconds\n\n`)
    } finally {
        await stop()
    }
})
