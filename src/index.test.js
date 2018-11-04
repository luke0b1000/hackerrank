const bonAppetit = require('./index');

describe('luke describe', () => {
    test('luke test 1', () => {
        expect(bonAppetit(1, [3, 10, 2, 9], 12)).toEqual(5);
    });
    test('luke test 2', () => {
        expect(bonAppetit(1, [3, 10, 2, 9], 7)).toEqual('Bon Appetit');
    });
});
