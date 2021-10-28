import { Component , OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth"


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <nav class="navbar navbar-expand navbar-light bg-light px-4">
        <a routerLink="/" class="navbar-brand">{{ title }}</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a routerLink="/" class="nav-link">Budget</a>
          </li>
          <li class="nav-item">
            <a routerLink="/todo" class="nav-link">Todo List</a>
          </li>
          <li class="nav-item" *ngIf="authService.isLogged()">
            <a routerLink="/enregistrement" class="nav-link">Créer un profil User</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto" >
          <li class="nav-item" *ngIf="!authService.isLogged()">
            <a routerLink="/connexion" class="nav-link">Connexion</a>
          </li>
          <li class="nav-item" *ngIf="authService.isLogged()">
            <a routerLink="/" class="nav-link" (click)="onClickDeconnexion($event)">Deconnexion</a>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
  </div>        `
})
export class AppComponent implements OnInit {
  public title : string = 'jour3Firebase';
  public ngOnInit(){
  }
  public onClickDeconnexion($event :Event){
    $event.preventDefault();
    localStorage.removeItem("auth");
    this.auth.signOut();
    window.location.href = "/";
  }
  public constructor(public authService :AuthService , private auth : AngularFireAuth ){}
}
