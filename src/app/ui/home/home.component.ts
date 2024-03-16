import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = [
    "../../../assets/image 29.png",
    '../../../assets/download (2).jpeg',
    '../../../assets/download (3).jpeg',
    '../../../assets/download (4).jpeg',
    '../../../assets/download (5).jpeg',
    '../../../assets/download (6).jpeg',
    '../../../assets/images (1).jpeg',
    '../../../assets/images (2).jpeg',
    '../../../assets/images (3).jpeg'

   
    // Add more image paths here
  ];
  currentImageIndex: number = 0;
  currentImage: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadImage();
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.loadImage();
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.loadImage();
  }

  loadImage(): void {
    this.currentImage = this.images[this.currentImageIndex];
  }

}
