// Folgender Code wirft einen ReferenceError

// meineLieblingsFunktion();

try {
    meineLieblingsFunktion();
} catch (error) {
    console.log("Ein Fehler ist aufgetreten:", error.message);
} finally {
    console.log("Das Programm wurde ausgeführt.");
}
