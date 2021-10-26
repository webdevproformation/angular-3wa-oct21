import { Component, OnInit } from '@angular/core';
import { LikeInterface } from "./like";

// envoyer des informations => données du parent vers l'enfant app-menu => app-like
// créer un fichier qui contient une interface => partager entre les deux composants
// ng g interface start/like

@Component({
  selector: 'app-menu',
  template: `
    <div> 
      <!-- composant app-like est un enfant du composant app-menu -->
      <app-like 
        *ngFor="let like of likes" 
        [like]="like" 
        (augmenter)="onAugmenter($event)"
        (diminuer)="onDiminuer($event)"
        ></app-like>
    </div> 
  `
})
export class MenuComponent implements OnInit {

  public likes : Array<LikeInterface > = [
    {id : 1 , nb : 10 },
    {id : 2 , nb : 12 },
    {id : 3 , nb : 0 },
    {id : 4 , nb : -1 },
    {id : 5 , nb : 50 }
  ]
  public onDiminuer( id : number){
    (this.likes.find( like => like.id === id ) as LikeInterface).nb--;
  }
  public onAugmenter( id : number){
    const LikeAModifier = this.likes.find( like => like.id === id )
    if(LikeAModifier){
      LikeAModifier.nb++;
    }
    // solution 2 possible via l'assertion de type 
    // (this.likes.find( like => like.id === id ) as LikeInterface).nb++
    // rappel rapide des formulaires => Template Driven Form // reactive Form 
    // nouveauté => Appel une via module HTTP dans Angular qui permet de faire des requêtes http 
    // RxJS 
    // rdv 14h03 bon appétit @ toute suite !!! 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
