function solve(arr) {
    return arr.reduce((obj, food, index) => {
        if (index % 2 === 0) {
            obj[food] = parseInt(arr[index + 1]);
        }

        return obj;
    }, {});
}
