# walk-es-modules

This package exports the `walkEsModules` function to
- get the imports graph from a package, resolving to their real path on disk


This package has been developed to serve 2 use cases
- get the import graph starting from an entry-point to get all the importer files
- get a list of all the external packages (not relative packages) from the import graph

return a data structure with

```ts
{
    importerPath: string,
    importPath: string,

}
```

```

```
