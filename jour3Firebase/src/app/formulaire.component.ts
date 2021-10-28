import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  template: `
    <h2>{{ titre }}</h2>
    <form class="d-flex">
        <input type="text" placeholder="motif" class="form-control">
        <input type="number" class="form-control mx-4">
        <input type="submit" class="btn btn-success">
    </form>
  `,
  styles: [
  ]
})
export class FormulaireComponent implements OnInit {
  public titre : string = "ajouter une dépense / recette "
  constructor() { }

  ngOnInit(): void {
  }

}
