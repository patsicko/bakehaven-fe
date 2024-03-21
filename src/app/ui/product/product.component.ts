import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor(
    private cartService: CartService,
    private productService:ProductService,
    private authService:AuthService,
    private toastr:ToastrService
  ){}
loggedUser:any;


  ngOnInit(): void {

    
    this.getProducts();


    this.cartService.paymentSuccessEvent.subscribe(token=>{
      console.log("token",token)
      this.productIds.push(this.single?.id);
      this.loggedUser=this.authService.getLoggedUser()
    
      const order={
        userId: this.loggedUser.id,
        productIds:this.productIds,
        quantity: this.quantity
      }
      
      this.productService.createOrder(order).subscribe({
        next:(result)=>{
          console.log("created order",result);
          this.toastr.success("Your order is successfull, we will contact you for delivery soon");
          this.singleProduct=false
        },
      error:(error)=>{
        this.toastr.error("Unable to order the product");
        throw error.message
      }
      })
      
    })
  }

  quantity: number = 1;
  productIds: number[] = [];

  single:{
    id:number,
    name:string,
    category:string,
    description:string,
    quantity:number,
    price:number,
    rating:any,
    inStock:boolean,
    imageUrl:string
  }

  singleProduct:boolean=false
  allProducts:boolean=true;
  categories:any;
  showPaymentCard:boolean=false;


  showPayment(){
    this.showPaymentCard=true
  }

  showSingle(id:number){
   for(let i=0; i<this.products.length;i++){
    if(this.products[i].id===id){
      this.single=this.products[i]
    }
   }

    
    this.singleProduct=true
    this.allProducts=false
  }

  showAllProducts(){
    this.allProducts=true,
    this.getProducts()
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


  addToCart(productId: number) {
    this.cartService.addToCart(productId);
  }

  getProductsByCategory(category: string): any[] {
    this.allProducts=false;
   
    return this.categories= this.products.filter(product => product.category === category);
  }
  
  products =[
    {
      "id": 2,
      "name": "indazi",
      "category": "cakes",
      "description": "",
      "quantity": 5,
      "price": 500,
      "rating": null,
      "inStock": false,
      "imageUrl": "../../../assets/download (5).jpeg"
    }
  ]


  getProducts(){
  this.productService.getProducts().subscribe({
    next:(result)=>{
      this.products=result
    },error:(error)=>{
      throw error.message
    }
  })
  }



}
