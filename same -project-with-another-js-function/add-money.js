
document.getElementById('btn-add-money').addEventListener('click',function(event){
   event.preventDefault();
   const amount = getInputValueById('amount');
   const pin = getInputValueById('pin-number');
   console.log(pin);

   const account = document.getElementById('account-number').value;

   const selectedBank = document.getElementById('selected-bank').value;

  // console.log(typeof account.length)

   const mainBalance = getInnerTextById('main-amount');


   if(amount < 0){
    alert("can't add negative value" );
   }
   else{
    if(account.length === 11){
    
    if(pin === 1234){
         const sum = mainBalance + amount;
         setInnerText('main-amount',sum);

         const transactionContainer = document.getElementById('transaction-history');

        //  1st way of adding history
        // ----------------------------

        //  const p = document.createElement('p');
        //  p.innerText = `
        //   added ${amount} from ${account}
        //   total balance ${sum};
         
        //  `
        //  transactionContainer.appendChild(p);

        // 2nd way
        // ---------------------------
        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class = "text-red-500"> added money: ${amount} from ${selectedBank} </h3>
        <p> account number: ${account} </p>
        `
        transactionContainer.appendChild(div);

    }
    else{
        alert('give valid pin');
    }
   }
   else{
    alert('give valid account');
   }
   }
})