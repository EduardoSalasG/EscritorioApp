import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async userLogin(usuario:any){
    return this.http.post("http://localhost:3000/login",usuario).subscribe(resp=>{
      console.log(resp); 
    })
  }
}
