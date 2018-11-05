const daysAtThemovies = require("./index");

describe.skip("luke describe 1", () => {
    test("luke test 1", () => {
        expect(daysAtThemovies(20, 23, 6)).toEqual(2);
    });
});
