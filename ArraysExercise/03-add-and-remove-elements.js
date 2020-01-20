function solve(commands) {
    return commands.reduce((arr, command, index) => {
        if (command === 'add') {
            arr.push(index + 1);
        } else {
            arr.pop();
        }

        return arr;
    }, []).join('\n') || 'Empty';
}
