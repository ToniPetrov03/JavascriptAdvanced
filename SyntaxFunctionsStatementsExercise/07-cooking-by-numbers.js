function solve([num, ...operations]) {
    const possibleOperations = {
        'chop': chop,
        'dice': dice,
        'spice': spice,
        'bake': bake,
        'fillet': fillet,
    };

    return operations.reduce((output, operation) => {
        output.push(possibleOperations[operation](output[output.length -1]));

        return output;
    }, [num]).join('\n');

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

console.log(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']))