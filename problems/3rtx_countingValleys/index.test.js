const countingValleys = require('./index');


test.skip('luke test 1', () => {
    expect(countingValleys('UDDDUDUU')).toEqual(1);
});
test.skip('luke test 2', () => {
    expect(countingValleys('DDUUUUDD')).toEqual(1);
});
