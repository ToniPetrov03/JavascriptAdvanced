function solve() {
    const option = document.querySelector('#selectMenuTo');

    const binary = document.createElement('option');
    binary.setAttribute('value', 'binary');
    binary.textContent = 'Binary';
    option.appendChild(binary);

    const hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.setAttribute('value', 'hexadecimal');
    option.appendChild(hexadecimal);

    const decimal = document.querySelector('input');

    const options = {
        binary: (dec) => {
            return dec.toString(2);
        },
        hexadecimal: (dec) => {
            return dec.toString(16).toUpperCase();
        }
    };

    document.querySelector('button').addEventListener('click', function () {
        document.getElementById('result').value = options[option.value](parseInt(decimal.value));
    })
}
