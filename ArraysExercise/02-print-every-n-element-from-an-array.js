function solve(array) {
    return array.slice(0, -1).reduce((arr, el, index) => {
        if (index % array.slice(-1) === 0) {
            arr.push(el);
        }

        return arr;
    }, []).join('\n');
}
