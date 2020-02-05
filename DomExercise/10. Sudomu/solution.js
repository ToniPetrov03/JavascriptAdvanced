function solve() {
    const [quickCheck, clear] = document.querySelectorAll('button');

    quickCheck.addEventListener('click', checkResult);
    clear.addEventListener('click', reset);

    const nums = document.querySelectorAll('input');
    const table = document.querySelector('table');
    const checkPar = document.querySelector('p');

    quickCheck.style.cursor = 'pointer';
    clear.style.cursor = 'pointer';

    function reset() {
        nums.forEach(input => input.value = '');

        table.style.border = 'none';
        checkPar.textContent = '';
    }

    function checkResult() {
        const matrix = [
            [nums[0].value, nums[1].value, nums[2].value],
            [nums[3].value, nums[4].value, nums[5].value],
            [nums[6].value, nums[7].value, nums[8].value]
        ];

        if (isSudomu(matrix)) {
            table.style.border = '2px solid green';
            checkPar.style.color = 'green';
            checkPar.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkPar.style.color = 'red';
            checkPar.textContent = 'NOP! You are not done yet...';
        }
    }

    function isSudomu(matrix) {
        let isSudomu = true;

        matrix.forEach((row, i) => {
            const col = matrix.map(row => row[i]);

            if (row.length !== new Set(row).size || col.length !== new Set(col).size) {
                isSudomu = false;
            }
        });

        return isSudomu;
    }
}
