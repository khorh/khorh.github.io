// Games using functional programming

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