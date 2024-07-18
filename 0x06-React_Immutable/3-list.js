// 3-list.js

// Importing the Immutable.js library
const { List } = require('immutable');

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to be converted.
 * @returns {List} - The immutable List.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Appends a string to an immutable List and returns the updated List.
 * @param {List} list - The immutable List.
 * @param {string} element - The string to be appended.
 * @returns {List} - The updated immutable List.
 */
export function addElementToList(list, element) {
    return list.push(element);
}

// Example usage:
const exampleArray = ['a', 'b', 'c'];
const immutableList = getListObject(exampleArray);
console.log(immutableList); // Should print List [ 'a', 'b', 'c' ]

const updatedList = addElementToList(immutableList, 'd');
console.log(updatedList); // Should print List [ 'a', 'b', 'c', 'd' ]
