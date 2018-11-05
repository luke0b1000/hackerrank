const catAndMouse = require('./index');

describe.skip('luke describe 1', () => {
    test('luke test 1', () => {
        expect(catAndMouse(1, 2, 3)).toEqual('Cat B');
    });
    test('luke test 2', () => {
        expect(catAndMouse(1, 3, 2)).toEqual('Mouse C');
    });
    test('luke test 3', () => {
        expect(catAndMouse(1, 9, 2)).toEqual('Cat A');
    });
});
