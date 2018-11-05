const utopianTree = require("./index");

describe.skip("luke describe 1", () => {
    test("luke test 1", () => {
        expect(utopianTree(0)).toEqual(1);
    });
    test("luke test 2", () => {
        expect(utopianTree(1)).toEqual(2);
    });
    test("luke test 3", () => {
        expect(utopianTree(4)).toEqual(7);
    });
});
