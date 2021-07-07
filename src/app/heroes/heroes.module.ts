import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesDeckComponent } from './heroes-deck/heroes-deck.component';
import { HeroDetailComponent } from './heroes-deck/hero-detail/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../notes/forms/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesDeckComponent, 
    HeroDetailComponent
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