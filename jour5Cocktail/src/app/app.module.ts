import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ListeResultatComponent } from './liste-resultat/liste-resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRechercheComponent,
    ListeResultatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
