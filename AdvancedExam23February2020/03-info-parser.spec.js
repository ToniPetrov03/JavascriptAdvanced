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

    it('should 2', function () {
        const a = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        const b = a.addEntries("Steven:tech-support Edd:administrator");

        const res = 'Entries added!';

        assert.equal(b, res)
    });

    it('should 3', function () {
        const a = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        const b = a.data;

        const res = [ { Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' } ];

        assert.deepEqual(b, res)
    });

    it('should 4', function () {
        const a = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        const b = a.removeEntry("Kate");

        const res = 'Removed correctly!';

        assert.deepEqual(b, res)
    });

    it('should 5', function () {

    });
});