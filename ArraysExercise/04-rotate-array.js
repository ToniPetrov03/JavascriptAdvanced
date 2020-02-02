function solve([...arr]) {
    const n = arr.pop();
    const rotations = arr.length - (n % arr.length);
    return [...arr.slice(rotations), ...arr.slice(0, rotations)].join(' ');
}
