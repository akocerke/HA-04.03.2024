// minMax.js

// min(a, b): gibt den kleineren Wert (also a oder b) zurück
function min(a, b) {
    if (a < b) {
        console.log(`Der kleinere Wert ist ${a}`);
        return a;
    } else {
        console.log(`Der kleinere Wert ist ${b}`);
        return b;
    }
}

// max(a, b): gibt den größeren Wert (also a oder b) zurück
function max(a, b) {
    if (a > b) {
        console.log(`Der größere Wert ist ${a}`);
        return a;
    } else {
        console.log(`Der größere Wert ist ${b}`);
        return b;
    }
}

module.exports = {
    min: min,
    max: max
}
