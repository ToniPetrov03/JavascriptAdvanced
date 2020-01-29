function solve(arr, str) {
    return arr.sort((a, b) => str === 'asc' ? a - b : b - a);
}
