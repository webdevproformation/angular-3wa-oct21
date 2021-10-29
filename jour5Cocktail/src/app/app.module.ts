import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { ListeResultatComponent } from './liste-resultat/liste-resultat.component';
import { MenuComponent } from './menu/menu.component';
import { CocktailComponent } from './cocktail/cocktail.component';

const routes = [
  {path : "" , component : CocktailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormRechercheComponent,
    ListeResultatComponent,
    MenuComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
