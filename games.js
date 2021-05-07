// Games

// Coin toss
let numberOfTosses = 1;
let numberOfPeter = 0;
let numberOfBenjamin = 0;

document.getElementById('playCoinToss').addEventListener('click', () => {
    const totalTosses = numberOfTosses++;
    const coinToss = Math.ceil(Math.random() * 2);
    displayToss(coinToss);
    displayTotalTosses(totalTosses);
    displayCount(coinToss);
    displayProbability(totalTosses);
})

// Roshambo
document.getElementById('startRoshambo').addEventListener('click', () => {
    displayPlayerSelection();
    displayComputerSelection();
    displayRoshamboResult();
})