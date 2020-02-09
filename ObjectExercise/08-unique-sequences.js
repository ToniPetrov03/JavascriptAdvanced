function solve(arrays) {
    return arrays
        .map(arrJson => JSON.stringify(JSON.parse(arrJson).sort((a, b) => b - a)))
        .filter((v, i, a) => a.indexOf(v) === i)
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .map(arr => `[${arr.join(', ')}]`)
        .join('\n');
}
