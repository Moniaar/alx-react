// 0-fromjs.js

// Importing the Immutable.js library
const { fromJS } = require('immutable');

/**
 * Converts a plain JavaScript object into an immutable Map.
 * @param {Object} obj - The object to be converted.
 * @returns {Map} - The immutable Map.
 */
function getImmutableObject(obj) {
    return fromJS(obj);
}

// Example usage:
const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);

module.exports = getImmutableObject;
