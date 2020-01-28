function solve(arr) {
    const systemsRegister = arr.reduce((systemsRegister, systemData) => {
        const [system, component, subComponent] = systemData.split(' | ');

        if (systemsRegister[system]) {
            if (systemsRegister[system][component]) {
                systemsRegister[system][component].push(subComponent);
            } else {
                systemsRegister[system][component] = [subComponent];
            }
        } else {
            systemsRegister[system] = {[component]: [subComponent]};
        }

        return systemsRegister;
    }, {});

    return Object
        .keys(systemsRegister)
        .sort((a, b) => Object
            .keys(systemsRegister[b]).length - Object
            .keys(systemsRegister[a]).length || a
            .localeCompare(b))
        .map(system => {
            return `${system}\n` +
                Object
                    .keys(systemsRegister[system])
                    .sort((a, b) => systemsRegister[system][b].length - systemsRegister[system][a].length)
                    .map(component => {
                        return `|||${component}\n` +
                            systemsRegister[system][component]
                                .map(subComponent => `||||||${subComponent}`)
                                .join('\n');
                    })
                    .join('\n');
        })
        .join('\n');
}
