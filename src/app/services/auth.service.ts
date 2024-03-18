import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  showSignupEvent:EventEmitter<boolean>=new EventEmitter<boolean>()

  showLoginFormEvent:EventEmitter<boolean> = new EventEmitter<boolean>()

  isLoggedEvent:EventEmitter<boolean> = new EventEmitter<boolean>()
  showProductFormEvent:EventEmitter<boolean> = new EventEmitter<boolean>()


  singupButtonClicked(value:boolean){
    this.showSignupEvent.emit(value)
  }

  closeSignupClicked(value:boolean){
    this.showSignupEvent.emit(value)
  }

  loginButtonClicked(value:boolean){
    this.showLoginFormEvent.emit(value)
  }

  closeLoginButtonClicked(value:boolean){
  this.showLoginFormEvent.emit(value)
  }

  authAction(value:boolean){
    this.isLoggedEvent.emit(value)
  }

  createProductClicked(value:boolean){
    this.showProductFormEvent.emit(value)
  }

  
}
