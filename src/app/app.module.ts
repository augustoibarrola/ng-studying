import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesDeckComponent } from './heroes/heroes-deck/heroes-deck.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './heroes/heroes-deck/hero-detail/hero-detail.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { DirectivesDemoComponent } from './notes/directives-demo/directives-demo.component';
import { ButtonDirective } from './shared/directives/button.directive';
import { CustomStructuralDirectiveDirective } from './shared/directives/custom-structural-directive.directive';
import { HeroHonorificPipe } from './shared/pipes/hero-honorific/hero-honorific.pipe';
import { TemplateFormComponent } from './notes/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './notes/forms/reactive-form/reactive-form.component';
import { ValidationsComponent } from './notes/forms/validations/validations.component';
import { FormsComponent } from './notes/forms/forms.component';
import { PipesComponent } from './notes/pipes/pipes.component';
import { ServicesComponent } from './notes/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { RouterComponent } from './notes/router/router.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    // MessagesComponent,
    // ButtonDirective,
    // CustomStructuralDirectiveDirective,
    // HeroHonorificPipe,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    // HighlightModule,
    AppRoutingModule,
    NotesRoutingModule,
    HeroesRoutingModule
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
