const display = document.querySelector("#display-main");
const displaySec = document.querySelector("#display-secondary");
let total = 0;
let tempString = "";

let operator = "";

function drawUpadate(val) {
  display.innerText = val;
}
function drawUpadateSec(val) {
  displaySec.innerText = val;
}

function trigger(val) {
  tempString += val;
  drawUpadate(tempString);
  console.log(tempString);
}

function clearOne() {
  tempString = tempString.slice(0, -1);
  drawUpadate(tempString);
  if (tempString.length === 0) drawUpadate(0);
}

function clearAll() {
  tempString = "";
  drawUpadate("0");
}

function calculate() {
  if (tempString === "") return alert("Input Kosong!");
  if (["%", "-", "+", "*", "/"].includes(tempString[tempString.length - 1]))
    return alert("Operasi tidak boleh kosong");
  total = eval(tempString);
  drawUpadateSec(tempString + " =");
  drawUpadate(total);
  tempString = total;
}
