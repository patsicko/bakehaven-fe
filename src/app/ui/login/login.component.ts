import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm:FormGroup
isLoginSubmitted:boolean=false

constructor(
  private formBuilder:FormBuilder,
  private authService:AuthService
){
  this.loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
}


  closeLogin(value:boolean){
     this.authService.closeLoginButtonClicked(value)
  }

  submitLogin(){
    this.isLoginSubmitted=true
    if(this.loginForm.valid){
      
      const loginDTO:LoginDTO=this.loginForm.value;

      this.authService.login(loginDTO).subscribe({
        next:(result=>{
          console.log("loginResult",result.user);
          localStorage.setItem("logedUser",JSON.stringify(result.user))
        }),
        error:(error)=>{
          throw error.message
        }
      })

      
      this.authService.closeLoginButtonClicked(false)
      this.authService.authAction(true)

      
    }
  }


 
}
