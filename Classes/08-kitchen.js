class Kitchen {
    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget) {
        this.budget = budget;
    }

    loadProducts(products) {
        products.forEach(product => {
            const [productName, productQuantity, price] = product.split(' ');

            if (this.budget >= price) {
                this.budget -= price;

                if (!this.productsInStock[productName]) {
                    this.productsInStock[productName] = {quantity: 0, price: 0};
                }

                this.productsInStock[productName].quantity += productQuantity;
                this.productsInStock[productName].price += price;


                //toDo
            }
        });

        this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] !== undefined) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        this.menu[meal] = {
            price,
            neededProducts: neededProducts.map(product => {
                const [productName, productQuantity] = product.split(' ');

                //toDo
            })
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            //toDo
        }
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const hasRequiredProducts = this.menu[meal].neededProducts.every(product => this.productsInStock[product].quantity >= product.quantity);

        if (!hasRequiredProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budget += this.menu[meal].price;
        //toDo

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu}.`;
    }
}
