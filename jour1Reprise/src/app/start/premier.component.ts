import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  template: `
    <h2>interpolation</h2>
    <p>{{ start }}</p>
    <h2>directive / attribut avec des crochets pour les balises html</h2>
    <p [innerHTML]="start"></p>
  `,
  styles: [
  ]
})
export class PremierComponent implements OnInit {

  public start:string = "Bonjour"; 

  constructor() { }

  ngOnInit(): void {
  }

}
