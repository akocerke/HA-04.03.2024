// calculator.test.js
// const calculator = require('./calculator');

// test('Die Summe von 2 + 5 sollte 7 sein', () => {
//   expect(calculator.sum(2, 5)).toEqual(7);
// });

// test('Die Summe von "Apfel" + 15 ist "Apfel15"', () => {
//   const result = calculator.sum("Apfel", 15);
//   expect(result).toEqual("Apfel15");
// });

// test("Der Quotient aus 10 durch 2 ist 5", () => {
//     const result = calculator.divide(10, 2);
    
//     expect(result).toEqual(5);
// });

// test("Der Quotient aus 10 durch 3 ist nahe an 3.33", () => {
//     const result = calculator.divide(10, 3);
    
//     expect(result).toBeCloseTo(3.33, 2); // Runde auf 2 Nachkommastellen
// });


// calculator.test.js
const calculator = require('./calculator');

describe('Tests für den Taschenrechner', () => {
    describe('Summenfunktion', () => {
        test('soll die Summe von 2 + 5 als 7 zurückgeben', () => {
            const result = calculator.sum(2, 5);
            expect(result).toEqual(7);
        });

        test('soll "Apfel" und 15 als "Apfel15" concatenieren', () => {
            const result = calculator.sum("Apfel", 15);
            expect(result).toEqual("Apfel15");
        });
    });

    describe('Teilen-Funktion', () => {
        test('soll für den Quotienten von 10 geteilt durch 2 5 zurückgeben', () => {
            const result = calculator.divide(10, 2);
            expect(result).toEqual(5);
        });

        test('soll einen Quotienten nahe an 3,33 für 10 geteilt durch 3 zurückgeben', () => {
            const result = calculator.divide(10, 3);
            expect(result).toBeCloseTo(3.33, 2); // Auf 2 Dezimalstellen runden
        });
    });
});
