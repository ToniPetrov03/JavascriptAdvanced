function solve(coordinates) {
    return combineArray([...coordinates].reduce((output, coordinate, index, arr) => {
        const [messages, dashboard] = output;
        const [y, x] = coordinate.split(' ');

        const blankFields = combineArray(dashboard).filter(field => field === false).length;
        const mark = blankFields % 2 === 1 ? 'X' : 'O';

        if (dashboard[y][x]) {
            messages.push('This place is already taken. Please choose another!');
        } else {
            dashboard[y][x] = mark;

            const [row1, row2, row3] = dashboard;
            const [col1, col2, col3] = [
                [dashboard[0][0], dashboard[1][0], dashboard[2][0]],
                [dashboard[0][1], dashboard[1][1], dashboard[2][1]],
                [dashboard[0][2], dashboard[1][2], dashboard[2][2]]
            ];
            const [dgl1, dgl2] = [
                [dashboard[0][0], dashboard[1][1], dashboard[2][2]],
                [dashboard[0][2], dashboard[1][1], dashboard[2][0]]
            ];

            const isMatching = ([mark1, mark2, mark3]) => {
                if (mark1 !== false && mark2 !== false && mark3 !== false)
                    return mark1 === mark2 && mark1 === mark3;
            };

            if (isMatching(row1) || isMatching(row2) || isMatching(row3) ||
                isMatching(col1) || isMatching(col2) || isMatching(col3) ||
                isMatching(dgl1) || isMatching(dgl2)) {
                messages.push(`Player ${mark} wins!`);
                arr.length = 0;
            } else if (index === arr.length - 1 || blankFields === 1) {
                messages.push(`The game ended! Nobody wins :(`);
                arr.length = 0;
            }
        }

        return output;
    }, [[], [[false, false, false], [false, false, false], [false, false, false]]])).join('\n').split(',').join('\t');

    function combineArray(arrOfArrays) {
        return [].concat(...arrOfArrays);
    }
}
