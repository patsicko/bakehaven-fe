import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  quantity: number = 1;

  singleProduct:boolean=false
  allProducts:boolean=true

  showSingle(){
    this.singleProduct=true
    this.allProducts=false
  }

  showAllProducts(){
    this.allProducts=true
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


  products = [
    {
      image: '../../../assets/weeding.png',
      title: 'Wedding',
      price: '5400 Rwf',
      description: 'Custom-designed wedding cakes tailored to your style and taste.',
      rating: '⭐️⭐️⭐️⭐️⭐️'
    },
    {
      image: '../../../assets/cakewed.jpg',
      title: 'Wedding',
      price: '5400 Rwf',
      description: 'Custom-designed wedding cakes tailored to your style and taste.',
      rating: '⭐️⭐️⭐️⭐️⭐️'
    },
    
    {
      image: '../../../assets/download (1).jpeg',
      title: 'Product 1',
      price: 'Price 1',
      description: 'Description 1',
      rating: 'Rating 1'
    },
    {
      image: '../../../assets/download (2).jpeg',
      title: 'Product 2',
      price: 'Price 2',
      description: 'Description 2',
      rating: 'Rating 2'
    },
    {
      image: '../../../assets/download (3).jpeg',
      title: 'Product 3',
      price: 'Price 3',
      description: 'Description 3',
      rating: 'Rating 3'
    },
    {
      image: '../../../assets/download (4).jpeg',
      title: 'Product 4',
      price: 'Price 4',
      description: 'Description 4',
      rating: 'Rating 4'
    },
    {
      image: '../../../assets/download (5).jpeg',
      title: 'Product 5',
      price: 'Price 5',
      description: 'Description 5',
      rating: 'Rating 5'
    },
    {
      image: '../../../assets/download (6).jpeg',
      title: 'Product 6',
      price: 'Price 6',
      description: 'Description 6',
      rating: 'Rating 6'
    },
    {
      image: '../../../assets/download.jpeg',
      title: 'Product 7',
      price: 'Price 7',
      description: 'Description 7',
      rating: 'Rating 7'
    },
    {
      image: '../../../assets/images (1).jpeg',
      title: 'Product 8',
      price: 'Price 8',
      description: 'Description 8',
      rating: 'Rating 8'
    },
    {
      image: '../../../assets/images (2).jpeg',
      title: 'Product 9',
      price: 'Price 9',
      description: 'Description 9',
      rating: 'Rating 9'
    },
    {
      image: '../../../assets/images (3).jpeg',
      title: 'Product 10',
      price: 'Price 10',
      description: 'Description 10',
      rating: 'Rating 10'
    },
    {
      image: '../../../assets/images (4).jpeg',
      title: 'Product 11',
      price: 'Price 11',
      description: 'Description 11',
      rating: 'Rating 11'
    },
    {
      image: '../../../assets/images (5).jpeg',
      title: 'Product 12',
      price: 'Price 12',
      description: 'Description 12',
      rating: 'Rating 12'
    },
    {
      image: '../../../assets/images (6).jpeg',
      title: 'Product 13',
      price: 'Price 13',
      description: 'Description 13',
      rating: 'Rating 13'
    }
  ];

}
