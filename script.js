let output = document.getElementById("output");

function addToOutput(value) {
    output.value += value;
}
function clearOutput() {
    output.value = "";
}
function calculateResult() {
    try {
        let result = eval(output.value);
        if (isNaN(result)) {
            throw "Hasil tidak valid";
        }
        output.value = result;
    } catch (error) {
        alert("Terjadi kesalahan: " + error);
        clearOutput();
    }
}