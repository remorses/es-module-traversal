import posthtml, { Node, Plugin } from 'posthtml'
import { isRelative } from './support'

export async function getHtmlScriptsUrls(html: string) {
    const urls: string[] = []
    const transformer = posthtml([
        async (tree) => {
            tree.walk((node) => {
                if (
                    node.tag === 'script' &&
                    node.attrs['type'] === 'module' &&
                    node.attrs['src'] &&
                    isRelative(node.attrs['src'])
                ) {
                    urls.push(node.attrs['src'])
                }
                return node
            })
        },
    ])
    const result = await transformer.process(html)
    return urls.filter(Boolean)
}
