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


// Pair Pro
// P1 name and avatar
document.getElementById('personOne').addEventListener('keyup',() => {
    const getPersonOne = document.getElementById('personOne').value;
    document.getElementById('personOneName').textContent = `${getPersonOne}`;
});

document.getElementById('catAvatar').addEventListener('click', () => {
    document.getElementById('personOneAvatar').setAttribute('src','images/tools/cat.svg');
});

document.getElementById('dogAvatar').addEventListener('click', () => {
    document.getElementById('personOneAvatar').setAttribute('src','images/tools/dog.svg');
});

document.getElementById('rabbitAvatar').addEventListener('click', () => {
    document.getElementById('personOneAvatar').setAttribute('src','images/tools/rabbit.svg');
});

// P2 name and avatar
document.getElementById('personTwo').addEventListener('keyup', () => {
    const getPersonTwo = document.getElementById('personTwo').value;
    document.getElementById('personTwoName').textContent = `${getPersonTwo}`;
});

document.getElementById('chimpanzeeAvatar').addEventListener('click', () => {
    document.getElementById('personTwoAvatar').setAttribute('src','images/tools/chimpanzee.svg');
});

document.getElementById('giraffeAvatar').addEventListener('click', () => {
    document.getElementById('personTwoAvatar').setAttribute('src','images/tools/giraffe.svg');
});

document.getElementById('lemurAvatar').addEventListener('click', () => {
    document.getElementById('personTwoAvatar').setAttribute('src','images/tools/lemur.svg');
});

// Start pair programming
document.getElementById('startPairPro').addEventListener('click', () => {
    let getTotalCodingTime = parseInt(document.getElementById('totalCodingTime').value);
    let halfTotalCodingTime = getTotalCodingTime / 2;

    // Starting position
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
            document.getElementById('personOneCountdown').innerHTML = `Have a break!`;
            document.getElementById('personTwoCountdown').innerHTML = `Have a break!`;
            document.getElementById('startPairPro').disabled = false;
        }
    }, 1000);
})

// Reset pair programming
document.getElementById('resetPairPro').addEventListener('click', () => {
    document.getElementById('personOne').value = '';
    document.getElementById('personTwo').value = '';
    document.getElementById('totalCodingTime').value = '';
})