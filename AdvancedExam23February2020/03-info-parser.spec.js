let Parser = require("./03-info-parser.js");
let assert = require("chai").assert;

describe("MyTests", () => {
    it('should 1', function () {
        const a = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        const b = a.print();

        const res = 'id|name|position\n' +
            '0|Nancy|architect\n' +
            '1|John|developer\n' +
            '2|Kate|HR';

        assert.equal(b, res)
    });
});