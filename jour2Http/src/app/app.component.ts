import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable , of, throwError , from , combineLatest } from "rxjs";
import { filter , mergeMap , map , toArray , retry , catchError } from "rxjs/operators"

interface ArticleInterface{
  id : number , nom : string , contenu : string , user_id : number
}

interface UserInterface {
    id: number , nom : string , status : boolean
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-exo></app-exo>
      <h1>{{ title }}</h1>
      <section>
        <button (click)="onClickGetAll()">récupérer tous les users</button>
        <button (click)="onClickGetActive()">récupérer tous les users actifs </button>
        <button (click)="onClickGetAllEnrichi()">récupérer tous les users actifs + transforme status</button>
        <button (click)="onClickErreur()">une erreur</button>
        <button (click)="onClickErreur2()">une erreur 2</button>
        <button (click)="onClickOf()">of</button>
        <button (click)="onClickGetArticleComplet()">Articles Complet</button>
        <button (click)="onClickGetArticleComplet2()">Articles Complet 2</button>
      </section>
    </div>
  `,
  styles : [`
    .container{
      margin: 20px auto;
      width:100%;
      max-width:800px;
    }
  `]
})
export class AppComponent {
  title = 'consommer une API avec Angular';

  private url : string = "http://localhost:3000/users";
  private urlArticles : string = "http://localhost:3000/articles";

  public constructor(private req : HttpClient){

  }
  public onClickGetAll(){
      (<Observable<Array<UserInterface>>> this.req.get(this.url))
          .subscribe( ( users ) => {
            console.log(users)
          } )
  }
  // cd jour1-bdd
  // json-server --watch bdd.json

  public onClickGetActive(){
    (<Observable<Array<UserInterface>>> this.req.get(this.url))
      .pipe( 
          mergeMap(  reponse  => reponse ) , // [{},{}] => {}, {}
          filter( response =>  response.status === true ) // { status === true } , { status === false }
      ) // traitement du flux => opérateurs AVANT l'affichage / l'utilisation 
      .subscribe( reponse => console.log( reponse ))
  }

  public onClickGetAllEnrichi(){
    (<Observable<Array<UserInterface>>> this.req.get(this.url))
    .pipe( 
        mergeMap(  reponse  => reponse ) ,
        map( ( reponse ) => {  return { 
                        id : reponse.id  , 
                        nom : reponse.nom , 
                        status : reponse.status === true ? "actif" : "inactif" } 
                      } ),
        toArray()
      )
    .subscribe( reponse => console.log( reponse ))
  }

  public onClickErreur(){
    // simuler une erreur => base de données n'est pas opérationnelle => stopper  
    (<Observable<Array<UserInterface>>> this.req.get(this.url))
    .pipe()
    .subscribe( reponse => console.log( reponse ) , 
                ( ex ) => { console.log( ex.message ) }  // deuxième callback pour capturer les erreurs 
              )
  }

  // gestion des erreurs directement dans les pipes 
  public onClickErreur2(){
    (<Observable<Array<UserInterface>>> this.req.get(this.url))
    .pipe( catchError((ex) => { return of(ex.message) })) // la réponse est l'erreur 
    .subscribe( reponse => console.log( reponse ));
  }

  // of() // permet de créer un observable
  // from() //

  public onClickOf(){
      of(["bonjour", "les" , "ami"])
      //from(["bonjour", "les" , "ami"])
      .subscribe( reponse => console.log(reponse) )
  }
  // rdv dans 11h27 bon café @ toute suite !!! 

  // fusion de plusieurs stream d'observables 
  // modifier le fichier bdd.json
  // enchaines deux observables puis deux fonctions des tableaux de javascript map() .find()

  public onClickGetArticleComplet(){
    (<Observable<Array<ArticleInterface>>> this.req.get(this.urlArticles))
      .subscribe( articles => 
        (<Observable<Array<UserInterface>>> this.req.get(this.url))
          .subscribe( users => { // [{}, {} ,{}]
            const articlesComplet = articles.map( article => { return {
                  id : article.id, 
                  nom : article.nom,
                  contenu : article.contenu,
                  user : users.find( user => user.id === article.user_id  ) }} )
            console.log( articlesComplet  ) ;
        } )
      )
  }

    // déconseillé d'avoir un subscribe dans un subscribe 
    // la librairie rxJS contient methodes qui permettent de fusionner plusieurs Observable (qui contient des requête http) en 1 seul 

  public onClickGetArticleComplet2(){
    const obsArticles$ =  <Observable<Array<ArticleInterface>>> this.req.get(this.urlArticles);
    const obsUsers$    =  <Observable<Array<UserInterface>>> this.req.get(this.url) ;
    combineLatest( [ obsArticles$ , obsUsers$ ]  ) // dans un tableau plusieurs observables 
      .pipe( map( (rep1) => {  // [ [] , [ ] ]
        console.log( rep1 )
        return rep1 } ) 
      )
      .subscribe(([articles , users]) => {
        console.log(articles , users);
      })
  }
  // https://rxjs.dev/api

  // créer un nouveau composant exo 
  // vous avez deux bouton cas 1
  // vous avez deux bouton cas 2

  // exo 1 => afficher la liste de tous les commentaires pour les user actif ( status : true)
  // exo 2 => afficher pour chaque utilisateur profil id / nom / status / commentaires [ avec tous les commentaires de ce user ]
  // rdv 14h00 bon appétit @ toute suite !!! 
}
