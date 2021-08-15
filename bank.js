

// Deposit Amount 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmmountText = document.getElementById('deposit-amount');
    const previousdepositAmmount = parseFloat(depositAmmountText.value);

    const totalDepositedText = document.getElementById('total-deposited');
    const totalDeposited = parseFloat(totalDepositedText.innerText);

    const totalDepositedAmmount = previousdepositAmmount + totalDeposited;

    totalDepositedText.innerText = totalDepositedAmmount;

    // Total Ammount

    const totalAmmountText = document.getElementById('total-ammount');
    const previoustotalAmmount = parseFloat(totalAmmountText.innerText);

    const newTotalAmmount = previousdepositAmmount + previoustotalAmmount

    totalAmmountText.innerText = newTotalAmmount;

    depositAmmountText.value = '';


});

//  Withdraw Amount

document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get Withdraw amount
    const WithdrawAmountText = document.getElementById('withdraw-amount');
    const withdrawAmount = parseFloat(WithdrawAmountText.value);

    // Total withdraw
    const previousWithdrawAmountText = document.getElementById('total-withdraw-amount')
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText.innerText)

    const totalWithdraw = withdrawAmount + previousWithdrawAmount

    previousWithdrawAmountText.innerText = totalWithdraw;

    // Total Amount
    const previousTotalAmountText = document.getElementById('total-ammount');
    const previousTotalAmount = parseFloat(previousTotalAmountText.innerText);

    const currentTotalAmount = previousTotalAmount - withdrawAmount;
    previousTotalAmountText.innerText = currentTotalAmount;

    // clear

    WithdrawAmountText.value = '';




})
