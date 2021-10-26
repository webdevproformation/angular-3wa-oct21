import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-contact',
  template: `
    <h1>{{ titre }}</h1>
    <form #contact="ngForm" (submit)="onSubmit(contact)">
      <input type="email" name="email" placeholder="votre@email.fr" ngModel #email="ngModel" required>
      <textarea name="commentaire" placeholder="votre commentaire" ngModel #commentaire="ngModel" rows="10" required>
      </textarea>
      <div>
        <input type="submit">
      </div>
    </form>
  `,
  styles: [
    `form{
      display:grid;
      grid-gap:20px;
    }
    input[type="email"], textarea{
      padding:6px 10px;
    }
    `
  ]
})
export class ContactComponent implements OnInit {
  public titre : string = "Nous contacter";
  public onSubmit(contact :NgForm){
    if(contact.valid){
      this.req.post( "http://localhost:3000/contacts" , contact.value )
          .subscribe( reponse => {
            console.log(reponse)
            contact.reset()
            } 
          )
    }
  }
  constructor(private req : HttpClient) { }
  ngOnInit(): void {}

}
// ajouter dans ce composant un formulaire
// contient 2 champs : email / commentaire / bouton de soumission 
// reactive form / Template driven Form 

// lorsque vous le soumettez => appeler la base de données en POST 
// ajouter un nouvel enregistrement 
// rdv 16h25 bon café @ toute suite !! 