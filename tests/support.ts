var express = require('express')

export async function serve(port): Promise<Function> {
    let server = express()
    return new Promise((res, rej) => {
        server.use('/', express.static(process.cwd()))
        server = server.listen(port, (e) => {
            console.log('Running at http://localhost:' + port)
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
