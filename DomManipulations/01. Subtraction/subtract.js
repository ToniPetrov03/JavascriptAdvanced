function subtract() {
    const [numStr1, numStr2] = [...document.getElementsByTagName('input')].map(x => parseFloat(x));

    document.getElementById('result').textContent = numStr1.value - numStr2.value;
}
