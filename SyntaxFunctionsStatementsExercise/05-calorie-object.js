function solve(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = parseInt(arr[i + 1]);
    }

    return obj;
}
