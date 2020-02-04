function solve() {
    const buttons = document.querySelectorAll('button');
    [...buttons].forEach(button => button.addEventListener('click', onButtonClick));

    const textArea = document.querySelector('textarea');

    let totalPrice = 0;
    const list = new Set();

    function onButtonClick(e) {
        if (e.target.className === 'add-product') {
            const money = e.target.parentNode.nextElementSibling.textContent;
            const name = e.target.parentNode.previousElementSibling.querySelector('div').textContent;

            textArea.textContent += `Added ${name} for ${money} to the cart.\n`;

            list.add(name);
            totalPrice += parseFloat(money);
        } else {
            textArea.textContent += `You bought ${[...list].join(', ')} for ${totalPrice.toFixed(2)}.`;

            [...buttons].forEach(button => button.disabled = true);
        }
    }
}
