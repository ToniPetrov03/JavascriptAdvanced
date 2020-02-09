function solve() {
    const [generate, buy] = document.querySelectorAll('button');

    generate.addEventListener('click', onGenerate);
    buy.addEventListener('click', onBuy);

    const [input, output] = document.querySelectorAll('textarea');
    const list = document.querySelector('tbody');

    function onGenerate() {
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
    }

    function onBuy() {
        const boughtFurniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        document.querySelectorAll('input[type=checkbox]:checked').forEach(checkbox => {
            const [, name, price, decFactor] = [...checkbox.parentNode.parentNode.children].map(x => x.textContent);

            boughtFurniture.push(name);
            totalPrice += parseFloat(price);
            totalDecFactor += parseFloat(decFactor);
        });

        output.textContent +=
            `Bought furniture: ${boughtFurniture.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${totalDecFactor / boughtFurniture.length}`;
    }
}
