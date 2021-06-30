import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: this.formBuilder.group({
        street:[],
        zip:[],
        city:[]
      }),
      email:["", this.validateEmail] 
    });
  }

   validateEmail(formControl:FormControl){
    /* 
    The custom validation function accepts a form control object as a parameter. Through this form control object, we can access the value entered by the user. 
    */
    let EMAIL_REGEXP=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    /*
    If the validation is successful, we return null. If the validation fails, we have to return an object. The object being returned will have a key and a value. The value can be another object in which can pass some data.

    formControl.value gives the value entered by the user for that particular form control element
    */
    return EMAIL_REGEXP.test(formControl.value) ? null : {
      emailError: {
        message: "Email is invalid"
      }
    };

  }

  
  onSubmit(){
    console.log("Submit button clicked");
  }


}
