import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CurrencyComponent } from './pages/currency/currency.component';
import { ConvertionComponent } from './pages/convertion/convertion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyComponent,
    ConvertionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
