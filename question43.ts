// Unchanged Magicians: Start with your work from Exercise 40. Call the 
//function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to
// show that you have one array of the original names and one array with
// the Great added to each magician’s name

let magicianNames: string[] = ['Harry Houndini', 'David Copperfield', 'Derren Brown', 'Penn Jillette', 'Teller'];

function showstrMagicians(magician: string[]): void {
    console.log('Magicians:');
    magician.forEach((magician, index) => {
        console.log(`${index + 1}. ${magician}`);
    });
}

function makeGreat(magicians: string[]):string[] {
    let greatMagicians = magicians.map((magician) => `${magician} the great`);
    return greatMagicians;
}

let greatMagicianName = makeGreat(magicianNames);
showstrMagicians(greatMagicianName);