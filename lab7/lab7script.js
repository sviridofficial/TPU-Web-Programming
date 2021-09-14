let number1 = document.getElementById('inputNumber1');
        let number2 = document.getElementById('inputNumber2');
        let number3 = document.getElementById('inputNumber3');
        
        let result = document.getElementById('result');

        // Кортеж
        const tuple = (...args) => Object.freeze(args);

        function clickInvertTuple(){
            let numberRGB1 = parseFloat(number1.value);
            let numberRGB2 = parseFloat(number2.value);
            let numberRGB3 = parseFloat(number3.value);
            if( (!isNaN(numberRGB1) && numberRGB1%1==0 && numberRGB1>=0 && numberRGB1<=255) 
            && (!isNaN(numberRGB2) && numberRGB2%1==0 && numberRGB2>=0 && numberRGB2<=255) 
            && (!isNaN(numberRGB3) && numberRGB3%1==0 && numberRGB3>=0 && numberRGB3<=255)){
                
                const RGB = tuple(parseInt(number1.value), parseInt(number2.value),parseInt(number3.value));
                result.innerHTML = 'Инвертированный кортеж: [' + invertTuple(RGB)+']';
                
            }
            else{
                alert('Введите целые числа согласно усвловию(положительные не больше 255)!');
            }
        }

        function invertTuple(inputTuple){
            if(!Array.isArray(inputTuple)){
                return 'Не является массивом!';
            }
            else if(inputTuple.length!=3){
                return 'Длина массива не равна 3!';
            }
            else if(!(
                (!isNaN(inputTuple[0]) && inputTuple[0]%1==0 && inputTuple[0]>=0 && inputTuple[0]<=255) 
            && (!isNaN(inputTuple[1]) && inputTuple[1]%1==0 && inputTuple[1]>=0 && inputTuple[1]<=255) 
            && (!isNaN(inputTuple[2]) && inputTuple[2]%1==0 && inputTuple[2]>=0 && inputTuple[2]<=255))){
                return 'Введите целые числа согласно усвловию(положительные не больше 255)!';
            }
            else{
            
            let number1  = Math.abs(inputTuple[0]-255);
            let number2  = Math.abs(inputTuple[1]-255);
            let number3  = Math.abs(inputTuple[2]-255);
            
            const invertedRGB = tuple(number1, number2, number3);
            return invertedRGB;
        }
    }


