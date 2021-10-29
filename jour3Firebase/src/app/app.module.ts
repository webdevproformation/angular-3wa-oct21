import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

import { environment } from "../environments/environment"

import { AppComponent } from './app.component';
import { TotalComponent } from './total.component';
import { SousTotalComponent } from './sous-total.component';
import { FormulaireComponent } from './formulaire.component';
import { DetailsComponent } from './details.component';
import { TodoComponent } from './todo.component';
import { BudgetComponent } from './budget.component';
import { EncoursComponent } from './encours.component';
import { FormulaireTodoComponent } from './formulaire-todo.component';
import { ListeTodoComponent } from './liste-todo.component';
import { EnregistrementComponent } from './enregistrement.component';
import { ConnexionComponent } from './connexion.component';

import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { ConnexionBtnGoogleComponent } from './connexion-btn-google.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    SousTotalComponent,
    FormulaireComponent,
    DetailsComponent,
    TodoComponent,
    BudgetComponent,
    EncoursComponent,
    FormulaireTodoComponent,
    ListeTodoComponent,
    EnregistrementComponent,
    ConnexionComponent,
    ConnexionBtnGoogleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path : "" , component : BudgetComponent }, 
      { path : "todo" , component : TodoComponent }, 
      { path : "enregistrement" , component : EnregistrementComponent , canActivate : [ AuthGuardService ] }, 
      { path : "connexion" , component : ConnexionComponent }, 
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
