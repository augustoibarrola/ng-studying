import { Directive, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
/** ElementRef => @angular/core
 * ElementRef must be imported and injected in the constructor as a 
 * dependency in order to access and manipulatr HTML elements. It
 * allows for direct access to DOM elements
 * 
 */
import { HostListener } from '@angular/core';
/** HoseListener => @angular/core
 * Listens for user events on whatever DOM element
 * the custom directive is implemented in. 
 */
import { Input } from '@angular/core';


@Directive({
  selector: '[buttonDirective]' //should be added as attribute to the desired HTML element 
})
export class ButtonDirective implements OnInit {

  @Input() buttonColor:string;

  /* constructor(private elementRef:ElementRef, private templateRef:TemplateRef<any>, private viewContainer:ViewContainerRef) {}
        more than one dependency injection does not work(?) 
  */
  constructor(private elementRef:ElementRef){}
  
  ngOnInit():void{
    this.elementRef.nativeElement.style.backgroundColor=this.buttonColor;
    this.elementRef.nativeElement.style.color="black";
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor=this.buttonColor;
    this.elementRef.nativeElement.style.color="white"
  }
  
  /* onMouseLeave will be activated only AFTER the @HostListener decorater 
     detects a 'mouseenter' event on the decorated DOM element.  */
  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor=null;
    this.elementRef.nativeElement.style.color="black";
  }


}
/** Directives Demo

 Custom Directives can be considered as components without a template, 
 and it directly uses the HTML element to which it is applied. Custom 
 directives can alter the appearance and bring in visual changes to the 
 element, without wrapping them into a new component. 
 
 Custom directives can be used for accessing and manipulating the DOM directly
 
 We can use custom directives to define custom validations for the template driven forms

 
 `ng generate directive <directive-name>`

 */