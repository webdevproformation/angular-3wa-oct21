import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-questionnaire',
  template: `
    <h1>Questionnaire</h1>
    <form #questionnaire="ngForm" (submit)="onSubmit(questionnaire)">
      <input 
        type="email" 
        name="email" 
        class="form-control" 
        required placeholder="votre@email.fr" 
        minlength="5"
        ngModel
        #email="ngModel"
        >
      <select required class="form-select my-3" ngModel #pays="ngModel" name="pays">
        <option>Veuillez sélectionner un pays</option>
        <option value="1">France</option>
        <option value="2">Allemagne</option>
        <option value="3">Belgique</option>
      </select>
      <input type="radio" name="niveau" value="novice" checked #niveau="ngModel" ngModel> Novice
      <input type="radio" name="niveau" value="intermediaire" #niveau="ngModel" ngModel> Intermédiaire
      <input type="radio" name="niveau" value="expert" #niveau="ngModel" ngModel> Expert 
      <div class="d-flex justify-content-end">
        <input type="submit" class="btn btn-outline-dark btn-sm">
      </div>
    </form>
  `,
  styles: [
  ]
})
export class QuestionnaireComponent implements OnInit {
  public onSubmit(f : NgForm){
    if(f.valid){
      console.log(f.value);
      return f.reset();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
