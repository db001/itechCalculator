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
*/

// String to hold calculations in progress
var calcString = '';
var currentNumericInput = '';

// Get DOM elements
var inputDisplay = document.getElementById('input_display');
var totalDisplay = document.getElementById('total_display');
var clearButton = document.getElementById('clear_button');
var equalsButton = document.getElementById('equals_button');

// Get numeric buttons
var numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));

numericButtons.map(function (numBtn) {
    numBtn.addEventListener('click', function () {
        var btnAttr = this.dataset.input;
        if (btnAttr === "." && calcString.indexOf('.') != -1) {
            return;
        }
        if (btnAttr === "." && calcString.length === 0) {
            calcString += "0.";
        } else {
            calcString += btnAttr;
        }

        inputDisplay.innerText = calcString;
    });
});

// AC button logic

clearButton.addEventListener('click', function () {
    clearDisplay();
});

function clearDisplay() {
    calcString = '';
    inputDisplay.innerText = '';
    totalDisplay.innerText = '0';
}
