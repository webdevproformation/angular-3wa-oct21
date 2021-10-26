import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" ;
import{ RouterModule }  from "@angular/router";
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { ExoComponent } from './exo.component';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ConnexionComponent } from './connexion.component';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    MenuComponent,
    ContactComponent,
    ConnexionComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: "" , component : HomeComponent }, // http://localhost:3000
      { path: "contact" , component : ContactComponent } ,
      { path: "connexion" , component : ConnexionComponent } ,
      { path: "rxjs" , component : RxjsComponent } ,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
