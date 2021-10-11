let result = document.getElementById('result');
        

function clickToAnalise(){
    let inputWords = document.getElementById('inputWords').value;

    result.innerHTML ='Результат: ' + sortString(inputWords);
}


function sortString(x){
    if(typeof x =='string'){
        return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)).join(' ');}
    else{
    return "Некорректно введены данные!";
}
}
