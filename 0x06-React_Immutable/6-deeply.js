// Import the required Immutable.js library
const { Map, List } = require('immutable');

// Function to merge two objects deeply and return an Immutable List of values
function mergeDeeplyElements(page1, page2) {
    // Convert objects to Immutable Maps
    const map1 = Map(page1);
    const map2 = Map(page2);

    // Deeply merge the two maps
    const mergedMap = map1.mergeDeep(map2);

    // Get the values of the merged map as an Immutable List
    const valuesList = mergedMap.valueSeq().toList();

    // Return the list of values
    return valuesList;
}
