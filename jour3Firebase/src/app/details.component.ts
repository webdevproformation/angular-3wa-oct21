import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase }  from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-details',
  template: `
    <hr>
    <h3 class="text-center">Détails</h3>
    <form *ngFor="let operation of operations" class="d-flex my-1 align-items-center">
      <input type="text" class="form-control" name="motif" [(ngModel)]="operation.motif" >
      <input type="number" class="form-control mx-3" name="montant" [(ngModel)]="operation.montant">
      <input type="submit" class="btn btn-danger me-3 btn-sm" value="supp" (click)="onClickSuppr($event)">
      <input type="submit" class="btn btn-warning btn-sm" value="modif" (click)="onClickModif($event)">
    <form>
  `
})
export class DetailsComponent implements OnInit {
  public operations : Array<{montant: number , motif : string}> = [];
  constructor(private db : AngularFireDatabase) { }

  public onClickSuppr(id : Event){
    console.log(id);
  }

  public onClickModif(id: Event){

  }

  ngOnInit(): void { 
    const obsReq$ = this.db.list("/operations").snapshotChanges();
    obsReq$
    .pipe( 
      map( operations  => { 
        return { operations.map( ( a : any ) => ({ a : a.key , ...a.payload.val() }) ) }
      } )
     )
    .subscribe( operations => {
      // this.operations = operations; 
      console.log(operations);
    } )

  }

}
