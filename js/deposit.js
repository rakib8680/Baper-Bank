
// step 1 : Add event listener to deposit button .........

document.getElementById('deposit-btn').addEventListener('click', function () {
    // step-2   take value from  deposit input field 
    const depositField = document.getElementById('deposit-field');
    const depositInputString = depositField.value;

    // make input string to number  
    const depositInput = parseFloat(depositInputString);

    // step-3 add deposit input value to total deposit value 
    const totalDeposit = document.getElementById('deposit-value');
    const previousDepositString = totalDeposit.innerText;
    // make  string to number 
    const previousDeposit = parseFloat(previousDepositString);

    // step-4 set the total sum into deposit card 
    const depositTotal = previousDeposit + depositInput;
    totalDeposit.innerText = depositTotal;





    // step-  clear the deposit field 
    depositField.value = ''

})