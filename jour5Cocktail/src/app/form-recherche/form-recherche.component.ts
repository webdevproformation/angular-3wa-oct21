import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-form-recherche',
  templateUrl: './form-recherche.component.html',
  styleUrls: ['./form-recherche.component.css']
})
export class FormRechercheComponent implements OnInit {

  constructor( private cocktail : CocktailService) { }

  ngOnInit(): void {
  }

  public onKeyUp(recherche :string){
    this.cocktail.subjRecherche$.next(recherche)
  }

}
