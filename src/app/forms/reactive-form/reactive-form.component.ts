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
  formComponent=  `import { FormBuilder, FormGroup } from '@angular/forms';

  export class ReactiveFormComponent {

    registerForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { }
  
    onSubmit(): void {
      //some function to be executed on submit event
    }
  }
  `;
  formTemplate = `
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label class="label-text-black">First Name</label>
    <input type="text" class="form-control" formControlName="firstName" />
    <div *ngIf="registerForm.controls.firstName.hasError('required') && registerForm.controls.firstName.dirty"
      class="alert alert-danger">
      This is a required field
    </div>
  </div>
  <div class="form-group">
    <label>Last Name</label>
    <input type="text" class="form-control" formControlName="lastName" />
    <p *ngIf="registerForm.controls.lastName.hasError('required') && registerForm.controls.lastName.dirty"
      class="alert alert-danger">
      This field is required!
    </p>
  </div>
  <div class="form-group fieldset-group">
    <fieldset formGroupName="address">
      <div class="form-control">
        <label>Street</label>
        <input type="text" class="form-control" formControlName="street" />
      </div>
      <div class="form-control">
        <label>Zip</label>
        <input type="text" class="form-control" formControlName="zip" />
      </div>
      <div class="form-control">
        <label>City</label>
        <input type="text" class="form-control" formControlName="city" />
      </div>
    </fieldset>
  </div>
  <button type="submit">Submit</button>
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

}
