// multiply.test.js

const calculator = require('./calculator');

// Tests für multiply(a, b)
// test("Teste multiply(a, b) mit positiven Zahlen:", () => {
//     expect(calculator.multiply(5, 3)).toBe(15);
// });

// test("Teste multiply(a, b) mit negativem 'a':", () => {
//     expect(calculator.multiply(-5, 3)).toBe(-15);
// });

// test("Teste multiply(a, b) mit 'b' gleich 0:", () => {
//     expect(calculator.multiply(5, 0)).toBe(0);
// });

describe('Arithmetische Operationen', () => {
    it('Teste multiply(a, b) mit positiven Zahlen', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });
  
    it('Teste multiply(a, b) mit negativem "a"', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });
  
    it('Teste multiply(a, b) mit "b" gleich 0', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });
  