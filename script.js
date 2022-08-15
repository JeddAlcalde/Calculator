function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator == "+"){
        return add(a, b);
    }

    else if(operator == "-"){
        return subtract(a, b);
    }

    else if(operator == "*"){
        return multiply(a, b);
    }

    else if(operator == "/"){
        return divide(a, b);
    }

    else{
        alert("ERROR : non-readable operator")
    }
}

let displayDiv = document.querySelector(".displayDiv");

let display = document.querySelector(".display-area");

let displayVal = document.querySelector(".display-area").textContent;

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function(e){

        let tempVal = displayVal;
        displayDiv.removeChild(display);
        let newText = document.createElement("p");

        if(button.innerText == "CLEAR"){
            newText.textContent = "";
        }

        else if(button.innerText == "="){
            newText.textContent = Parser.evaluate(tempVal).toString();
        }

        else{
            newText.textContent = displayVal + button.textContent;
        }
        newText.classList.add("display-area");
        displayDiv.appendChild(newText);

        display = newText;

        displayVal = display.textContent;
    })
});