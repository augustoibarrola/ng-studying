import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesDeckComponent } from './heroes-deck/heroes-deck.component';
import { HeroDetailComponent } from './heroes-deck/hero-detail/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PostHeroComponent } from './post-hero/post-hero.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesDeckComponent, 
    HeroDetailComponent, PostHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    HeroesRoutingModule,
    SharedModule
  ]
})
export class HeroesModule { }
