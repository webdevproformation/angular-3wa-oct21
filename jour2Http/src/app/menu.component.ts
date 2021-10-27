import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <ul>
        <li><a routerLink="/">Accueil</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/rxjs">rxjs</a></li>
        <li><a routerLink="/exemple">exemple</a></li>
      </ul>
      <ul class="connexion">
        <li *ngIf="!isLogged()"><a routerLink="/connexion">Connexion</a></li>
        <li *ngIf="isLogged()" (click)="onClickLoggout($event)"><a routerLink="/">Déconnexion</a></li>
        <li *ngIf="isLogged()"><a routerLink="/">Gérer le site</a></li>
      </ul>
    <div>
  `,
  styles: [
    `div, ul{
      padding:0;margin: 0;display:flex;list-style:none;
    }
    li{
      margin-right:20px;
    }
    li:last-child{
      margin-right:0px;
    }
    .connexion{
      margin-left: auto;
    }
    `
  ]
})
export class MenuComponent implements OnInit {
  public isLogged(): boolean{
    if(localStorage.getItem("auth")){
      return true;
    }
    return false;
  }
  public onClickLoggout($event :Event){
    $event.preventDefault(); 
    localStorage.removeItem("auth");
    window.location.href="/connexion";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
