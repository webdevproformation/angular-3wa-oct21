import { Component , OnInit } from '@angular/core';


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
        </ul>
      </nav>
      <router-outlet></router-outlet>
  </div>        `
})
export class AppComponent implements OnInit {
  public title : string = 'jour3Firebase';
  public ngOnInit(){
  }
}
