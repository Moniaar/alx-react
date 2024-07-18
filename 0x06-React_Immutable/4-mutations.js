// 4-map.js

// Importing the Immutable.js library
const { Map } = require('immutable');

// Creating the first immutable map with the given object
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Creating the second map by modifying the first map
export const map2 = map
    .set(2, 'Benjamin')  // Modify the value for the index 2 to Benjamin
    .set(4, 'Oliver');   // Modify the value for the index 4 to Oliver

// Example usage:
console.log(map);  // Original map
console.log(map2); // Modified map
