let rand = Math.floor(Math.random() * 100) + 1;
let hp = 10;
let prevVal = [];

document.getElementById("subt").addEventListener("click", () => {
    if(hp > 1){
        let inputField = document.getElementById("guessField").value
        if(inputField == ""){
            alert("Value is mandatory");
        }else if(inputField < 0 || inputField > 100){
            alert("Error: Value is not correct.");
        }else if(typeof inputField === 'number'){
            alert("Erros: strings are not allowed!")
        }else{
            if(inputField == rand){
                alert("Guessed it!");
                rand = Math.floor(Math.random() * 100) + 1;
                hp = 10;
                prevVal = [];
            }else{
                if(prevVal.includes(inputField)){
                    alert("test")
                }
                prevVal.push(inputField)
                document.getElementsByClassName("guesses")[0].innerHTML = prevVal;
                hp --;
                document.getElementsByClassName("lastResult")[0].innerHTML = hp;
                alert("Fail, try again!");
            }

        }
    }else{
        alert("Game over number was: " + rand);
        rand = Math.floor(Math.random() * 100) + 1;
        hp = 10;
        prevVal = [];
    }
    
})

document.getElementById("subt").addEventListener("click", () => {
    if(hp > 1){
        let inputField = document.getElementById("guessField").value
        if(inputField == ""){
            alert("Value is mandatory");
        }else if(inputField < 0 || inputField > 100){
            alert("Error: Value is not correct.");
        }else{
            if(inputField == rand){
                alert("Guessed it!");
                rand = Math.floor(Math.random() * 100) + 1;
                hp = 10;
                prevVal = [];
            }else{
                if(prevVal.includes(inputField)){
                    alert("test")
                }
                prevVal.push(inputField)
                document.getElementsByClassName("guesses")[0].innerHTML = prevVal;
                hp --;
                document.getElementsByClassName("lastResult")[0].innerHTML = hp;
                alert("Fail, try again!");
            }

        }
    }else{
        alert("Game over number was: " + rand);
        rand = Math.floor(Math.random() * 100) + 1;
        hp = 10;
        prevVal = [];
    }
    
})