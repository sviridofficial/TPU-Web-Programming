function clickButton(){
    let textInInput = document.getElementById('inputText').value;
    alert(checkIsogram(textInInput));
}
function checkIsogram(text){
text = text.trim()
text = text.toLowerCase()
for(i = 0; i<text.length; i++){
for(j = 0; j<text.length;j++){
    if(i!=j){
        if(text[i]==text[j]) return false;
    }
}
}
return true;
}