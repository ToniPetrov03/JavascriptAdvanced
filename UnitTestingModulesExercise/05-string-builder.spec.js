const StringBuilder = require('./05-string-builder');
const assert = require('chai').assert;

describe('StringBuilder', function () {
    describe('constructor', function () {
        it("should throw 'Argument must be string' if param is not string", function () {
            assert.throw(() => new StringBuilder(5)._stringArray, 'Argument must be string');
        });

        it('should return [] if there is no param', function () {
            assert.deepEqual(new StringBuilder()._stringArray, []);
        });

        it("should return ['c', 'a', 't'] if param is 'cat'", function () {
            assert.deepEqual(new StringBuilder('cat')._stringArray, ['c', 'a', 't']);
        });
    });

    describe('append', function () {
        it("should throw 'Argument must be string' if param is not string", function () {
            assert.throw(() => new StringBuilder('cat').append(5), 'Argument must be string');
        });

        it("should return ['c', 'a', 't'] if param is 'cat'", function () {
            const sb = new StringBuilder()
            sb.append('cat')

            assert.deepEqual(sb._stringArray, ['c', 'a', 't']);
        });

        it("should return ['c', 'a', 't', 'c', 'a', 't'] if param is 'cat'", function () {
            const sb = new StringBuilder('cat')
            sb.append('cat')

            assert.deepEqual(sb._stringArray, ['c', 'a', 't', 'c', 'a', 't']);
        });
    });

    describe('prepend', function () {
        it("should throw 'Argument must be string' if param is not string", function () {
            assert.throw(() => new StringBuilder('cat').prepend(5), 'Argument must be string');
        });

        it("should return ['c', 'a', 't'] if param is 'cat'", function () {
            const sb = new StringBuilder()
            sb.prepend('cat')

            assert.deepEqual(sb._stringArray, ['c', 'a', 't']);
        });

        it("should return ['d', 'o', 'g', 'c', 'a', 't'] if param is 'dog'", function () {
            const sb = new StringBuilder('cat')
            sb.prepend('dog')

            assert.deepEqual(sb._stringArray, ['d', 'o', 'g', 'c', 'a', 't']);
        });
    });

    describe('insertAt', function () {
        it("should throw 'Argument must be string' if param is not string", function () {
            assert.throw(() => new StringBuilder('cat').insertAt(5), 'Argument must be string');
        });

        it("should return ['c', 'a', 't'] if param is 'cat'", function () {
            const sb = new StringBuilder()
            sb.insertAt('cat', 0)

            assert.deepEqual(sb._stringArray, ['c', 'a', 't']);
        });

        it("should return ['d', 'o', 'g', 'c', 'a', 't'] if params are 'dog' 1", function () {
            const sb = new StringBuilder('cat')
            sb.insertAt('dog', 1)

            assert.deepEqual(sb._stringArray, ['c', 'd', 'o', 'g', 'a', 't']);
        });
    });

    describe('remove', function () {
        it("should return ['c', 't'] if params are 'dog' 1", function () {
            const sb = new StringBuilder('cat')
            sb.remove(1, 1)

            assert.deepEqual(sb._stringArray, ['c', 't']);
        });
    })

    describe('toString', function () {
        it('should return cat', function () {
            assert.equal(new StringBuilder('cat').toString(), 'cat')
        })
    })
})
