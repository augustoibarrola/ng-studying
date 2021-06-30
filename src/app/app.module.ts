import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { ButtonDirective } from './button.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';
import { HeroHonorificPipe } from './pipes/hero-honorific/hero-honorific.pipe';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DirectivesDemoComponent,
    ButtonDirective,
    CustomStructuralDirectiveDirective,
    HeroHonorificPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    ValidationsComponent,
    FormsComponent,
    PipesComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
