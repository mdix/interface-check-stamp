const stampit = require('stampit');

module.exports =
    stampit()
        .init(function(stamp) {
            for (const method in stamp.stamp.fixed.methods) {
                const currentMethod = stamp.stamp.fixed.methods[method];

                if (currentMethod.toString().match(/{[\s\n]*}/g) !== null) {
                    throw new Error('Method \'' + method.toString() + '\' needs to be implemented.');
                }
            }
        });
