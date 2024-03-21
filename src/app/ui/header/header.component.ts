import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private cartService: CartService,
    private router:Router
    ) {}

  showSignupForm:boolean=false
  showLoginForm:boolean=false
  isLogged:boolean =false
  showProductForm:boolean=false
  cartItems: number[] = [];
  loggedUser:any;
  notifications:number;
  messages:any
 



  ngOnInit(): void {
    const loggedUser = this.authService.getLoggedUser();

    if(loggedUser){
      this.loggedUser=loggedUser
      this.isLogged=true;
      if(loggedUser.role==='admin'){
        this.getMessages()
      }
    }else{
      this.loggedUser=null
      this.isLogged=false
    }
   
   
  
    this.authService.showSignupEvent.subscribe(value=>{
    this.showSignupForm=value
    })

    this.authService.showLoginFormEvent.subscribe(value=>{
      this.showLoginForm=value
    })

    this.authService.isLoggedEvent.subscribe(value=>{
      this.isLogged=value;
      if (!this.isLogged) {
        this.router.navigate(['/home']); 
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
 


  getMessages(){
    this.authService.getMessages().subscribe({
      next:(result)=>{
      this.messages=result;
      this.notifications=result.length
      },
      error:(error)=>{
        this.toastr.error("unable to get notifications");
        throw error.message
      }
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
    localStorage.removeItem("logedUser");

   
    
    this.router.navigate(['/home']).then(() => {
      // Reload the browser to ensure a successful logout
      window.location.reload();
    });
    this.toastr.warning('You logged out');

    history.pushState(null, window.location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    
    
  }


}
