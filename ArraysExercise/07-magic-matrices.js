function solve(arrOfArrays) {
    return checkMagic(arrOfArrays) && checkMagic(rotate(arrOfArrays));

    function rotate(arrOfArrays) {
        return arrOfArrays[0].map((x, i) => arrOfArrays.map(x => x[i]))
    }

    function checkMagic(arrOfArrays) {
        return arrOfArrays.map(x => x.reduce((a, b) => a + b, 0)).every((num, _, arr) => num === arr[0]);
    }
}
    