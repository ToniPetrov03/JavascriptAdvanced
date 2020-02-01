(function solve() {
    return {
        add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
        multiply: ([x, y], scalar) => [x * scalar, y * scalar],
        length: ([x, y]) => Math.sqrt(x * x + y * y),
        dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
        cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2
    }
})();
