import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CreateUserDTO, LoginDTO } from '../models/user.models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  headers=new HttpHeaders({
    'Content-Type':'application/json'
  });
appUrl='http://localhost:3001/api'



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

  closeProductFormClicked(value:boolean){
    this.showProductFormEvent.emit(value)
  }


createUser(createUserDTO:CreateUserDTO):Observable<any>{
return this.http.post<CreateUserDTO>(`${this.appUrl}/user/create`,createUserDTO,{headers:this.headers}).pipe(
  tap(result=>{
    return result
  })
)
}

login(loginDTO:LoginDTO):Observable<any>{
  return this.http.post<LoginDTO>(`${this.appUrl}/user/login`,loginDTO,{headers:this.headers}).pipe(
    tap(result=>{
      return result
    })
  )
}

}
