import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public subjRecherche$ = new Subject<string>()

  private url : string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

  constructor(private req : HttpClient) { }

  public getCocktail () {
    return this.req.get(this.url)
  }

  public getRecherche(){

  }
}
