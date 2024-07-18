// 2-accessImmutableObject.js

/**
 * Accesses the value at a defined path in a plain JavaScript object.
 * @param {Object} object - The plain object to be accessed.
 * @param {Array} array - The array containing the path of keys.
 * @returns {any} - The value at the defined path, or undefined if the path is not valid.
 */
export default function accessImmutableObject(object, array) {
    let current = object;
    for (let key of array) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return undefined;
        }
    }
    return current;
}

// Example usage:
const exampleObject = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
};

console.log(accessImmutableObject(exampleObject, ['name', 'first'])); // Should return "Guillaume"
console.log(accessImmutableObject(exampleObject, ['name', 'middle'])); // Should return undefined
console.log(accessImmutableObject(exampleObject, ['age'])); // Should return undefined
