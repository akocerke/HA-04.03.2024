// AgeFunctions.test
const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("Test for age being less than 0", () => {
    expect(() => isAdult(-1)).toThrow(TypeError);
  });

  test("Test for age being 0", () => {
    expect(isAdult(0)).toBe(false);
  });

  test("Test for age being less than 18", () => {
    expect(isAdult(17)).toBe(false);
  });

  test("Test for age being a string", () => {
    expect(() => isAdult("18")).toThrow(TypeError);
  });

  test("Test for age being undefined", () => {
    expect(() => isAdult()).toThrow(TypeError);
  });

  test("Test for age being null", () => {
    expect(() => isAdult(null)).toThrow(TypeError);
  });
});

