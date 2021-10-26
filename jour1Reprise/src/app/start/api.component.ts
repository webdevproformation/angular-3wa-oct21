import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs" ;
// effectuer des requêtes ajax auprès de json-server 
interface ArticleInterface {
  id : number , nom : string , contenu : string
}
@Component({
  selector: 'app-api',
  template: `
    <h1 class="fs-4">Consommer des données d'une api</h1>
    <ul>
      <li *ngFor="let article of articles" class="my-2">
        {{ article.nom }} -  {{ article.contenu }}
        <button class="btn btn-danger btn-sm" (click)="onClickSuppr(article.id)">suppr</button>
      </li>
    </ul>
    <button class="btn btn-success btn-sm" (click)="onClick()">Ajouter un article</button>
  `
})
export class ApiComponent implements OnInit {
  // private req : HttpClient
  // injection de dépendance new HttpClient()
  // private dans le constructeur => créer une propriété dans la class + donner une valeur
  public articles : Array<ArticleInterface> = [];
  private compteur : number = 4;
  constructor(private req : HttpClient) {
    // this.req = new HttpClient()
   }
   /* hook du composant => au moment où le composant est affiché à l'écran */ 
   // assertion de type + Généricité 
  ngOnInit(): void {
    (this.req.get("http://localhost:3000/articles") as Observable<Array<ArticleInterface>>)
            .subscribe( (reponse ) => {
              // console.log( reponse );
              this.articles = reponse;
            } )
    // retourne un Observable (RxJS)
    // pour récupérer la valeur de l'observable => s'abonner via la méthode subscribe()
    // qui prend comme paramètre un callback 
    // contient ce que renvoie la base de données 
  }

  public onClick(){
    this.compteur++;
    const nouvelArticle = { // demain => notre article sera créé depuis un formulaire 
      nom : `article ${this.compteur}`,
      contenu : "lorem  ipsum"
    };
    
    (this.req.post("http://localhost:3000/articles", nouvelArticle) as Observable<ArticleInterface>)
    // enregistré cet article dans notre base de données
      .subscribe( reponse  => {
       this.articles.push(reponse)
      } )
  }

  public onClickSuppr(id : number){
    (this.req.delete(`http://localhost:3000/articles/${id}`) as Observable<Object>)
        .subscribe (   ()   => { 
          const articleASupprimer = this.articles.find( article => article.id === id )
          if(articleASupprimer){
            const index = this.articles.indexOf(articleASupprimer);
            this.articles.splice(index , 1);
          }
          
          // console.log( reponse );
        } )
  }

}

// Routing => plusieurs pages dans notre application 
// bâtir un vrai site internet !! 
