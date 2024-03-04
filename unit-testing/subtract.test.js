// substract.test.js

const calculator = require('./calculator');

// Tests für subtract(a, b)
test("Teste subtract(a, b) mit positiven Zahlen:", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("Teste subtract(a, b) mit negativem 'a':", () => {
    expect(calculator.subtract(-5, 3)).toBe(-8);
});

test("Teste subtract(a, b) mit 'b' gleich 0:", () => {
    expect(calculator.subtract(5, 0)).toBe(5);
});