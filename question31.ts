//No Users: Add an if test to Exercise 28 to make sure the list of users is
// not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct
// message is printed.

let usernames: string[] = [];

if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === 'r') {
            console.log('Hello admin, would you like to see a status repot?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again`);
        }
    }
} else {
    console.log('We need to find some users!');
}