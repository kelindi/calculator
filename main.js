/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(opp, a, b) {
    switch (opp) {
        case add:
            add(a, b);
            break;
        case subtract:
            subtract(a, b);
            break;
        case multiply:
            multiply(a, b);
            break;
        case subtract:
            divide(a, b);
            break;
        default:
            break;
    }
}
*/

//init global variables
var display = document.querySelector('#display');
display.textContent = '0';
var equation = '0';

window.onload = () => {
    initBtns();

}

function initBtns() {

    //initialize the number and operator buttons
    const btns = document.querySelectorAll('.showOnDisplay');
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (isCurrInputOp(btn)) {
                if (isPrevInputOp()) {
                    return
                }
                else{
                    display.textContent += btn.textContent;
                    equation += btn.dataset.value;
                }
            }
            else {
                if (display.textContent == "0") {
                    display.textContent = btn.textContent;
                    equation = btn.dataset.value;
                }
                else {
                    display.textContent += btn.textContent;
                    equation += btn.dataset.value;
                }
            }

        });
    });

    //initializethe delete button
    var del = document.querySelector('#del');
    del.addEventListener('click', () => {
        display.textContent = '0';
        equation = '0';
    })

    // initialize the the solve button
    var solve = document.querySelector('#solve');
    solve.addEventListener('click', () => {
        // a = display.textContent.split('');
        a = calculateStr(equation);
        display.textContent = a;
    })

    //initialize the decimal button
    const decimal = document.querySelector("#decimal")
    decimal.addEventListener('click', () => {
        if (!equation.includes(".")) {
            display.textContent += decimal.textContent;
            equation += decimal.dataset.value;
        }
    })

}

//solves the equation
function calculateStr(equationStr) {
    //a = the answer to the equation
    a = new Function('return ' + equationStr)();

    //divide by zero check
    if (a == 'Infinity') {
        return 'Undefined';
    }
    else {
        return a;
    }
}

// checks if the previous input was an operator
function isPrevInputOp() {
    a = display.textContent.split('a');
    b = a.pop();
    if (b == '+' || b == '-' || b == 'x' || b == '&divide') {
        return true;
    }
    else {
        return false;
    }

}

//checks if the current input is an operator
function isCurrInputOp(btn) {
    if (btn.classList.contains('ops')) {
        return true;
    }
    else {
        return false;
    }
}

