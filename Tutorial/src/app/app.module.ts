import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ObservableComponent } from './observable/observable.component';
import { ServiceComponent } from './servicee/service.component';
import { FormComponent } from './Form/form.component';
import { InputKomponentComponent } from './databinding/input-komponent/input-komponent.component';
import { OutputKomponentComponent } from './databinding/output-komponent/output-komponent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DatabindingComponent,
        ObservableComponent,
        ServiceComponent,
        FormComponent,
        InputKomponentComponent,
        OutputKomponentComponent,
        LifecycleComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
