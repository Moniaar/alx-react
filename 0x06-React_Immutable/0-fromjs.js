
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

module.exports = getImmutableObject;
