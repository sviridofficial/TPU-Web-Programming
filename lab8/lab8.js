let inputString = document.getElementById('inputString');
let result = document.getElementById('result');

function clickButton(){
    result.innerHTML = getResult(inputString.value);
}

function getResult(numberValue){
if (typeof numberValue =='string' && !isNaN(Number(numberValue))){
//сначала удалим ведущие нули
while (numberValue.length>1 && numberValue.substr(0,1) == '0' && numberValue.substr(0,1) !=',') {
    let k = numberValue.substr(1,1);
    if(numberValue.substr(1,1)=='.'){
        break;
    }
    else{ 
    numberValue = numberValue.substr(1); 
    }
    }

//теперь удалим конечные нули
if(numberValue.indexOf('.')==-1){
    return numberValue;
}
else{
    while((numberValue.slice(-1) === '0' || numberValue.slice(-1) === '.') && numberValue.indexOf('.') !== -1) {
        numberValue = numberValue.substr(0, numberValue.length - 1);
    }
    return numberValue;
}

}
else return "Входными данные не являются строкой, либо входная строка не является числом!";
}


