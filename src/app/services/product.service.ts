import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { OrderDTO, ProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  headers=new HttpHeaders({
    'Content-Type':'application/json'
  });
appUrl='http://localhost:3001/api'




getProducts():Observable<any>{
  return this.http.get(`${this.appUrl}/products`,{headers:this.headers}).pipe(
   tap(result=>{
    return result
   }) 
  )
}

createProduct(productDTO:ProductDTO):Observable<any>{
return this.http.post<ProductDTO>(`${this.appUrl}/products`,productDTO,{headers:this.headers}).pipe(
  tap(result=>{
    return result
  })
)
}

createOrder(orderDTO:OrderDTO):Observable<any>{
  return this.http.post<OrderDTO>(`${this.appUrl}/order`,orderDTO,{headers:this.headers}).pipe(
    tap(result=>{
      return result
    })
  )

}


getOrders():Observable<any>{
  return this.http.get(`${this.appUrl}/order`,{headers:this.headers}).pipe(
    tap(result=>{
      return result
    })
  )
}
}
