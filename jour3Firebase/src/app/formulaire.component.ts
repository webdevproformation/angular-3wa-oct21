import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AngularFireDatabase }  from "@angular/fire/compat/database"

@Component({
  selector: 'app-formulaire',
  template: `
    <h2>{{ titre }}</h2>
    <form class="d-flex" #f="ngForm" (submit)="onSubmit(f)">
        <input type="text" placeholder="motif" class="form-control" name="motif" ngModel #motif="ngModel" required>
        <input type="number" class="form-control mx-4" name="montant" ngModel #montant="ngModel"  required>
        <input type="submit" class="btn btn-success">
    </form>
  `
})
export class FormulaireComponent implements OnInit {
  public titre : string = "ajouter une dépense / recette "
  constructor( private db : AngularFireDatabase ) { }
  ngOnInit(): void {
  }
  public onSubmit(f : NgForm){
    if(f.valid){
      const operation = f.value ;
      this.db.list("/operations").push(operation);
      f.reset();
    }
  }

}
