"use strict";

var calcData = {
  currentInputString: '',
  currentInputType: null,
  calculationArray: []
};
var headerDisplay = document.getElementById('input_display');
var totalDisplay = document.getElementById('total_display');
var clearButton = document.getElementById('clear_button');
var equalsButton = document.getElementById('equals_button');
var numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));
var operatorButtons = Array.prototype.slice.call(document.querySelectorAll('.button__operator'));
numericButtons.map(function (numBtn) {
  numBtn.addEventListener('click', function () {
    var btnAttr = this.dataset.input;

    if (calcData.currentInputType == "equals") {
      clearCalcData();
    }

    if (calcData.currentInputType === 'operator') {
      calcData.calculationArray.push(calcData.currentInputString);
      calcData.currentInputString = '';
      calcData.currentInputType = null;
      displayHeader(calcData.calculationArray.join(" "));
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
operatorButtons.map(function (opBtn) {
  opBtn.addEventListener('click', function () {
    if (calcData.currentInputType != 'operator' && calcData.currentInputString.length != 0) {
      calcData.calculationArray.push(calcData.currentInputString);
      calcData.currentInputString = '';
    }

    var btnType = this.dataset.btntype;
    var operator = this.dataset.operator;

    if (calcData.calculationArray.length === 0) {
      calcData.calculationArray.push("0");
      displayHeader(calcData.calculationArray.join(" "));
    }

    calcData.currentInputString = operator;
    calcData.currentInputType = btnType;
  });
});
equalsButton.addEventListener('click', function () {
  if (calcData.currentInputType === 'operator') {
    calcData.currentInputString = "";
  }

  if (calcData.currentInputString.length != 0) {
    calcData.calculationArray.push(calcData.currentInputString);
  }

  calcData.currentInputType = this.dataset.btntype;
  var result = eval(calcData.calculationArray.join(""));
  displayHeader(calcData.calculationArray.join(" ") + " =");
  totalDisplay.innerText = result;
  clearCalcData();
  calcData.calculationArray.push(result);
});
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
