// Games

// Coin toss
/**
 * function to randomise the toss of a coin
 * @returns a Peter or Benjamin coin image
 */
const displayToss = () => {
    let coinToss = Math.ceil(Math.random() * 2);

    if (coinToss === 1) {
        document.querySelector('#coinToss').setAttribute('src', 'images/games/coin-toss-peter.png');
        document.querySelector('#coinToss').setAttribute('alt', 'peter rabbit 50p coin');
        numberOfPeter += 1;
        document.getElementById('totalPeter').innerHTML = `Peter: ${numberOfPeter}`;
    } else if (coinToss === 2) {
        document.querySelector('#coinToss').setAttribute('src','images/games/coin-toss-benjamin.png');
        document.querySelector('#coinToss').setAttribute('alt', 'benjamin rabbit 50p coin');
        numberOfBenjamin +=1;
        document.getElementById('totalBenjamin').innerHTML = `Benjamin: ${numberOfBenjamin}`;
    }
}

/**
 * function to add one to every click of the Toss! button
 * @returns a total number of tosses
 */
const displayTotalTosses = () => {
    numberOfTosses += 1;
    document.getElementById('totalTosses').innerHTML = `Total tosses: ${numberOfTosses}`;
}

// Roshambo

/**
 * function for player to show the image and alt text of rock, paper or scissors
 * @returns the image and alt text of rock, paper or scissors
 */
const displayPlayerRock = () => {
    document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
    document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    return 'rock';
}

const displayPlayerPaper = () => {
    document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
    document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    return 'paper';
}

const displayPlayerScissors = () => {
    document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
    document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    return 'scissors';
}

/**
 * function to randomise the player's selection of rock, paper or scissors
 * @returns the image and alt text related to the random selection
 */
const displayPlayerSelection = () => {
    const playerRandomNumber = Math.ceil(Math.random() * 3);
    if (playerRandomNumber === 1) {
        return displayPlayerRock();
    } else if (playerRandomNumber === 2) {
        return displayPlayerPaper();
    } else if (playerRandomNumber === 3) {
        return displayPlayerScissors();
    }
}

/**
 * function for computer to show the image and alt text of rock, paper or scissors
 * @returns the image and alt text of rock, paper or scissors
 */
const displayComputerRock = () => {
    document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
    document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    return 'rock';
}

const displayComputerPaper = () => {
    document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
    document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    return 'paper';
}

const displayComputerScissors = () => {
    document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
    document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    return 'scissors';
}

/**
 * function to randomise the computer's selection of rock, paper or scissors
 * @returns the image and alt text related to the random selection
 */
const displayComputerSelection = () => {
    const computerRandomNumber = Math.ceil(Math.random() * 3);
    if (computerRandomNumber === 1) {
        return displayComputerRock();
    } else if (computerRandomNumber === 2) {
        return displayComputerPaper();
    } else if (computerRandomNumber === 3) {
        return displayComputerScissors();
    }
}

/**
 * functions to provide text based on the result between player and computer
 * @returns the text in the paragraph tag
 */
const drawResult = () => {
    document.getElementById('roshamboResult').textContent = 'It is a draw. Try again?';
    document.querySelector('#playerWinGif').removeAttribute('src');
    document.querySelector('#playerWinGif').removeAttribute('alt');
}

const playerWinResult = () => {
    document.getElementById('roshamboResult').textContent = 'You win! Have another go?';
    document.querySelector('#playerWinGif').setAttribute('src','https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif');
    document.querySelector('#playerWinGif').setAttribute('alt','gif image of kitten flying in the air');
}

const computerWinResult = () => {
    document.getElementById('roshamboResult').textContent = 'Computer beat you this time! Have another go?';
    document.querySelector('#playerWinGif').removeAttribute('src');
    document.querySelector('#playerWinGif').removeAttribute('alt');
}

/**
 * functions to determine the result of the roshambo
 * @returns the text in the paragraph tag
 */
const displayRoshamboResult = () => {
    if (displayPlayerSelection() === displayComputerSelection()) {
        return drawResult();
    } else if (displayPlayerSelection() === 'rock' && displayComputerSelection() === 'scissors') {
        return playerWinResult();
    } else if (displayPlayerSelection() === 'rock' && displayComputerSelection() === 'paper') {
        return computerWinResult();
    } else if (displayPlayerSelection() === 'paper' && displayComputerSelection() === 'rock') {
        return playerWinResult();
    } else if (displayPlayerSelection() === 'paper' && displayComputerSelection() === 'scissors') {
        return computerWinResult();
    } else if (displayPlayerSelection() === 'scissors' && displayComputerSelection() === 'rock') {
        return computerWinResult();
    } else if (displayPlayerSelection() === 'scissors' && displayComputerSelection() === 'paper') {
        return playerWinResult();
    } else {
        return 'Try again!';
    }
}