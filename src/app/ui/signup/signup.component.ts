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
  isSubmitted:boolean=false;
  isLoading:boolean=false
 


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
    this.isSubmitted=true
    if(this.signupForm.valid){
     this.isLoading=true;

      const createUserDTO=this.signupForm.value

      this.authService.createUser(createUserDTO).subscribe({
        next:(response)=>{
          console.log("response from server",response)
          if(response){
            
          }
        },
        error:(error)=>{
         throw error.message
        },

        complete:()=>{
          this.isLoading=false
        }
        
      })
      this.signupForm.reset()
      this.authService.closeSignupClicked(false)
      this.authService.loginButtonClicked(true)
     

    }
  }
}
