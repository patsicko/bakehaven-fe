import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm:FormGroup
  isSubmitted:boolean=false
 


  constructor( 
    private formBuilder:FormBuilder,
    private authService:AuthService
    ){
    this.signupForm = this.formBuilder.group({
    
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
  }


  closeSignupForm(value:boolean){
this.authService.closeSignupClicked(value)
  }

  submitSignup(){
    if(this.signupForm.valid){
      console.log("signup data",this.signupForm.value)

    }
  }
}
