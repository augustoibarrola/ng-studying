import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero-service/hero.service'
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
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
      this.heroService.heroesList = heroes;
    }, 
    error => this.errorMessage = <any>error);
  }

  heroCounterIncrease(hero:Hero):void{
    this.heroService.incrementCount(hero);
  }

  clearHeroes(){
    this.heroes = [];
  }

  callHeroes(){
    this.heroes = this.heroService.heroesList;
  }
}
