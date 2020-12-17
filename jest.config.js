/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['benchmark-native-esm'],
    testPathIgnorePatterns: [
        '/dist/',
        '/esm/',
        '/node_modules/',
        '/mirror/',
        '/benchmark-',
        'benchmark-native-esm',
    ],
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest',
    },
    bail: 1,
    // transform: {
    //     '.*\.tsx?': 'esbuild-jest',
    // },
}
