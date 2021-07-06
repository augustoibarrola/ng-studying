import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'validations-template',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  registerForm:FormGroup;
  response: HighlightResult;
  showControlStateTable:Boolean;
  reactiveFormValidations:Boolean;
  formModuleImports=`import { ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      ReactiveFormComponent,
      CustomValidator
    ],
    imports: [
      ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  `;
  formComponent=  `
  import { OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

  export class ReactiveFormValidatorsComponent implements OnInit {

    registerForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(){
      this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required]], 
        lastName: ['', [Validators.required]], 
        address: this.formBuilder.group({
          street: [], 
          zip: [], 
          city: []
        })
      })
    }
  
    onSubmit(): void {
      //some function to be executed on submit event
    }
  }
  `;
  formTemplate = `
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div>
          <label> First Name </label>
          <input type="text"/>
        </div>
        <div>
          <label> Last Name </label>
          <input type="text"/>
        </div>
        <div>
          <fieldset>
            <div>
              <label>Street</label>
              <input type="address"/>
            </div>
            <div>
              <label>Zip</label>
              <input type="text"/>
            </div>
            <div>
              <label>City</label>
              <input type="text"/>
            </div>
          </fieldset>
        </div>
        <button type="submit"> Submit </button>
      </form>
  `;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.showControlStateTable=false;
    this.reactiveFormValidations=true;
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: this.formBuilder.group({
        street:[],
        zip:[],
        city:[]
      })
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

  
  onSubmit(form: FormGroup){
    console.log("Submit button clicked");
    this.registerForm.reset();
  }

  onHighlight(event) {
    this.response = {
      language: event.language,
      relevance: event.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }


}
