# Interface check stamp
## Why?
When implementing an interface, one would expect that the program, when executed, throws errors if methods are unimplemented.
With the current version of stampit (2), this is not the case. When adding this Interface check stamp to your interface,
you make sure that your program fails if the methods defined in your interface are not implemented.

## How?
On your shell
```
npm install <gitrepo> --save
```

In your program
```
const InterfaceCheck = require('interface-check-stamp');

const Interface = 
    stampit()
        .compose(InterfaceCheck)
        .methods({foo: () => {}});

const Implementation = 
    stampit()
        .compose(Interface)
```

This will throw an error that 'foo' is not implemented. This can be fixed by adding the Implementation:

```
// see above for InterfaceCheck & Interface 

const Implementation = 
    stampit()
        .compose(Interface)
        .methods({foo: () => { someImplementation(); });
```

## Development
With 
```
npm test
```
you can run the tests. The module resides in index.js. Have fun!
