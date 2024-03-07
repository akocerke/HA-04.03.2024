# Aufgabe 1

Arbeite die Unterschiede zwischen Unit, Integration und End-to-End Testing nochmal heraus.
Dazu gehe auf Beispiel unserer Todo App ein, wie man dort die jeweiligen Testing Methoden anwenden könnte

## Unit Testing:
Unit Testing ist eine Methode des Softwaretestens, bei der einzelne Einheiten oder Komponenten einer Software auf ihre Richtigkeit überprüft werden. Eine "Einheit" kann eine einzelne Funktion, eine Methode, ein Modul oder eine Klasse sein. Das Ziel von Unit Tests ist es, sicherzustellen, dass jede Einheit der Software isoliert und unabhängig von anderen Teilen der Anwendung korrekt funktioniert. Unit Tests werden in der Regel von Entwicklern erstellt und automatisiert ausgeführt, um sicherzustellen, dass Änderungen am Code keine unerwarteten Auswirkungen auf das Verhalten der Software haben.

## Integration Testing:
Integration Testing ist eine Testmethode, bei der verschiedene Einheiten oder Komponenten einer Software miteinander kombiniert und als Gruppe getestet werden. Das Ziel von Integrationstests ist es, sicherzustellen, dass die einzelnen Komponenten einer Anwendung ordnungsgemäß zusammenarbeiten und die erwarteten Ergebnisse liefern. Integrationstests werden häufig verwendet, um sicherzustellen, dass Änderungen an einer Komponente keine unerwünschten Auswirkungen auf andere Teile der Anwendung haben. Sie können automatisiert oder manuell durchgeführt werden und können verschiedene Integrationsstufen abdecken, z.B. Komponentenintegration, API-Integration oder Systemintegration.

## End-to-End Testing:
End-to-End Testing ist eine Testmethode, bei der die gesamte Softwareanwendung in ihrer realen Umgebung getestet wird, um sicherzustellen, dass sie den Anforderungen und Erwartungen der Benutzer entspricht. Bei End-to-End-Tests wird die Anwendung als Ganzes getestet, indem die Benutzerinteraktionen simuliert und das Verhalten der Anwendung unter realen Bedingungen überprüft werden. Das Ziel von End-to-End-Tests ist es, sicherzustellen, dass alle Funktionen der Anwendung ordnungsgemäß funktionieren und dass die Anwendung die erwarteten Ergebnisse liefert. End-to-End-Tests können automatisiert oder manuell durchgeführt werden und decken typischerweise den gesamten Anwendungsfluss von der Benutzereingabe bis zur Ausgabe ab.

## Erklärt anhand der ToDo App

### Unit Testing 
Testen einzelner Einheiten (z.B. Funktionen, Methoden) isoliert voneinander.
##
```
fetchAllTodos
``` 
Ein Unit Test, dass die Funktion die Liste aller Todos erfolgreich abruft.

```
fetchTodoById
```
Ein Unit Test, dass die Funktion ein Todo anhand seiner Id erfolgreich abruft.

```
fetchUserTodos
```
Ein Unit Test, dass die Funktion alle Todos eines bestimmten Benutzers anhand der userId erfolgreich abruft.
##
### Integration Testing 
Testen der Integration und Zusammenarbeit von mehreren Einheiten oder Komponenten.
##
z.B. der Integration Test ```test("Teste fetchUserTodos Funktion", async () =>``` der sicherstellt, dass die Funktion fetchUserTodos erfolgreich mit der Datenbank interagiert, um alle Todos eines bestimmten Benutzers abzurufen. 
In diesem Test werden sowohl die Funktion fetchUserTodos als auch die HTTP-Anfrage an die Datenbank über axios.get überprüft, um sicherzustellen, dass sie wie erwartet funktionieren und die erwarteten Daten zurückgeben.

##
### End-to-End Testing
Testen der gesamten Anwendung oder eines Teils davon in einer realen Umgebung unter Berücksichtigung aller beteiligten Komponenten und Systeme.
##

1. **Beschreibung:** Ein Benutzer erstellt ein neues Todo, überprüft, ob es erfolgreich erstellt wurde, markiert es dann als erledigt und überprüft erneut, ob das Todo korrekt als erledigt markiert wurde.

2. **Testschritte:**
   - Der Test beginnt auf der Startseite der Todo-App.
   - Der Benutzer klickt auf die Schaltfläche zum Erstellen eines neuen Todos.
   - Der Benutzer gibt die erforderlichen Informationen für das neue Todo ein, wie z.B. den Titel der Aufgabe und das Fälligkeitsdatum.
   - Der Benutzer klickt auf die Schaltfläche zum Speichern des Todos.
   - Das Todo wird in der Liste der Todos angezeigt.
   - Der Benutzer überprüft, ob das erstellte Todo korrekt in der Liste angezeigt wird.
   - Der Benutzer klickt auf das erstellte Todo, um es zu öffnen.
   - Der Benutzer markiert das Todo als erledigt.
   - Das Todo wird als erledigt markiert.
   - Der Benutzer überprüft, ob das Todo erfolgreich als erledigt markiert ist und in der Liste der erledigten Todos angezeigt wird.

3. **Erwartete Ergebnisse:**
   - Das Todo wird erfolgreich erstellt und in der Liste der Todos angezeigt.
   - Das Todo wird erfolgreich als erledigt markiert und in der Liste der erledigten Todos angezeigt.

4. **Testablauf:**
   - Öffnen der Todo-App im Browser.
   - Klicken auf die Schaltfläche zum Erstellen eines neuen Todos.
   - Eingeben eines Titels und das Fälligkeitsdatum für das neue Todo.
   - Klicken auf die Schaltfläche zum Speichern des Todos.
   - Überprüfen, ob das Todo in der Liste der Todos angezeigt wird.
   - Klicken auf das erstellte Todo, um es zu öffnen.
   - Markieren des Todo als erledigt.
   - Überprüfen, ob das Todo erfolgreich als erledigt markiert ist und in der Liste der erledigten Todos angezeigt wird.

5. **Erwartete Fehler:**
   - Das Todo wird nicht erstellt oder nicht korrekt angezeigt.
   - Das Todo kann nicht als erledigt markiert werden oder wird nicht korrekt in der Liste der erledigten Todos angezeigt.

6. **Zusätzliche Überlegungen:**
   - Sicher stellen, dass die Testumgebung den Zustand der Anwendung und der Datenbank zurücksetzt, um konsistente Ergebnisse zu gewährleisten.
   - Überprüfung der Funktionalität in verschiedenen Browsern und Geräten, um sicherzustellen, dass die Anwendung plattformübergreifend korrekt funktioniert.
