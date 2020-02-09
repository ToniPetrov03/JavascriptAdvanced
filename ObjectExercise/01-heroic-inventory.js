function solve(heroesData) {
    return JSON.stringify(heroesData.map(heroData => {
        const [name, level, itemsStr] = heroData.split(' / ');
        const items = itemsStr ? [...itemsStr.split(', ')] : [];

        return {name: name, level: parseInt(level), items: items};
    }));
}
