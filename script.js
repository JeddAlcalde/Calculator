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

    let newA = parseInt(a);
    let newB = parseInt(b);


    if(operator == "+"){
        return add(newA, newB);
    }

    else if(operator == "-"){
        return subtract(newA, newB);
    }

    else if(operator == "*"){
        return multiply(newA, newB);
    }

    else if(operator == "/"){
        return divide(newA, newB);
    }

    else{
        alert("ERROR : non-readable operator")
    }
}

let displayDiv = document.querySelector(".displayDiv");

let display = document.querySelector(".display-area");

let displayVal = document.querySelector(".display-area").textContent;

let numA = "";
let numB = "";
let operator = "";

let calculatedVal = operate("+", "2", "5")

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function(e){

        let tempVal = displayVal;
        displayDiv.removeChild(display);
        let newText = document.createElement("p");

        if(button.innerText == "CLEAR"){
            newText.textContent = "";
            numA = "";
            numB = "";
            operator = '';
        }

        else if(button.innerText == "="){
            newText.textContent = operate(operator, numA, numB);

            numA = newText.textContent;
            numB = "";
            operator = "";
        }

        else{
            newText.textContent = displayVal + button.textContent;

            if(isNaN(button.textContent) === false){
                if(numA.length === 0){
                    numA = button.textContent;
                }
                else if(numB.length === 0){
                    numB = button.textContent;
                }
            }

            else{
                operator = button.textContent;
            }
        }
        newText.classList.add("display-area");

        displayDiv.appendChild(newText);

        display = newText;

        displayVal = display.textContent;
    })
})