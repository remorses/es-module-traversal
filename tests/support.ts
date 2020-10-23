import staticServe from 'koa-static'
import Koa from 'koa'

export async function serve({ port, cwd }): Promise<Function> {
    let app = new Koa()
    return new Promise((res, rej) => {
        app.use(staticServe(cwd))
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
    })

    // await once(server, 'listening')
}
