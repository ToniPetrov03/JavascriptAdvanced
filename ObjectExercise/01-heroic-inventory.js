function solve(heroesData) {
    return JSON.stringify(heroesData.reduce((registerOfHeroes, heroData) => {
        const [name, levelStr, itemsStr] = heroData.split(' / ');
        const level = parseInt(levelStr);
        const items = [];

        if (itemsStr) {
            items.push(...itemsStr.split(', '))
        }

        registerOfHeroes.push({name: name, level: level, items: items});

        return registerOfHeroes;
    }, []));
}
