// Folgender Code wirft einen TypeError

// const zahl = 1024;

// zahl.map((item) => {
//   console.log(item);
// });

const zahl = 1024;

try {
    zahl.map((item) => {
        console.log(item);
    });
} catch (error) {
    console.log("Ein Fehler ist aufgetreten:", error.message);
} finally {
    console.log("Das Programm wurde ausgeführt.");
}

