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

function operatoe(opp, a, b) {
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

window.onload = () => {
    initBtns();

}

function initBtns() {
    const btns = document.querySelectorAll('.showOnDisplay');
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (display.textContent== "0") {
                display.textContent = btn.textContent;
            }
            else {
                display.textContent += btn.textContent;
            }

        });
    });
    var del = document.querySelector('#del');
        del.addEventListener('click', () => {
            display.textContent = '0';
        })
    var solve = document.querySelector('#solve');
        solve.addEventListener('click', ()=>{
            a = display.textContent.split()
        })
}

var activeCount = []
var count = 0;
var counting = false;
var display = document.querySelector('#display');
display.textContent = count;


