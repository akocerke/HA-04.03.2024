// Folgender Code wirft einen RangeError

// const array = [];

// array.length = -1;

const array = [];

try {
    array.length = -1;
} catch (error) {
    console.log("Ein Fehler ist aufgetreten:", error.message);
} finally {
    console.log("Das Programm wurde ausgeführt.");
}

