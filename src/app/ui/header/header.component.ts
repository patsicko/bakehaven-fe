import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private toastr: ToastrService,
    private authService:AuthService
    ) {}

  showSignupForm:boolean=false
  showLoginForm:boolean=false
  isLogged:boolean =false
  showProductForm:boolean=false
 



  ngOnInit(): void {
    this.authService.showSignupEvent.subscribe(value=>{
    this.showSignupForm=value
    })

    this.authService.showLoginFormEvent.subscribe(value=>{
      this.showLoginForm=value
    })

    this.authService.isLoggedEvent.subscribe(value=>{
      this.isLogged=true
    })

    this.authService.showProductFormEvent.subscribe(value=>{
      this.showProductForm=true
    })

  }
 
  showSignup(value:boolean){
    this.showSignupForm=value
  }
  
  showLogin(value:boolean){
  this.showLoginForm=value
  }



  logout(){
this.isLogged=false
  }


}
