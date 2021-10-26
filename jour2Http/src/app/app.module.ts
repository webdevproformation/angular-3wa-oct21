import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" ;

import { AppComponent } from './app.component';
import { ExoComponent } from './exo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
