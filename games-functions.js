// Coin toss

/**
 * function to randomise the toss of a coin
 * @returns a Peter or Benjamin coin image
 */
const displayToss = () => {
    let coinToss = Math.ceil(Math.random() * 2);

    if (coinToss === 1) {
        document.getElementById('coinToss').innerHTML = '<img class="proj-img-md" src="images/games/games-coin-toss-heads.png" alt="peter rabbit 50p coin" />';
        numberOfPeter += 1;
        document.getElementById('totalPeter').innerHTML = `Peter: ${numberOfPeter}`;
    } else if (coinToss === 2) {
        document.getElementById('coinToss').innerHTML = '<img class="proj-img-md" src="images/games/games-coin-toss-tails.png" alt="benjamin rabbit 50p coin" />';
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

