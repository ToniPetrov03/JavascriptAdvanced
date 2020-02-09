function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll('textarea');

    encodeBtn.addEventListener('click', encodeMessages);
    decodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages() {
        output.value = [...input.value].map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

        input.value = '';
    }

    function decodeMessages() {
        output.value = [...output.value].map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    }
}
