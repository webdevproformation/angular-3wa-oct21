import { Component, OnInit } from '@angular/core';
import { CocktailService } from "../cocktail.service";
import { mergeMap } from "rxjs/operators";

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
    // rdv 15h25 bon café @ toute suite !!! 

    this.cocktail.subjRecherche$
    .pipe( 
      mergeMap( ( motRecherche ) => this.cocktail.getCocktail(motRecherche) )
    )
    .subscribe( (resultat :any) => 
          this.resultats = resultat.drinks
    )
    // subject => permet d'envoyer des informations d'un composant vers un autre 
    // SANS sans qu'ils soient parents 

    
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
