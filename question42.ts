 // Great Magicians: Start with a copy of your program from Exercise 39.
 // Write a function called make_great() that modifies the array of 
 //magicians by adding the phrase the Great to each magician’s name.
 // Call show_magicians() to see that the list has actually been modified.

 let magicianNmaames: string[] = ['Harry Houndini', 'David Copperfield', 'Derren Brown', 'Penn Jillette', 'Teller'];

 function showMagicians(magicians: string[]): void {
    console.log('Magician:');

    magicians.forEach((magician, index)=> {
        console.log(`${index + 1}. ${magician}`);
    });
 }

 showMagicians(magicianNmaames);