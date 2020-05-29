// Testing use of map function
// Objective: Create a deck of cards using the map function

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const members = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

let deck = [];

// function that generates all the cards in a suit and adds
// the cards to the deck
let addSuitToDeck = (suit) => {
    return members.map(m => deck.push(m + " of " + suit));
}

// probably don't need an addSuitToDeck function, but created one to make the line
// below easier to read
suits.map(addSuitToDeck);

console.log(deck);

// for (let suit of suits) {
//     for (let member of members) {
//         deck.push(member + " of " + suit);
//     }
// }
