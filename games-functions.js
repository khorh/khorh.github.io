// Games using functional programming

/**
 * Coin toss function to display every click of the Toss! button
 * @param {number} totalTosses which is the total number of tosses
 * @returns {number} a display of the total number of tosses
 */
const displayTotalTosses = (totalTosses) => {
    document.getElementById('totalTosses').innerHTML = `${totalTosses}`;
}

/**
 * Coin toss function to display the image based on the randomise number of 1 and 2
 * @param {number} coinToss which is the random number of either 1 or 2
 * @returns display the image of Peter or Benjamin 50p coin
 */
const displayToss = (coinToss) => {
    if (coinToss === 1) {
        document.querySelector('#coinTossImage').setAttribute('src', 'images/games/coin-toss-peter.png');
        document.querySelector('#coinTossImage').setAttribute('alt', 'peter rabbit 50p coin');
    } else if (coinToss === 2) {
        document.querySelector('#coinTossImage').setAttribute('src','images/games/coin-toss-benjamin.png');
        document.querySelector('#coinTossImage').setAttribute('alt', 'benjamin rabbit 50p coin');
    }
}

/**
 * Coin toss function to add and display the counts of Peter and Benjamin
 * @param {number} coinToss which is the random number of either 1 or 2
 * @returns {number} counts for Peter and Benjamin and display the counts
 */
const displayCount = (coinToss) => {
    if (coinToss === 1) {
        numberOfPeter += 1;
        document.getElementById('totalPeter').innerHTML = `${numberOfPeter}`;
    } else if (coinToss === 2) {
        numberOfBenjamin +=1;
        document.getElementById('totalBenjamin').innerHTML = `${numberOfBenjamin}`;
    }
}

/**
 * Coin toss function to calculate and display the probability of Peter and Benjamin
 * @param {number} totalTosses which is the total number of tosses
 * @returns {number} probabilities in percentage of Peter and Benjamin and display the probabilities
 */
const displayProbability = (totalTosses) => {
    const calculatePeter = (numberOfPeter/totalTosses)*100;
    const percentagePeter = calculatePeter.toFixed(0);
    document.getElementById('percentagePeter').innerHTML = `${percentagePeter}%`;

    const calculateBenjamin = (numberOfBenjamin/totalTosses)*100;
    const percentageBenjamin = calculateBenjamin.toFixed(0);
    document.getElementById('percentageBenjamin').innerHTML = `${percentageBenjamin}%`;
}

// Roshambo
const getPlayerSelection = () => {
    let playerRandomNumber = Math.ceil(Math.random() * 3);

    switch(playerRandomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return 'invalid';
    }
}

const displayPlayerSelection = () => {
    if (getPlayerSelection() === 'rock') {
            document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
            document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    } else if (getPlayerSelection() === 'paper') {
            document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
            document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    } else {
            document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
            document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    }
}

const getComputerSelection = () => {
    let computerRandomNumber = Math.ceil(Math.random() * 3);

    switch(computerRandomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return 'invalid';
    }
}

const displayComputerSelection = () => {
    if (getComputerSelection() === 'rock') {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    } else if (getComputerSelection() === 'paper') {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    } else {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    }
}

const displayRoshamboResult = () => {
    if (getPlayerSelection === getComputerSelection) {
        document.getElementById('roshamboResult').textContent = 'It is a draw. Try again?';
    }
    if (getPlayerSelection === 'rock') {
        if (getComputerSelection === 'paper') {
            document.getElementById('roshamboResult').textContent = 'Computer beat you this time! Have another go?';
        } else {
            document.getElementById('roshamboResult').textContent = 'You win! Have another go?';
        }
    }
    if (getPlayerSelection === 'paper') {
        if (getComputerSelection === 'scissors') {
            document.getElementById('roshamboResult').textContent = 'You win! Have another go?';
        } else {
            document.getElementById('roshamboResult').textContent = 'Computer beat you this time! Have another go?';
        }
    }
    if (getPlayerSelection === 'scissors') {
        if (getComputerSelection === 'rock') {
            document.getElementById('roshamboResult').textContent = 'Computer beat you this time! Have another go?';
        } else {
            document.getElementById('roshamboResult').textContent = 'You win! Have another go?';
        }
    }
}

// console.log(displayRoshamboResult());

// Roshambo Original
// /**
//  * function to randomise the player's selection of rock, paper or scissors
//  * @returns the image and alt text related to the random selection
//  */

// console.log(playerRandomNumber);
// const displayPlayerSelection = () => {
//     let playerRandomNumber = Math.ceil(Math.random() * 3);
//
//     if (playerRandomNumber === 1) {
//         document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
//         document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
//     } else if (playerRandomNumber === 2) {
//         document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
//         document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
//     } else if (playerRandomNumber === 3) {
//         document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
//         document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
//     }
// }

// /**
//  * function to randomise the computer's selection of rock, paper or scissors
//  * @returns the image and alt text related to the random selection
//  */
//
// const computerRandomNumber = Math.ceil(Math.random() * 3);
// console.log(computerRandomNumber);

// let displayComputerSelection = () => {
//     if (computerRandomNumber === 1) {
//         document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
//         document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
//         return 'rock';
//     } else if (computerRandomNumber === 2) {
//         document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
//         document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
//         return 'paper';
//     } else if (computerRandomNumber === 3) {
//         document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
//         document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
//         return 'scissors';
//     }
// }

// /**
//  * functions to provide text based on the result between player and computer
//  * @returns the text in the paragraph tag
//  */
// const drawResult = () => {
//     document.getElementById('roshamboResult').textContent = 'It is a draw. Try again?';
//     document.querySelector('#playerWinGif').removeAttribute('src');
//     document.querySelector('#playerWinGif').removeAttribute('alt');
// }
//
// const playerWinResult = () => {
//     document.getElementById('roshamboResult').textContent = 'You win! Have another go?';
//     document.querySelector('#playerWinGif').setAttribute('src','https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif');
//     document.querySelector('#playerWinGif').setAttribute('alt','gif image of kitten flying in the air');
// }
//
// const computerWinResult = () => {
//     document.getElementById('roshamboResult').textContent = 'Computer beat you this time! Have another go?';
//     document.querySelector('#playerWinGif').removeAttribute('src');
//     document.querySelector('#playerWinGif').removeAttribute('alt');
// }

// /**
//  * functions to determine the result of the roshambo
//  * @returns the text in the paragraph tag
//  */
// const roshamboResult = () => {
//     if (playerRandomNumber === computerRandomNumber) {
//         return 'draw';
//     } else if (playerRandomNumber === 1 && computerRandomNumber === 2) {
//         return 'computer wins';
//     } else if (playerRandomNumber === 1 && computerRandomNumber === 3) {
//         return 'player wins';
//     } else if (playerRandomNumber === 2 && computerRandomNumber === 1) {
//         return 'player wins';
//     } else if (playerRandomNumber === 2 && computerRandomNumber === 3) {
//         return 'computer wins';
//     } else if (playerRandomNumber === 3 && computerRandomNumber === 1) {
//         return 'computer wins';
//     } else if (playerRandomNumber === 3 && computerRandomNumber === 2) {
//         return 'player wins';
//     }
//     else {
//         return 'Something else!';
//     }
// }
//
//
// console.log(roshamboResult());