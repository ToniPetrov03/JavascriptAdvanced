function toggle() {
    const button = document.querySelector('span');
    const extra = document.getElementById('extra').style;

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extra.display = 'block';
    } else {
        extra.display = 'none';
        button.textContent = 'More';
    }
}
