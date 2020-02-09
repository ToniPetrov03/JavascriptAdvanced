function addItem() {
    const text = document.getElementById('newItemText');
    const item = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = text.value;

    document.getElementById('menu').appendChild(option);

    text.value = '';
    item.value = '';
}
