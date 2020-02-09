class Stringer {
    constructor(stringValue, length) {
        this.innerString = stringValue;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        const innerLength = this.innerLength;

        this.innerLength = innerLength - length > 0 ? innerLength - length : 0;
    }

    toString() {
        const innerLength = this.innerLength;
        const innerString = this.innerString;
        let dots = '...';

        if (innerLength === 0) return dots;

        if (innerLength >= innerString.length) {
            dots = '';
        }

        return innerString.slice(0, innerLength) + dots;
    }
}
