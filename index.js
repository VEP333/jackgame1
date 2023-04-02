

// 1. Create a new array - cards - that contains firstCard and secondCard
let cards=[]
let player={name:"pavithraja",chips:154}
let playerEl=document.getElementById("player-el")
playerEl.textContent="name :"+player.name+" chips :$"+player.chips
let sum=0
let hasBlackJack = false
let isAlive =false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getrandomcard(){
    let cardno = Math.floor(Math.random() *13) +1
    if (cardno===1){
        cardno=11
    }
    else if (cardno>=11 && cardno<=13){
        cardno=10
    }
     
    return cardno
}

function startGame() {
    isAlive=true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame() {
    let line=""
    for (let i=0;i<cards.length;++i){
        line+=" "+cards[i]
    }
    cardsEl.textContent = "Cards: " + line
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if(isAlive&&!hasBlackJack){
    let card = getrandomcard()
    cards.push(card)
    sum += card
    renderGame()}
}