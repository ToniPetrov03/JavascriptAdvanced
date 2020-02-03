function solve() {
    document.querySelector('button').addEventListener('click', onButtonClick);

    const input = document.querySelector('input');
    const list = document.querySelectorAll('li');

    function onButtonClick() {
        const capital = input.value.charAt(0).toUpperCase();

        const formattedName = capital + input.value.slice(1).toLowerCase();

        const listIndex = capital.charCodeAt(0) - 65;

        list[listIndex].textContent += list[listIndex].textContent ?
            ', ' + formattedName :
            formattedName;

        input.value = '';
    }
}
