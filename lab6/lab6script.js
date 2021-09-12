/*
Лабораторная работа 6
Вариант 9 
Создайте функцию, которая принимает массив интервалов и возвращает, сколько интервалов перекрывается с заданной точкой. Интервал перекрывает конкретную точку, если точка существует внутри интервала или на границе интервала. Например, точка 3 перекрывается интервалом [2, 4] (находится внутри) и [2, 3] (находится на границе).
*/

let arrayIntervals = [];
        let currentArray = document.getElementById('currentArray');
        let result = document.getElementById('result');


        function clickAddInterval(){
            let inputInterval = document.getElementById('inputInterval').value;
            inputInterval = inputInterval.split(',');
            if(inputInterval.length==2 && parseFloat(inputInterval[0])!=NaN && parseFloat(inputInterval[1])!=NaN && parseFloat(inputInterval[0])<=parseFloat(inputInterval[1])){
                arrayIntervals.push([parseFloat(inputInterval[0]),parseFloat(inputInterval[1])]);
                let output = '[';
                for(i=0; i<arrayIntervals.length;i++){

                   if(arrayIntervals.length==i+1){
                    output+='['+arrayIntervals[i][0]+','+arrayIntervals[i][1]+']'
                   }
                   else{ 
                   output+='['+arrayIntervals[i][0]+','+arrayIntervals[i][1]+'],';
                   }
                }
                output+=']';
                currentArray.innerHTML = output;
                
            }
            else{
                alert("Недопустимый формат ввода данных! Введите интервал, как указано в рекомендациях!");
            }
        }

        function clickRemoveArray(){
            arrayIntervals = [];
            currentArray.innerHTML = '[]';
            result.innerHTML = 'Результат: ';

        }

        function clickAnaliseArray(){
            let inputNumber = document.getElementById('inputNumber').value;
            if(!isNaN(parseFloat(inputNumber))){
                result.innerHTML = 'Результат: ' + analiseArray(arrayIntervals, parseFloat(inputNumber));
            }

            else{
                alert('Введите точку, как указано в условии задачи!');
            }
        }

        function analiseArray(interval, number){
            if(Array.isArray(interval) && typeof number == 'number' && !isNaN(number)){
            let countInInterval = 0;
            
            for(i = 0; i<interval.length;i++){
                
                if(interval[i][0]<=number && number<=interval[i][1]){
                    countInInterval+=1;
                }
            }
            return countInInterval;
        }
        else{
            return "Некорректные входные данные";
        }
}

