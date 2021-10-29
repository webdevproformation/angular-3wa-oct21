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
    // pouvez afficher dans le composant liste-cocktail
    /**
     * afficher sous forme de liste 
     * <article>
     *  <h2>strDrink</h2>
     *  <img => strDrinkThumb:>
     *  <p></p>strInstructions:
     *  <ul>
     *  <li></li> la liste des ingrédients => null => rien si ça contient une string => <li></li>
     * </ul>
     * </article>
     * 
     */
  }

}
