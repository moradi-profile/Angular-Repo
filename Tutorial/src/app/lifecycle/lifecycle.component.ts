import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnChanges, OnInit, OnDestroy {
  /**
                        ((Lifecycle))
  ngOnChanges: Wird aufgerufen, wenn eine Eingabe-Eigenschaft (Input) 
  gebunden wird oder sich deren Wert ändert.

  ngOnInit: Wird aufgerufen, nachdem Angular die erste Change
  Detection durchgeführt hat und die Komponente initialisiert wurde.

  ngDoCheck: Wird aufgerufen, wenn Angular die Change Detection 
  durchführt und prüft, ob sich der Wert einer Eigenschaft geändert hat.

  ngOnDestroy: Wird aufgerufen, bevor Angular die Komponente 
  zerstört und das Speichermodell freigibt.

   */

  ngOnChanges() {
    console.log('onChanges');
  }
  ngOnInit() {
    console.log('On Init');
  }
  ngDoCheck() {
    console.log('On Do Check');
  }
  ngOnDestroy() {
    console.log('On Destroy');
  }
}
