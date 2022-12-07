import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse, usuarioLogin } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  async userLogin(usuario:usuarioLogin){

    return new Promise(resolve=>{
      this.http.post<loginResponse>("http://localhost:3000/login",usuario)
      .subscribe(resp=>{
        console.log(resp); 
        resolve(resp.Code);
        // if(resp.Code == 0)
        // {  
        //   resolve(true);
        // }
        // else if (resp.Code == 2)
        // {  
        //   resolve(resp.Code);
        // }
        // else{
        //   resolve(false);
        // }
      })
  

    })
    
  }
}
