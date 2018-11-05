const cutSticks = require("./index");

describe.skip("luke describe 1", () => {
    test("luke test 1", () => {
        expect(cutSticks([5, 4, 4, 2, 2, 8])).toEqual([6, 4, 2, 1]);
    });
    test("luke test 2", () => {
        expect(cutSticks([1, 2, 3, 4, 3, 3, 2, 1])).toEqual([8, 6, 4, 1]);
    });
});
