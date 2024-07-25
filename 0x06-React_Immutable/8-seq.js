// Import the required Immutable.js library
const { Map, Seq } = require('immutable');

// Helper function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to print the best students
function printBestStudents(grades) {
  // Convert the grades object to an Immutable Map
  const gradesMap = Map(grades);

  // Use Seq to filter students with scores >= 70
  const bestStudents = gradesMap
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }));

  // Convert the best students to a plain JavaScript object and print it
  console.log(bestStudents.toJS());
}
