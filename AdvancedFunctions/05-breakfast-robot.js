function solve() {
    return (() => {
        let quaOfEl = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        };

        return (command) => {
            const meals = {
                apple: {carbohydrate: 1, flavour: 2},
                lemonade: {carbohydrate: 10, flavour: 20},
                burger: {carbohydrate: 5, fat: 7, flavour: 3},
                eggs: {protein: 5, fat: 1, flavour: 1},
                turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
            };

            const [comm, elOrMeal, quantityStr] = command.split(' ');
            const quantity = parseInt(quantityStr);

            if (comm === 'restock') {
                quaOfEl[elOrMeal] += quantity;
                return 'Success';
            } else if (comm === 'prepare') {
                const currentQuaOfEl = {...quaOfEl};

                for (const [element, qua] of Object.entries(meals[elOrMeal])) {
                    if (qua * quantity > currentQuaOfEl[element]) {
                        return `Error: not enough ${element} in stock`;
                    }

                    currentQuaOfEl[element] -= qua * quantity;
                }

                quaOfEl = currentQuaOfEl;
                return 'Success';
            } else {
                return `protein=${quaOfEl.protein} carbohydrate=${quaOfEl.carbohydrate} fat=${quaOfEl.fat} flavour=${quaOfEl.flavour}`;
            }
        };
    })();
}

console.log(solve()('restock carbohydrate 10'));
console.log(solve()('restock flavour 10'));
console.log(solve()('prepare apple 1'));