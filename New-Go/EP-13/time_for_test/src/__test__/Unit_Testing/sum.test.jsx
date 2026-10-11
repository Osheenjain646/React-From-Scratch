import sum from "../TestFunctions/sum"


test("sum function should calculate the sum of two numbers", () => {
    const result = sum(3, 4);
    // Assertion what is expected
    expect(result).toBe(7);
});