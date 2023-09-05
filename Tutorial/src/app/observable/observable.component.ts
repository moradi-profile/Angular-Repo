import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements /*OnInit , */ OnDestroy {
  private testobservable: Subscription = new Subscription();

  private eigeneObservable: Observable<any> = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      if (count == 5) {
        observer.complete();
      }
      if (count == 8) {
        observer.error(new Error('Error'));
      }
      count++;
    }, 1000);
  });

  private intervallObservable: Subscription = new Subscription();
  /*
  ngOnInit() {
    this.intervallObservable = interval(1000).subscribe((data) => {
      console.log(data);
    });

    this.testobservable = this.eigeneObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        alert(error);
      },
      () => {
        console.log('Fertig');
      }
    );

    this.eigeneObservable.pipe(
      map((data: number) => {
        return 'Test' + data;
      })
    );
  }
*/
  ngOnDestroy(): void {
    this.intervallObservable.unsubscribe();
  }
}
