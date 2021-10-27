import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Bonjour {{ getNomUser() }}</h1>
    <h2>créer un article</h2>
    <a routerLink="article_add">Ajouter un nouvel article</a> 
    <hr>
    <h2>Liste des articles</h2>
    <table>
      <tr>
        <th>id</th>
        <th>titre</th>
        <th>état</th>
        <th>actions</th>
      </tr>
      <tr *ngFor="let article of articles">
        <td>{{article.id}}</td>
        <td>{{article.nom}}</td>
        <td>{{article.etat}}</td>
        <td>
          <button>modifier</button>
          <button (click)="onClickSuppr(article.id)">supprimer</button>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `table{
      border-collapse: collapse;
      width:100%;
    }
    tr{
      display:grid;
      grid-template-columns : 100px 200px 100px 1fr;
    }
    td , th{
      border:1px solid #333;
      padding:5px 10px;
    }
    `]
})
export class DashboardComponent implements OnInit {
  private urlArticles : string = "http://localhost:3000/articles" ;
  public articles : Array<any> = []
  constructor(private req : HttpClient) { }
  ngOnInit(): void {
    this.req.get(`${this.urlArticles}`)
      .subscribe( (articles : any) => { 
        this.articles = articles
      } )
  }
  public onClickSuppr(id : string){
    (this.req.delete(`${this.urlArticles}/${id}`) as Observable<Object>)
      .subscribe( () => {
        const articleASupprimer = this.articles.find( article => article.id === parseInt(id) );
        if(articleASupprimer){
          const index = this.articles.indexOf(articleASupprimer);
          this.articles.splice(index, 1);
        }
      } )
  }
  public getNomUser() :string{
    const localS = localStorage.getItem("auth") as string
    const profil = JSON.parse(localS)
    if( profil ){
      return profil.nom 
    }
    return "";
  }

  // dans le composant dashboard => mettre en place l'action qui va permettre de supprimer un article 
}
