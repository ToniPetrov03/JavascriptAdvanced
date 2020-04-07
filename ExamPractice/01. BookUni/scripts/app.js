function solve() {
    const [title, year, priceStr] = document.querySelectorAll('input');
    const [oldBooksContainer, newBooksContainer] = document.querySelectorAll('.bookShelf');
    const profitText = document.querySelectorAll('h1')[1];

    document.querySelector('button').addEventListener('click', onAddClick);

    let profit = 0;

    function onAddClick(e) {
        e.preventDefault();

        let price = parseFloat(priceStr.value);

        const book = document.createElement('div');
        book.className = 'book';

        const paragraph = document.createElement('p');
        paragraph.textContent = `${title.value} [${year.value}]`;

        book.appendChild(paragraph);

        const buyBtn = document.createElement('button');

        buyBtn.addEventListener('click', () => {
            book.remove();

            profit += price;
            profitText.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`;
        });

        book.appendChild(buyBtn);

        if (2000 > year.value) {
            price *= 0.85;
            buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

            oldBooksContainer.appendChild(book);
        } else {
            buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section';

            moveBtn.addEventListener('click', () => {
                book.remove();
                moveBtn.remove();

                price *= 0.85;
                buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

                oldBooksContainer.appendChild(book);
            });

            book.appendChild(moveBtn);

            newBooksContainer.appendChild(book);
        }
    }
}
