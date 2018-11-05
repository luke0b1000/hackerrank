const reducedString = require("./index");

describe.skip("luke describe 1", () => {
    test("luke test 1", () => {
        expect(reducedString("aaabccddd")).toEqual("abd");
    });
    test("luke test 2", () => {
        expect(reducedString("aa")).toEqual("Empty String");
    });
    test("luke test 3", () => {
        expect(reducedString("baab")).toEqual("Empty String");
    });
});
