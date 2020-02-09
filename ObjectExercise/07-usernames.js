function solve(arr) {
    return [...new Set(arr)].sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}
