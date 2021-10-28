import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-enregistrement',
  template: `
    <h1 class="text-center mt-5">créer un profil utilisateur dans Firebase Auth</h1>
    <form class="offset-3 col-6">
      <div class="d-flex my-4">
        <input name="email" type="email" class="form-control me-3" placeholder="votre@email.fr">
        <input name="password" type="password" class="form-control" placeholder="votre password">
      </div>
      <div class="d-flex justify-content-center">
        <input type="submit" class="btn btn-outline-dark">
      </div>
    </form>
  `
})
export class EnregistrementComponent implements OnInit {

  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
  }

}
