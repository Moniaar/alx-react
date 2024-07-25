// Import the required Immutable.js library
const { List, Map } = require('immutable');

// Function to concatenate two arrays and return an Immutable List
function concatElements(page1, page2) {
    // Convert arrays to Immutable Lists
    const list1 = List(page1);
    const list2 = List(page2);

    // Concatenate the two lists
    const concatenatedList = list1.concat(list2);

    // Return the concatenated list
    return concatenatedList;
}

// Function to merge two objects and return an Immutable List of values
function mergeElements(page1, page2) {
    // Convert objects to Immutable Maps
    const map1 = Map(page1);
    const map2 = Map(page2);

    // Merge the two maps, with map2 values overriding map1 values
    const mergedMap = map1.merge(map2);

    // Get the values of the merged map as an Immutable List
    const valuesList = mergedMap.valueSeq().toList();

    // Return the list of values
    return valuesList;
}
