/*Лабораторная работа 5
Свиридов Константин 8К93*/

/* Задание:
Повторяющийся квадратный корень из числа - это количество раз, которое необходимо применить к функции извлечения
квадратного корня, чтобы число было строго меньше 2. Для заданного целого числа вернуть повторяющийся квадратный
корень. Вернуть «недействительно», если оно отрицательное. */





//Функция, которая обрабатывает нажатие на кнопку
function clickForAnalise() {
    let inputNumber = parseFloat(document.getElementById('inputNumber').value);
    let outputResult = document.getElementById('result');
    outputResult.innerHTML = resultRepeatSqrt(inputNumber);
}

//Функция, которая анализирует число
function resultRepeatSqrt(num) {
    if (Number.isInteger(num)) {
        if (num < 0) {
            return 'Недействительно';
        }
        else {
            let countSqrt = 0;
            while (num >= 2) {
                num = Math.sqrt(num);
                countSqrt += 1;
            }
            return countSqrt;
        }
    }
    else {
        return 'Не является целым числом';
    }
}