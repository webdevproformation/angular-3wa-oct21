import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PremierComponent } from './start/premier.component';
import { DeuxiemeComponent } from './start/deuxieme.component';
import { MenuComponent } from './start/menu.component';
import { LikeComponent } from './start/like.component';
import { TemplateDrivenComponent } from './start/template-driven.component';
import { QuestionnaireComponent } from './start/questionnaire.component';
import { ReactiveComponent } from './start/reactive.component';
import { ApiComponent } from './start/api.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    MenuComponent,
    LikeComponent,
    TemplateDrivenComponent,
    QuestionnaireComponent,
    ReactiveComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
