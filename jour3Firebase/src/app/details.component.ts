import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase }  from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service"

@Component({
  selector: 'app-details',
  template: `
    <hr>
    <h3 class="text-center">Détails</h3>
    <form *ngFor="let operation of operations" class="d-flex my-1 align-items-center">
      <input type="text" class="form-control" name="motif" [(ngModel)]="operation.motif" #motif>
      <input type="number" class="form-control mx-3" name="montant" [(ngModel)]="operation.montant" #montant>
      <input type="submit" class="btn btn-danger me-3 btn-sm" value="supp" (click)="onClickSuppr(operation.key)" *ngIf="auth.isLogged()">
      <input type="submit" class="btn btn-warning btn-sm" value="modif" (click)="onClickModif(operation.key , motif.value , montant.value)" *ngIf="auth.isLogged()">
    <form>`
})
export class DetailsComponent implements OnInit {
  public operations : Array<{montant: number , motif : string , key : string}> = [];
  constructor(private db : AngularFireDatabase , public auth : AuthService) { }
  public onClickSuppr(id : string){
    this.db.list(`/operations/${id}`).remove()
  }
  public onClickModif(id : string , motif : string , montant : string ){
    console.log( id , motif , montant );
    this.db.list("/operations").update( id , { 
      motif : motif ,
      montant : parseInt( montant )
     } );
  }
  ngOnInit(): void { 
    const obsReq$ = this.db.list("/operations").snapshotChanges();
    obsReq$
    .pipe( 
      map( operations  => 
        operations.map( ( a : any ) => Object.assign({ key: a.key } , a.payload.val() ) ) 
      )
     )
    .subscribe( operations => {
      this.operations = operations; 
    } )
  }
}
