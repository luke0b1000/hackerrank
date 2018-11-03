const migratoryBirds = require('./index');

test.skip('luke test 1', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toEqual(4);
});
test.skip('luke test 2', () => {
    expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toEqual(3);
});
test.skip('luke test 3', () => {
    expect(migratoryBirds([1, 1, 2, 2, 3])).toEqual(1);
});
