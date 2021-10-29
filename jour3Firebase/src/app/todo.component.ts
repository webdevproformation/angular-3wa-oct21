import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service"

@Component({
  selector: 'app-todo',
  template: `
  <header class="row">
  <div class="offset-3 col-6">
      <app-encours></app-encours>
    </div>
  </header>
  <section class="row" *ngIf="auth.isLogged()">
    <div class="offset-3 col-6">
      <app-formulaire-todo></app-formulaire-todo>
    </div>
  </section>
  <section class="row">
    <div class="offset-3 col-6">
      <app-liste-todo></app-liste-todo>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

}
