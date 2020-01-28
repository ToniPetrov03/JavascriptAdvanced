function solve(arrays) {
    return arrays.reduce((output, arrJson) => {
        const arr = JSON.parse(arrJson);

        output.push(JSON.stringify(arr.sort((a, b) => b - a)));

        return output;
    }, [])
        .filter((v, i, a) => a.indexOf(v) === i)
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .map(arr => `[${arr.join(', ')}]`)
        .join('\n');
}
