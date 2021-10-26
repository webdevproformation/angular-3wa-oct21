import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div>
      <ul>
        <li><a routerLink="/">Accueil</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/rxjs">rxjs</a></li>
      </ul>
      <ul class="connexion">
        <li><a routerLink="/connexion">Connexion</a></li>
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

  constructor() { }

  ngOnInit(): void {
  }

}
