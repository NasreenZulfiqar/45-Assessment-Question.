//Favorite Fruit: Make a array of your favorite fruits, and then write a
 //series of independent if statements that check for certain fruits in 
// your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of
// fruit is in your array. If the fruit is in your array, the if block
// should print a statement, such as You really like bananas!

let favoriteFruits: string[] = ['Apple', 'Banana', 'Mango'];

if (favoriteFruits.includes('Banana')) {
    console.log('You really like Bananas!');
}
if (favoriteFruits.includes('Apple')) {
    console.log('You really like Apples!');
}
if (favoriteFruits.includes('Mango')) {
    console.log('You really like Mango!')
}
if (favoriteFruits.includes('straberry')) {
    console.log('You really like Strawberries');
}
if (favoriteFruits.includes('Grapes!')) {
    console.log('Yoy really like Grapes!');
}else {
    console.log('Grapes are not in your list of favorite fruits.');
}