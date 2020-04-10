class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName && x.lastName === customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        customer.totalMoney += amount;

        customer.transactions.push(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return customer.totalMoney + '$';
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (amount > customer.totalMoney) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= amount;

        customer.transactions.push(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return customer.totalMoney + '$';
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        return `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n${customer.transactions.sort(([a], [b]) => +b - +a).join('\n')}`
    }
}