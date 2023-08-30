# Angular-Repo
Ich versuche hier, die Themen, die ich in Angular lerne, strukturiert mitzuteilen :)

#Wichtige Terminal befehle

### Neue Projekt Erstellen:
```
ng new projektName
```

### Neue Component Erstellen:
```
ng generate component componentName
```

### Prjekt im localhost starten:
```
ng serve
```

### Befehle stoppen:
```
strg + c
```

## Component
Komponenten sind die grundlegenden Bausteine für den Aufbau von Benutzeroberflächen. Stell dir Komponenten einfach wie Bausteine in einem LEGO-Set vor. Jede Komponente ist für ein bestimmtes Stück der Benutzeroberfläche verantwortlich und kann unabhängig von anderen Komponenten entwickelt, getestet und wiederverwendet werden.

zb:

### AppComponent
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Der Selektor, mit dem die Komponente in HTML verwendet wird
  template: `
    <header>Meine To-Do-Liste</header>
    <app-todo-list></app-todo-list> <!-- Hier wird die TodoListComponent eingefügt -->
    <footer>Copyright 2023</footer>
  `,
  styleUrls: ['./app.component.css'] // Stildefinitionen für diese Komponente
})
export class AppComponent {}
```
### TodoListComponent
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list', // Der Selektor, mit dem die Komponente in HTML verwendet wird
  template: `
    <ul>
      <li>Aufgabe 1</li>
      <li>Aufgabe 2</li>
      <li>Aufgabe 3</li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css'] // Stildefinitionen für diese Komponente
})
export class TodoListComponent {}
```


## Tamplates
Ein Template in Angular ist eine Art HTML-Datei, die die Struktur und das Aussehen deiner Benutzeroberfläche definiert. Es ist der Ort, an dem du die visuelle Darstellung deiner Komponenten festlegst. Templates können auch Angular-spezifische Syntax verwenden, um dynamische Daten anzuzeigen und mit Logik zu interagieren. Hier ein einfaches Beispiel:
```html
<!-- Ein einfaches Angular-Template -->
<div>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
  <button (click)="onButtonClick()">Klick mich!</button>
</div>
```

## Direktiven
Direktiven sind Anweisungen im Template, die das Verhalten und Aussehen von HTML-Elementen beeinflussen. Angular bietet eingebaute Direktiven, die es dir ermöglichen, das Verhalten deiner Benutzeroberfläche zu steuern.

###Struktur-Direktiven: 
Diese Direktiven ändern die Struktur des DOMs wie *ngFor, *ngIf unsw ... mit *ngIf kannst du entscheiden , ob ein Element im DOM angezeigt wird oder nicht, abhängig von einer Bedingung.
```html
<div *ngIf="showElement">text</div>
```

###Attribut-Direktiven:
Diese Direktiven ändern das Aussehen oder Verhalten von HTML-Elementen wie ngStyle, ngClass, ngModel usw... mit dem du dynamisch Klassen zu einem Element hinzufügen oder entfernen kannst.
```html
<div [ngClass]="{'highlight': isHighlighted, 'bold': isBold}"text</div>
```



