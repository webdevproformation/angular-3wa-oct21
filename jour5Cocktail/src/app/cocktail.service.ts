import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public subjRecherche$ = new Subject<string>()

  private urlComplet : string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  private urlRecherche : string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

  constructor(private req : HttpClient) { }

  public getCocktail (url : string = "") : Observable<Object> {
    if(url == ""){
      return this.req.get(this.urlComplet);
    }
    return this.req.get(`${this.urlRecherche}${url}`)
  }

  public getRecherche(){

  }
}
