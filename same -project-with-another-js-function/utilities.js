
function getInputValueById(id){
   const num = document.getElementById(id).value;
   const convertedNum = parseFloat(num);
   return convertedNum;
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
   return convertedValue;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id,status){
    const addMoneySection = document.getElementById(id);
    addMoneySection.style.display = status;
}