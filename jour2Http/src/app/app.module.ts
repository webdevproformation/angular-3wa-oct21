import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" ;
import { RouterModule }  from "@angular/router";
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ExoComponent } from './exo.component';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ConnexionComponent } from './connexion.component';
import { RxjsComponent } from './rxjs.component';
import { ArticleComponent } from './article.component';
import { ExempleComponent } from './exemple.component';
import { NotFoundComponent } from './not-found.component';
import { DashboardComponent } from './dashboard.component';
import { ArticleAddComponent } from './article-add.component';
import { ArticleModifComponent } from './article-modif.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent,
    MenuComponent,
    ContactComponent,
    ConnexionComponent,
    RxjsComponent,
    HomeComponent,
    ArticleComponent,
    ExempleComponent,
    NotFoundComponent,
    DashboardComponent,
    ArticleAddComponent,
    ArticleModifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: "" , component : HomeComponent }, // http://localhost:3000
      { path: "contact" , component : ContactComponent } ,
      { path: "connexion" , component : ConnexionComponent } ,
      { path: "article/:id" , component : ArticleComponent } ,
      { path: "rxjs" , component : RxjsComponent } ,
      { path: "exemple/:id" , component : ExempleComponent } ,
      { path: "exemple" , component : ExempleComponent } ,
      { path: "back/article_modif/:id" , component : ArticleModifComponent } ,
      { path: "back/article_add" , component : ArticleAddComponent } ,
      { path: "back" , component : DashboardComponent } ,
      { path: "**" , component : NotFoundComponent } ,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
