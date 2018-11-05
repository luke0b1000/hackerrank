const jumpingClouds = require('./index');

describe.skip('luke describe 1', () => {
    test('luke test 1', () => {
        expect(jumpingClouds([0, 0, 1, 0, 0, 1, 0])).toEqual(4);
    });
    test('luke test 2', () => {
        expect(jumpingClouds([0, 0, 0, 0, 1, 0])).toEqual(3);
    });
    test('luke test 3', () => {
        expect(jumpingClouds([0, 1, 0, 0, 0, 1, 0])).toEqual(3);
    });
    test('luke test   4', () => {
        expect(jumpingClouds([0, 0, 0, 1, 0, 0])).toEqual(3);
    });
});
