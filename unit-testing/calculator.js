// calculator.js
function sum(a, b) {
    const result = a + b;
    console.log(result);
    return result;
    
    
}

function divide(a, b) {
    const result = a / b;
    console.log(result)
    return result;
}

function subtract(a, b) {
    const result = a - b;
    console.log(`Das Ergebnis der Subtraktion von ${a} und ${b} ist ${result}`);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    console.log(`Das Ergebnis der Multiplikation von ${a} und ${b} ist ${result}`);
    return result;
}

module.exports = {
    sum: sum,
    divide: divide,
    subtract: subtract,
    multiply: multiply
};
