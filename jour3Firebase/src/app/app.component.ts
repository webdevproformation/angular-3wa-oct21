import { Component , OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database"


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header class="row">
      <div class="offset-3 col-6">
        <app-total></app-total>
      </div>
    </header>
    <section class="row">
      <div class="offset-3 col-6">
        <app-sous-total></app-sous-total>
      </div>
    </section>
    <section class="row">
      <div class="offset-3 col-6">
        <app-formulaire></app-formulaire>
      </div>
    </section>
  </div>        `
})
export class AppComponent implements OnInit {
  public title : string = 'jour3Firebase';

  public constructor( private db : AngularFireDatabase ){}

  public onClick(info : string){
    const article = { nom : info }
    this.db.list("/articles").push(article);
  }

  public ngOnInit(){
  }

}
