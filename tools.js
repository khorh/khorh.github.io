document.getElementById('calculate').addEventListener('click', () => {

    const validateLoanAmount = () => {
        
    }

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