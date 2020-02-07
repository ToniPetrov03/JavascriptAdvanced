function subtract() {
    const [numStr1, numStr2] = document.getElementsByTagName('input');

    document.getElementById('result').textContent = parseFloat(numStr1.value) - parseFloat(numStr2.value);
}
