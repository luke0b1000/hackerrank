const qheap1 = require('.index');

describe('luke describe1', () => {
    test('luke test 1', () => {
        expect(qheap1(['5', '1 4', '1 9', '3', '2 4', '3'])).toEqual([4, 9]);
    });
});
