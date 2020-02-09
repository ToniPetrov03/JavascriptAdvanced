function solve() {
    document.getElementById('searchBtn').addEventListener('click', onButtonClick);

    const input = document.getElementById('searchField');
    const trs = document.querySelectorAll('tbody tr');

    function onButtonClick() {
        trs.forEach(tr => {
            tr.classList.remove('select');

            if (tr.textContent.match(input.value)) {
                tr.className = 'select';
            }
        });

        input.value = '';
    }
}
