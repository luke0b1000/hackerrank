const camelCase = require('./index');

describe('luke describe 1', () => {
    test('luke test 1', () => {
        expect(camelCase('saveChangesInTheEditor')).toEqual(5);
    });
    test('luke test 2', () => {
        expect(camelCase('oneTwoThree')).toEqual(3);
    });
});
