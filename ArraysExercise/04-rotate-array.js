function solve(arr) {
    return [...Array(parseInt([...arr].pop()) % (arr.length - 1))].reduce(arr => [...arr.slice(-1), ...arr.slice(0, -1)], arr.slice(0, -1)).join(' ');
}
