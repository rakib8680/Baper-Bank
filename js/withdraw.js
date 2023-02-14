

// step-1 get withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {


    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);

    withdrawField.value = '';

    if (isNaN(withdrawValue)) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawBalance = document.getElementById('withdraw-value');
    const PreviousWithdrawBalanceString = withdrawBalance.innerText;
    const PreviousWithdrawBalance = parseFloat(PreviousWithdrawBalanceString);


    const totalBalance = document.getElementById('total-balance');
    const previousBalanceString = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);



    if (previousBalance < withdrawValue) {
        alert('taka nai dha sai');
        return;
    }


    const currentWithdrawBalance = withdrawValue + PreviousWithdrawBalance;
    withdrawBalance.innerText = currentWithdrawBalance;


    const remainingBalance = previousBalance - withdrawValue;

    totalBalance.innerText = remainingBalance;


})