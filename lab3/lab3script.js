function checkSum(stringForAnalise){
    if(typeof stringForAnalise=='string'){
    let sum = 0;
    let numberInString = '';
  //Булево значение которое говорит было ли число до текущего элемента
    let isNumberSeries= false;

    for(i = 0; i<stringForAnalise.length; i++){
    if(stringForAnalise.length-1 == i && !isNaN(stringForAnalise[i]) && stringForAnalise[i]!=' '){
        numberInString += stringForAnalise[i];
        sum+=parseInt(numberInString);
        numberInString = '';
        isNumberSeries = false;
    }
       else if(!isNaN(stringForAnalise[i]) && stringForAnalise[i]!=' '){
            numberInString+=stringForAnalise[i];
            isNumberSeries = true;
        }
        else if((isNumberSeries == true && stringForAnalise[i]==' ')||(isNaN(stringForAnalise[i]) && isNumberSeries == true)){
            sum+=parseInt(numberInString);
            numberInString = '';
            isNumberSeries = false;
        }
    }
    
return sum;
}
else return 'Входные данные не являются строкой!';
    
}

function clickCheckSum(){
let outputSum = document.getElementById('outputSum');
let inputText = document.getElementById('inputText').value;
outputSum.innerHTML = checkSum(inputText);
}