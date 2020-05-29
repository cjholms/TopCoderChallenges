// Testing use of map function
// Objective: Use one line of code to create a deck of cards using the map function

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const members = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// reduce function is used to flatten the array of arrays
console.log(suits.map(suit => members.map(m => m + " of " + suit)).reduce((acc, val) => acc.concat(val), []));
