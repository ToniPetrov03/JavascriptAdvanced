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
            products: products,
            price
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        return Object.keys(this.menu).map(meal => `${meal} - $ ${this.menu[meal].price}`).join('\n') + '\n';
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        // maybe mistake
        const productsInStock = this.productsInStock;
        const neededProducts = this.menu[meal].products;

        const hasRequiredProducts = Object
            .keys(neededProducts)
            .every(product => {
                let hasProducts = false;

                if (productsInStock[product] >= neededProducts[product]) {
                    productsInStock[product] -= neededProducts[product];
                    hasProducts = true;
                }

                return hasProducts;
            });

        if (!hasRequiredProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budget += this.menu[meal].price;
        this.productsInStock = productsInStock;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}
