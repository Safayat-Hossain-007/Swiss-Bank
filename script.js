const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function () {
    //login button event handler
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";

})
    //deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
   const depositAmount = document.getElementById('depositAmount').value;
   const depositNumber = parseFloat(depositAmount);

   const currentDeposit = document.getElementById('currentDeposit').innerText;
   const currentDepositNumber = parseFloat(currentDeposit);
   const totalDeposit = depositNumber+currentDepositNumber;
   console.log(totalDeposit);
   document.getElementById("currentDeposit").innerText =totalDeposit;
   document.getElementById("depositAmount").value ="";

    
})


    //withdraw button event handler
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click',function(){
    console.log("click");
})