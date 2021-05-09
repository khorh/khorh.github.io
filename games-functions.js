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
/**
 * Roshambo function to turn a randomised number into a string for the player's selection
 * @return {string} of rock, paper or scissors based on the random number
 */
const getPlayerSelection = () => {
    const playerRandomNumber = Math.ceil(Math.random() * 3);
    if (playerRandomNumber === 1) {
        return 'rock';
    } else if (playerRandomNumber === 2) {
        return 'paper';
    } else if (playerRandomNumber === 3) {
        return 'scissors';
    }
}

/**
 * Roshambo function to display the output based on the selected string for the player
 * @return {string} containing the image source and alt text content
 */
const displayPlayerSelection = (outcomePlayerSelection) => {
    if (outcomePlayerSelection === 'rock') {
        document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
        document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    } else if (outcomePlayerSelection === 'paper') {
        document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
        document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    } else if (outcomePlayerSelection === 'scissors') {
        document.querySelector('#playerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
        document.querySelector('#playerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    }
}

/**
 * Roshambo function to randomise either 1, 2 or 3 for the computer's selection
 * @return {string} of rock, paper or scissors based on the random number
 */
const getComputerSelection = () => {
    let computerRandomNumber = Math.ceil(Math.random() * 3);
        if (computerRandomNumber === 1) {
            return 'rock';
        } else if (computerRandomNumber === 2) {
            return 'paper';
        } else if (computerRandomNumber === 3) {
            return 'scissors';
        }
}

/**
 * Roshambo function to display the output based on the selected string for the computer
 * @return {string} containing the image source and alt text content
 */
const displayComputerSelection = (outcomeComputerSelection) => {
    if (outcomeComputerSelection === 'rock') {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-rock.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a rock sign');
    } else if (outcomeComputerSelection === 'paper') {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-paper.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a paper sign');
    } else if (outcomeComputerSelection === 'scissors') {
        document.querySelector('#computerSelection').setAttribute('src', 'images/games/roshambo-scissors.png');
        document.querySelector('#computerSelection').setAttribute('alt', 'paw of cat showing a scissors sign');
    }
}

/**
 * Roshambo function to determine the winner for every randomised paw
 * @return {string} containing the results
 */

const displayRoshamboResult = (outcomePlayerSelection, outcomeComputerSelection) => {
    if (outcomePlayerSelection === outcomeComputerSelection) {
        document.getElementById('roshamboResult').textContent = 'It is a draw. Try again?';
    } else if (outcomePlayerSelection === 'rock' && outcomeComputerSelection === 'paper') {
        document.getElementById('roshamboResult').textContent = 'Computer wins. Try again?';
    } else if (outcomePlayerSelection === 'rock' && outcomeComputerSelection === 'scissors') {
        document.getElementById('roshamboResult').textContent = 'You win! Try again?';
    } else if (outcomePlayerSelection === 'paper' && outcomeComputerSelection === 'rock') {
        document.getElementById('roshamboResult').textContent = 'You win! Try again?';
    } else if (outcomePlayerSelection === 'paper' && outcomeComputerSelection === 'scissors') {
        document.getElementById('roshamboResult').textContent = 'Computer wins. Try again?';
    } else if (outcomePlayerSelection === 'scissors' && outcomeComputerSelection === 'rock') {
        document.getElementById('roshamboResult').textContent = 'Computer wins. Try again?';
    } else if (outcomePlayerSelection === 'scissors' && outcomeComputerSelection === 'paper') {
        document.getElementById('roshamboResult').textContent = 'You win! Try again?';
    }
    else {
        return 'Something else!';
    }
}
