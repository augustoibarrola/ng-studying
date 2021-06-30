import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


  showTemplateForm: Boolean;
  showReactiveForm: Boolean;
  showValidations: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.showTemplateForm = false;
    this.showReactiveForm = false;
    this.showValidations = false;
  }

  showTemplateFormBtn(){
    this.showTemplateForm=true;
    this.showReactiveForm=false;
    this.showValidations=false;
  }

  showReactiveFormBtn(){
    this.showTemplateForm=false;
    this.showReactiveForm=true;
    this.showValidations=false;
  }
  showValidationsBtn(){
    this.showTemplateForm=false;
    this.showReactiveForm=false;
    this.showValidations=true;
  }

}
