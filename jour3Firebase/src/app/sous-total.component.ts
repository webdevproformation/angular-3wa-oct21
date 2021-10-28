import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase }  from "@angular/fire/compat/database";
import { Observable  } from "rxjs"

@Component({
  selector: 'app-sous-total',
  template: `
    <div class="row">
      <div class="col-6 text-center">
        <h3>Dépenses</h3>
        <p>{{ depense }}</p>
      </div>
      <div class="col-6 text-center">
        <h3>Recettes</h3>
        <p>{{ recette }}</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SousTotalComponent implements OnInit {

  public recette : number = 0;
  public depense : number = 0;

  constructor(private db : AngularFireDatabase) { }

  ngOnInit(): void {
    const obsReq$ = this.db.list("/operations").valueChanges() as Observable<Array<{montant: number , motif : string}>>
  
    obsReq$.subscribe( operations => {
      let recette :number = 0 ;
      operations.filter( ope => ope.montant >= 0 )
                .forEach( operation => {
                  recette += operation.montant;
              } )
      this.recette = recette;
    })
    
    obsReq$.subscribe( operations => {
      let depense :number = 0 ;
      operations.filter( ope => ope.montant < 0 )
                .forEach( operation => {
                  depense += operation.montant;
              } )
      this.depense = depense;
    })
  }
}

// ajouter un nouveau composant sous totaux et dépense / recette => detail 

// liste de formulaire 
// formulaire 
// input ( motif )
// input ( montant )
// bouton modifier 
// bouton supprimer  

