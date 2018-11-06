const ctciBubbleSort = require('./index');

describe('luke describe 1', () => {
    test('luke test 1', () => {
        expect(ctciBubbleSort([1, 2, 3])).toEqual([0, 1, 3]);
    });
    test('luke test 2', () => {
        expect(ctciBubbleSort([3, 2, 1])).toEqual([3, 1, 3]);
    });
});
