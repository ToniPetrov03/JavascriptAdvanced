class Kitchen {
    constructor(budget) {
        this.budget = parseFloat(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        products.forEach(product => {
            const [name, quantityStr, priceStr] = product.split(' ');
            const quantity = parseInt(quantityStr);
            const price = parseFloat(priceStr);

            let action;

            if (this.budget >= price) {
                this.budget -= price;

                if (this.productsInStock[name]) {
                    this.productsInStock[name] += quantity;
                } else {
                    this.productsInStock[name] = quantity;
                }

                action = `Successfully loaded ${quantity} ${name}`;
            } else {
                action = `There was not enough money to load ${quantity} ${name}`;
            }

            this.actionsHistory.push(action);
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        const products = neededProducts.reduce((obj, product) => {
            const [name, quantityStr] = product.split(' ');

            obj[name] = parseInt(quantityStr);

            return obj;
        }, {});

        this.menu[meal] = {
            products,
            price
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas`;
    }

    showTheMenu() {
        const menu = Object.keys(this.menu);

        if (menu.length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        return menu.map(meal => `${meal} - $ ${this.menu[meal].price}`).join('\n') + '\n';
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const {products} = this.menu[meal];

        const hasRequiredProducts = Object
            .keys(products)
            .every(product => {
                let hasProducts = false;

                if (this.productsInStock[product] >= products[product]) {
                    this.productsInStock[product] -= products[product];
                    hasProducts = true;
                }

                return hasProducts;
            });

        if (!hasRequiredProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budget += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}
