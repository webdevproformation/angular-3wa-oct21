import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { FormsModule } from "@angular/forms"

import { environment } from "../environments/environment"

import { AppComponent } from './app.component';
import { TotalComponent } from './total.component';
import { SousTotalComponent } from './sous-total.component';
import { FormulaireComponent } from './formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    SousTotalComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
