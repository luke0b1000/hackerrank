const repeatedString = require('./index');

describe('luke describe 1', () => {
    test('luke test 1', () => {
        expect(repeatedString('aba', 10)).toEqual(7);
    });
    test('luke test 2', () => {
        expect(repeatedString('a', 1000000000000)).toEqual(1000000000000);
    });
    test('luke test 3', () => {
        expect(repeatedString('ababa', 3)).toEqual(2);
    });
});
