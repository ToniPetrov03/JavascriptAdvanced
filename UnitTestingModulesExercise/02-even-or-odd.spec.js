const isOddOrEven = require('./02-even-or-odd');
const assert = require('chai').assert;

describe('isOddOrEven', function () {
    it('should return undefined with a number parameter', function () {
        assert.equal(isOddOrEven(5), undefined, 'Function did not return the correct result');
    });

    it('should return undefined with a object parameter', function () {
        assert.equal(isOddOrEven({'5': 5}), undefined, 'Function did not return the correct result');
    });

    it('should return correct result with an even length', function () {
        assert.equal(isOddOrEven('five'), 'even', 'Function did not return the correct result');
    });

    it('should return correct result with an even length', function () {
        assert.equal(isOddOrEven('five5'), 'odd', 'Function did not return the correct result');
    });
});
