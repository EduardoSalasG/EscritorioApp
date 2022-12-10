import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {userService} from '../services/user.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private service: userService){}

  intercept(req:HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    const token = this.service.getToken();

      const tokenizeReq= req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(tokenizeReq)
      return next.handle(tokenizeReq);
  }

}
