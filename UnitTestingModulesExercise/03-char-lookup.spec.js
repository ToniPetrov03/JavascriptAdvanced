const lookupChar = require('./03-char-lookup');
const assert = require('chai').assert;

describe('lookupChar', function () {
    it('should return undefined if first parameter in not a string', function () {
        assert.isUndefined(lookupChar(5, 5),'Function did not return the correct result');
    });

    it('should return undefined if second parameter in not a integer', function () {
        assert.isUndefined(lookupChar('text', '5'),'Function did not return the correct result');
        assert.isUndefined(lookupChar('text', 5.55), 'Function did not return the correct result');
    });

    it("should return 'Incorrect index' with incorrect index", function () {
        assert.equal(lookupChar('text', 5), 'Incorrect index', 'Function did not return the correct result');
        assert.equal(lookupChar('text', -5), 'Incorrect index', 'Function did not return the correct result');
    });

    it("should return 't' if lookupChar('long text', 5)", function () {
        assert.equal(lookupChar('long text', 5), 't', 'Function did not return the correct result');
    });
});
