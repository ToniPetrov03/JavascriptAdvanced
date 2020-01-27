function solve([x1, y1, x2, y2]) {
    return `{${x1}, ${y1}} to {0, 0} is ${Math.sqrt(x1 * x1 + y1 * y1) % 1 === 0 ? 'valid' : 'invalid'}`
        + `\n{${x2}, ${y2}} to {0, 0} is ${Math.sqrt(x2 * x2 + y2 * y2) % 1 === 0 ? 'valid' : 'invalid'}`
        + `\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) % 1 === 0 ? 'valid' : 'invalid'}`;
}
