# GDTFactory Chrome Extension

## Einleitung
GDTFactory ist eine Chrome-Erweiterung, die das Management und die Berechnung von Einheiten in einem Strategiespiel automatisiert. Diese Erweiterung bietet Funktionen zur Erfassung, Analyse und Visualisierung von Truppenbewegungen, um eine effizientere Strategieplanung zu ermöglichen. 

Mit der GDTFactory-Erweiterung kannst du:
- Alle Einheiten in deiner Stadt erfassen
- Bestellte Einheiten mit vorhandenen vergleichen
- Optimale Truppenverteilung berechnen
- Eine visuelle Darstellung deiner Einheiten in der Spieloberfläche erhalten

## Überblick
GDTFactory ist eine TypeScript-Klasse, die zur Verwaltung und Berechnung von Einheiten in einem Strategiespiel dient. Sie bietet Funktionen zum Abrufen, Berechnen und Anzeigen von Truppenständen und deren Unterschiede zwischen vorhandenen und bestellten Einheiten.

## Projektstruktur
```
/public
  ├── demo.png
  ├── icons/
  │   ├── icon128.png
  │   ├── icon16.png
  │   ├── icon48.png
  ├── manifest.json
/src
  ├── background/
  │   ├── background.ts
  ├── content/
  │   ├── types/
  │   │   ├── GameData.ts
  │   │   ├── EventData.ts
  │   │   ├── Models.ts
  │   │   ├── Collections.ts
  │   ├── inject.js
  │   ├── content.ts
  │   ├── GDTMain.ts
  │   ├── GDTLogger.ts
  ├── options/
  │   ├── options.html
  │   ├── options.ts
  ├── popup/
  │   ├── popup.html
  │   ├── popup.ts
  ├── styles/
  │   ├── tailwind.css
  ├── tailwind.config.js
  ├── tsconfig.json
  ├── webpack.config.cjs
  ├── pnpm-lock.yaml
/dist
  ├── icons/
  │   ├── icon128.png
  │   ├── icon16.png
  │   ├── icon48.png
  ├── background.js
  ├── content.js
  ├── popup.js
  ├── options.js
  ├── styles.css
  ├── styles.js
  ├── popup.html
  ├── options.html
  ├── demo.png
  ├── manifest.json
/documentation
  ├── Quellen.txt
  ├── HowTo.pdf
/README.md
```

## Build-Prozess
GDTFactory nutzt **Webpack** zur Bündelung und Optimierung des Codes. Die wichtigsten Build-Skripte befinden sich in der `package.json`:

### Build-Skripte:
```json
"scripts": {
  "build": "npm run lint && webpack --config webpack.config.cjs --mode=production",
  "build:dev": "npm run lint && webpack --config webpack.config.cjs --mode=development",
  "watch": "webpack --config webpack.config.cjs --mode=development --watch",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

### Erklärungen:
- **`build`**: Führt den Linter aus und erstellt die optimierte Produktionsversion.
- **`build:dev`**: Erstellt eine Entwicklungsvariante mit Debugging-Informationen.
- **`watch`**: Startet Webpack im Watch-Modus für automatische Updates während der Entwicklung.
- **`lint`**: Prüft den Code auf Fehler und Formatierungsprobleme.
- **`lint:fix`**: Korrigiert automatisch erkannte Probleme.

### Build-Anleitung:
1. Installiere die Abhängigkeiten:
   ```sh
   npm install
   ```
2. Erstelle den Build für die Produktion:
   ```sh
   npm run build
   ```
3. Für die Entwicklung verwende:
   ```sh
   npm run build:dev
   ```
4. Beobachte Änderungen und baue automatisch neu:
   ```sh
   npm run watch
   ```

## Funktionen

### 1. **Konstruktor**
```typescript
constructor(debug = false)
```
Der Konstruktor initialisiert die Klasse, ruft die Einheitenliste aus `window.GameData.units` ab und stellt sicher, dass `window.MM` initialisiert ist. 

### 2. **`init()`**
```typescript
init()
```
Wird beim Erstellen des Objekts aufgerufen, um die Einheiten zu initialisieren.

### 3. **`reset(item: any)`**
```typescript
reset(item: any)
```
Setzt alle Einheitenwerte in einem Objekt auf `0`.

### 4. **`getEmptyUnitObj()`**
```typescript
getEmptyUnitObj(): AllUnitsInterface
```
Gibt ein Objekt mit allen Einheiten zurück, die initial auf `0` gesetzt sind.

### 5. **`getAllUnits()`**
```typescript
getAllUnits()
```
Ruft alle vorhandenen Einheiten der Stadt ab und setzt fehlende Werte auf `0`.

### 6. **`getAllOrderedUnits()`**
```typescript
getAllOrderedUnits()
```
Liest alle derzeit bestellten Einheiten aus der `UnitOrder`-Sammlung und gibt sie zurück.

### 7. **`getDifference()`**
```typescript
getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0)
```
Berechnet den Unterschied zwischen vorhandenen und benötigten Einheiten basierend auf festgelegten Prozentsätzen.

### 8. **`calcDeff()`**
```typescript
calcDeff(data = this.collections)
```
Berechnet die Verteidigungskapazität basierend auf freien Bevölkerungspunkten, vorhandenen und bestellten Einheiten.

### 9. **`buildImg()`**
```typescript
buildImg(type: UnitsName, diff: number)
```
Erstellt ein HTML-Element zur Anzeige der Differenz von Einheiten.

### 10. **`showTroups()`**
```typescript
showTroups(data: BackboneEvent)
```
Erstellt eine HTML-Anzeige für die aktuellen Truppen und fügt sie dem Barracken-Fenster hinzu.

### 11. **`redraw()`**
```typescript
redraw()
```
Aktualisiert die Truppenanzeige basierend auf den aktuellen Berechnungen.

### 12. **`attackCityList()`**
```typescript
attackCityList(data: any)
```
Fügt ein visuelles Element zur Angriffs-Städteliste hinzu.

### 13. **`getBuilding()`**
```typescript
getBuilding(event: { type: string }, data: BackboneEvent)
```
Bestimmt, welche Anzeige basierend auf dem Gebäudetyp aktualisiert wird (z.B. Kaserne, Hafen, Spielerprofil).

### 14. **`getVersion()`**
```typescript
getVersion()
```
Gibt die aktuelle Version des Skripts zurück.

## Installation
1. Stelle sicher, dass dein Projekt TypeScript verwendet.
2. Füge die Datei `GDTFactory.ts` in dein Projekt ein.
3. Importiere die Klasse in dein Skript:
   ```typescript
   import { GDTFactory } from "./GDTFactory";
   ```
4. Erstelle eine neue Instanz:
   ```typescript
   const gdt = new GDTFactory(true);
   ```

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz.

