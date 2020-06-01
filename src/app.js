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
let calcString = '';
let currentNumericInput = '';

// Get DOM elements
const inputDisplay = document.getElementById('input_display');
const totalDisplay = document.getElementById('total_display');
const clearButton = document.getElementById('clear_button');
const equalsButton = document.getElementById('equals_button');

// Get numeric buttons
const numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));

numericButtons.map(numBtn => {
    numBtn.addEventListener('click', function () {
        const btnAttr = this.dataset.input;
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