import { Component} from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';


@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent{

  classVariable:String;
  response: HighlightResult;
  formCode=`  <form #formRef = "ngForm" (ngSubmit) = "onSubmit()">
    <label for="sampleInput"> Sample Input: </label>
    <input type="text" class="form-control" 
      name="controlname" id="sampleInput" 
      [(ngModel)]="classVariable" 
      #variable ="ngModel"
    />
  </form>`;
  componentCode=``;

  onSubmit(){
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
