//Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

let guestList: string[] = ["Aysha","Rabia","Mona"];

for (let a = 0; a < guestList.length; a++) {
    let message = (`Dear ${guestList[a]},\n\t You are invited to diner. It would be an honor to have you enjoy us.\n\tSincerely, Your Host`);
    console.log(message);
}