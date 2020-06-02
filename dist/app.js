'use strict';

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
var calcString = '';
var currentInput = '';
var calcArray = [];

// Object to hold calculation data

var calcData = {
    currentInputString: '',
    currentInputType: null,
    calculationArray: []

    // Get DOM elements
};var headerDisplay = document.getElementById('input_display');
var totalDisplay = document.getElementById('total_display');
var clearButton = document.getElementById('clear_button');
var equalsButton = document.getElementById('equals_button');

var numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));
var operatorButtons = Array.prototype.slice.call(document.querySelectorAll('.button__operator'));

numericButtons.map(function (numBtn) {
    numBtn.addEventListener('click', function () {
        var btnAttr = this.dataset.input;

        console.log(calcData);

        if (calcData.currentInputType === "operator") {
            calcData.calculationArray.push(currentInputString);
            calcData.currentInputType = null;
            headerDisplay.innerText = calcData.calculationArray.join(" ");
        }

        if (btnAttr === "." && calcData.currentInputString.indexOf('.') != -1 || calcData.currentInputString.length >= 7) {
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
operatorButtons.map(function (opBtn) {
    opBtn.addEventListener('click', function () {

        console.log(calcData);

        var btnType = this.dataset.btnType || null;
        var operator = this.dataset.operator;

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
