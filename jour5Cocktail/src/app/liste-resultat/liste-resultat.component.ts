import { Component, OnInit } from '@angular/core';
import { CocktailService } from "../cocktail.service";

@Component({
  selector: 'app-liste-resultat',
  templateUrl: './liste-resultat.component.html',
  styleUrls: ['./liste-resultat.component.css']
})
export class ListeResultatComponent implements OnInit {

  public resultats : Array<any> = [];
  public recherche : string = "margarita";

  constructor(private cocktail : CocktailService) { }

  public ingrediants(cocktail :any){
    let resultat = "";
    for(let i = 1; i <= 15 ; i++){
      const ingrediant = `strIngredient${i}`;
      const dose = `strMeasure${i}`;
      if(cocktail[ingrediant] != null && cocktail[dose] != null){
        resultat += `<li>${cocktail[ingrediant]} - ${cocktail[dose]}</li>`
      }
    }
    return resultat;
  }

  ngOnInit(): void {
    this.cocktail.getCocktail()
    .subscribe( (resultat :any) => 
        this.resultats = resultat.drinks
    )
    this.cocktail.subjRecherche$.subscribe( ( motRecherche ) => {
      this.recherche = motRecherche;
    } )

    this.cocktail.subjRecherche$.subscribe( ( motRecherche ) => {
      this.cocktail.getCocktail(motRecherche)
        .subscribe( (resultat :any) => 
            this.resultats = resultat.drinks
        )
    } )

    
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
