export type TraversalResultType = {
    importPath: string
    resolvedImportPath?: string
    importer: string
}

export type TraverseArgs = {
    entryPoints: string[]
    onNonResolved?: (path: string) => any
    ignore?: string[]
    concurrency?: number
    stopTraversing?: (resolvedPath: string) => boolean
    resolver?: (cwd: string, id: string) => string
    // | ((cwd: string, id: string) => Promise<string>)
    read?:
        | ((path: string, importer: string) => string)
        | ((path: string, importer: string) => Promise<string>)
    onEntry?:
        | ((path: string, importer: string) => any)
        | ((path: string, importer: string) => Promise<any>)
}
