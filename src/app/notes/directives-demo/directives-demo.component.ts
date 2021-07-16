import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  color:string;
  condition:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeCondition():void{
    this.condition=!this.condition;
  }

}
