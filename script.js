//login-button eventHandler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
   const loginArea = document.getElementById('login-area');
   loginArea.style.display = "none";
   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = "block";
})

//deposit-button eventHandler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit; 
    document.getElementById("depositAmount").value = ""

})