import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Component({
  selector: 'app-budget',
  template: `
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
<section class="row">
  <div class="offset-3 col-6">
    <app-details></app-details>
  </div>
</section>
  `,
  styles: [
  ]
})
export class BudgetComponent implements OnInit {

  public constructor( private db : AngularFireDatabase ){}

  public onClick(info : string){
    const article = { nom : info }
    this.db.list("/articles").push(article);
  }

  ngOnInit(): void {
  }

}
