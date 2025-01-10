# Dokumentation: **Grepolis Defense Tool**

## Übersicht

Das **Grepolis Defense Tool (GDT)** ist ein Userscript für das Spiel Grepolis, das Spielern hilft, die Verteidigungsaufstellung ihrer Stadt zu analysieren. Es zeigt, wie stark die aktuellen Verteidigungswerte von der optimalen Verteilung der Einheiten abweichen. Die Ergebnisse werden direkt in der Benutzeroberfläche des Spiels dargestellt.

## Funktionen

- Berechnung der benötigten Verteidigungseinheiten (Schwertkämpfer, Bogenschützen, Hopliten).
- Analyse der aktuell verfügbaren und im Bau befindlichen Einheiten.
- Anzeige der Differenz zwischen vorhandenen und benötigten Verteidigungseinheiten.
- Integration in die Spieloberfläche, um Informationen in Echtzeit zu liefern.

---

## Aufbau des Scripts

### 1. **Metadaten**
Die Metadaten am Anfang des Scripts definieren grundlegende Informationen wie den Namen, die Version, den Autor und die URLs, auf die das Script angewendet wird.

```javascript
// ==UserScript==
// @name         Grepolis Defense Tool
// @namespace    https://grepolis.com
// @version      0.0.2
// @description  Zeigt an, wie stark deine Verteidigung von der optimalen Abwehr abweicht.
// @author       Eugen252009
// @match        https://*.grepolis.com/game/*
// @grant        none
// ==/UserScript==
```

---

### 2. **Logger-Klasse**
Die `Logger`-Klasse dient der Verwaltung von Debug-Nachrichten, die für die Fehlersuche und Entwicklung hilfreich sind.

- **Eigenschaften:**
  - `debug` (Boolean): Aktiviert oder deaktiviert die Debug-Ausgabe.
  
- **Methoden:**
  - `log`, `dir`, `error`: Verschiedene Arten von Konsolenausgaben.

---

### 3. **Hauptklasse: `GDT`**
Die `GDT`-Klasse enthält die Kernlogik des Tools.

#### Eigenschaften:
- `allUnitsList`: Eine Liste aller Einheitenarten im Spiel.

#### Methoden:

1. **`reset(item)`**
   - Setzt die Werte aller Einheiten in einem Objekt auf `0`.

2. **`getAllUnits(data)`**
   - Ermittelt alle Einheiten, die sich in der aktuellen Stadt befinden.

3. **`getAllOrderedUnits(data)`**
   - Zählt alle in Auftrag gegebenen Einheiten.

4. **`getDifference({sword, archer, hoplite}, offset)`**
   - Berechnet die Differenz zwischen den vorhandenen und den benötigten Einheiten, basierend auf festen Prozentwerten:
     - 55 % Schwertkämpfer
     - 20 % Bogenschützen
     - 25 % Hopliten

5. **`calcDeff()`**
   - Führt eine vollständige Berechnung der Verteidigungsanalyse durch:
     - Verfügbare Einheiten
     - Geplante Einheiten
     - Freier Bevölkerungsspeicher

6. **`buildImg(type, diff)`**
   - Erstellt ein HTML-Element, das die Differenz für einen Einheitstyp visualisiert.

7. **`showTroups(_e, data)`**
   - Zeigt die berechneten Verteidigungsdifferenzen im „Kaserne“-Fenster des Spiels an.

8. **`redraw()`**
   - Aktualisiert die Anzeige der Verteidigungsdifferenzen beim Wechsel der Stadt.

---

### 4. **Globale Initialisierung**
Hier wird die `GDT`-Instanz (`GDTMain`) erstellt und die Event-Listener für Spielereignisse hinzugefügt:

- **Fensteröffnungen (z. B. Kaserne):** Aktualisierung der Verteidigungsanzeige.
- **Stadtwechsel:** Neu berechnen und aktualisieren.

---

## Beispielausgabe

### Szenario 1: Optimale Verteidigung
Der Spieler hat die benötigte Anzahl an Schwertkämpfern, Bogenschützen und Hopliten. Es wird keine Differenz angezeigt.

### Szenario 2: Fehlende Einheiten
Wenn Einheiten fehlen, zeigt das Tool im „Kaserne“-Fenster die genaue Anzahl der benötigten Einheiten je Einheitstyp an.

---

## Hinweise für die Nutzung

- Das Script funktioniert nur im „Kaserne“-Fenster und aktualisiert sich automatisch beim Wechsel der Stadt.
- Debugging kann über den GDTMain Constructor aktiviert werden (Standard: deaktiviert).

---

## Erweiterungsmöglichkeiten

- Unterstützung für zusätzliche Einheitstypen.
- Anpassbare Zielwerte für die Einheitenverteilung.
- Erweiterung der Analyse auf offensive Einheiten oder Spezialfähigkeiten.

---
