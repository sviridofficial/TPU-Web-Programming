let inputFirstName = document.getElementById('inputFirstName');
let inputLastName = document.getElementById('inputLastName');
let resultNameAndLastName = document.getElementById('resultNameAndLastName');
let resultInitials = document.getElementById('resultInitials');
let resultName = document.getElementById('resultName');
let resultLastName = document.getElementById('resultLastName');

class Name{
    constructor(name,lastname){
        this.name = name;
        this.lastname = lastname;
    }

    get firstName(){
        return this.name;
    }

    get lastName(){
        return this.lastname;
    }

    fullname(){
        return this.name +" "+this.lastName; 
    }

    initials(){
   
        return this.name.substring(0,1)+'.'+this.lastName.substring(0,1);
        
    }


}

function createObject(){
    if((typeof inputFirstName.value=='string' && inputFirstName.value.length>=1)
     &&(typeof inputLastName.value=='string' && inputLastName.value.length>=1)){
    
        const person = new Name(inputFirstName.value, inputLastName.value);

        resultNameAndLastName.innerHTML = 'Имя и фамилия: ' + person.fullname();
        resultInitials.innerHTML = 'Инициалы: '+ person.initials();
        resultName.innerHTML = 'Имя: ' + person.firstName;
        resultLastName.innerHTML = 'Фамилия: ' + person.lastName;
    }
    else{
        alert("Некорректный ввод данных!");
    }
}


