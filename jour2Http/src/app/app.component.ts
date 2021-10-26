import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header>
        <app-menu></app-menu>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles : [`
    .container{
      margin: 20px auto;
      width:100%;
      max-width:800px;
    }
  `]
})
export class AppComponent {}
