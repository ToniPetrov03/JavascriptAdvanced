class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (!['normal', 'special', 'vip'].includes(type)) {
            throw new Error(`The type ${type} is invalid`);
        }

        const sub = this.subscribers.find(x => x.name === name);

        if (sub) {
            sub.type = type;
            return sub;
        }

        const newSub = {
            name,
            type,
            books: []
        };

        this.subscribers.push(newSub);

        return newSub;
    }

    unsubscribe(name) {
        const filteredSubs = this.subscribers.filter(x => x.name !== name);

        if (this.subscribers.length === filteredSubs.length) {
            throw new Error(`There is no such subscriber as ${name}`)
        }

        this.subscribers = filteredSubs;

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const sub = this.subscribers.find(x => x.name === subscriberName);

        if (!sub) {
            throw new Error(`There is no such subscriber as ${subscriberName}`)
        }

        const subTypeLimit = this.subscriptionTypes[sub.type];

        if (sub.books.length >= subTypeLimit) {
            throw new Error(`You have reached your subscription limit ${subTypeLimit}`)
        }

        sub.books.push({
            title: bookTitle,
            author: bookAuthor
        });

        return sub;
    }

    showInfo() {
        return this.subscribers.map(({name, type, books}) => {
            let subInfo = `Subscriber: ${name}, Type: ${type}\n`;

            if (books.length) {
                subInfo += 'Received books: ' + books.map(({title, author}) => `${title} by ${author}`).join(', ');
            } else {
                subInfo += `${name} has no information about any subscribers`
            }

            return subInfo;
        }).join('\n') + '\n'
    }
}
