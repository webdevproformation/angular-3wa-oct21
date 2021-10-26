import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  template: `
    <h1>connexion</h1>
    <form #connexion="ngForm" (submit)="onSubmit(connexion , login , password)" >
      <input 
        name="login" 
        placeholder="votre login" 
        class="form-control" 
        type="text"
        ngModel
        #login="ngModel"
        required
        minlength="3"
        maxlength="10"
        >
      <input 
        name="passport" 
        placeholder="votre password" 
        class="form-control my-3" 
        type="password"
        ngModel 
        #password="ngModel"
        required
        minlength="3"
        maxlength="10"
        >
      <div class="d-flex justify-content-center">
        <input class="btn btn-outline-danger" type="submit">
      </div>
    </form>
    <div class="alert alert-danger my-3" *ngIf="login.touched && login.invalid">
      <div *ngIf="login.errors?.required">le champ login est obligatoire</div>
      <div *ngIf="login.errors?.minlength">le champ login doit contenir 3 caractères au minimum</div>
      <div *ngIf="login.errors?.maxlength">le champ login doit contenir 10 caractères au maximum</div>
    <div>
  `
})
export class TemplateDrivenComponent implements OnInit {

  public onSubmit(connexion : NgForm , login  : NgModel,  password :NgModel){
    // est ce que les valeurs saisies sont conformes ??? 
    if( connexion.valid ){ // true uniquement si les 6 validations sont passées
      console.log(connexion.value) ; 
      // envoyer les données saisies dans le formulaire à un service (via du RxJS)
      // faire une verifications => token 
      // message flash 
      return connexion.reset() ; // vider le formulaire
    }
    console.log(connexion.valid)
    console.log(login)
    console.log(login.errors); // liste des erreurs (informations manquantes dans le formulaire)
    console.log(password.errors); // liste des erreurs (informations manquantes dans le formulaire)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
