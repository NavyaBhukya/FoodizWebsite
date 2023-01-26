import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin = true
  constructor(){}
  ngOnInit(): void {
    
  }
registarForm = new FormGroup({
email: new FormControl("" , [Validators.required]),
password: new FormControl("")

})
   
onSubmit(){
  console.log(this.registarForm);
}

get email(): FormControl {
  return this.registarForm.get("email") as FormControl
}


}
