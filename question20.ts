//Think of something you could store in a array. For example, you could
// make a list of mountains, rivers, countries, cities, languages, or
//anything else you’d like. Write a program that creates a list containing
// these items.

let cities: string[] = ["Lahore", "Karachi","Peshawer", "Gujranwala", "Sahiwal" ];

console.log('List of cities:');
for (let city of cities) {
    console.log(city);
}