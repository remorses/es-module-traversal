var express = require('express')

export async function serve({ port, cwd }): Promise<Function> {
    let server = express()
    return new Promise((res, rej) => {
        server.use('/', express.static(cwd))
        server = server.listen(port, 'localhost', (e) => {
            // console.log('Running at ' + baseUrl)
            if (e) {
                return rej()
            }
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
