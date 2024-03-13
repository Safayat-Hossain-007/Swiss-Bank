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
   const depositNumber = getInputNumber("depositAmount");

//    const currentDeposit = document.getElementById('currentDeposit').innerText;
//    const currentDepositNumber = parseFloat(currentDeposit);
//    const totalDeposit = depositNumber+currentDepositNumber;
//    document.getElementById("currentDeposit").innerText = totalDeposit;
   updateSpanText("currentDeposit",depositNumber)
   document.getElementById("depositAmount").value ="";
   updateSpanText("currentBalance",depositNumber);
 

    
})
    //Withdraw buttonEvent handler
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click",function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateSpanText("currentWithdraw",withdrawNumber);
        updateSpanText("currentBalance",-1 *withdrawNumber);
        document.getElementById("withdrawAmount").value ="";
    })

    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;

    }



function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


