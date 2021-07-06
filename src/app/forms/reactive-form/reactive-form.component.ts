import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registerForm: FormGroup;
  showSubmitResults: Boolean;
  reactiveFormValidations:Boolean;
  response: HighlightResult;
  formModuleImports=`import { ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      ReactiveFormComponent,
    ],
    imports: [
      ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  `;
  formComponent=`import { FormGroup } from '@angular/forms';

  export class ReactiveFormComponent {

    registerForm: FormGroup;
    
    constructor() { }
  
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.showSubmitResults = false;
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    })
  }
  


  onSubmit(form: FormGroup): void {
    this.showSubmitResults = true;
    console.log("Submit button clicked");
    console.log("Valid? : ", form.valid);
    console.log("First Name : ", form.value.firstName);
    console.log("Last Name : ", form.value.lastName);
    console.log(form.controls)
    // console.log(form.controls.registerForm.markAsUntouched)
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

  test(){
    console.log("hello")
  }

}
