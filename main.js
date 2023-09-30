let currentDisplay = "";
let currentOperator = "";
let previousValue = "";

function addToDisplay(value) {
  currentDisplay += value;
  document.getElementById("display").innerText = currentDisplay;
}

function operate(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  previousValue = currentDisplay;
  currentDisplay = "";
}

function calculate() {
  if (currentOperator === "/" && currentDisplay === "0") {
    alert("Error: Division by zero");
    clearDisplay();
    return;
  }
  switch (currentOperator) {
    case "+":
      currentDisplay = (
        parseFloat(previousValue) + parseFloat(currentDisplay)
      ).toString();
      break;
    case "-":
      currentDisplay = (
        parseFloat(previousValue) - parseFloat(currentDisplay)
      ).toString();
      break;
    case "*":
      currentDisplay = (
        parseFloat(previousValue) * parseFloat(currentDisplay)
      ).toString();
      break;
    case "/":
      currentDisplay = (
        parseFloat(previousValue) / parseFloat(currentDisplay)
      ).toString();
      break;
  }
  document.getElementById("display").innerText = currentDisplay;
  currentOperator = "";
}

function clearDisplay() {
  currentDisplay = "";
  currentOperator = "";
  previousValue = "0";
  document.getElementById("display").innerText = previousValue;
}
