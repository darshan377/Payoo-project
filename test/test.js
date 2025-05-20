
document.getElementById('btn-bd').addEventListener('click',function(event){
  event.preventDefault();

 const bd = document.getElementById('bd');
 bd.style.display = 'block';

 document.getElementById('us').style.display = 'none';
})

document.getElementById('btn-us').addEventListener('click',function(event){
  event.preventDefault();

 const us = document.getElementById('us');
 us.style.display = 'block';

 document.getElementById('bd').style.display = 'none';
})