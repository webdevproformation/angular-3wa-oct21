import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-article-add',
  template: `
    <h1>Ajouter un nouveau article</h1>
    <form #add="ngForm" (submit)="onSubmit(add)">
      <input type="text" name="nom" placeholder="titre article" ngModel #nom="ngModel" >
      <textarea name="contenu" placeholder="contenu article" ngModel #contenu="ngModel" rows="8"></textarea>
      <select name="etat" ngModel #etat="ngModel">
        <option value="">veuillez sélectionner un état</option>
        <option value="1" selected="selected">actif</option>
        <option value="0">inActif</option>
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
export class ArticleAddComponent implements OnInit {

  private urlArticles: string = "http://localhost:3000/articles"

  constructor(private req : HttpClient) { }

  ngOnInit(): void {
  }

  public onSubmit(add : NgForm){
    if(add.valid){
      const {nom , contenu , etat} = add.value;
      this.req.post( `${this.urlArticles}` , { 
        nom ,
        contenu ,
        etat : etat === "1" ? true : false,
        dt_creation : Date.now()
      } ).subscribe( (reponse : any) => {
        console.log(reponse);
      } )
     
    }
  }

}
