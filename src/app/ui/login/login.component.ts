import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm:FormGroup
isLoginSubmitted:boolean=false
isLoading: boolean = false;
loggedUser:any=null

constructor(
  private formBuilder:FormBuilder,
  private authService:AuthService,
  private router:Router,
  private toastr: ToastrService
  
){
  this.loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
}


  closeLogin(value:boolean){
     this.authService.closeLoginButtonClicked(value)
  }

 async submitLogin(){
    this.isLoginSubmitted=true
    if(this.loginForm.valid){
      this.isLoading = true;
      
      const loginDTO:LoginDTO=this.loginForm.value;

      await this.authService.login(loginDTO).subscribe({
        next:(result=>{
         
          console.log("loginResult",result.user);
         if(result){
           this.loggedUser=result.user
          
          if(result.user.role==='admin'){
            console.log("this is admin",result.user);
            this.authService.authAction(true)
            this.router.navigate(['/dashboard']).then(() => {
              
              window.location.reload();
            });
          }else{
            this.router.navigate(['/home']).then(() => {
             
              window.location.reload();
            });
          }

          this.authService.authAction(true)
          this.toastr.success("login successfull")
         }
          
        }),
        error:(error)=>{
          this.authService.authAction(false)
          this.toastr.error("Invalid credentials")
          throw error.message
        },

        complete: () => {
          localStorage.setItem("logedUser",JSON.stringify(this.loggedUser));
          this.authService.loginSuccess(this.loggedUser)
          this.isLoading = false; 
          this.authService.closeLoginButtonClicked(false)
          this.authService.authAction(true)
        }
        
      })

      
     

      
    }
  }


 
}
