let numbersArray  = [];
        let currentArray = document.getElementById('currentArray');
        

        function clickAddNumber(){
            let inputNumber = document.getElementById('inputNumber').value;
            if(typeof inputNumber =="string" && !isNaN(inputNumber) && Number.isInteger(parseFloat(inputNumber))){
             numbersArray.push(parseInt(inputNumber));
             currentArray.innerHTML = 'Текущий массив: ['+numbersArray+']';
            }
            else{
                alert('Введенная строка не является целым числом!');
            }
        }

        function clickRemoveArray(){
            numbersArray = [];
            currentArray.innerHTML = 'Текущий массив: ['+ numbersArray+']';
        }

        function clickFindNumber(){
            result.innerHTML = 'Наибольшее четное число в массиве: ' +recursiveFunction(numbersArray);
        }

        //Рекурсивная функция
        function recursiveFunction(list){
            if(!Array.isArray(list)){
                return "Не является массивом!";
            }
            if(list.length ==0){
                return -1;
            }
            if(!Number.isInteger(list[0])){ 
            return "В массиве есть не целое число!";
            }
            if(list.length==1){
                if(list[0]%2==0){
                    return list[0];
                }
                else{
                    return -1;
                }
            }
            else{
                if(list[0]%2==0){
                    return Math.max(list[0], recursiveFunction(list.slice(1)));
                }
                else{
                    return recursiveFunction(list.slice(1));
                }
            }
        }
   
    
        