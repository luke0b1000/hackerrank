const minSwap = require("./index");

describe("luke describe 1", () => {
    test("luke test 1", () => {
        expect(minSwap([7, 1, 3, 2, 4, 5, 6])).toEqual(5);
    });
    test("luke test 2", () => {
        expect(minSwap([4, 3, 1, 2])).toEqual(3);
    });
    test("luke test 3", () => {
        expect(minSwap([2, 3, 4, 1, 5])).toEqual(3);
    });
    test("luke test 4", () => {
        expect(minSwap([1, 3, 5, 2, 4, 6, 7])).toEqual(3);
    });
});
