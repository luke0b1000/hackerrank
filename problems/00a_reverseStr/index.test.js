const reverseStr = require('./index');

test('luke test1', () => {
    expect(reverseStr('racecar')).toEqual('racecar');
});
test('luke test2', () => {
    expect(reverseStr('thisisfun')).toEqual('nufsisiht');
});
