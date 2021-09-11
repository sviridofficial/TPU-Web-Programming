var k = [];
var outputArray = document.getElementById('array');
outputArray.innerHTML = k;
var resultArray = document.getElementById('resultArray');


function clickAddElement(){

    var elementArray = document.getElementById('inputText').value;
    if(!isNaN(elementArray)){
        k.push(parseFloat(elementArray));
    }
    
    else if(elementArray =='true'){
        k.push(true);
    }
    else if (elementArray=='false'){
        k.push(false);
    }
    else{
        k.push(elementArray);     
    }
    outputArray.innerHTML = k;
    
    
}

function clickClearArray(){
    
    k = [];
    outputArray.innerHTML = k;
    resultArray.innerHTML = [];
}

function clickChangeArray(){
    let arrayForAnalise = k.slice();
    resultArray.innerHTML = changeArray(arrayForAnalise);

    
}
//Функция для преобразования элементов массива!
function changeArray(list){
   
    if(Array.isArray(list)){
for(i = 0; i<list.length;i++){
    if(Number.isInteger(list[i])){
        if(list[i]%2==1){
                var numberToString = list[i].toString()+'0';
                list[i] = parseInt(numberToString);
                
                }
        else if(list[i]%2==0){
                var numberToString = list[i].toString()+'1';
                list[i] = parseInt(numberToString);
               
        }
    }
    else if(typeof list[i]=="string" && list[i].length!=0){
        list[i] = list[i][0].toUpperCase() + list[i].slice(1)+'!';
       
}
    else if(typeof list[i]=="boolean"){
if(list[i]==true){
    list[i] = false;
    
}
else if (list[i]==false){
    list[i] = true;
  
}
    }
}  
  
return list;
}

else return "Передаваемый аргумент не является массивом!";
}