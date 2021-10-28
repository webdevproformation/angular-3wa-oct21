import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase }  from "@angular/fire/compat/database";
import { reduce , mergeMap , map } from "rxjs/operators" ;
import { Observable , from } from "rxjs"
// opérateur permet réduire un tableau => une valeur 
// tableau qui contient de chiffres => somme de tous les chiffres 

@Component({
  selector: 'app-total',
  template: `
    <h1 class="text-center">Total</h1>
    <p class="text-center">{{ total }}</p>
  `
})
export class TotalComponent implements OnInit {

  constructor(private db : AngularFireDatabase) { }
  public total : number = 0;
  ngOnInit(): void {
    (this.db.list("/operations").valueChanges() as Observable<Array<{montant: number , motif : string}>>)
    /* .pipe( 
      mergeMap( operations => from(operations) ),
      map( ( operations ) => operations.montant),
      reduce( (acc  , val :number ) =>  acc + val )
    ) */
    .subscribe( 
      ( operations ) => {
        let total :number = 0
        operations.forEach( operation => {
          total += operation.montant;
        } )
        this.total = total;
    } )

  }

}
