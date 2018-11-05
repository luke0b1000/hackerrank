const convertGrade = require('./index');
describe.skip('luke describe 1', () => {
    test('grade convertion1', () => {
        expect(convertGrade(73)).toEqual(75);
    });
    test('grade convertion2', () => {
        expect(convertGrade(67)).toEqual(67);
    });
    test('grade convertion3', () => {
        expect(convertGrade(38)).toEqual(40);
    });
    test('grade convertion4', () => {
        expect(convertGrade(33)).toEqual(33);
    });
});
