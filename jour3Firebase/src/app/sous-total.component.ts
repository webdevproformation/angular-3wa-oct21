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
    let recette :number = 0 ;
    obsReq$.subscribe( operations => {
      operations.filter( ope => ope.montant >= 0 )
                .forEach( operation => {
                  recette += operation.montant;
              } )
      this.recette = recette;
    })

    let depense :number = 0 ;
    obsReq$.subscribe( operations => {
      operations.filter( ope => ope.montant < 0 )
                .forEach( operation => {
                  depense += operation.montant;
              } )
      this.depense = depense;
    })

  }

}
