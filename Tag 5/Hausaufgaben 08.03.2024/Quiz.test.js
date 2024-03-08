const { isRightSolutionForQuestion } = require('./Quiz');

describe('Test isRightSolutionForQuestion Funktion', () => {
  it('sollte true zurückgeben, wenn die Antwort korrekt ist', () => {
    // Testfall für die erste Frage
    const result = isRightSolutionForQuestion('frage_1', 'Weil er immer kalt gelötet ist.');
    console.log('Erwartetes Ergebnis: true => richtige Antwort');
    expect(result).toBe(true);
  });

  it('sollte false zurückgeben, wenn die Antwort falsch ist', () => {
    // Testfall für die zweite Frage
    const result = isRightSolutionForQuestion('frage_2', 'Falsche Antwort');
    console.log('Erwartetes Ergebnis: false => falsche Antwort');
    expect(result).toBe(false);
  });

  it('sollte einen ReferenceError werfen, wenn der Frage-Schlüssel nicht existiert', () => {
    // Testfall für die Referenzfehlermeldung
    console.log('Erwartetes Ergebnis: ReferenceError');
    expect(() => {
      isRightSolutionForQuestion('frage_6', 'Beliebige Antwort');
    }).toThrow(ReferenceError);
  });

  it('sollte einen TypeError werfen, wenn die Antwort keine Zeichenfolge ist', () => {
    // Testfall für den Typfehler bei der Antwort
    console.log('Erwartetes Ergebnis: TypeError');
    expect(() => {
      isRightSolutionForQuestion('frage_1', 123); // Antwort ist keine Zeichenfolge
    }).toThrow(TypeError);
  });
});
