function solve() {
    const expression = document.getElementById('expressionOutput');
    const output = document.getElementById('resultOutput');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', onButtonClick));

    function onButtonClick(e) {
        switch (e.target.value) {
            case 'Clear': expression.textContent = ''; output.textContent = ''; break;
            case '0': expression.textContent += '0'; break;
            case '1': expression.textContent += '1'; break;
            case '2': expression.textContent += '2'; break;
            case '3': expression.textContent += '3'; break;
            case '4': expression.textContent += '4'; break;
            case '5': expression.textContent += '5'; break;
            case '6': expression.textContent += '6'; break;
            case '7': expression.textContent += '7'; break;
            case '8': expression.textContent += '8'; break;
            case '9': expression.textContent += '9'; break;
            case '.': expression.textContent += '.'; break;
            case '+': expression.textContent += ' + '; break;
            case '-': expression.textContent += ' - '; break;
            case '*': expression.textContent += ' * '; break;
            case '/': expression.textContent += ' / '; break;
            case '=':
                try {
                    output.textContent = eval(expression.textContent);
                } catch (e) {
                    output.textContent = 'NaN';
                } break;
        }
    }
}
