const { divideNrs } = require("./MyMathFunctions");

// describe("Test Basic Math Add Functions", () => {
//   test("Basic Add Function to pass with Basic input", () => {
//     const result = addNumbers(2, 5);
//     console.log("My Result", result);
//     expect(result).toBe(7);
//   });
// });

// describe("Test Basic Math Divide Functions", () => {
//   test("Basic Divide Function to pass with Basic input", () => {
//     const result = divideNrs(10, 5);
//     console.log("MY division result", result);
//     expect(result).toBe(2);
//   });
// });


// Jest bietet beim expecten die Funktion toThrow()

// · Wir müssen hier dem Expect eine Funktion mitgeben und können dann
// mit . toThrow(TypeError) beispielsweise testen, ob die Funktion
// einen TypeError wirft


describe("Test Basic Math Divide Functions", () => {
  test("Basic Divide Function to pass with Basic input", () => {
    expect(() => {
      divideNrs(10, 5);
    }).not.toThrow(TypeError);
  });
});

describe("Test Basic Divide Functions", () => {
  test("Basic Divide Function to throw error divide 0", () => {
    expect(() => {
      divideNrs(10, 0);
    }).toThrow(TypeError);
  });
});



