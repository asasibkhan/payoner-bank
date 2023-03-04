const loginArea = document.getElementById("login");
loginArea.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"

    const asibArea = document.getElementById("asib-khan")
    asibArea.style.display = "block"
})





const dipositBtn = document.getElementById("addDeposit")
dipositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById("depositAmount").velue;
    const depositNumber = parseFloat(depositAmount)
    const carrentDeposit = document.getElementById("carrentDeposit").innerText
    const carrentDepositNumber = parseFloat(carrentDeposit)
    const total = depositNumber + carrentDepositNumber;
    document.getElementById("carrentDeposit").innerText = total;

})