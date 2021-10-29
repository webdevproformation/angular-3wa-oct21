import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";
import { Router , CanActivate} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private nav : Router , private auth : AuthService) {}
  public canActivate(route :any) :boolean{
      if(this.auth.isLogged()){
        return true;
      }
      this.nav.navigate(["/connexion"]);
      return false;
  }
}
