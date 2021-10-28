import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase }  from "@angular/fire/compat/database"
import { Observable } from "rxjs";

@Component({
  selector: 'app-details',
  template: `
    <hr>
    <h3 class="text-center">Détails</h3>
    <form *ngFor="let operation of operations" class="d-flex my-1 align-items-center">
      <input type="text" class="form-control" name="motif" [(ngModel)]="operation.motif" >
      <input type="number" class="form-control mx-3" name="montant" [(ngModel)]="operation.montant">
      <input type="submit" class="btn btn-danger me-3 btn-sm" value="supp">
      <input type="submit" class="btn btn-warning btn-sm" value="modif">
    <form>
  `,
  styles: [
    `input{
      height:
    }`
  ]
})
export class DetailsComponent implements OnInit {
  public operations : Array<{montant: number , motif : string}> = [];
  constructor(private db : AngularFireDatabase) { }

  ngOnInit(): void { 
    const obsReq$ = this.db.list("/operations").valueChanges() as Observable<Array<{montant: number , motif : string}>>
    obsReq$.subscribe( operations => {
      this.operations = operations; 
    } )

  }

}
