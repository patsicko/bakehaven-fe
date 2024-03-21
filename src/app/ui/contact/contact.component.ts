import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastr:ToastrService
    ){

  this.contactUs=this.formBuilder.group({

    names:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    message:['',[Validators.required]]

  })

  }

  contactUs:FormGroup

  isSubmitted:boolean=false
  submitMessage(){
    this.isSubmitted=true
    if(this.contactUs.valid){

    this.authService.postMessage(this.contactUs.value).subscribe({
      next:(response)=>{
        console.log("message",response)
      },
      error:(error)=>{
  this.toastr.error("failed to send message")
      }
    })

      console.log("contact form",this.contactUs.value);
      this.contactUs.reset()
    }
  }

}
