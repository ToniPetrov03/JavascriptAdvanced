let Parser = require("./03-info-parser.js");
let assert = require("chai").assert;

describe("MyTests", () => {
    it('should', function () {
        const a = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.equal(a.print(), `id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR`);
        assert.throws(() => a.removeEntry('>>>>>>>>>>>'));

        a.removeEntry('Nancy');
        assert.deepEqual(a.data, [{John: "developer"}, {Kate: "HR"}]);

        a.addEntries('Nancy:architect');
        assert.deepEqual(a.data, [{John: "developer"}, {Kate: "HR"}, {Nancy: "architect"}]);

        assert.deepEqual(a._log, ["0: print", "1: removeEntry", "2: getData", "3: addEntries", "4: getData"])
    });
});