import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { HttpClient } from "@angular/common/http"
import { ArticleInterface } from "./article.interface";
import { Observable  } from 'rxjs';
import { mergeMap } from "rxjs/operators"
@Component({
  selector: 'app-article',
  template: `
    <h1>{{article.nom}}</h1>
    <p>{{article.contenu}}</p>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit {
  private urlArticles = "http://localhost:3000/articles";
  public article : ArticleInterface = {}
  constructor( 
      private route : ActivatedRoute , 
      private req : HttpClient , 
       ) { }
  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      mergeMap( ( params ) => { 
        const id = params.get("id") as string
        return this.req.get( `${this.urlArticles}/${id}` ) as Observable<ArticleInterface>
      } )
    )
    .subscribe( article => {
        console.log(article);
        this.article = article 
      } 
    )
    
      // les deux notations sont équivalentes 
     /* this.route.paramMap
        .subscribe( ( params ) => {
          const id = params.get("id") as string // récupérer l'id de l'article concerné 
          // requete http sur notre base de données pour récupérer l'article N° id récupéré
          (this.req.get( `${this.urlArticles}/${id}` ) as Observable<ArticleInterface>)
            .subscribe( article => console.log(article) )
        } )  */
  }
}
