[![Build Status](https://travis-ci.org/mdix/interface-check-stamp.svg?branch=master)](https://travis-ci.org/mdix/interface-check-stamp)
# Interface check stamp for [stampit](https://github.com/stampit-org/stampit)
## Why?
When implementing an interface, one would expect that the program, when executed, throws errors if methods are unimplemented.
With the current version of [stampit](https://github.com/stampit-org/stampit) (2), this is not the case. When adding this Interface check stamp to your interface,
you make sure that your program fails if the methods defined in your interface are not implemented.

## How?
On your shell
```bash
npm install mdix/interface-check-stamp --save
```

In your program just compose the interface check stamp into the interface you create:
```javascript
const InterfaceCheck = require('interface-check-stamp');

const Interface = 
    stampit()
        .compose(InterfaceCheck) // <-- add interface check stamp here
        .methods({someMethod: () => {}});

const Implementation = 
    stampit()
        .compose(Interface)
```

This will throw an error that 'someMethod' is not implemented which can be fixed by adding the implementation:

```javascript
// see above for InterfaceCheck & Interface 

const Implementation = 
    stampit()
        .compose(Interface)
        .methods({someMethod: () => { /* someImplementation */ });
```

## Development
With 
```
npm test
```
you can run the tests. The module resides in index.js. Have fun!
