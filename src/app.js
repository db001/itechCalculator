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

        if (calcData.currentInputType == "equals") {
            clearCalcData();
        }

        if (calcData.currentInputType === 'operator') {
            calcData.calculationArray.push(calcData.currentInputString);
            calcData.currentInputString = '';
            calcData.currentInputType = null;
            displayHeader(calcData.calculationArray.join(" "));
        }

        if ((btnAttr === "." && calcData.currentInputString.indexOf('.') != -1) || calcData.currentInputString.length >= 7) {
            return;
        }

        if (btnAttr === "." && calcData.currentInputString.length === 0) {
            calcData.currentInputString += "0.";
        } else {
            calcData.currentInputString += btnAttr;
        }

        totalDisplay.innerText = calcData.currentInputString;
    });
});

// Operator button logic
operatorButtons.map(opBtn => {
    opBtn.addEventListener('click', function () {

        if (calcData.currentInputType != 'operator' && calcData.currentInputString.length != 0) {
            calcData.calculationArray.push(calcData.currentInputString);
            calcData.currentInputString = '';
        }

        const btnType = this.dataset.btntype;
        const operator = this.dataset.operator;

        if (calcData.calculationArray.length === 0) {
            calcData.calculationArray.push("0");
            displayHeader(calcData.calculationArray.join(" "));
        }

        calcData.currentInputString = operator;
        calcData.currentInputType = btnType;
    });
});

// Equals button logic
equalsButton.addEventListener('click', function () {
    if (calcData.currentInputType === 'operator') {
        calcData.currentInputString = "";
    }
    if (calcData.currentInputString.length != 0) {
        calcData.calculationArray.push(calcData.currentInputString);
    }

    calcData.currentInputType = this.dataset.btntype;

    const result = eval(calcData.calculationArray.join(""));

    displayHeader(calcData.calculationArray.join(" ") + " =")

    totalDisplay.innerText = result;

    clearCalcData();
    calcData.calculationArray.push(result);
});

// AC button logic
clearButton.addEventListener('click', function () {
    clearDisplay();
});

function displayHeader(str) {
    headerDisplay.innerText = str.replace(/\*/gi, '×').replace(/\//gi, '÷');
}

function clearCalcData() {
    calcData.currentInputString = '';
    calcData.calculationArray = [];
    calcData.currentInputType = null;
}

function clearDisplay() {
    clearCalcData();
    headerDisplay.innerText = '';
    totalDisplay.innerText = '0';
}