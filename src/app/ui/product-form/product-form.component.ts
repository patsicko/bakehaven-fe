import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm: FormGroup;
  isSubmitted: boolean = false;
  imageUrl:any;
  isLoading:boolean=false
  
categories: string[] = ['cakes', 'cupcakes', 'weddings', 'snacks', 'ibiraha', 'beignets', 'amandazi', 'sambusa'];


  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
     private http: HttpClient,
     private productSrvice:ProductService,
     private toastr:ToastrService
     ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageUrl: [null, [Validators.required]]
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.uploadImage(file).subscribe((imageUrl: any) => {
      this.imageUrl = imageUrl.secure_url;
    });
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mydocs');

    return this.http.post<any>('https://api.cloudinary.com/v1_1/dkgq3at71/image/upload', formData);
  }

  create() {
    this.isSubmitted = true;
  
    if (this.productForm.valid && this.imageUrl) {
      this.isLoading=true
      
      const formData=this.productForm.value;
      formData.imageUrl=this.imageUrl;

      this.productSrvice.createProduct(formData).subscribe({
        next:(result)=>{
          console.log("product created successfully",result);
          this.authService.closeProductFormClicked(false);
          this.toastr.success("product created successfully");
        return result
        },
        error:(error)=>{
          this.toastr.error("failed to create product")
          throw error.message
        },
        complete:()=>{
          this.isLoading=false
        }
      })

     
    }
  }



  closeProductForm(value:boolean){
   this.authService.closeProductFormClicked(value)
  }
}
