let result = document.getElementById('result');
function clickButton(){
    let input = document.getElementById('inputDate').value;
    let inputDate = input.split('/');
    if(inputDate.length==3 &&
    (typeof inputDate[0] =="string" && inputDate[0].length==2 && !isNaN(inputDate[0]) && Number.isInteger(parseFloat(inputDate[0])))&&
    (typeof inputDate[1] =="string" && inputDate[1].length==2 && !isNaN(inputDate[1]) && Number.isInteger(parseFloat(inputDate[1])))&&
    (typeof inputDate[2] =="string" && inputDate[2].length==4 && !isNaN(inputDate[2]) && Number.isInteger(parseFloat(inputDate[2])))){

    result.innerHTML = daysToNewYear(input);

    }
    else{
alert('Введите корректно входные данные!');
        }

}


function daysToNewYear(dateString){
    dateString = dateString.split('/');
    if(dateString.length==3 &&
    (typeof dateString[0] =="string" && dateString[0].length==2 && !isNaN(dateString[0]) && Number.isInteger(parseFloat(dateString[0])))&&
    (typeof dateString[1] =="string" && dateString[1].length==2 && !isNaN(dateString[1]) && Number.isInteger(parseFloat(dateString[1])))&&
    (typeof dateString[2] =="string" && dateString[2].length==4 && !isNaN(dateString[2]) && Number.isInteger(parseFloat(dateString[2])))){

    let currentDate = new Date(dateString[2]+'-'+dateString[0]+'-'+dateString[1]+'T00:00:00');
    
    if(currentDate!='Invalid Date'){
        let newYear = new Date((parseInt(dateString[2])+1+'-01-01T00:00:00'));
        let msInOneDay = 60*60*24*1000;
    return Math.round((newYear.getTime()-currentDate.getTime())/msInOneDay);
    }
else {
    return "Введенной даты не существует!"
}
}
else return "Дата введена некорректно!";
}