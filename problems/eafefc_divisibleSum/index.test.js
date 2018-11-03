const funcDivisible = require('./index');

test('luke test 1', () => {
    expect(funcDivisible(3, [1, 3, 2, 6, 1, 2])).toEqual(5);
});
test('luke test 2', () => {
    expect(funcDivisible(5, [1, 2, 3, 4, 5, 6])).toEqual(3);
});
