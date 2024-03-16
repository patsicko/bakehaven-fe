import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm:FormGroup


  constructor( private formBuilder:FormBuilder){
    this.signupForm = this.formBuilder.group({
    
      firstName:['',[Validators.required]],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required]

    })
  }


}
