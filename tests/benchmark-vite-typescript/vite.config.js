// import type { UserConfig } from 'vite'

const config = {
    jsx: 'react',
    optimizeDeps: {
        auto: false,
    },
    // https: true,
    // httpsOptions: {
    //     key: fs.readFileSync(path.join(__dirname, './dist/certs/key.key')),
    //     cert: fs.readFileSync(path.join(__dirname, './dist/certs/cert.cert')),
    // },
    resolvers: [
        {
            alias(id) {
                const isProd = process.env.NODE_ENV === 'production'
                if (id === 'react' || id === '@pika/react') {
                    return isProd
                        ? '@pika/react'
                        : '@pika/react/source.development.js'
                }
                if (id === 'react-dom' || id === '@pika/react-dom') {
                    return isProd
                        ? '@pika/react-dom'
                        : '@pika/react-dom/source.development.js'
                }
            },
        },
    ],
}

// export default config

module.exports = config
