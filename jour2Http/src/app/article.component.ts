import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-article',
  template: `
    <p>
      article works!
    </p>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe( ( params ) => {
          console.log(params.get("id")) // récupérer l'id de l'article concerné 
          // requete http sur notre base de données pour récupérer l'article N° id récupéré
        } )
  }

}
