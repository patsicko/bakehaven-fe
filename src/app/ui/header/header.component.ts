import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(
    private toastr: ToastrService,
    private authService:AuthService,
    private cartService: CartService
    ) {}

  showSignupForm:boolean=false
  showLoginForm:boolean=false
  isLogged:boolean =false
  showProductForm:boolean=false
  cartItems: number[] = [];
  logedUser:any;
 



  ngOnInit(): void {
    this.authService.showSignupEvent.subscribe(value=>{
    this.showSignupForm=value
    })

    this.authService.showLoginFormEvent.subscribe(value=>{
      this.showLoginForm=value
    })

    this.authService.isLoggedEvent.subscribe(value=>{
      this.isLogged=true;

      const user =localStorage.getItem("logedUser");

      

      if(user){
      
        this.logedUser=JSON.parse(user)
        console.log("user from local storage",this.logedUser)
      }
      
    })

    this.authService.showProductFormEvent.subscribe(value=>{
      this.showProductForm=true
    })

   this.authService.showProductFormEvent.subscribe(value=>{
    this.showProductForm=value
   })

   this.cartItems = this.cartService.getCartItems();

  }
 
  showSignup(value:boolean){
    this.showSignupForm=value
  }
  
  showLogin(value:boolean){
  this.showLoginForm=value
  }



  logout(){
    this.isLogged=false
    localStorage.removeItem("logedUser");
  }


}
