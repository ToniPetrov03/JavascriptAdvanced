function solve(num) {
    return [/^([0-9])\1*$/.test(num), [...num.toString()].reduce((a, b) => a + parseInt(b), 0)].join('\n');
}
