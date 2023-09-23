let rumus = document.getElementById('hitung');

function angka(value) {
    rumus.value += value;
}

function hapus() {
    rumus.value = '';
}

function hasil() {
    try {
        rumus.value = eval(rumus.value);
    } catch (error) {
        alert('Terjadi kesalahan');
        hapus();
    }
}
