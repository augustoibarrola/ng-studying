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
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';


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
    HttpClientModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
          // html: () => import('highlight.js/lib/languages/html'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
