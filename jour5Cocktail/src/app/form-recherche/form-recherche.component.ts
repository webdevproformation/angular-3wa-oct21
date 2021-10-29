import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-recherche',
  templateUrl: './form-recherche.component.html',
  styleUrls: ['./form-recherche.component.css']
})
export class FormRechercheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onKeyUp(recherche :NgModel){
    console.log(recherche)
  }

}
