let currentDisplay = "";

let previousValue = "";

function addToDisplay(value) {
  currentDisplay += value;
  document.getElementById("display").innerText = currentDisplay;
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").innerText);
    if (isNaN(result)) {
      throw "Hasil tidak valid";
    }
    document.getElementById("display").innerText = result;
  } catch (error) {
    alert("Terjadi kesalahan: " + error);
    clearOutput();
  }
}

function clearDisplay() {
  currentDisplay = "";
  previousValue = "0";
  document.getElementById("display").innerText = previousValue;
}
