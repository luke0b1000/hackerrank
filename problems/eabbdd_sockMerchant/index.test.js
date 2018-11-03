const sockMerchant = require('./index');

test('luke test 1', () => {
    expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
});
test('luke test 1', () => {
    expect(sockMerchant([1, 2, 1, 2, 1, 3, 2])).toEqual(2);
});
