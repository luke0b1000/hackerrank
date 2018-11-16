const balancedBrackets = require('./index');
describe.skip('luke describe 1', () => {
    test('luke test 1', () => {
        expect(balancedBrackets('{[()]}')).toEqual('YES');
    });
    test('luke test 2', () => {
        expect(balancedBrackets('{[(])}')).toEqual('NO');
    });
    test('luke test 3k', () => {
        expect(balancedBrackets('{{[[(())]]}}')).toEqual('YES');
    });
    test('luke test 5k', () => {
        expect(balancedBrackets('}{')).toEqual('YES');
    });
});
