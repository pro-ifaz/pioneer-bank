//login-button eventHandler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit-button eventHandler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
   const depositNumber = getInputNumber("depositAmount");

    currentDeposit = document
        .getElementById("currentDeposit")
        .innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document
        .getElementById("currentDeposit")
        .innerText = totalDeposit;

    document
        .getElementById("depositAmount")
        .value = "";
        updateSpanText("currentBalance", depositNumber);
})

// withdraw button handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber);
})

function getInputNumber (id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document
        .getElementById(id)
        .innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document
        .getElementById(id)
        .innerText = totalBalance;
}