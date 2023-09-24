let hitung = "";

function inputDisplay(value) {
    hitung += value;
    document.getElementById("display").value = hitung;
}

function clearDisplay() {
    hitung = "";
    document.getElementById("display").value = "";
}

function hapusDisplay() {
    hitung = hitung.slice(0, -1);
    document.getElementById("display").value = hitung;
}

function calculate() {
    try {
        hitung = eval(hitung);
        document.getElementById("display").value = hitung;
    } catch (error) {
        alert("Terjadi Kesalahan.");
        clearDisplay();
    }
}
