let list =  document.getElementById('list');
let apple = document.getElementById('apple');
let pear =  document.getElementById('pear');
let text =  document.getElementById('text');
let link =  document.getElementById('link');
let result= document.getElementById('result');

result.innerHTML = "Анализ на наличие дочерних HTML-элементов при помощи JS: Element apple in list - "+ elementContains(list,apple)+', Element pear in list - '
+elementContains(list, pear)+", Element list in text - " +elementContains(text,list) +", Element link in text - "+ elementContains(text,link)+', Element apple in text - '+ elementContains(text,apple);




//Функция
function elementContains(parent, child){
    if(parent instanceof Element && child instanceof Element){
    return parent!=child && parent.contains(child);
    }
    else{
        return "Некорректные входные данные!";
    }
}