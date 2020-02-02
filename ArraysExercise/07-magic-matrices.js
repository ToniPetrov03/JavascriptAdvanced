function solve(arrOfArrays) {
    return checkMagic(arrOfArrays) && checkMagic(rotate(arrOfArrays));

    function rotate(arrOfArrays) {
        return arrOfArrays[0].map((_, i) => arrOfArrays.map(({[i]: index}) => index));
    }

    function checkMagic(arrOfArrays) {
        return arrOfArrays.map(x => x.reduce((a, b) => a + b, 0)).every((num, _, [first]) => num === first);
    }
}
