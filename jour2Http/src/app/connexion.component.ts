import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

interface ProfilUserInterface {
  id : number , nom : string , login : string , password : string , status: boolean 
}

@Component({
  selector: 'app-connexion',
  template: `
    <h1>Accéder au back office</h1>
    <div class="form">
      <form #connexion="ngForm" (submit)="onSubmit(connexion)">
        <input type="text" name="login" ngModel #login="ngModel" placeholder="login" required >
        <input type="password" name="password" ngModel #password="ngModel" placeholder="password" required>
        <div>
          <input type="submit">
        </div>
      </form>
    </div>
  `,
  styles: [
    `.form{
      min-height:50vh;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    form{
      display:grid;
      grid-template-columns: repeat(2, 200px);
      grid-gap: 20px;
    }
    input{
      padding:5px 10px;
    }
    form div{
      grid-column: 1/ -1;
      text-align:center;
    }
    `
  ]
})
export class ConnexionComponent implements OnInit {
  private urlUsers : string = "http://localhost:3000/users";
  constructor(private req : HttpClient) { }
  ngOnInit(): void {
  }
  public onSubmit( connexion : NgForm){
    if(connexion.valid){
      const { login , password } = connexion.value;

      (this.req.get( `${this.urlUsers}?login=${login}&password=${password}` ) as Observable<Array<ProfilUserInterface>>)
      .subscribe( 
        profil => {
          if(profil.length === 1){
            const [profilUser] = profil;
            localStorage.setItem("auth" , JSON.stringify({id : profilUser.id , nom : profilUser.nom }))
            // information persistante dans le navigateur => on va pouvoir accéder au back office 
            window.location.href = "/" // redirection vers la page d'accueil 
            // console.log(profil) 
          }
        }
      )
    }
  }

}
