import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
   this.getOrders()
  }

  constructor(
    private authService:AuthService,
    private productService:ProductService,
    private toastr:ToastrService,
    private router:Router
    ){}

  orders:any
  users:any
  products:any
  


  
  createProduct(value:boolean){
    this.authService.createProductClicked(value)
  }
 

  getUsers(){
    this.orders=null
    this.products=null;
    this.authService.getUsers().subscribe({
      next:(result)=>{
        if(result){
          this.users=result
        }
      },
      error:(error)=>{
        this.toastr.error("Unable to get users");
        return error.message
      }
    })


  }

  getProducts(){
    this.users=null
    this.orders=null
  this.productService.getProducts().subscribe({
    next:(result)=>{
      if(result){
        console.log("products",result)
        this.products=result
      }
    },
    error:(error)=>{
      this.toastr.error("Unable to get products");
      return error.message
    }
  })

    

  }

 


  getOrders(){

    this.users=null
    this.products=null;

    this.productService.getOrders().subscribe({
      next:(result)=>{
        if(result){
          this.orders=result
        }
      },
      error:(error)=>{
        this.toastr.error("Unable to get orders");
        return error.message
      }
    })

  this.orders = [
    
  ]
}


approveOrder(id:number){
this.productService.approveOrder(id).subscribe({
  next:(result)=>{
    this.getOrders();
    return result;
  },error:(error)=>{
    this.toastr.error("Unable to approve the order")
  }
})
}

cancelOrder(id:number){
this.productService.cancelOrder(id).subscribe({
  next:(result)=>{
    this.getOrders()
    return result
  },
  error:(error)=>{
    throw error.message
  }
})
}

deleteOrder(id:number){
this.productService.deleteOrder(id).subscribe({
  next:(result)=>{
    this.getOrders()
    return result;
  },
  error:(error)=>{
    throw error.message
  }
})
}

backHome(){
  this.router.navigate(['/home']).then(() => {
             
    window.location.reload();
  });
}
}


