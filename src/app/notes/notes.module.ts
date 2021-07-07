import { NgModule } from '@angular/core';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { RouterComponent } from './router/router.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule} from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NotesComponent,
    DirectivesDemoComponent,
    FormsComponent,
    TemplateFormComponent, 
    ReactiveFormComponent, 
    ValidationsComponent,
    PipesComponent, 
    ServicesComponent, 
    RouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule,
    NotesRoutingModule,
    SharedModule
  ]
})
export class NotesModule { }
