import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  constructor(private formBuilder:FormBuilder){

  this.contactUs=this.formBuilder.group({

    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    message:['',[Validators.required]]

  })

  }

  contactUs:FormGroup

  isSubmitted:boolean=false
  submitMessage(){
    this.isSubmitted=true
    if(this.contactUs.valid){
      console.log("contact form",this.contactUs.value)
    }
  }

}
