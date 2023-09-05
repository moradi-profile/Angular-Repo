import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-komponent',
  templateUrl: './output-komponent.component.html',
  styleUrls: ['./output-komponent.component.css'],
})
export class OutputKomponentComponent {
  @Output() sendeVariable = new EventEmitter<string>();

  sendeVariableInElternKomponent() {
    this.sendeVariable.emit('aus Kind komponent');
  }
}
