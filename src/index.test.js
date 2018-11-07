const leftRotation = require('./index');

describe('luke describe 1', () => {
    test('luke test 1', () => {
        expect(leftRotation([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
    });
});
