class List {
    constructor(list = []) {
        this.list = list;
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index];
        }
    }
}
