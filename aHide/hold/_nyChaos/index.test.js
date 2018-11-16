const nyChaos = require('./index');

describe.skip('luke describe 1', () => {
    test.skip('luke test 1', () => {
        expect(nyChaos([2, 1, 5, 3, 4])).toEqual(3);
    });
    test.skip('luke test 2', () => {
        expect(nyChaos([2, 5, 1, 3, 4])).toEqual('Too chaotic');
    });
    test.skip('luke test 3', () => {
        expect(nyChaos(arr1)).toEqual(96110);
    });
});
