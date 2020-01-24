function solve(arrOfStrings) {
    const matrix = arrOfStrings.map(str => str.split(' ').map(Number));
    const [areEqualDiagonals, sumOfDiagonal] = checkDiagonals(matrix);

    return areEqualDiagonals ? replaceMatrix(matrix, sumOfDiagonal).map(arr => arr.join(' ')).join('\n') : arrOfStrings.join('\n');

    function checkDiagonals(matrix) {
        const sumDiagonals = matrix.reduce((sumDiagonals, nums, index) => {
            sumDiagonals.main += nums[index];
            sumDiagonals.second += nums[matrix.length - index - 1];

            return sumDiagonals;
        }, {main: 0, second: 0});

        return [sumDiagonals.main === sumDiagonals.second, sumDiagonals.main];
    }

    function replaceMatrix(matrix, replacement) {
        return matrix.map((nums, i) => {
            return nums.map((num, index) => {
                if (index !== i && index !== nums.length - i - 1) {
                    num = replacement;
                }

                return num;
            });
        });
    }
}
