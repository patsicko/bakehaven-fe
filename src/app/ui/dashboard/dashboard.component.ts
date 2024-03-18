import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
   this.getOrders()
  }

  constructor(private authService:AuthService){}

  orders:any
  users:any
  products:any
  


  
  createProduct(value:boolean){
    this.authService.createProductClicked(value)
  }
 

  getUsers(){
    this.orders=null
    this.products=null
   this.users=[
      {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      }
    ]

  }

  getProducts(){
    this.users=null
    this.orders=null


    this.products=[
      {
        "id": 2,
        "productName": "small cake",
        "category": "cakes",
        "quantity": 5,
        "price": 500,
        "rating": null,
        "inStock": false,
        "imageUrl": "cake image"
      },
      {
        "id": 3,
        "productName": "indazi",
        "category": "cakes",
        "quantity": 10,
        "price": 500,
        "rating": null,
        "inStock": false,
        "imageUrl": "cake image"
      }
    ]

  }

 


  getOrders(){

    this.users=null
    this.products=null

  this.orders = [
    {
      "id": 1,
      "quantity": 1,
      "totalPrice": 500,
      "createdAt": "2024-03-14T04:19:52.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 2,
      "quantity": 3,
      "totalPrice": 1500,
      "createdAt": "2024-03-14T04:22:03.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 3,
      "quantity": 10,
      "totalPrice": 5000,
      "createdAt": "2024-03-15T12:55:20.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 4,
      "quantity": 20,
      "totalPrice": 10000,
      "createdAt": "2024-03-15T12:56:41.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 5,
      "quantity": 10,
      "totalPrice": 10000,
      "createdAt": "2024-03-17T10:17:18.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        },
        {
          "id": 3,
          "productName": "indazi",
          "category": "cakes",
          "quantity": 10,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 6,
      "quantity": 10,
      "totalPrice": 10000,
      "createdAt": "2024-03-17T15:27:37.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        },
        {
          "id": 3,
          "productName": "indazi",
          "category": "cakes",
          "quantity": 10,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 7,
      "quantity": 0,
      "totalPrice": 0,
      "createdAt": "2024-03-17T15:28:19.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    }
    ,
    {
      "id": 1,
      "quantity": 1,
      "totalPrice": 500,
      "createdAt": "2024-03-14T04:19:52.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 2,
      "quantity": 3,
      "totalPrice": 1500,
      "createdAt": "2024-03-14T04:22:03.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 3,
      "quantity": 10,
      "totalPrice": 5000,
      "createdAt": "2024-03-15T12:55:20.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 4,
      "quantity": 20,
      "totalPrice": 10000,
      "createdAt": "2024-03-15T12:56:41.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 5,
      "quantity": 10,
      "totalPrice": 10000,
      "createdAt": "2024-03-17T10:17:18.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        },
        {
          "id": 3,
          "productName": "indazi",
          "category": "cakes",
          "quantity": 10,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 6,
      "quantity": 10,
      "totalPrice": 10000,
      "createdAt": "2024-03-17T15:27:37.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        },
        {
          "id": 3,
          "productName": "indazi",
          "category": "cakes",
          "quantity": 10,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    },
    {
      "id": 7,
      "quantity": 0,
      "totalPrice": 0,
      "createdAt": "2024-03-17T15:28:19.000Z",
      "isPaid": false,
      "status": "pending",
      "user": {
        "id": 1,
        "firstName": "Manibaho",
        "lastName": "Patrick",
        "email": "patsicko@gmail.com",
        "password": "$2b$10$mX8ftMWungBLc4bYmu/86es64fKR9bv1/5huHQBTh4XMCrgWfYkJa",
        "role": "user",
        "isActive": true
      },
      "products": [
        {
          "id": 2,
          "productName": "small cake",
          "category": "cakes",
          "quantity": 5,
          "price": 500,
          "rating": null,
          "inStock": false,
          "imageUrl": "cake image"
        }
      ]
    }
  ]
}
}


