import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any;
  loggedIn!: boolean;

  constructor(private auth: AuthService, private route: Router, private fb: FormBuilder,private authService: SocialAuthService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
     //google Authentication
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      this.route.navigate(['/header'])
    });

  
  }
  get email(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.route.navigate(['/header'])
    } else {
      console.log('this is invalid input')
      alert("Please Enter valid Details!")
    }
 }

 

  

}
