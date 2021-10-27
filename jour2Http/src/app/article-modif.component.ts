import { Component, OnInit , OnChanges } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router , ActivatedRoute } from "@angular/router";
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-modif',
  template: `
    <h1>Modifier un article</h1>
    <form #add="ngForm" (submit)="onSubmit(add)">
      <input type="hidden" name="id" [(ngModel)]="article.id">
      <input type="text" name="nom" placeholder="titre article" [(ngModel)]="article.nom" >
      <textarea name="contenu" placeholder="contenu article" [(ngModel)]="article.contenu" rows="8" [value]></textarea>
      <select name="etat" [(ngModel)]="article.etat">
        <option *ngFor="let e of etat" [ngValue]="e.etat">{{ e.label }}</option>
      </select>
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
    input, select, textearea{
      padding:10px;
    }
    `
  ]
})
export class ArticleModifComponent implements OnInit {

  public etat = [  
      { valeur : "" , label : "veuillez sélectionner un état" , etat : false } ,  
      { valeur : "1" , label : "actif" , etat : true} ,  
      { valeur : "0" , label : "inActif" , etat : false } ,  
  ]

  private urlArticles: string = "http://localhost:3000/articles"
  public article : any = {}; 

  constructor(private req : HttpClient , private nav : Router , private route : ActivatedRoute) { }
  ngOnChanges(){
    this.route.paramMap
    .pipe( 
      mergeMap( (url) => {
        const id = url.get("id") as string ;
        return this.req.get(`${this.urlArticles}/${id}`)
      })
    )
    .subscribe( ( article ) => { 
      this.article = article 
      // console.log(article)
    })
  }
  ngOnInit(): void {
    this.route.paramMap
    .pipe( 
      mergeMap( (url) => {
        const id = url.get("id") as string ;
        return this.req.get(`${this.urlArticles}/${id}`)
      })
    )
    .subscribe( ( article ) => { 
      this.article = article 
      // console.log(article)
    })
    // this.req.get()
  }

  public onSubmit(add : NgForm){
    if(add.valid){
      console.log(add.value);
      const {id , nom , contenu , etat} = add.value;
      const profil = localStorage.getItem("auth") as string ;
      const user_id = JSON.parse(profil).id;
      console.log(`${this.urlArticles}/${id}`)
      this.req.put( `${this.urlArticles}/${id}` , { 
        nom ,
        contenu ,
        etat : etat ,
        dt_creation : Date.now(),
        user_id 
      } ).subscribe( (reponse : any) => {
        // console.log(reponse);
        this.nav.navigate(["/back"]);
      } )
     
    }
  }

}
