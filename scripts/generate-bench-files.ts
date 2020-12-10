import fs from 'fs'
import path from 'path'

const length = 1000

async function main() {
    const outDir = path.resolve('tests/benchmark-native-esm/src')
    Array.from({ length })
        .fill(0)
        .forEach((_, i) => {
            const outFile = path.resolve(outDir, `${i}.js`)
            fs.writeFileSync(outFile, exampleTestCode(i))
        })
}
main()

function exampleTestCode(i) {
    const imports = 4
    if (i + imports >= length) {
        return `export default 4`
    }
    return (
        new Array(imports)
            .fill(0)
            .map((_, j) => `import x_${j} from './${i + j + 1}.js'\n`)
            .join('\n') + `export default 6\n` + Array(10**3).fill('\n                                                          ').join('')
    )
}
