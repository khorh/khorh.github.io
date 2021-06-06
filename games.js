// Games using functional programming

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

document.getElementById('resetCoinToss').addEventListener('click', () => {
    document.location.reload();
})

// Roshambo
document.getElementById('startRoshambo').addEventListener('click', () => {
    const outcomePlayerSelection = getPlayerSelection();
    displayPlayerSelection(outcomePlayerSelection);

    const outcomeComputerSelection = getComputerSelection();
    displayComputerSelection(outcomeComputerSelection);

    displayRoshamboResult(outcomePlayerSelection, outcomeComputerSelection);
})

document.getElementById('resetRoshambo').addEventListener('click', () => {
    document.location.reload();
})


// Whack
const countdownWhack = 10;

document.getElementById('startWhack').addEventListener('click', () => {
    displayCountdownWhack(countdownWhack);
})