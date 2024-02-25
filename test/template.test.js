import { it } from "@jest/globals";

function sum(a, b) {
    return a + b;
}

it("should return 4 when adding 2 and 2", () => {
    expect(sum(2, 2)).toBe(4);
});
