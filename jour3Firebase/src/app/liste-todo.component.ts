import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { map } from "rxjs/operators"
import { AuthService } from "./auth.service"

@Component({
  selector: 'app-liste-todo',
  template: `<hr>
  <h3 class="text-center">Liste des actions </h3>
  <form *ngFor="let todo of todos" class="d-flex my-2">
    <input type="text" name="nom" [(ngModel)]="todo.nom" class="form-control" #nom>
    <select name="status" [(ngModel)]="todo.status" class="form-select mx-2" #status>
      <option value="false">En Cours</option>
      <option value="true">Fini</option>
    </select>
    <input type="submit" class="btn btn-outline-danger" value="suppr" (click)="onClickSuppr(todo.id)" *ngIf="auth.isLogged()">
    <input type="submit" class="btn btn-outline-warning ms-2" value="modif" (click)="onClickModif(todo.id , nom.value , status.value)" *ngIf="auth.isLogged()">
  </form>
  `
})
export class ListeTodoComponent implements OnInit {
  public todos :any ;
  constructor(private db : AngularFireDatabase , public auth : AuthService) { }

  public onClickSuppr(id : string){
    this.db.list(`/todos/${id}`).remove();
  }

  public onClickModif(id : string , nom :string , status :string){
    this.db.list(`/todos`).update(id , { 
      nom ,
      status : status === "true" ? true : false
     });
  }

  ngOnInit(): void {
      this.db.list("/todos").snapshotChanges()
      .pipe(  
        map( actions => actions.map( (a : any) => Object.assign( {id : a.key }, a.payload.val()  )  ) )
      )
      .subscribe( todosComplets => this.todos = todosComplets )
  }

}
