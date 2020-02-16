function solve() {
    const input = document.getElementById('input');
    const result = document.getElementById('resultOutput');

    const digit = numToDigit([...input.value].filter(x => x === '1').length);

    result.textContent =
        input.value
            .slice(digit, input.value.length - digit)
            .match(/[01]{8}/g)
            .reduce((str, binary) => {
                const char = String.fromCharCode(parseInt(binary, 2));

                if (/[a-z ]/i.test(char)) {
                    str += char;
                }

                return str;
            }, '');

    function numToDigit(number) {
        const sumOfDigits = [...number.toString()].reduce((a, b) => a + parseInt(b), 0);

        return sumOfDigits < 10 ? sumOfDigits : numToDigit(sumOfDigits);
    }
}
