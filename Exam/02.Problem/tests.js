let {Repository} = require("./solution.js");
const assert = require('chai').assert;

describe("Tests …", function () {
    it("should", function () {
        const properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        const entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        const newEntity = {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        const anotherEntity = {
            name1: 'Stamat',
            age: 29,
            birthday: new Date(1991, 0, 21)
        };

        const badRep = new Repository('dada');
        assert.throws(() => badRep._validate(), Error, "Cannot read property 'hasOwnProperty' of undefined");

        const repository = new Repository(properties);

        assert.throws(() => repository.add(anotherEntity), Error, 'Property name is missing from the entity!');
        assert.throws(() => repository.add({}), Error, 'Property name is missing from the entity!');
        assert.throws(() => repository.add({name: 'dada'}), Error, 'Property age is missing from the entity!');
        assert.throws(() => repository.add({
            name: 'dada',
            age: 67
        }), Error, 'Property birthday is missing from the entity!');
        assert.throws(() => repository.add({
            name: 5,
            age: 'dwa',
            birthday: 'dawd'
        }), TypeError, 'Property name is not of correct type!');
        assert.equal(repository.add(entity), 0);
        assert.equal(repository.add(entity), 1);

        assert.throws(() => repository.getId(1000), Error, 'Entity with id: 1000 does not exist!');
        assert.throws(() => repository.getId(-1), Error, 'Entity with id: -1 does not exist!');
        assert.deepEqual(repository.getId(0), repository.data.get(0));

        assert.throws(() => repository.update(1000), Error, 'Entity with id: 1000 does not exist!');
        assert.throws(() => repository.update(-1), Error, 'Entity with id: -1 does not exist!');
        assert.throws(() => repository.update(1, anotherEntity), Error, 'Property name is missing from the entity!');
        assert.throws(() => repository.update(1, {}), Error, 'Property name is missing from the entity!');
        assert.throws(() => repository.update(1, {name: 'dada'}), Error, 'Property age is missing from the entity!');
        assert.throws(() => repository.update(1, {
            name: 'dada',
            age: 67
        }), Error, 'Property birthday is missing from the entity!');
        assert.throws(() => repository.update(1, {
            name: 5,
            age: 'dwa',
            birthday: 'dawd'
        }), TypeError, 'Property name is not of correct type!');
        repository.update(1, newEntity);
        assert.deepEqual(repository.data.get(1), newEntity);

        const mapToObj = (map) => {
            let obj = Object.create(null);
            for (let [k, v] of map) {
                // We don’t escape the key '__proto__'
                // which can cause problems on older engines
                obj[k] = v
            }
            return obj
        };

        assert.throws(() => repository.del(1000), Error, 'Entity with id: 1000 does not exist!');
        assert.throws(() => repository.del(-1), Error, 'Entity with id: -1 does not exist!');
        repository.del(0);
        assert.equal(repository.count, 1);

        assert.deepEqual(mapToObj(repository.data), {
            "1": {
                "age": 22,
                "birthday": new Date('1998-01-06T22:00:00.000Z'),
                "name": "Gosho"
            }
        });

        assert.throws(() => repository.del(0), Error, 'Entity with id: 0 does not exist!');

        repository.del(1);
        assert.equal(repository.count, 0);
        assert.deepEqual(repository.props, properties);
        assert.instanceOf(repository, Repository);
    });

    it('should ', function () {

    });
    it('should ', function () {

    });
    it('should ', function () {

    });
    it('should ', function () {

    });
});
