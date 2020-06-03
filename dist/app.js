"use strict";

var calculationArray = [];
var currentInputString = "";
var calcString = "";
var headerDisplay = document.getElementById('input_display');
var totalDisplay = document.getElementById('total_display');
var clearButton = document.getElementById('clear_button');
var equalsButton = document.getElementById('equals_button');
var numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));
var operatorButtons = Array.prototype.slice.call(document.querySelectorAll('.button__operator'));
numericButtons.map(function (numBtn) {
  numBtn.addEventListener('click', function () {
    totalDisplay.innerText = "";
    var btnAttr = this.dataset.input;

    if (btnAttr === "." && calcData.currentInputString.length === 0) {
      currentInputString += "0.";
    }

    if (btnAttr === "." && currentInputString.indexOf(".") != -1 || currentInputString.length >= 7) {
      return;
    }

    currentInputString += btnAttr;
    calcString += btnAttr;
    totalDisplay.innerText = currentInputString;
  });
});
operatorButtons.map(function (opBtn) {
  opBtn.addEventListener('click', function () {
    var operator = this.dataset.operator;
    var lastElement = calcString[calcString.length - 1];
    currentInputString = "";

    if (calcString.length === 0) {
      calcString += 0;
    }

    if (checkForOperator(lastElement)) {
      calcString = calcString.slice(0, -1);
    }

    calcString += operator;
    displayHeader(calcString);
    totalDisplay.innerText = "0";
  });
});
equalsButton.addEventListener('click', function () {
  var lastElement = calcString[calcString.length - 1];

  if (checkForOperator(lastElement)) {
    calcString = calcString.slice(0, -1);
  }

  var result = eval(calcString);
  var formattedString = formatString(calcString);
  displayHeader(formattedString + " =");
  totalDisplay.innerText = result;
  clearCalcData();
});
clearButton.addEventListener('click', function () {
  clearDisplay();
});

function formatString(str) {
  return str.split(/(\*|\/|\-|\+)/gi).join(" ");
}

function displayHeader(str) {
  var formattedString = formatString(str);
  headerDisplay.innerText = formattedString.split(/(\*|\/|\-|\+)/gi).join(" ").replace(/\*/gi, '×').replace(/\//gi, '÷');
}

function checkForOperator(str) {
  return /(\*|\/|\-|\+)/gi.test(str);
}

function clearCalcData() {
  currentInputString = "";
  calcString = "";
}

function clearDisplay() {
  clearCalcData();
  headerDisplay.innerText = "";
  totalDisplay.innerText = "0";
}
