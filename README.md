# Grepolis Defence Tool

## Überblick
GDTFactory ist eine TypeScript-Klasse, die zur Verwaltung und Berechnung von Einheiten in einem Strategiespiel dient. Sie bietet Funktionen zum Abrufen, Berechnen und Anzeigen von Truppenständen und deren Unterschiede zwischen vorhandenen und bestellten Einheiten.

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

## Nutzung
- **Einheiten abrufen:**
  ```typescript
  console.log(gdt.getAllUnits());
  ```
- **Einheiten-Differenz berechnen:**
  ```typescript
  console.log(gdt.getDifference({ sword: 10, archer: 5, hoplite: 8 }, 2));
  ```
- **Truppenanzeige aktualisieren:**
  ```typescript
  gdt.redraw();
  ```

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz.

