function encodeAndDecodeMessages() {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', onButtonClick));

    const [input, output] = document.querySelectorAll('textarea');

    function onButtonClick(e) {
        let message = input;
        let n = 1;

        if (e.target.textContent === 'Decode and read it') {
            message = output;
            n = -1;
        }

        output.value = [...message.value].map(char => String.fromCharCode(char.charCodeAt(0) + n)).join('');

        input.value = '';
    }
}
