const birthBar = require('./index');


test.skip('luke test 1', () => {
    expect(birthBar([1, 2, 1, 3, 2], [3, 2])).toEqual(2);
});
test.skip('luke test 2', () => {
    expect(birthBar([1, 1, 1, 1, 1, 1], [3, 2])).toEqual(0);
});
test.skip('luke test 3', () => {
    expect(birthBar([4], [4, 1])).toEqual(1);
});
