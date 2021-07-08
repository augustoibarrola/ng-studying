import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';


@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {
  
  gistId:string="f069ccbc08b189df987750d19239a760";
  codeUrl:string="https://gist.github.com/augustoibarrola/f069ccbc08b189df987750d19239a760"
  showDiv:Boolean=false;

  constructor() { }

  baseCode=`<base href="/">`;

  ngOnInit(): void {
  }

}
