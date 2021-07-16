import { NgModule } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { ButtonDirective } from './directives/button.directive';
import { CustomStructuralDirectiveDirective } from './directives/custom-structural-directive.directive';
import { HeroHonorificPipe } from './pipes/hero-honorific/hero-honorific.pipe';



@NgModule({
  declarations: [
    MessagesComponent,
    ButtonDirective, 
    CustomStructuralDirectiveDirective, 
    HeroHonorificPipe, 
  ],
  imports: [], 
  exports:[
    MessagesComponent,
    ButtonDirective, 
    CustomStructuralDirectiveDirective, 
    HeroHonorificPipe
  ]
})
export class SharedModule { }
