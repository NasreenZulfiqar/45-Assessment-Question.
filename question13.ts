// Your Own Array: Think of your favorite mode of transportation, such as
// a motorcycle or a car, and make a list that stores several examples
 // Use your list to print a series of statements about these items,
 // such as “I would like to own a Honda motorcycle.”

 let favoriteMotrocycle: string[] = ["motorcycle", "car", "bicycie", "scooter"];

 for (let i = 0; i < favoriteMotrocycle.length; i++) {
    let condition = (`I would like to own a ${favoriteMotrocycle[i]}.`);
    console.log(condition);
 }
