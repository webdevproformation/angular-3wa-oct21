import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public data = {
    titre : "Bonjour les amis",
    prix : 30 ,
    date : new Date(),
    p : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque provident nisi quam ab sunt iure, nostrum quod quae animi facere."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
