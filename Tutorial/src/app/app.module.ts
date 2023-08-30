import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ObservableComponent } from './observable/observable.component';
import { ServiceComponent } from './servicee/service.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ObservableComponent,
    ServiceComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
