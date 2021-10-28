import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLogged() :boolean{
    const auth = localStorage.getItem("auth");
    if(auth){
      return true ;
    }
    return false ;
  }
}
