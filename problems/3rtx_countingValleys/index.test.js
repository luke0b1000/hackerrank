const countingValleys = require('./index');

test('luke test 1', () => {
    expect(countingValleys('UDDDUDUU')).toEqual(1);
});
test('luke test 2', () => {
    expect(countingValleys('DDUUUUDD')).toEqual(1);
});
