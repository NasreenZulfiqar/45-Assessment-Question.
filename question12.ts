//Greetings: Start with the array you used in Exercise 11, but instead of
// just printing each person’s name, print a message to them  The text of
// each message should be the same, but each message should be
// in object/
    
 let friendsName: string[] = ["Zanab","Robi","Alia","Aysha"];
 
 for (let a = 0; a < friendsName.length; a++) {
    let message = (`Hellow ${friendsName[a]}, can you come my home and start our groups studys`);
    console.log(message);
 }
