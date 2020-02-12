const mathEnforcer = require('./04-math-enforcer');
const assert = require('chai').assert;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined if parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.addFive('5'), 'Function did not return the correct result');
        });

        it('should return 10 if number is 5', function () {
            assert.equal(mathEnforcer.addFive(5), 10, 'Function did not return the correct result');
        });
    });

    describe('subtractTen', function () {
        it('should return undefined if parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.subtractTen('5'), 'Function did not return the correct result');
        });

        it('should return -5 if number is 5', function () {
            assert.equal(mathEnforcer.subtractTen(5), -5, 'Function did not return the correct result');
        });
    });

    describe('sum', function () {
        it('should return undefined if any parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.sum('5', 5), 'Function did not return the correct result');
            assert.isUndefined(mathEnforcer.sum(5, '5'), 'Function did not return the correct result');
        });

        it('should return 15 if numbers are 5 and 10', function () {
            assert.equal(mathEnforcer.sum(5, 10), 15, 'Function did not return the correct result');
        });
    });
});
