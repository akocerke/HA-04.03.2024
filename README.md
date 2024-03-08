# Aufgabe 1: Theorie


### 1.1 Warum erstellt man verschiedene Umgebungen (dev,testing,staging,prd)?
 Verschiedene Umgebungen (wie dev, testing, staging und prd) werden erstellt, um sicherzustellen, dass Software ordnungsgemäß funktioniert, bevor sie an echte Benutzer ausgeliefert wird. 

 Warum?

1. Entwicklungsumgebung (dev): Hier arbeiten Entwickler an neuen Funktionen und
Experimenten. Es ist eine Sandbox, in der sie Änderungen vornehmen können,
ohne die Produktionsumgebung zu beeinträchtigen.

2. Testumgebung (testing): Updates aus der Entwicklungsphase landen hier. Es ist
eine Testumgebung, um sicherzustellen, dass alles wie erwartet funktioniert, bevor
es an die Nutzer geht. Fehler werden hier behoben, bevor sie Auswirkungen auf die
Benutzer haben.

3. Staging-Umgebung: Ähnlich wie die Produktionsumgebung, aber nicht für echte
Benutzer zugänglich. Hier wird alles vor der endgültigen Bereitstellung überprüft,
um sicherzustellen, dass es reibungslos läuft.

4. Produktionsumgebung (prd): Dies ist der Live-Betrieb, wo die echten Nutzer auf
die Software zugreifen. Updates werden hier nur eingeführt, nachdem sie gründlich
getestet wurden.

Weil !

Durch die Verwendung verschiedener Umgebungen können wir sicherstellen, dass unsere Software stabil, sicher und benutzerfreundlich ist, bevor sie für alle zugänglich ist. Es ist eine bewährte Methode, um potenzielle Probleme frühzeitig zu erkennen und zu beheben.

### 1.2 Welches Tool haben wir genutzt, um einen End-to-End Test zu simulieren? (Falls du keinen Ansatz hast, gucke in die Vorlesung)
cypress - cypress ist ein Tool für die automatisierte Durchführung von End-to-End-Tests von Webanwendungen, das Entwicklern ermöglicht, das Verhalten der Anwendung wie ein Benutzer zu simulieren und zu überprüfen.

### 1.3 Versuche zu erklären, was wir mit diesem Tool versucht haben zu simulieren 
Um die erste Testumgebung einzurichten, haben wir zunächst eine spezielle Umgebungsdatei namens ".envtest" erstellt, in der wir die Konfiguration für diese Testumgebung festgelegt haben, einschließlich des Ports (6060) und der Datenbankdetails (DB-Name, Benutzername usw.) für unsere Todo-App-Testdatenbank.

Dann haben wir ein Skript mit dem Namen "npm run devtest" eingerichtet, das uns ermöglicht, unsere Anwendung in dieser speziellen Testumgebung auszuführen und sie entsprechend zu konfigurieren, sodass sie auf die Testdatenbank zugreift.
Also haben wir auch in unseren Abfragen berücksichtigt, dass wenn wir uns in der Entwicklungsumgebung befinden (devtest), die Todos-Tabelle in der Datenbank gelöscht und neu erstellt wird. Dies gewährleistet einen sauberen und konsistenten Zustand der Testdatenbank vor jedem Durchlauf der Tests. Durch diese Maßnahme vermeiden wir potenzielle Probleme aufgrund von Datenresten aus vorherigen Tests und stellen sicher, dass unsere Tests in einer konsistenten Umgebung ausgeführt werden.

Mit dem Cypress-Test haben wir versucht, die "markTodo" -Funktion unserer Todo-App unter realen Bedingungen zu simulieren und zu überprüfen. Diese Funktion markiert ein bestimmtes Todo-Element als erledigt. 

Zusätzlich haben wir auch die "createTodo" -Funktion unserer Todo-App unter realen Bedingungen simuliert und überprüft. Diese Funktion erstellt ein neues Todo-Element mit den angegebenen Informationen. Dabei haben wir sicherstellen wollen, dass beide Funktionen ordnungsgemäß mit der Todo-App-Testdatenbank interagieren und dass die richtigen HTTP-Aufrufe (PUT für "markTodo" und POST für "createTodo") an die entsprechenden Endpunkt-URLs mit den korrekten Parametern gesendet werden.

### Zusatz 1.4 Wie kann ich mit Hilfe von einer Datei verschiedene Umgebungen aufsetzen?

Um verschiedene Umgebungen mit Hilfe einer Datei einzurichten, ist es üblich, eine Konfigurationsdatei zu verwenden, um Einstellungen für verschiedene Umgebungen zu speichern. In Node.js-Projekten wird häufig die Datei `package.json` verwendet, um verschiedene Umgebungen zu definieren.

so sieht das dann z.B. aus

```
{
  "name": "mein-projekt",
  "version": "1.0.0",
  "scripts": {
    "test": "...", // Hier sollte ein Testskript stehen, falls zutreffend
    "dev": "...", // Hier ein Entwicklungsskript
    "start": "...", // Hier ein Startskript für die Produktionsumgebung
    "devtest": "NODE_ENV=devtest nodemon -r dotenv/config index.js"
  }
}
```

In diesem Beispiel wurden Skripte für verschiedene Umgebungen (production, development, test) erstellt. Jedes Skript setzt die NODE_ENV-Umgebungsvariable entsprechend. Du kannst dann in deinem Code diese Variable abrufen, um Verhalten oder Konfigurationen je nach Umgebung anzupassen.

z.B. in einem .js skript war wir heute schon gezeigt bekommen haben mit dem Zugriff auf die todos-app-test Datenbank

```
if (process.env.NODE_ENV === 'devtest') {
  // Hier wird überprüft, ob die Umgebung devtest ist
  // Drop Table Todos
  // Erstelle Table Todos
}

```
