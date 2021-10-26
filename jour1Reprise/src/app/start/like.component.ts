import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import {LikeInterface} from "./like"

@Component({
  selector: 'app-like',
  template: `
    <div class="mb-2">
      <span>{{ like.nb }}</span>
      <button class="btn btn-primary btn-sm mx-2" (click)="onClick(like.id)">augmenter</button>
      <button class="btn btn-warning btn-sm" (click)="onClick2(like.id)">diminuer</button>
    </div>
  `
})
export class LikeComponent implements OnInit {
  @Input() like : LikeInterface  = {id : 0 , nb : 0} ;
  @Output() augmenter = new EventEmitter();
  @Output() diminuer = new EventEmitter();
  public onClick(id :number){
    // alert(id)
    this.augmenter.emit(id);
  }
  public onClick2(id :number){
    this.diminuer.emit(id);
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
