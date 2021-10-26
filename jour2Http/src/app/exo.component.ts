import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable , combineLatest } from 'rxjs';
import { filter , mergeMap , map } from "rxjs/operators"

interface UserInterface {
  id: number , nom : string , status : boolean
}

interface CommentaireInterface {
  id: number , contenu : string , user_id : number
}

@Component({
  selector: 'app-exo',
  template: `
    <h1>Exo</h1>
    <button (click)="onClickCas1()">Cas 1</button>
    <button (click)="onClickCas2()">Cas 2</button>
  `,
  styles: [
  ]
})
export class ExoComponent implements OnInit {

  private usersUrl : string = "http://localhost:3000/users";
  private commentairesUrl : string = "http://localhost:3000/commentaires";
  constructor( private req : HttpClient) { }

  public onClickCas1(){
    const obsUsers$ =  this.req.get(this.usersUrl) as Observable<Array<UserInterface>>
    const obsCommentaires$ =  this.req.get(this.commentairesUrl) as Observable<Array<CommentaireInterface>>

    // retourner pour les utilisateurs actifs avec tous leurs commentaires 
    combineLatest([obsUsers$ , obsCommentaires$])
    .pipe(
      map( (rep) => { 
        const userActif = rep[0].filter( user  => user.status === true ) 
        return [userActif ,  rep[1] ] }
      ), 
      map( ( rep ) => {
        const users = rep[0] as Array<UserInterface>; 
        const commentaires  = rep[1] as Array<CommentaireInterface>; 
        const resultat = users.map( ( user  ) => { 
          return  commentaires.filter( (commentaires ) => { return commentaires.user_id === user.id } )
        } )
        return resultat
      } )
    )
    .subscribe( (reponse) => console.log( reponse ) )
  }

  public onClickCas2(){
    const obsUsers$ =  this.req.get(this.usersUrl) as Observable<Array<UserInterface>>
    const obsCommentaires$ =  this.req.get(this.commentairesUrl) as Observable<Array<CommentaireInterface>>

    combineLatest([obsUsers$ , obsCommentaires$])
    .pipe(
      map( ( rep ) => {
        const users = rep[0] as Array<UserInterface>; 
        const commentaires  = rep[1] as Array<CommentaireInterface>; 
        const resultat = users.map( ( user ) => { 
          return {
                id : user.id ,
                nom : user.nom ,
                status : user.status ,
                commentaires : commentaires.filter( (commentaires ) => { return commentaires.user_id === user.id } )
              }
        } )
        return resultat
      } )
    )
    .subscribe( (reponse) => console.log( reponse ) )
  }

  ngOnInit(): void {
  }

}
