
document.getElementById('btn-login').addEventListener('click',function(event){
   // console.log('button-clicked')
  event.preventDefault();

  const mobileNumber = document.getElementById('mobile-number');
  const numberValue = mobileNumber.value;
 // console.log(numberValue);

  const pinNumber = document.getElementById('pin-number').value;

  const convertedPin = parseInt(pinNumber)
 // console.log(pinNumber)

 if(numberValue.length === 11){
   
    if(convertedPin === 1234){
      //  console.log('all fine...enter');
      window.location.href = "homepage.html";
    }
    else{
      //  console.log('give valid pin');
      alert('give valid pin number');
    }

 }else{
   // console.log('give valid number')
   alert('give valid mobile number');
 }
})