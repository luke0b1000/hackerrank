const hurdleRace = require('./index');

test.skip('luke test 1', () => {
    expect(hurdleRace(1, [1, 2, 3, 3, 2])).toEqual(2);
});
test.skip('luke test 2', () => {
    expect(hurdleRace(4, [1, 6, 3, 5, 2])).toEqual(2);
});
test.skip('luke test 3', () => {
    expect(hurdleRace(7, [2, 5, 4, 5, 2])).toEqual(0);
});
