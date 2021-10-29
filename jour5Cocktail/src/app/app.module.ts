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
import { PipeComponent } from './pipe/pipe.component';
import { MorePipe } from './more.pipe';
import { DateFrPipe } from './date-fr.pipe';
import { DirectivePersonnaliseeComponent } from './directive-personnalisee/directive-personnalisee.component';
import { ImageDirective } from './image.directive';
import { BgColorDirective } from './bg-color.directive';

const routes = [
  { path : "" , component : CocktailComponent},
  { path : "pipe" , component : PipeComponent },
  { path : "directive" , component : DirectivePersonnaliseeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    FormRechercheComponent,
    ListeResultatComponent,
    MenuComponent,
    CocktailComponent,
    PipeComponent,
    MorePipe,
    DateFrPipe,
    DirectivePersonnaliseeComponent,
    ImageDirective,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
