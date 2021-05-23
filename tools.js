// Tools using procedural programming

// Loan calculator

// Calculate loan
document.getElementById('calculateLoan').addEventListener('click', () => {

    const getLoanAmount = parseInt(document.getElementById('loan').value);
    // console.log(typeof getLoanAmount);

    document.getElementById('loanAmount').innerHTML = `${getLoanAmount}`;

    const upfrontAdminFee = getLoanAmount * 0.05;
    // console.log(typeof upfrontAdminFee);
    document.getElementById('upfrontAdminFee').innerHTML = `${upfrontAdminFee}`;

    const addAdminFee = () => {
        if (getLoanAmount >= 8000) {
            return 500;
        } else {
            return 0;
        }
    }
    // console.log(typeof additionalAdminFee());
    document.getElementById('addAdminFee').innerHTML = `${addAdminFee()}`;

    const totalAmount = getLoanAmount + upfrontAdminFee + addAdminFee();
    document.getElementById('totalAmount').innerHTML = `${totalAmount}`;

    const getExpectedSalary = parseInt(document.getElementById('salary').value);
    // console.log(typeof getExpectedSalary);
    document.getElementById('expectedSalary').innerHTML = `${getExpectedSalary}</p>`;

    const getRepaymentPercentage = parseInt(document.getElementById('repayment').value);
    // console.log(typeof getRepaymentPercentage);
    document.getElementById('repaymentPercentage').innerHTML = `${getRepaymentPercentage}`;

    const repaymentPerMonth = Math.round((getExpectedSalary / 12) * (getRepaymentPercentage / 100));
    // console.log(repaymentPerMonth);
    document.getElementById('repaymentPerMonth').innerHTML = `${repaymentPerMonth}`;

    const lengthOfRepayment = Math.round(totalAmount / repaymentPerMonth);
    // console.log(lengthOfRepayment);
    document.getElementById('lengthOfRepayment').innerHTML = `${lengthOfRepayment}`;

    const lastRepaymentAmount = repaymentPerMonth + (totalAmount - (repaymentPerMonth * lengthOfRepayment));
    document.getElementById('lastRepaymentAmount').innerHTML = `${lastRepaymentAmount}`;
});

// Reset loan calculator
document.getElementById('resetLoanCal').addEventListener('click', () => {
    document.getElementById('loan').value = '';
    document.getElementById('salary').value = '25000';
    document.getElementById('repayment').value = '10';
})


// Mob pro
let mobNames = [];
// Mob pro - Whose next button is disabled in the first instance
document.getElementById('nextMobName').disabled = true;

// Mob pro - Add names to the list
document.getElementById('addMobButton').addEventListener('click', () => {
    const getMobName = document.getElementById('addMobName').value;
    mobNames.push(getMobName);
    document.getElementById('listOfMobNames').innerHTML = `${mobNames}`;
    document.getElementById('addMobName').value = ``;
    document.getElementById('nextMobName').disabled = false;
})

// Mob pro - Start mob programming
document.getElementById('nextMobName').addEventListener('click', () => {
        // Select a random name
        const randomNumber = Math.floor(Math.random() * mobNames.length);

        let selectedMobName = mobNames.splice(randomNumber, 1)[0];

        if (selectedMobName !== undefined) {
            document.getElementById('mobName').innerHTML = `${selectedMobName}`;

            // Start position
            let getPersonCodingTime = document.getElementById('personCodingTime').value;
            document.getElementById('mobNameCountdown').innerText = `${getPersonCodingTime} minutes`;
            document.getElementById('personCodingTime').disabled = true;
            document.getElementById('addMobName').disabled = true;
            document.getElementById('addMobButton').disabled = true;
            document.getElementById('nextMobName').disabled = true;

            // Countdown for the selected person
            setInterval(() => {
                getPersonCodingTime--;

                if (getPersonCodingTime >= 0) {
                    document.getElementById('mobNameCountdown').innerText = `${getPersonCodingTime} minutes`;
                }

                if (getPersonCodingTime === 0) {
                    document.getElementById('nextMobName').disabled = false;
                }
            }, 60000);
        } else {
            document.getElementById('mobName').innerHTML = `No one left`;
            document.getElementById('mobNameCountdown').innerText = ``;
            document.getElementById('nextMobName').disabled = true;
        }
})

// Mob Pro - Reset
document.getElementById('resetMobPro').addEventListener('click', () => {
    document.location.reload();
})


// Pair Pro

// Pair Pro - P1 name and avatar
document.getElementById('personOne').addEventListener('keyup',() => {
    const getPersonOne = document.getElementById('personOne').value;
    document.getElementById('personOneName').textContent = `${getPersonOne}`;
});

const personOneAvatar = document.getElementById('personOneAvatar');

document.getElementById('catAvatar').addEventListener('click', () => {
    personOneAvatar.setAttribute('src','images/tools/cat.svg');
    personOneAvatar.setAttribute('alt','cat avatar');
});

document.getElementById('dogAvatar').addEventListener('click', () => {
    personOneAvatar.setAttribute('src','images/tools/dog.svg');
    personOneAvatar.setAttribute('alt','dog avatar');
});

document.getElementById('koiAvatar').addEventListener('click', () => {
    personOneAvatar.setAttribute('src','images/tools/koi.svg');
    personOneAvatar.setAttribute('alt','koi avatar');
});

document.getElementById('miceAvatar').addEventListener('click', () => {
    personOneAvatar.setAttribute('src','images/tools/mice.svg');
    personOneAvatar.setAttribute('alt','mice avatar');
});

document.getElementById('rabbitAvatar').addEventListener('click', () => {
    personOneAvatar.setAttribute('src','images/tools/rabbit.svg');
    personOneAvatar.setAttribute('alt','rabbit avatar');
});

// Pair Pro - P2 name and avatar
document.getElementById('personTwo').addEventListener('keyup', () => {
    const getPersonTwo = document.getElementById('personTwo').value;
    document.getElementById('personTwoName').textContent = `${getPersonTwo}`;
});

const personTwoAvatar = document.getElementById('personTwoAvatar');

document.getElementById('butterflyAvatar').addEventListener('click', () => {
    personTwoAvatar.setAttribute('src','images/tools/butterfly.svg');
    personTwoAvatar.setAttribute('alt','butterfly avatar');
});

document.getElementById('crabAvatar').addEventListener('click', () => {
    personTwoAvatar.setAttribute('src','images/tools/crab.svg');
    personTwoAvatar.setAttribute('alt','crab avatar');
});

document.getElementById('elephantAvatar').addEventListener('click', () => {
    personTwoAvatar.setAttribute('src','images/tools/elephant.svg');
    personTwoAvatar.setAttribute('alt','elephant avatar');
});

document.getElementById('frogAvatar').addEventListener('click', () => {
    personTwoAvatar.setAttribute('src','images/tools/frog.svg');
    personTwoAvatar.setAttribute('alt','frog avatar');
});

document.getElementById('koalaAvatar').addEventListener('click', () => {
    personTwoAvatar.setAttribute('src','images/tools/koala.svg');
    personTwoAvatar.setAttribute('alt','koala avatar');
});

// Pair Pro - Start pair programming
document.getElementById('startPairPro').addEventListener('click', () => {
    let getTotalCodingTime = parseInt(document.getElementById('totalCodingTime').value);
    let halfTotalCodingTime = getTotalCodingTime / 2;

    // Start position
    document.getElementById('personOne').disabled = true;
    document.getElementById('personTwo').disabled = true;
    document.getElementById('totalCodingTime').disabled = true;
    document.getElementById('startPairPro').disabled = true;
    document.getElementById('personOneCountdown').innerHTML = `${getTotalCodingTime} minutes left`;
    document.getElementById('personTwoCountdown').innerHTML = `Please observe`;

    // Countdown of total coding time, P1 and P2
    setInterval(() => {
        getTotalCodingTime--;
        document.getElementById('personOneCountdown').innerHTML = `${getTotalCodingTime} minutes left`;

        if (getTotalCodingTime <= halfTotalCodingTime) {
            document.getElementById('personOneCountdown').innerHTML = `Next person`;
        }

        if (getTotalCodingTime > 0 && getTotalCodingTime <= halfTotalCodingTime) {
            document.getElementById('personTwoCountdown').innerHTML = `${getTotalCodingTime} minutes left`;
        }

        if (getTotalCodingTime <= 0) {
            clearInterval();
            document.location.reload();
        }
    }, 60000);
})

// Pair Pro - Reset
document.getElementById('resetPairPro').addEventListener('click', () => {
    document.location.reload();
})
