import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  signupUsers: any[] = []
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  }
  valid: any;
  router: any;

  constructor(private route:Router) { }
  ngOnInit(): void { }

  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.minLength(6))
  })

  onSubmit() {
    // console.log(this.signUpForm.get("email"));
    
  }

  get userName(): FormControl {
    return this.signUpForm.get("userName") as FormControl;
  }
  get email(): FormControl {
    return this.signUpForm.get("email") as FormControl;
  }
  get password(): FormControl {
    return this.signUpForm.get("password") as FormControl;
  }

  
  
  onSignUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.router.navigate(['./home'])
    } else {
      console.log('this is invalid input')
      alert("Please Enter valid Details!")
    }

  }
}
