// Games

// Coin toss
let numberOfTosses = 0;
let numberOfPeter = 0;
let numberOfBenjamin = 0;

document.getElementById('playCoinToss').addEventListener('click', () => {
    displayToss();
    displayTotalTosses();
})

// Roshambo
document.getElementById('startRoshambo').addEventListener('click', () => {
    displayPlayerSelection();
    displayComputerSelection();
    displayRoshamboResult();
})