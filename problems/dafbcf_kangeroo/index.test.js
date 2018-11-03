const kangeroo = require('./index');

test('luke test YES 1', () => {
    expect(kangeroo(0, 3, 4, 2)).toEqual('YES');
});
test('luke test NO 2', () => {
    expect(kangeroo(0, 2, 5, 3)).toEqual('NO');
});
