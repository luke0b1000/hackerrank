const equalityArray = require("./index");

describe("luke describe 1", () => {
    test("luke test 1", () => {
        expect(equalityArray([3, 3, 2, 1, 3])).toEqual(2);
    });
    test("luke test 2", () => {
        expect(equalityArray([1, 2, 2, 3])).toEqual(2);
    });
});
