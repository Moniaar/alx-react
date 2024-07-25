// Import the required Immutable.js library
const { Map, is } = require('immutable');

// Function to check if two Immutable Maps are equal
function areMapsEqual(map1, map2) {
    // Use the is function from Immutable.js to check equality
    return is(map1, map2);
}

// Example usage:
const map1 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

const map2 = Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

console.log(areMapsEqual(map1, map2)); // Output: true
