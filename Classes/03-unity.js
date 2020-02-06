class Rat {
    rats = [];
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name + this.rats.map(rat => `\n##${rat}`);
    }

    unite(maybeRat) {
        if (maybeRat instanceof Rat) {
            this.rats.push(maybeRat);
        }
    }

    getRats() {
        return this.rats;
    }
}
