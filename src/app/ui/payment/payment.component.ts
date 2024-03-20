import { Component, OnInit, Output } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private authService:AuthService,
    private toastr:ToastrService
  ){}


  stripe: Stripe;
  card: StripeCardElement;
  displayError:any
  errorElement:any;
 loggedUser:any
  async ngOnInit() {
    this.loggedUser=this.authService.getLoggedUser()
    const stripe = await loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    if (stripe) {
      this.stripe = stripe;
      const elements = this.stripe.elements();
    
      this.card = elements.create('card', { 
        style: {
          base: {
              fontSize: '16px',
              color: '#32325d',
              '::placeholder': {
                  color: '#aab7c4',
              },
          },
      },
       });
      this.card.mount('#card-element');

      this.card.on('change', (event) => {
        
        if (event.error) {
          this.displayError = event.error.message;
        } else {
          this.displayError = '';
        }
      });
    } else {
      console.error('Failed to load Stripe.');
    }
  }

  async handleSubmit() {

  if(this.loggedUser){
    const { token, error } = await this.stripe.createToken(this.card);
  
    if (error) {
      
      this.displayError = error.message;
    } else {
      // Send the token to your server
      this.stripeTokenHandler(token);
    }

  }
  else{
   this.toastr.warning("Login before payment")
  }
  }
  
  stripeTokenHandler(token:any) {
    // Send the token to your server for processing
    this.cartService.paymentAction(token)
  // console.log(token)
  }
}
