function solve() {
    const addProductButtons = document.querySelectorAll('.add-product');
    const checkoutButton = document.querySelector('.checkout');

    addProductButtons.forEach(button => button.addEventListener('click', onProductAdd));
    checkoutButton.addEventListener('click', onCheckout);

    const textArea = document.querySelector('textarea');

    let totalPrice = 0;
    const list = new Set();

    function onProductAdd(e) {
        const money = e.target.querySelector('product-line-price').textContent;
        const name = e.target.querySelector('product-title').textContent;

        textArea.textContent += `Added ${name} for ${money} to the cart.\n`;

        list.add(name);
        totalPrice += parseFloat(money);
    }

    function onCheckout() {
        textArea.textContent += `You bought ${[...list].join(', ')} for ${totalPrice.toFixed(2)}.`;

        addProductButtons.forEach(button => button.disabled = true);
        checkoutButton.disabled = true;
    }
}
