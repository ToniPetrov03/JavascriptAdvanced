function solve(arr) {
    return [...Array(parseInt([...arr].pop()) % (arr.length - 1))].reduce(arr => [arr.pop(), ...arr], arr.slice(0, -1)).join(' ');
}
