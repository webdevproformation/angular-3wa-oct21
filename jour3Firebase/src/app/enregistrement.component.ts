import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-enregistrement',
  template: `
    <h1 class="text-center mt-5">créer un profil utilisateur dans Firebase Auth</h1>
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
    <div class="alert alert-danger mt-3" *ngIf="showMessage">
        <div>{{ messageErreur }}</div>
    </div>
    <div class="alert alert-success mt-3" *ngIf="showMessageSuccess">
        <div>{{ messageSuccess }}</div>
    </div>
  `
})
export class EnregistrementComponent implements OnInit {

  public showMessage : boolean = false;
  public messageErreur : string = "";
  public showMessageSuccess : boolean = false;
  public messageSuccess : string = "";

  constructor(private auth : AngularFireAuth) { }
  // rdv 16h20 bon café @ toute suite !!! 

  public onSubmit(f : NgForm){
    if(f.valid){
      const { email , password } = f.value;
      console.log(f.value);
      this.auth.createUserWithEmailAndPassword(email , password)
        .then( rep => {
          //console.log( rep );
          this.showMessage = false;
          this.showMessageSuccess = true;
          this.messageSuccess = "votre compte est bien créé";
          f.reset();
        })
        .catch(ex => {
          this.showMessage = true;
          this.messageErreur = ex.message;
        });
    } else {
        this.showMessage = true;
        this.messageErreur = "veuillez remplir les deux champs";
    }
  }

  ngOnInit(): void {
  }

}
