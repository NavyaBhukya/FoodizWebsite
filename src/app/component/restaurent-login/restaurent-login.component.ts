import { Component, OnInit } from '@angular/core';
import { RestaurentAuthService } from '../services/restaurent-auth.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-restaurent-login',
  templateUrl: './restaurent-login.component.html',
  styleUrls: ['./restaurent-login.component.css']
})
export class RestaurentLoginComponent implements OnInit {
    constructor(private seller:RestaurentAuthService, private router:Router ){}
    showLogin = false;
    authError:string='';
    ngOnInit(): void {
      this.seller.reloadSeller()
    }
    signUp(data:SignUp):void{
      console.warn(data);
      this.seller.userSignUp(data)
      
    }
    login(data:SignUp):void{
      this.authError='';
      this.seller.userSignUp(data)
      this.seller.isLoginError.subscribe((isError)=>{
        if(isError){
          this.authError = "Email or password is not correct";
        }
      })
      
    }
    openLogin(){
    this.showLogin = true
    }
    openSignup(){
      this.showLogin = false
 
    }
}
