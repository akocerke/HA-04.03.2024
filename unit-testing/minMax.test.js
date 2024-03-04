// minMax.test.js

const minMax = require('./minMax');

// Test 1)min
test("Teste min(a, b) mit a kleiner als b:", () => {
    expect(minMax.min(2, 5)).toBe(2);
});

// Test 2)min
test("Teste min(a, b) mit a größer als b:", () => {
    expect(minMax.min(8, 3)).toBe(3);
});

// Test 3)min
test("Teste min(a, b) mit a gleich b:", () => {
    expect(minMax.min(4, 4)).toBe(4);
});

// Test 1)max
test("Teste max(a, b) mit a kleiner als b:", () => {
    expect(minMax.max(2, 5)).toBe(5);
});

// Test 2)max
test("Teste max(a, b) mit a größer als b:", () => {
    expect(minMax.max(8, 3)).toBe(8);
});

// Test 3)max
test("Teste max(a, b) mit a gleich b:", () => {
    expect(minMax.max(4, 4)).toBe(4);
});
