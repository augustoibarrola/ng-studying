import { Directive, Input} from '@angular/core';
import {TemplateRef, ViewContainerRef} from '@angular/core';
/** TemplateRef, ViewContainerRef => @angular/core
 * 
 * ViewContainerRef
 *    Creates an ng-template container (what is being done implicitley whenever
 *    a built in ng directive is used).
 * 
 * TemplateRef
 *    Provides a reference to the contents inside the ng-template container
 * 
 */


@Directive({
  selector: '[custStructDirective]'
})
export class CustomStructuralDirectiveDirective {

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) { }

  
  @Input() set custStructDirective(condition:boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else if (condition){
      this.viewContainerRef.clear();
    }
  }

}
