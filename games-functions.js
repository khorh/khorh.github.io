// Games using functional programming

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
 * @param {string} outcomePlayerSelection outcome from the player randomised selection
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
 * @param {string} outcomeComputerSelection outcome from the computer randomised selection
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
 * @param {string} outcomePlayerSelection outcome from the player randomised selection
 * @param {string} outcomeComputerSelection outcome from the computer randomised selection
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

/**
 * Whack function to display the countdown for the game
 * @param {number} countdownWhack is the starting number of seconds for the game
 * @returns {string} countdown by each second from the starting number
 */

const displayCountdownWhack = (countdownWhack) => {
    setInterval(() => {

        // Countdown
        countdownWhack--;
        if (countdownWhack >=0) {
            document.getElementById('countdownWhack').textContent = `${countdownWhack}`;
            document.getElementById('startWhack').disabled = true;

            // Mole head appears at random and with different duration
            const randomNumberWhack = Math.ceil(Math.random() * 12);
            console.log(randomNumberWhack);

            const minTimeoutWhack = 200;
            const maxTimeoutWhack = 2000;
            let randomTimeoutWhack = minTimeoutWhack + Math.ceil(Math.random() * (maxTimeoutWhack - minTimeoutWhack));
            console.log(randomTimeoutWhack);

            if (randomNumberWhack === 1) {
                document.getElementById('moleHeadOne').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">';
                setTimeout(function () {document.getElementById('moleHeadOne').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 2) {
                document.getElementById('moleHeadTwo').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">';
                setTimeout(function () {document.getElementById('moleHeadTwo').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 3) {
                document.getElementById('moleHeadThree').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">';
                setTimeout(function () {document.getElementById('moleHeadThree').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 4) {
                document.getElementById('moleHeadFour').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadFour').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 5) {
                document.getElementById('moleHeadFive').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadFive').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 6) {
                document.getElementById('moleHeadSix').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadSix').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 7) {
                document.getElementById('moleHeadSeven').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadSeven').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 8) {
                document.getElementById('moleHeadEight').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadEight').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 9) {
                document.getElementById('moleHeadNine').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadNine').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 10) {
                document.getElementById('moleHeadTen').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadTen').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 11) {
                document.getElementById('moleHeadEleven').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadEleven').innerHTML = '';}, randomTimeoutWhack);
            } else if (randomNumberWhack === 12) {
                document.getElementById('moleHeadTwelve').innerHTML = '<img src="images/games/whack-mole.svg" alt="mole\'s head">'
                setTimeout(function () {document.getElementById('moleHeadTwelve').innerHTML = '';}, randomTimeoutWhack);
            }
        } else {
            document.location.reload();
        }
    }, 1000)
}