// shoppingCart.test.js
const shoppingCart = require('./shoppingCart');

test("Teste Funktion addCardItem:",() => {
    shoppingCart.addCardItem("Apfel", 10);
    expect(shoppingCart.cart.length).toBe(6);
});


// um nur einen bestimmten Testfall auszuführen
// während alle anderen Testfälle ignoriert werden
// test.only("Teste Funktion addCardItem:",() => {
//     shoppingCart.addCardItem("Apfel", 10);
//     expect(shoppingCart.cart.length).toBe(8);
// });


// Test ob in Cart Item = 0
test.only("Teste, ob in Cart Item = 0:", () => {
    // Überprüfe, ob der Einkaufswagen leer ist
    expect(shoppingCart.getTotalValue()).toBe(10);
});
