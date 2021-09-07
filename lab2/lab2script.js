
var k = [];
var outputArray = document.getElementById('array');
var arraySum = document.getElementById('sum');
outputArray.innerHTML = k;
arraySum.innerHTML = 0;

function clickAddElement(){
   
    var elementArray = document.getElementById('inputText').value;
    if(!isNaN(elementArray)){
        k.push(parseFloat(elementArray));
    }
    else{
        k.push(elementArray);     
    }
    outputArray.innerHTML = k;
    
}

function clickClearArray(){
    
    k = [];
    outputArray.innerHTML = k;
    sumArray = 0;
    arraySum.innerHTML = sumArray;
}

function clickCheckSum(){
    arraySum.innerHTML = checkSum(k);
}
//Функция для подсчета суммы
function checkSum(array){
    if(Array.isArray(array)){
    var sumArray = 0;
    for (i=0; i<array.length; i++){
    if(!isNaN(array[i])){
        sumArray+=array[i];
    }
    }
    return sumArray;
}
else return "Передаваемый аргумент не является массивом!";
}