function solve(arr) {
    const step = parseInt(arr.slice(-1));

    for (let i = 0; i < arr.length - 1; i += step) {
        console.log(arr[i]);
    }
}
