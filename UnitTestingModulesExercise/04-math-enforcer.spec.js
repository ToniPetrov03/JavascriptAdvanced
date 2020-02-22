const mathEnforcer = require('./04-math-enforcer');
const assert = require('chai').assert;

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined if parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.addFive('5'), 'Function did not return the correct result');
        });

        it('should return -5 if number is -10', function () {
            assert.equal(mathEnforcer.addFive(-10), -5, 'Function did not return the correct result');
        });

        it('should return 6.9 if number is 1.9', function () {
            assert.equal(mathEnforcer.addFive(1.9), 6.9, 'Function did not return the correct result');
        });
    });

    describe('subtractTen', function () {
        it('should return undefined if parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.subtractTen('5'), 'Function did not return the correct result');
        });

        it('should return -100 if number is -90', function () {
            assert.equal(mathEnforcer.subtractTen(-90), -100, 'Function did not return the correct result');
        });

        it('should return 0.5 if number is 10', function () {
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5, 'Function did not return the correct result');
        });
    });

    describe('sum', function () {
        it('should return undefined if any parameter is not a number', function () {
            assert.isUndefined(mathEnforcer.sum('5', 5), 'Function did not return the correct result');
            assert.isUndefined(mathEnforcer.sum(5, '5'), 'Function did not return the correct result');
        });

        it('should return 11.0091 if numbers are 10.0001 and 1.009', function () {
            assert.equal(mathEnforcer.sum(10.0001, 1.009), 11.0091);
        });
    });
});
