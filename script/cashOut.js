
document.getElementById('btn-cashout-money').addEventListener('click',function(event){
    const cashoutAccountNumber = document.getElementById('cashout-account-number').value;

    const cashOutAmount = document.getElementById('cashout-amount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount = parseFloat(mainAmount);

    const cashoutPinNumber = document.getElementById('cashout-pin-number').value;
    const convertedPin = parseInt(cashoutPinNumber);

    if( cashoutAccountNumber.length === 11 && cashOutAmount && cashoutPinNumber){
        if(convertedPin === 1234){
            const reducedAmount = convertedMainAmount - convertedCashOutAmount;

            document.getElementById('main-amount').innerText = reducedAmount;
        }
        else{
            alert('enter valid pin');
        }
    }
    else{
        alert('give valid account or amount or pin');
    }
})