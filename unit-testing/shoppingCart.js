// Zuerst müssen wir einen leeren Einkaufswagen erstellen.
let cart = [];

// Dann definieren wir die Funktion addCardItem.
function addCardItem(name, value) {
    
    cart.push({ name: name, value: value });
}

// Hier fügen wir ein Element zum Einkaufswagen hinzu.
addCardItem("Birne", 10);

// console.log("name:", cart[0].name + ",", "value:", cart[0].value);

// Funktion zur Berechnung der Gesamtsumme aller Waren im Einkaufswagen.
// function getTotalValue() {
//     return cart.map(item => item.value).reduce
//     ((total, value) => total + value, 0);
// }

// Funktion zur Berechnung der Gesamtsumme aller Waren im Einkaufswagen.
function getTotalValue() {
    let total = 0;
    for (let item of cart) {
        total += item.value;
    }
    return total;
}



module.exports = {
    cart: cart,
    addCardItem: addCardItem,
    getTotalValue:getTotalValue
};


