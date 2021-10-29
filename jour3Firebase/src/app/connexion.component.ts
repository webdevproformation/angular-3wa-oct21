import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms"; 
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { GoogleAuthProvider } from "firebase/auth"

@Component({
  selector: 'app-connexion',
  template: `
  <h1 class="text-center mt-5">Connexion avec Firebase Auth</h1>
  <form class="offset-3 col-6" #f="ngForm" (submit)="onSubmit(f)">
    <div class="d-flex my-4">
      <input 
        name="email" type="email" class="form-control me-3" placeholder="votre@email.fr" ngModel #email="ngModel" required>
      <input 
        name="password" type="password" class="form-control" placeholder="votre password" ngModel #password="ngModel" required>
    </div>
    <div class="d-flex justify-content-center">
      <input type="submit" class="btn btn-outline-dark">
    </div>
  </form>
  <app-connexion-btn-google></app-connexion-btn-google>
  `
})
export class ConnexionComponent implements OnInit {

  public onSubmit(f : NgForm){
    if(f.valid){
      const { email , password } = f.value ;

      this.auth.signInWithEmailAndPassword(email.trim() , password)
        .then( rep => {
          localStorage.setItem("auth", JSON.stringify(rep.user) )
          window.location.href = "/";
        } )
        .catch( ex => console.log(ex.message) )

    }
  }

  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
  }

}
