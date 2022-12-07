import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpsmenuService {

  constructor(private http: HttpClient) { }

  async userLogin(usuario:any){
    return this.http.post("http://localhost:3000/opcion-menu",usuario).subscribe(resp=>{
      console.log(resp); 
    })
  }
}
