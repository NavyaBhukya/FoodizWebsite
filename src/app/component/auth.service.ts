import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
 
  login():Promise<any>{
    return new Promise((resolve)=>{
      localStorage.setItem('loggedIn','true');
      resolve(true);
    })
  }
   isLoggedIn():boolean{
    return !!localStorage.getItem('loggedIn');
   }
}
