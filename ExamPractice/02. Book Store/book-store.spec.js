const BookStore = require('./book-store.js');
const assert = require('chai').assert;

describe("Tests", function () {
    it("should", function () {
        let store = new BookStore('Store');
        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        assert.deepEqual(store.books, [{"author": "Dan Braun", "title": "Inferno"}, {
            "author": "J.Rowling",
            "title": "Harry Potter"
        }, {"author": "Hariet Stow", "title": "Uncle Toms Cabin"}, {"author": "Upton Sinclear", "title": "The Jungle"}])

        assert.equal(store.hire('George', 'seller'), 'George started work at Store as seller');
        assert.equal(store.hire('Ina', 'seller'), 'Ina started work at Store as seller');
        assert.equal(store.hire('Tom', 'juniorSeller'), 'Tom started work at Store as juniorSeller');

        store.sellBook('Inferno', 'Ina');

        assert.throws(() => store.sellBook('Inferno', 'Ina'));
        store.stockBooks(['Harry Potter-J.Rowling']);
        assert.throws(() => store.sellBook('Harry Potter-J.Rowling', '>>>>>>>>>'));

        assert.equal(store.fire('Tom'), 'Tom is fired');

        assert.equal(store.printWorkers(), 'Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:1');

        assert.deepEqual(store.books, [
            {
                "author": "J.Rowling",
                "title": "Harry Potter"
            },
            {
                "author": "Hariet Stow",
                "title": "Uncle Toms Cabin"
            },
            {
                "author": "Upton Sinclear",
                "title": "The Jungle"
            },
            {
                "author": "J.Rowling",
                "title": "Harry Potter"
            }
        ]);

        assert.deepEqual(store.workers, [
            {
                "booksSold": 0,
                "name": "George",
                "position": "seller"
            },
            {
                "booksSold": 1,
                "name": "Ina",
                "position": "seller"
            }
        ])
    });

});
