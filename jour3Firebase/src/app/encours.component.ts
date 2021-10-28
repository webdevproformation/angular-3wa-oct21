import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Component({
  selector: 'app-encours',
  template: `
    <h1 class="fs-2">
      nombre d'action en cours 
      <span class="badge bg-primary">{{ encours }}</span>
    </h1>
  `
})
export class EncoursComponent implements OnInit {

  public encours : number = 0

  constructor(private db : AngularFireDatabase) { }

  ngOnInit(): void {
      this.db.list("/todos").valueChanges()
      .subscribe( (todos :any) => {
        let encours = 0;
        todos.forEach( (todo :any) => {
          if(todo.status === false){
            encours += 1 
          }
        } )
        this.encours = encours ; 
      } )
  }

}
