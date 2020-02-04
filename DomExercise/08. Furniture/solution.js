function solve() {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', onButtonClick));

    const [input, output] = document.querySelectorAll('textarea');
    const list = document.querySelector('tbody');

    function onButtonClick(e) {
        if (e.target.textContent === 'Generate') {
            JSON.parse(input.value).forEach(obj => {
                const tr = document.createElement('tr');
                list.appendChild(tr);

                const addElement = (tagName) => {
                    return tr
                        .appendChild(document.createElement('td'))
                        .appendChild(document.createElement(tagName));
                };

                addElement('img').src = obj.img;
                addElement('p').textContent = obj.name;
                addElement('p').textContent = obj.price;
                addElement('p').textContent = obj.decFactor;
                addElement('input').type = 'checkbox';
            });
        } else {
            const boughtFurniture = [];
            let totalPrice = 0;
            let totalDecFactor = 0;

            document.querySelectorAll('input[type=checkbox]:checked').forEach(checkbox => {
                const decFactor = checkbox.parentNode.previousSibling;
                const price = decFactor.previousSibling;
                const name = price.previousSibling;

                totalDecFactor += parseFloat(decFactor.textContent);
                totalPrice += parseFloat(price.textContent);
                boughtFurniture.push(name.textContent);
            });

            output.textContent +=
                `Bought furniture: ${boughtFurniture.join(', ')}\n` +
                `Total price: ${totalPrice.toFixed(2)}\n` +
                `Average decoration factor: ${totalDecFactor / boughtFurniture.length}`;
        }
    }
}
