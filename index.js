
let firstCard = 11;
let secondCard = 10;
let cardSum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: "  + cardSum
    if (cardSum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (cardSum === 21) {
        message = "Congrats, you've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "Sorry, you're out of the game!"
        isAlive = false
    }
 
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!")

    let addCard = 7

    cardSum += addCard
    renderGame()
 
}


