const findDigits = require('./index');

describe.skip('luke describe', () => {
    test('luke test 1', () => {
        expect(findDigits(12)).toEqual(2);
    });
    test('luke test 2', () => {
        expect(findDigits(1012)).toEqual(3);
    });
    test('luke test 3', () => {
        expect(findDigits(111)).toEqual(3);
    });
});
