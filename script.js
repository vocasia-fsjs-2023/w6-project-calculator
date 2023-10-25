// alert("Haii nama saya Andreas Sibua\nIni adalah project calculator sederhana");

let display = document.getElementById("display");
let input = "";

function tambahTampilkan(value) {
    input += value;
    display.value = input;
}

function tambahOperator(operator) {
    if (input !== "" && "+-*/".indexOf(input[input.length - 1]) === -1) {
        input += operator;
        display.value = input;
    } else {
        alert("Input tidak valid");
    }
}

function hitung() {
    try {
        if (input === "") {
            alert("Input tidak boleh kosong");
            return;
        }

        let result = eval(input);
        input = result.toString();
        display.value = input;
    } catch (error) {
        alert("Terjadi kesalahan: " + error.message);
    }
}

function clearInput() {
    input = "";
    display.value = "";
}
