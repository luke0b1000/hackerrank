const countApplesAndOranges = require('./index');

test.skip('luke test 1', () => {
    expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([
        1,
        1,
    ]);
});
