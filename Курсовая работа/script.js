//Создаем массив из данных textarea
function createMatrixFromTextarea() {
    let matrix = [];
    let stringMatrixFromTextarea = document.getElementById('textarea').value;
    matrix = stringMatrixFromTextarea.split(' ').join('').split('\n');
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split("").map(Number);
    }
    return matrix;
}

//Проверяем двумерный массив на правильность
function errorCheck(matrix) {
    if (Array.isArray(matrix)) {
        let allNumbers = [];
        let lineLength = matrix[0].length;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if ((matrix[i][j] > 9) || (matrix[i][j] < 0) || !Number.isInteger(matrix[i][j])) {
                    return 'Некорректные числа или были введены буквы!';
                }
                if (matrix[i][j] > 0 && matrix[i][j] <= 9) {
                    allNumbers.push(matrix[i][j]);
                }
            }
            if (lineLength != matrix[i].length) {
                return "Разная длина строк!"
            }

        }
        allNumbers = allNumbers.sort();
        for (let i = 0; i < allNumbers.length; i++) {
            if (allNumbers[i] != i + 1) {
                return "Числа повторяются или пропущены!"
            }
        }
    } else {
        return 'Входные данные не являются массивом!';
    }
    return 0;
}

//Алгоритм нахождения кратчайшего пути
function findShortestPath(matrix) {
    let resultSum = 0;
    let firstNumberOfInterval = 1;
    let firstNumberCoordinates = {
        x: 0,
        y: 0
    };
    let secondNumberOfInterval = 2;
    let secondNumberCoordinates = {
        x: 0,
        y: 0
    };

    for (let k = 0; k < 8; k++) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === firstNumberOfInterval) {
                    firstNumberCoordinates.x = i;
                    firstNumberCoordinates.y = j;
                }
                if (matrix[i][j] === secondNumberOfInterval) {
                    secondNumberCoordinates.x = i;
                    secondNumberCoordinates.y = j;
                }
            }
        }
        firstNumberOfInterval += 1;
        secondNumberOfInterval += 1;
        resultSum += Math.abs(secondNumberCoordinates.x - firstNumberCoordinates.x) + Math.abs(secondNumberCoordinates.y - firstNumberCoordinates.y);
    }
    return resultSum;
}


//Нажатие на кнопку "Получить кратчайший путь"
function getResult() {
    let result = document.getElementById('result');
    let matrix = createMatrixFromTextarea();
    let error = errorCheck(matrix);
    if (error == 0) {
        result.style.borderRadius = "25px";
        result.style.backgroundColor = "#47A76A";
        result.innerHTML = "Длина кратчайшего пути: " + findShortestPath(matrix);
    } else {
        result.style.borderRadius = "25px";
        result.style.backgroundColor = "#E32636";
        result.innerHTML = "ОШИБКА: " + error;
    }
}

//Нажатие на кнопку "Очистить после"
function clearData() {
    let result = document.getElementById('result');
    let textareaData = document.getElementById('textarea');
    textareaData.value = "";
    result.innerHTML = "";
    result.style.backgroundColor = null;
    result.style.marginTop = null;
}