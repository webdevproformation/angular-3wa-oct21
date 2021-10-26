import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { VerifLogin } from "./verifLogin"

@Component({
  selector: 'app-reactive',
  template: `
    <h1>Connexion Reactive</h1>
    <form [formGroup]="connexion" (submit)="onSubmit()">
      <input 
        type="text" 
        class="form-control" 
        name="login" 
        placeholder="login"
        formControlName="login"
        >
      <input 
        type="password" 
        class="form-control my-3" 
        name="password" 
        placeholder="password"
        formControlName="password"
        >
      <input type="submit" class="btn btn-outline-info">
    </form>
  `
})
export class ReactiveComponent implements OnInit {
  public onSubmit(){
    if(this.connexion.valid){
      console.log(this.connexion.value);
    }
  }
  public connexion = new FormGroup({
    login : new FormControl("" , 
        [ 
            Validators.required , 
            Validators.minLength(3), 
            Validators.maxLength(10) , 
            VerifLogin.neContientPasDePoint 
        ]
    ),
    password : new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }
  // nouveauté : rdv 16h20 @ toute suite !! 
  // pause café => serveur json-server 
  // récupérer les informations dans ce serveur via le module Angular HttpClientModule 
}
