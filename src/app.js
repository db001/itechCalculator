/*
Onclick events ---

Numeric buttons:
Add to string, if "." then check if already occurs.
Show string in display

Operator buttons:
If not equals, add to string and display updated string
(regex to replace operators with correct symbols?)

If equals, evaluate sum and show in total, show "=" in display


Misc buttons:
'AC' - clear string and display
'SAVE' - see PHP part of test


Do it as an array and .join before eval

*/

// String to hold calculations in progress
let calcString = '';
let currentInput = '';
let calcArray = [];

// Object to hold calculation data

let calcData = {
    currentInputString: '',
    currentInputType: null,
    calculationArray: []
}

// Get DOM elements
const headerDisplay = document.getElementById('input_display');
const totalDisplay = document.getElementById('total_display');
const clearButton = document.getElementById('clear_button');
const equalsButton = document.getElementById('equals_button');

const numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));
const operatorButtons = Array.prototype.slice.call(document.querySelectorAll('.button__operator'));


numericButtons.map(numBtn => {
    numBtn.addEventListener('click', function () {
        const btnAttr = this.dataset.input;
        const { currentInputString, currentInputType, calculationArray } = calcData;

        console.log('currentInputString', currentInputString);

        // console.log(calcData);

        if (currentInputType === "operator") {
            calculationArray.push(currentInputString);
            currentInputString = '';
            currentInputType = null;
            headerDisplay.innerText = calculationArray.join(" ");
        }

        if ((btnAttr === "." && currentInputString.indexOf('.') != -1) || currentInputString.length >= 7) {
            return;
        }

        if (btnAttr === "." && currentInputString.length === 0) {
            currentInputString += "0.";
        } else {
            currentInputString += btnAttr;
        }

        totalDisplay.innerText = currentInputString;
    });
});

// Operator button logic
operatorButtons.map(opBtn => {
    opBtn.addEventListener('click', function () {

        const { currentInputString, currentInputType, calculationArray } = calcData;

        if (currentInputType != "operator") {
            calculationArray.push(currentInputString);
            currentInputString = '';
        }

        console.log(calcData);

        const btnType = this.dataset.btnType || null;
        const operator = this.dataset.operator;

        if (calcData.calculationArray.length === 0) {
            calcData.calculationArray.push("0");
        }

        calcData.currentInputString = operator;
        calcData.currentInputType = btnType;
    });
});

// AC button logic
clearButton.addEventListener('click', function () {
    clearDisplay();
});

function clearDisplay() {
    calcData.currentInputString = '';
    calcData.calculationArray = [];
    headerDisplay.innerText = '';
    totalDisplay.innerText = '0';
}