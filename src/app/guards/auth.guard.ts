import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { userService} from "../services/user.service";
import {Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(
    private userService : userService,
    private router : Router
  ) {}

  canActivate() : boolean{
    if (this.userService.loggedIn()){
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
  
}
