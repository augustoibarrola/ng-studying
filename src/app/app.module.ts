import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    NotesRoutingModule,
    HeroesRoutingModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
