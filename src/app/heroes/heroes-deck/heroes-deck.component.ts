import { Component, OnInit } from '@angular/core';

import { Hero } from '../../shared/hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../../shared/services/hero-service/hero.service'

@Component({
  selector: 'app-heroes-deck',
  templateUrl: './heroes-deck.component.html',
  styleUrls: ['./heroes-deck.component.css'],
})
export class HeroesDeckComponent implements OnInit {
  selectedHero?: Hero; // ? = SAFE NAVIGATION OPERATOR | "Elvis Operator". Prevents null-reference exceptions; Protects against null and undefined values when unsure as to what this referent actually refers to.
  // heroes: Hero[] = HEROES; //not needed with the import of the HeroesService class.
  heroes: Hero[];
  errorMessage:string;

  constructor(private heroService: HeroService) {
    /**
     * service class `heroService` dependency is injected through its inclusion 
     * as a paramater in the component's constructor;
     */

    /**
     * Reserve the constructor for minimal initialization such as wiring constructor
     *  parameters to properties. The constructor shouldn't do anything.
     */
  } 

  // LIFECYCLE HOOK
  // Angular calls ngOnInit() shortly AFTER creating a component (i.e., after constructor() is called). It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes(); // will call on its own method which calls on this component's injected service class' getHeroes() method.
  }

  /* Uneeded after the uncoupling of the template's <li> elements 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }
  */
  getHeroes():void{
    //this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes() returns Observable<Hero[]> whose .subscribe() method can then be envoked. 
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
    }, 
    error => this.errorMessage = <any>error);
  }


  clearHeroes(){
    this.heroes = [];
  }

  callHeroes(){
    this.heroes = this.heroService.heroesList;
  }
}
