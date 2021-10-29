import { Component, OnInit } from '@angular/core';
import { CocktailService } from "../cocktail.service";

@Component({
  selector: 'app-liste-resultat',
  templateUrl: './liste-resultat.component.html',
  styleUrls: ['./liste-resultat.component.css']
})
export class ListeResultatComponent implements OnInit {

  constructor(private cocktail : CocktailService) { }

  ngOnInit(): void {
    this.cocktail.getCocktail()
    .subscribe( (resultat :any) => console.log(resultat.drinks) )
  }

}
