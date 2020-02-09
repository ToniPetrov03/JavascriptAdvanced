function solve(numsArr) {
    return numsArr.reduce((arr, num) => {
        if (num >= arr.slice(-1)) {
            arr.push(num);
        }

        return arr;
    }, []).join('\n');
}
