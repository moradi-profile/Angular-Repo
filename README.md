# Angular-Repo

Ich versuche hier, die Themen, die ich in Angular lerne, strukturiert mitzuteilen :)

## Wichtige Terminal befehle

### 1. Neue Projekt Erstellen:

```
ng new projektName
```

### 2. Neue Component Erstellen:

```
ng generate component componentName
```

### 3. Prjekt im localhost starten:

```
ng serve
```

### 4. Befehle stoppen:

```
strg + c
```

## Component

Komponenten sind die grundlegenden Bausteine für den Aufbau von Benutzeroberflächen. Stell dir Komponenten einfach wie Bausteine in einem LEGO-Set vor. Jede Komponente ist für ein bestimmtes Stück der Benutzeroberfläche verantwortlich und kann unabhängig von anderen Komponenten entwickelt, getestet und wiederverwendet werden.

### AppComponent

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root", // Der Selektor, mit dem die Komponente in HTML verwendet wird
  template: `
    <header>Meine To-Do-Liste</header>
    <app-todo-list></app-todo-list>
    <!-- Hier wird die TodoListComponent eingefügt -->
    <footer>Copyright 2023</footer>
  `,
  styleUrls: ["./app.component.css"], // Stildefinitionen für diese Komponente
  standalone: true,
  imports: [],
})
export class AppComponent {}
```

### TodoListComponent

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-todo-list", // Der Selektor, mit dem die Komponente in HTML verwendet wird
  template: `
    <ul>
      <li>Aufgabe 1</li>
      <li>Aufgabe 2</li>
      <li>Aufgabe 3</li>
    </ul>
  `,
  styleUrls: ["./todo-list.component.css"], // Stildefinitionen für diese Komponente
  standalone: true,
  imports: [],
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

# [Databinding](https://github.com/moradi-profile/Angular-Repo/tree/main/Tutorial/src/app/databinding)

### 1. Interpolation (Einweg-Datenbindung):

Interpolation ermöglicht es, Werte aus der Komponente direkt in das Template einzufügen. Dabei wird die doppelte geschweifte Klammer {{ }} verwendet

```html
<p>Willkommen, {{ username }}</p>
```

### 2. Eigenschaftsbindung (Einweg-Datenbindung):

Hierbei werden Eigenschaften von HTML-Elementen an Eigenschaften der Komponente gebunden. Dies ermöglicht das Aktualisieren von HTML-Elementen basierend auf den Daten der Komponente.

```html
<img [src]="imageUrl" />
```

### 3. Ereignisbindung:

Mit der Ereignisbindung kannst du auf Benutzerinteraktionen reagieren, indem du Methoden in der Komponente aufrufst. Dies wird mit Klammern () gemacht.

```html
<button (click)="onButtonClick()">Klick mich!</button>
```

### 4. Zwei-Wege-Datenbindung:

Die Zwei-Wege-Datenbindung kombiniert Eigenschaftsbindung und Ereignisbindung, um sowohl Änderungen in der Komponente als auch im Template zu synchronisieren. Sie wird oft mit Formularelementen wie <input> verwendet.

```html
<input [(ngModel)]="username" />
```

### 5.Direktiven

Direktiven sind Anweisungen im Template, die das Verhalten und Aussehen von HTML-Elementen beeinflussen. Angular bietet eingebaute Direktiven, die es dir ermöglichen, das Verhalten deiner Benutzeroberfläche zu steuern.

#### - Struktur-Direktiven:

Diese Direktiven ändern die Struktur des DOMs wie *ngFor, *ngIf unsw ... mit \*ngIf kannst du entscheiden , ob ein Element im DOM angezeigt wird oder nicht, abhängig von einer Bedingung.

```html
<div *ngIf="showElement">text</div>
```

#### - Attribut-Direktiven:

Diese Direktiven ändern das Aussehen oder Verhalten von HTML-Elementen wie ngStyle, ngClass, ngModel usw... mit dem du dynamisch Klassen zu einem Element hinzufügen oder entfernen kannst.

```html
<div [ngClass]="{'highlight': isHighlighted, 'bold': isBold}"text</div>
```

### 6.Dekorator

#### - Input:

Der @Input-Dekorator ermöglicht es einer Elternkomponente, Daten an eine Kindkomponente weiterzugeben. Dieser Mechanismus dient dazu, Daten von der übergeordneten Ebene an die untergeordnete Ebene zu übertragen.

```ts
// nachricht-komponente.component.ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-nachricht",
  template: ` <p>{{ empfangeneNachricht }}</p> `,
})
export class NachrichtKomponente {
  @Input() empfangeneNachricht: string = "";
}
```

```ts
// eltern-komponente.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-eltern",
  template: `
    <app-nachricht [empfangeneNachricht]="nachrichtAusEltern"></app-nachricht>
  `,
})
export class ElternKomponente {
  nachrichtAusEltern: string = "Hallo von der Elternkomponente!";
}
```

#### - Output:

Der @Output-Dekorator ermöglicht es einer Kindkomponente, Ereignisse oder Daten an eine Elternkomponente zu senden. Dieser Mechanismus dient dazu, von der untergeordneten Ebene auf die übergeordnete Ebene zurückzumelden.

```ts
// counter-komponente.component.ts
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-counter",
  template: ` <button (click)="erhoeheZaehler()">Erhöhen</button> `,
  standalone: true,
  imports: [EventEmitter, Output],
})
export class CounterKomponente {
  zaehler: number = 0;

  @Output() zaehlerGeaendert = new EventEmitter<number>();

  erhoeheZaehler() {
    this.zaehler++;
    this.zaehlerGeaendert.emit(this.zaehler);
  }
}
```

```ts
// eltern-komponente.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-eltern",
  template: `
    <app-counter (zaehlerGeaendert)="zeigeZaehler($event)"></app-counter>
    <p>Aktueller Zählerwert: {{ aktuellerZaehler }}</p>
  `,
  standalone: true,
  imports: [EventEmitter, Output],
})
export class ElternKomponente {
  aktuellerZaehler: number = 0;

  zeigeZaehler(zaehlerWert: number) {
    this.aktuellerZaehler = zaehlerWert;
  }
}
```

#### - ViewChild:

ist ein Mechanismus, um auf ein bestimmtes Element oder eine Direktive in einer Angular-Komponente zuzugreifen. Es ermöglicht Ihnen, auf das DOM-Element oder die Direktive in Ihrer Komponente zuzugreifen.

```ts
// eingabe-komponente.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-eingabe",
  template: `
    <input #eingabefeld type="text" />
    <button (click)="inputInConsole()"></button>
  `,
  standalone: true,
  imports: [EventEmitter, Output],
})
export class EingabeKomponente {
  @ViewChild("eingabefeld") eingabefeld: ElementRef | undefined;

  inputInConsole() {
    console.log(eingabefeld.nativeElement.value);
  }
}
```

## [Services](https://github.com/moradi-profile/Angular-Repo/tree/main/Tutorial/src/app/servicee)

Services sind Klassen, die bestimmte Aufgaben und Funktionen in deiner Anwendung abwickeln. Sie sind dafür verantwortlich, Daten und Logik zu verwalten, die von verschiedenen Teilen der Anwendung benötigt werden.
Ein Service könnte beispielsweise Daten von einem Server abrufen, eine Benutzerauthentifizierung durchführen oder allgemeine Geschäftslogik bereitstellen.

### Service erstellen:

Um einen Service in Angular zu erstellen, erstellst du eine normale TypeScript-Klasse mit der name "serviceName.service.ts"

```ts
export class DataService {
  private data: string[] = ["Daten 1", "Daten 2", "Daten 3"];

  getData(): string[] {
    return this.data;
  }
}
```

### Service benutzten:

... weiter schreiben
