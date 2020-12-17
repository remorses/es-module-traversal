/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/dist/', '/esm/', '/node_modules/', '/mirror/', '/benchmark-'],
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest',
    },
    // transform: {
    //     '.*\.tsx?': 'esbuild-jest',
    // },
}
