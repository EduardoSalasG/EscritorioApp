import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRol, loginResponse, usuarioLogin } from '../interfaces/interfaces';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  async userLogin(usuario:usuarioLogin){

    return new Promise(resolve=>{
      this.http.post<loginResponse>("http://localhost:3000/login1",usuario)
      .subscribe(resp=>{
        console.log(resp); 
        resolve(resp);
      })

    })
    
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  async getRol(){

    return new Promise(resolve=>{
      this.http.get<getRol>("http://localhost:3000/get-rol")
      .subscribe(resp=>{
        console.log(resp); 
        resolve(resp);
      })

    })
    
  }


}
