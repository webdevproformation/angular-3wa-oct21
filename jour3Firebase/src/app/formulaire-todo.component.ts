import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AngularFireDatabase }  from "@angular/fire/compat/database"

@Component({
  selector: 'app-formulaire-todo',
  template: `
  <h2>{{ titre }}</h2>
  <form class="d-flex" #f="ngForm" (submit)="onSubmit(f)">
      <input type="text" placeholder="action à réaliser" class="form-control" name="action" ngModel #action="ngModel" required>
      <input type="submit" class="btn btn-success ms-3">
  </form>`
})
export class FormulaireTodoComponent implements OnInit {
  public titre : string = "ajouter un todo"
  constructor(private db : AngularFireDatabase) { }

  ngOnInit(): void {
  }

  public onSubmit(f :NgForm){
    if(f.valid){
      console.log(f.value)
      this.db.list("/todos").push({ 
        nom : f.value.action ,
        status : false
      })
      f.reset();
    }
  }

}
