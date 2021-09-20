function clickButton(){
    let result = document.getElementById('result'); 
    let inputText = document.getElementById('inputText').value;
    result.innerHTML = regularExpression(inputText);
console.log(regularExpression(inputText));
}
//Функция с регулярным выражением
function regularExpression(stroka){
    if(typeof stroka == 'string'){
    //Регулярное выражения для поиска @ и #
    let reg = new RegExp(/@([^ ]*)|#([^ ]*)/gi);
    let arrayAfterRegExp = stroka.match(reg);
    if(arrayAfterRegExp==null){
        return "В данной строке нет ссылок на твит!";
    }
    for (i = 0; i<arrayAfterRegExp.length;i++){
        arrayAfterRegExp[i] = arrayAfterRegExp[i].slice(1);
    }
    return arrayAfterRegExp;
    }
    else{
        return "Вводимые данные не являются строкой!";
    }
}