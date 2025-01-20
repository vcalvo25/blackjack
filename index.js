
let firstCard = 10;
let secondCard = 10;
let cardSum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log(cardSum)

if (cardSum <= 20) {
    message = "Do you want to draw a new card?"
} else if (cardSum === 21) {
    message = "Congrats, you've won Blackjack!"
    hasBlackJack = true
}else {
    message = "Sorry, you're out of the game!"
    isAlive = false
}

console.log(isAlive)
console.log(message)


