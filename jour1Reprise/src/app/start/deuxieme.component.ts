import { Component, OnInit } from '@angular/core';

interface Produit {
  id : number ; nom : string ; prix : number ; status : boolean
}
// typage en Typescript 

@Component({
  selector: 'app-deuxieme',
  template: `
    <h2>boucle avec la directive *ngFor</h2>
    <ul>
      <li *ngFor="let p of produits">{{ p.nom }} - {{ p.prix }}</li>
    </ul>
    <h2>conditions avec la directive *ngIf</h2>
      <!-- <div *ngIf="afficher"> -->
      <div #element ><!-- référence document.getElementById("element") -->
      <p *ngFor="let p of produits">
        <span *ngIf="p.status">
        {{ p.nom }} - {{ p.prix }}
        </span>
      </p>
      </div>
      <h2>Directive d'action</h2>
      <button (click)="onClick()">Action</button>
      <button (click)="onClick2()">masquer les p avant</button>
      <button (click)="onClick3(element)">masquer les p avant avec ref</button>
      <button (click)="onClick4($event)">masquer les p avant avec event</button>
  `,
  styles: [
    `.hide{
      display:none;
    }`
  ]
})
export class DeuxiemeComponent implements OnInit {
  public afficher:boolean = true;
  // public produits : Array<Produit>
  public produits : Produit[] = [
    { id : 1 , nom : "Produit 1" , prix : 10 , status : true },
    { id : 2 , nom : "Produit 2" , prix : 20 , status : false },
    { id : 3 , nom : "Produit 3" , prix : 40 , status : true }
  ]

  // éviter que la vérification automatique des types de Typescript / Visual Studio
  // utiliser le type any => accepte n'importe quel attribut 
  // quelque soit votre objet 
  // manière rapide (sale mais qui fonctionne )
  // public onClick4($event : any ){
  //  $event.target?.parentNode.querySelector("div").classList.toggle("hide")
    // console.log($event.target?.parentNode);
  // }

  // propre => mieux Typer 
  public onClick4( $event : Event ){
    // union EventTarget | null
    // if enlève le cas où $event.target est null 
   /*  if($event.target){
      console.log($event.target.parentNode)
    } */
    // assertion de Type => dire à Typescript que l'on sait mieux que lui 
    // $event.target => EventTarget => Non en fait c'est plutôt HTMLButtonElement
    const button = $event.target as HTMLButtonElement;
    const composant = button.parentNode as HTMLDivElement; 
    // assertion de type sur fonction du DOM avec le mot clé as 
    // (composant.querySelector("div") as HTMLDivElement).classList.toggle("hide");

    // assertion de type que une fonction du DOM querySelector()
    // chevron l'exécution de la fonction 
    (<HTMLDivElement>composant.querySelector("div")).classList.toggle("hide");
    // -- plus long à écrire
    // ++ rend le code plus prévisible => plus facile d'intervenir dessus ! 
    // pause rdv dans 15 min 
    // installer Bootstrap => joli composant 
    // @Input() @Output() => communiquer les composants les uns avec les autres 
    // Formulaire Template Drive Form / Reactive Form 
    // 11h40 bon café tout le monde !! 
  }


  public onClick3(element :HTMLDivElement){
    // console.log();
    element.classList.toggle("hide");
  }

  public onClick2(){
    // plusieurs manières de modifier un élément dans le DOM 
    // créer une nouvelle propriété dans votre class 
    // la fonction va modifier sa valeur 
    this.afficher = !this.afficher ;
    // le fait de modifier une propriété dans la class => mise à jour de la vue du composant
  }


  public onClick(){
    alert("je suis cliqué")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
