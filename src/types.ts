export type TraversalResultType = {
    importPath: string
    resolvedImportPath?: string
    importer: string
}

export type TraverseArgs = {
    entryPoints: string[]
    ignore?: string[]
    stopTraversing?: (importPath: string, context: string) => boolean
    resolver?: (cwd: string, id: string) => string
    // | ((cwd: string, id: string) => Promise<string>)
    readFile?:
        | ((path: string, importer?: string) => string)
        | ((path: string, context?: string) => Promise<string>)
    onFile?: ((path: string) => any) | ((path: string) => Promise<any>)
}
