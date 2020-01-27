function solve([num, ...operations]) {
    let currentNum = num;

    const posibleOperations = {
        'chop': chop,
        'dice': dice,
        'spice': spice,
        'bake': bake,
        'fillet': fillet,
    };

    return operations.map(generateFunction).join('\n');

    function generateFunction(operation) {
        return currentNum = posibleOperations[operation](parseInt(currentNum));
    }

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number * 0.8;
    }
}