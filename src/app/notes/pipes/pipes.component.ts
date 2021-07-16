import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit   {

  showBuiltInPipes:Boolean;
  showCustomPipes:Boolean;

  ngOnInit():void{
    this.showBuiltInPipes = false;
    this.showCustomPipes = false;
  }

  switchDivs():void{
    if(this.showBuiltInPipes==false){
      this.showBuiltInPipes=!this.showBuiltInPipes;
      this.showCustomPipes=false;
    } else if(this.showCustomPipes==false){
      this.showCustomPipes=!this.showCustomPipes
      this.showBuiltInPipes=false;
     } 
  }
 
}
