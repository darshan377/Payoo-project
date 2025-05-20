const cashOutSection = document.getElementById('cash-out-section');
cashOutSection.style.display = 'none';

document.getElementById('add-money-box').addEventListener('click',function(event){
 event.preventDefault();
 const addMoneySection = document.getElementById('add-money-section');
 addMoneySection.style.display = 'block';

 const cashOutSection = document.getElementById('cash-out-section');
 cashOutSection.style.display = 'none';
})

document.getElementById('cash-out-box').addEventListener('click',function(event){
 event.preventDefault();
 const addMoneySection = document.getElementById('add-money-section');
 addMoneySection.style.display = 'none';

 const cashOutSection = document.getElementById('cash-out-section');
 cashOutSection.style.display = 'block';
})