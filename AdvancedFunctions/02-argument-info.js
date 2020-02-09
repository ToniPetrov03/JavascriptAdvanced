function solve(...args) {
    const tally = args.reduce((tally, arg) => {
        const type = typeof arg;

        console.log(`${type}: ${arg}`);

        tally[type] ? tally[type]++ : tally[type] = 1;

        return tally;
    }, {});

    Object
        .keys(tally)
        .sort((a, b) => tally[b] - tally[a])
        .forEach(arg => console
            .log(`${arg} = ${tally[arg]}`));
}
