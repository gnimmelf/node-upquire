 
# Simple require.paths replacement

Avoids realative path backtracing. 

Traverses up the directory structure from the location of the file in which the call to `upquire` is made, and looks for the module path to `require` along the way. Returns the `require`'d if its path is found on one of the parent directories.

## Installation
1. Add `upquire` as a dependency to your project’s `package.json`
2. Run `npm install`

## Usage Examples
Given directory structure

    `--app
       |-- lib-1
       |   `-- mymodule-1
       |-- lib-2
       |   `-- mymodule-2
 
From app/lib-1/my-module-1

    require('upquire')('/lib-2/my-module-2')
    
 
