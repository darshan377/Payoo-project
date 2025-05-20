
document.getElementById('btn-add-money').addEventListener('click',function(event){
     event.preventDefault();
     const accountNumber = document.getElementById('account-number').value;


     const amount = document.getElementById('amount').value;
     const convertedAmount = parseFloat(amount);

     const mainAmount = document.getElementById('main-amount').innerText;
     const convertedMainAmount = parseFloat(mainAmount);
   //  console.log(typeof convertedMainAmount);

     const pin = document.getElementById('pin-number').value;
     const convertedPin = parseInt(pin);

     if(accountNumber.length === 11 && amount && pin){
        if(convertedPin !== 1234){
         console('give valid pin');
     }
     else{
        const sum = convertedMainAmount + convertedAmount;
      //  console.log(sum);
      document.getElementById('main-amount').innerText = sum;

     }
     }
     else{
        alert('give valid account or amount or pin');
     }
})