import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registerForm:FormGroup;
  showSubmitResults:Boolean;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.showSubmitResults=false;
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: this.formBuilder.group({
        street:[],
        zip:[],
        city:[]
      })
    })
  }

  
  onSubmit(form:FormGroup):void{
    this.showSubmitResults=true;
    console.log("Submit button clicked");
    console.log("Valid? : ", form.valid);
    console.log("First Name : ", form.value.firstName);
    console.log("Last Name : ", form.value.lastName);
    console.log(form.controls)
    // console.log(form.controls.registerForm.markAsUntouched)
    this.registerForm.reset();

  }

}
