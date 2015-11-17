const test           = require('tape');
const stampit        = require('stampit');

const errorMessage   = 'Method \'foo\' needs to be implemented.';
const InterfaceCheck = require('./index');
const Interface      = stampit().compose(InterfaceCheck).methods({foo: () => {}});

test('is a stamp', function (t) {
    t.equal(typeof InterfaceCheck.fixed, 'object');

    t.end();
});

test('creation of stamp that implements interface check with unimplemented method throws error', (t) => {
    const ImplementationWithoutImplementedMethod = stampit().compose(Interface).methods({});
    //                                                               ^impl. Interface    ^missing implementation

    t.throws(ImplementationWithoutImplementedMethod, new RegExp(errorMessage));

    t.end();
});

test('creation of stamp that implements interface check with implemented method doesn\'t throw error', (t) => {
    const ImplementationWithImplementedMethod = stampit().compose(Interface).methods({foo: () => {return this;}});
    //                                                            ^impl. Interface                ^implementation

    t.doesNotThrow(ImplementationWithImplementedMethod);

    t.end()
});
