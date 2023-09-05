import { Component, OnInit } from '@angular/core';
import {
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  //DataBinding

  /**
   * Interpolation
   */
  name = 'Angular';

  /**
   *  Property Binding
   */

  imgVariable = 'https://th.bing.com/th/id/OIP.dqyNa172gGnBL9wlv3lzDQHaGF';

  /**
   *  Event Binding
   */
  text = 'ich bin hier';
  funktion() {
    this.text = 'ich wurde verändert';
  }

  /**
   *  Two-Way Binding
   */
  imgLink = 'https://th.bing.com/th/id/OIP.IhL64lB1SguPibOXoZtMNgEUDi';

  //----------------------------------------------------------------

  //Datenaustausch
  /**
                        ((Input Binding))
    Input Binding: Damit kann man die Daten aus ein Komponent an ein andere Komponent fangen
    Bei dem bsp fängt man die Daten aus Kindkomponent in Elternkomponent mit hilfe von der
    Input() Dekorator (Klasse-Methode) fängt man die Daten
    Daten fangen aus PaerentComponent in ChildComponent.
   
    -- ChildComponent --
    @Input() childVariable;
   
    -- PaerentComponent --
    <app-ChildComponent [childVariable]="parentVariable" ></app-ChildComponent>
    parentVariable: string;
   
    
   */

  variableFuerKindKomponent: string = 'Hallo Kind komponent';
  /*
                        ((Output Binding))
                        
    OutputBinding: Damit kann man die Daten aus ein Komponent an ein andere Komponent senden
    Bei dem bsp sendet man die Daten aus Kindkomponent in Elternkomponent mit hilfe von der
    Output() Dekorator (Klasse-Methode) sendet man die Daten.
    Daten senden aus ChildComponent in PaerentComponent Senden
   
    -- ChildComponent --
    @Output() childVariable = new EventEmitter<variableType>();
    functionInChild(){
      childVariable.emit("Inhalt")
    }

    <button (click)="functionInChild()">

    */
  kindVariable: string;
  getKindVariable(data) {
    this.kindVariable = data;
  }

  /*
    -- PaerentComponent --
    <app-ChildComponent (childVariable)="funktionInParen($event)" ></app-ChildComponent>
    parentVariable: string;

    funktionInParen(parameter: type){
      this.parentVariable = parameter;
    }

    <p1>{{ parentVariable }}</p1>


   */

  //----------------------------------------------------------------

  /**
   * 
                        ((ViewChild))
    Die @viewChild() Dekorator ermöglicht auf die Elemente in der vorlage zuzugreifen

    <button #btn> Click me </button>
    @ViewChild('btn') getBtn : ElementRef 

    function(){
      this.getBtn.nativeElement.Value ----> Click me
    }

    */

  @ViewChild('viewChildInput') inputVar: ElementRef;
  inputValue: string;

  viewChildMethode() {
    this.inputValue = this.inputVar.nativeElement.value;
  }
  //----------------------------------------------------------------

  /**
                            (ngContent)
  Ist ein Angular-Element ermöglicht dynamischen ihnalte zeigen:
  das benutzt man, wenn wir kein komplexe html elemente in unsere komponent schreiben wollen
  bsp:

  Elternkomponent.html:
  <app-Kindkomponent><h1>ich bin hier<h1></app-Kindkomponent>
 
  Kindkomponent.html:
  <ng-content></ng-content>

   */

  //----------------------------------------------------------------

  booleanWert = false;
  myArray = ['a', 'b', 'c', 'd', 'e'];
}
