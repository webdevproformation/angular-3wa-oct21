import { Component, OnInit } from '@angular/core';
import { of, from } from "rxjs"; // créer des streams observable 
import { mergeMap , map , mergeAll } from 'rxjs/operators'; // opérateurs utilisables  dans la fonction .pipe()
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-exemple',
  template: `
      <h1>Enchainer des Observables</h1>
      <button (click)="onClickEnchainement1()"> Enchainement 1 </button>
      <button (click)="onClickEnchainement2()"> Enchainement 2 </button>
      <button (click)="onClickEnchainement3()"> Enchainement 3 </button>
      <button (click)="onClickEnchainement4()"> Enchainement 4 </button>
      <button (click)="onClickEnchainement5()"> Enchainement 5 </button>
  `,
  styles: [
  ]
})
export class ExempleComponent implements OnInit {

  public onClickEnchainement5(){
      // const routeActive = new ActivatedRoute(); // objet récupérer ce qui est écrit dans l'url de la page 
      const fruits = [ { id : 3 , nom :"pommes" } , { id : 4 , nom : "poires"}  ]

      /* this.route.paramMap.subscribe( 
          params => { 
            const id = params.get("id") as string 
            const fruitRecherche = fruits.find( fruit => fruit.id == parseInt(id) )
            console.log(fruitRecherche)
          }
      ) */

      this.route.paramMap
      .pipe(
        map( params => {  
            const id = params.get("id") as string 
            return fruits.find( fruit => fruit.id == parseInt(id) )
         })
      )
      .subscribe( (fruitRecherche) => console.log( fruitRecherche ))
      
      /* const obsFruit$ = from(fruits)

      this.route.paramMap
      .pipe(
        map( params => { return params.get("id") as string } ),
        map( id  => { 
         return obsFruit$.subscribe((fruit) => { return fruit.id === parseInt(id) })
        })
       )
      .subscribe((fruitRecherche) => fruitRecherche.subscribe( r => console.log(r))  ) */
  }

  public onClickEnchainement1(){
    const jours = ["lundi", "mardi" , "mercredi" , "jeudi"];
    // veux transformer ce tableau un flux de données 
    of(jours).subscribe(  // 1 fois 
        (jour) => { 
          console.log("of([])" , jour) // ["lundi", "mardi" , "mercredi" , "jeudi"]
        }  
    ) 
    from(jours).subscribe( // autant de fois que j'ai de valeur dans mon tableau 
        (jour) => { 
          console.log("from([])" , jour) // from([]) lundi / from([]) mardi ... / from([]) jeudi
        }
    )

  }

  public onClickEnchainement2(){
    const jours = ["lundi", "mardi" , "mercredi" , "jeudi"];

    of(jours)
    .pipe( 
      map( ( jour ) => { return from(jour) }) // from => transformer [ ... ] => Observable<Array<string>>
    )
    .subscribe( 
      (jour) => { 
        console.log("of([])" , jour.subscribe( x => console.log(x) )) // ["lundi", "mardi" , "mercredi" , "jeudi"]
      } 
    )

  }

  public onClickEnchainement3(){
    const jours = ["lundi", "mardi" , "mercredi" , "jeudi"];
    of(jours)
    .pipe( 
      map( ( jour ) => { return from(jour) }), // from => transformer [ ... ] => Observable<Array<string>>
      mergeAll() // exécuter le subscrire du return précédent
    )
    .subscribe( 
      (jour) => { 
        console.log("of([])" , jour) 
      } 
    )
  }

  public onClickEnchainement4(){
    const jours = ["lundi", "mardi" , "mercredi" , "jeudi"];
    of(jours)
    .pipe( 
      mergeMap( ( jour ) => { return from(jour) }), // from => transformer [ ... ] => Observable<Array<string>>
    ) // mergeMap( return Observable ) === map( return Observable) + mergeAll()
    .subscribe( 
      (jour) => { 
        console.log("of([])" , jour) 
      } 
    )
  }

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
