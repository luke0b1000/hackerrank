const reverseStr = require('./index');

describe.skip('luke describe1', () => {
    test('luke test1', () => {
        expect(reverseStr('racecar')).toEqual('racecar');
    });
    test('luke test2', () => {
        expect(reverseStr('thisisfun')).toEqual('nufsisiht');
    });
});
