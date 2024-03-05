// shoppingCart.test.js
const shoppingCart = require('./shoppingCart');

// test("Teste Funktion addCardItem:",() => {
//     shoppingCart.addCardItem("Apfel", 10);
//     expect(shoppingCart.cart.length).toBe(6);
// });



// // Test ob in Cart Item = 0
// test.only("Teste, ob in Cart Item = 0:", () => {
//     // Überprüfe, ob der Einkaufswagen leer ist
//     expect(shoppingCart.getTotalValue()).toBe(10);
// });

describe('Tests für den Einkaufswagen', () => {
    describe('Teste Funktion addCardItem:', () => {
        test("soll Artikel zum Einkaufswagen hinzufügen:", () => {
            // Arrange
            const itemName = "Birne";
            const itemValue = 10;
            
            // Act
            shoppingCart.addCardItem(itemName, itemValue);
            
            // Assert
            expect(shoppingCart.cart.length).toBe(2);
            expect(shoppingCart.cart[0].name).toBe(itemName);
            expect(shoppingCart.cart[0].value).toBe(itemValue);
        });
    });

    describe('Teste, ob in Cart Item = 0:', () => {
        test("soll überprüfen, ob der Einkaufswagen leer ist:", () => {
            // Arrange: Der Einkaufswagen ist bereits gefüllt
            shoppingCart.cart.push({ name: "Birne", value: 10 });
            
            // Act
            const totalValue = shoppingCart.getTotalValue();
            
            // Assert
            expect(totalValue).toBe(30);
        });
    });
});


