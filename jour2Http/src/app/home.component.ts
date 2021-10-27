import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , combineLatest } from 'rxjs';
import { ArticleInterface } from "./article.interface";
import { map } from 'rxjs/operators';



interface UserInterface {
  id : number , nom : string , status : boolean
}

@Component({
  selector: 'app-home',
  template: `
    <h1>{{ titre }}</h1>
    <div>
      <article *ngFor="let a of articles">
        <h2><a [routerLink]="['article', a.id]">{{ a.nom }}</a></h2>
        <p>{{ a.contenu }}</p>
        <ul>
          <li>{{a.auteur}}</li>
          <li><a routerLink="article/{{a.id}}">lire la suite</a></li>
        </ul>
      </article>
    </div>`,
  styles: [
    `div{
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap:10px;
    }
    article{
      border:1px solid #eee;
      padding : 5px;
    }`
  ]
})
export class HomeComponent implements OnInit {
  public titre : string = "Bienvenu";
  public articles : Array<ArticleInterface> = [];

  private urlArticles = "http://localhost:3000/articles";
  private urlUsers = "http://localhost:3000/users";
  constructor( private req : HttpClient) { }

  ngOnInit(): void {  

    const obsArticles$ = this.req.get(this.urlArticles) as Observable<Array<ArticleInterface>>
    const obsUsers$ = this.req.get(this.urlUsers) as Observable<Array<UserInterface>>

    combineLatest( [obsArticles$ , obsUsers$] )
    .pipe(
      map( (rep) => {
        const articles = rep[0] as Array<ArticleInterface>;
        const users = rep[1] as Array<UserInterface>;
        const articlesComplets = articles.map( article => { return { 
          id : article.id,
          nom : article.nom,
          contenu : article.contenu,
          auteur : users.find( user => user.id === article.user_id)?.nom
        }} )
        return articlesComplets ;
      })  
    )
    .subscribe( (rep) => {
      this.articles = rep
      //console.log(this.articles);
    }  )
  }

}
