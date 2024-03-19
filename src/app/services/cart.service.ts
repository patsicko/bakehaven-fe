import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: number[] = [];

  paymentSuccessEvent:EventEmitter<any>=new EventEmitter<any>()

  constructor() { }

  addToCart(productId: number) {
   this.cartItems.push(productId);
  }

  getCartItems() {
    return this.cartItems;
  }

  paymentAction(token:any){
   this.paymentSuccessEvent.emit(token)
  }
}
