const fib = require("./index");

describe.skip("luke describe 1", () => {
    test("luke test 1", () => {
        expect(fib(0)).toEqual(0);
    });
    test("luke test 2", () => {
        expect(fib(6)).toEqual(8);
    });
});
