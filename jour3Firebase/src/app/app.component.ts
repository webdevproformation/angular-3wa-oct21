import { Component , OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database"


@Component({
  selector: 'app-root',
  template: `
              <h1>{{title}}</h1>
              <input #info >
              <button (click)="onClick(info.value)">créer</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title : string = 'jour3Firebase';

  public constructor( private db : AngularFireDatabase ){}

  public onClick(info : string){
    const article = { nom : info }
    this.db.list("/articles").push(article)
  }

  public ngOnInit(){
  }

}
