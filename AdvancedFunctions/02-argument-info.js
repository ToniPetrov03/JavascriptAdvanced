function solve(...args) {
    const argsInfo = args.reduce((argsInfo, arg) => {
        const [typesOfArgs, tally] = argsInfo;
        const type = typeof (arg);

        typesOfArgs.push(`${type}: ${arg}`);

        tally[type] ?  tally[type]++ : tally[type] = 1;

        return argsInfo;
    }, [[], {}]);

    const [typesOfArgs, tally] = argsInfo;

    return [...typesOfArgs, ...Object.keys(tally).sort((a, b) => tally[b] - tally[a]).map(arg => `${arg}: ${tally[arg]}`)].join('\n');
}
