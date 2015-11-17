const stampit = require('stampit');
const onlyWhitespaceAndNewlinesBetweenBrackets = /{[\s\n]*}/;

module.exports =
    stampit()
        .init((stamp) => {
            for (const method in stamp.stamp.fixed.methods) {
                if (stamp.stamp.fixed.methods[method].toString().match(onlyWhitespaceAndNewlinesBetweenBrackets) !== null) {
                    throw new Error('Method \'' + method.toString() + '\' needs to be implemented.');
                }
            }
        });
