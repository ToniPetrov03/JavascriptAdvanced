class Extensible {
    constructor() {
        Extensible.prototype.instances = Extensible.prototype.instances === undefined ? 0 : ++Extensible.prototype.instances;

        this.id = Extensible.prototype.instances;
    }

    extend(template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                Extensible.prototype[key] = value;
            } else {
                this[key] = value;
            }
        });
    }
}
