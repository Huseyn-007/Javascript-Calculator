const toggleBtn=  document.getElementById("theme-toggle");
const calcDiv = document.getElementById("calculator");
const userInput = document.getElementById("user-input");
const calcKeys = document.getElementById("calc-buttons");


var hasTurnedOn = true;


function themeSwitch(){
    if(hasTurnedOn){
        calcDiv.classList.remove("light-theme");
        calcDiv.classList.add("dark-theme");
    
    }
    else{
        calcDiv.classList.remove("dark-theme");
        calcDiv.classList.add("light-theme");
 
      
    }

    hasTurnedOn = !hasTurnedOn;
}


var check = 0;

function enteringNums(id){
    if(userInput.innerHTML === "0"){
        userInput.innerHTML = "";
    }

        userInput.innerHTML += document.getElementById(id).innerHTML;

 
}

function Operators(id){
    let size = userInput.innerHTML.length - 1;
    if(userInput.innerHTML[size] != "-" && userInput.innerHTML[size] != "+"
        && userInput.innerHTML[size] != "/" && userInput.innerHTML[size] != "*" 
        && userInput.innerHTML[size] != "%" && userInput.innerHTML != "0 "
        && userInput.innerHTML[size] != "." && userInput.innerHTML != "")
    {
        userInput.innerHTML += document.getElementById(id).innerHTML;
        check = 0;   
    }
}

