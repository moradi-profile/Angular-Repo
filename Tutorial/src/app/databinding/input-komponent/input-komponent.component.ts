import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input-komponent',
    templateUrl: './input-komponent.component.html',
    styleUrls: ['./input-komponent.component.css'],
    standalone: true,
})
export class InputKomponentComponent {
  @Input() variableAusElternKompoent = 'ss';
}
