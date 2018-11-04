const drawingBook = require('./index');

describe.skip('luke describe 1', () => {
    test('luke test 1', () => {
        expect(drawingBook(6, 2)).toEqual(1);
    });
    test('luke test 2', () => {
        expect(drawingBook(5, 4)).toEqual(0);
    });
});
