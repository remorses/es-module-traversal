import { exec, execSync } from 'child_process'
import path from 'path'
import { traverseEsModules, urlResolver, readFromUrlOrPath } from '../../src'
import { sleep } from '../../src/support'
import { timedRun } from '../support'

jest.setTimeout(100 * 1000)

const test = process.env.BENCHMARK ? it : it.skip
test('benchmark vite server', async () => {
    const port = '9070'
    const p = exec(
        `yarn vite --port ${port} -c ${path.resolve(
            __dirname,
            'vite.config.js',
        )} serve ${__dirname}`,
        {
            cwd: __dirname,
            env: process.env,
            // shell: true,
        },
    )
    p.on('error', (e) => {
        throw e
    })

    p.stdout.on('data', (x) => process.stdout.write(x + '\n'))
    p.stderr.on('data', (x) => process.stdout.write(x + '\n'))

    try {
        await sleep(1000)

        const ENTRY_NAME = 'src/main.tsx'
        const baseUrl = `http://localhost:${port}`
        const ms = await timedRun(async () => {
            await traverseEsModules({
                entryPoints: [new URL(ENTRY_NAME, baseUrl).toString()],
                resolver: urlResolver({ root: __dirname, baseUrl }),
                readFile: readFromUrlOrPath,
            })
        })

        console.log(`\n\ntook ${ms / 1000} seconds\n\n`)
        
    } finally {
        p.kill()
    }
})
