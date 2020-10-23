import staticServe from 'koa-static'
import Koa from 'koa'

export async function serve({ port, cwd }): Promise<Function> {
    let app = new Koa()
    return new Promise((res, rej) => {
        app.use(staticServe(cwd) as any)
        app.on('error', (e) => {
            // console.error('server error', e)
            rej(e)
        })
        const server = app.listen(port, 'localhost', () => {
            // console.log('Running at ' + baseUrl)
            const close = () =>
                new Promise((res, rej) => {
                    server.close((e) => {
                        if (e) return rej(e)
                        res()
                    })
                })
            res(close)
        })
        server.setTimeout(1000)
    })

    // await once(server, 'listening')
}

export async function timedRun(func) {
    const start = process.hrtime.bigint()
    await func()
    const end = process.hrtime.bigint()
    return Math.round(Number(end - start) / 1e6)
}
