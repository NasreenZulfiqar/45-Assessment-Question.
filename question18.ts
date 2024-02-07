let placeToVisit: string[] =  ["Tokyo", "Paris", "New York", "Sydney", "Rome"];
console.log("Orignal Order:", placeToVisit);

let alphabeticalOrder = [...placeToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);

console.log("Original Order(unchange):", placeToVisit);
let reveseAlphabeticalOrder = [...placeToVisit].sort((a, b) => b.localeCompare(a));
console.log("Revese Alphabetical Order:", reveseAlphabeticalOrder);

console.log("Original Order (unchange):", placeToVisit);
placeToVisit.reverse();
console.log("Reverse Order:", placeToVisit);

placeToVisit.reverse(); 
console.log("Back to Original Order:", placeToVisit);

placeToVisit.sort();
console.log("Sorted in alphabetical Order:", placeToVisit);

placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placeToVisit);