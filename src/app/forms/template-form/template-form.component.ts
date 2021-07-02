import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{

  response: HighlightResult;
  showDirTable:Boolean;
  firstName:string;
  lastName:string;
  firstNameVal:string;
  lastNameVal:string;
  formModuleImports=`import { FormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      TemplateFormComponent,
    ],
    imports: [
      FormsModule,
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  `;
  formTemplate=
  `<form #formRef="ngForm" (ngSubmit)="onSubmit()">
  <div>
    <label> First Name </label>
    <input type="text" name="firstName" [(ngModel)]="firstName" #firstNameVal="ngModel" />
  </div>
  <div>
    <label> Last Name </label>
    <input type="text" name="lastName" [(ngModel)]="lastName" #lastNameVal="ngModel" />
  </div>
  <button type="submit"> Submit </button>
</form>
  `;
  formComponent=`export class TemplateFormComponent {
    
    firstName:string;
    lastName:string;

    constructor() { }
  
    onSubmit(): void {
      //some function to be executed on submit event
    }
  }
  `;

  ngOnInit(){
    this.showDirTable=false;
  }

  onSubmit(form:FormGroup){
    form.reset();
    console.log("Submit button clicked");
  }

  onHighlight(event){
    this.response = {
      language: event.language,
      relevance: event.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

}
