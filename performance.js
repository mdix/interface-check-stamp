const stampit        = require('stampit');

const InterfaceCheck = require('./index');
const EmptyStamp     = stampit();

const RUNS           = 10000;
const composables    = [{name: 'InterfaceCheck', stamp: InterfaceCheck}, {name: 'EmptyStamp', stamp: EmptyStamp}];

composables.forEach((composable) => {
    "use strict";

    const hrstart = process.hrtime();

    for (let i = 0; i < RUNS; i++) {
        stampit().compose(composable.stamp).methods({foo: () => { /**/ }, bar: () => { /**/ }, baz: ( /**/ ) => {}})();
    }

    const hrend = process.hrtime(hrstart);

    console.info("%ds %dms execution time for %s", hrend[0], hrend[1]/1000000, composable.name);
});
