const test           = require('tape');
const stampit        = require('stampit');

const errorMessage   = 'Method \'%methodName%\' needs to be implemented.';
const InterfaceCheck = require('./index');
const InterfaceWithTwoMethods = stampit().compose(InterfaceCheck).methods({foo: () => {}, bar: () => {}});

test('is a stamp', function (t) {
    t.equal(typeof InterfaceCheck.fixed, 'object');

    t.end();
});

test('creation of stamp that implements interface check with two unimplemented methods throws error', (t) => {
    const ImplementationWithoutImplementedMethod =
        stampit().compose(InterfaceWithTwoMethods).methods({});

    t.throws(ImplementationWithoutImplementedMethod, new RegExp(errorMessage.replace('%methodName%', 'foo')));

    t.end();
});

test('creation of stamp that implements interface check with one unimplemented method throws error', (t) => {
    const ImplementationWithoutImplementedMethod =
        stampit().compose(InterfaceWithTwoMethods).methods({foo: () => {return this;}});

    t.throws(ImplementationWithoutImplementedMethod, new RegExp(errorMessage.replace('%methodName%', 'bar')));

    t.end();
});

test('creation of stamp that implements interface check with two implemented methods doesn\'t throw error', (t) => {
    const ImplementationWithImplementedMethod =
        stampit().compose(InterfaceWithTwoMethods).methods({foo: () => {return this;}, bar: () => {return this;}});

    t.doesNotThrow(ImplementationWithImplementedMethod);

    t.end()
});

