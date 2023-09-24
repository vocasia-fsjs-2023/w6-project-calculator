let currentInput = '';

function toDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function showResult() {
    try {
        let result = eval(currentInput);
        if(!isNaN(result)) {
            currentInput = result.toString();
            document.getElementById('display').value = result;
        }else{
            throw 'error';
        }
    }catch (error) {
        alert ('error');
        clearDisplay();
    }
}