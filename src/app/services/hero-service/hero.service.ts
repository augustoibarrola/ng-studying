import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes'; 
import { HttpClient} from '@angular/common/http';
import { MessageService } from '../message-service/message.service';
import { Observable, of } from 'rxjs';

// @Injectable marks the class as one that participates in the dependency injection system.
// This class will provide an injectable service to other components. 
@Injectable({
  /**
   * Services must be registered a "provider" in order to become available to 
   * the dependency injection system and be injected when needed. A provider is something 
   * that can create/deliver a service.
   * 
   * https://angular.io/guide/providers
   */
  providedIn: 'root'
  /**
   * providedIn: `root`
   * when `root` is given as the provider (the default when creating a service 
   * with Angular CLI), Angular creates a single, shared instance of the service class
   * and injects it into any class that assks for it. If it is not used, Angular removes 
   * ther service in the background, freeing up space and memory. 
   */
})
export class HeroService {

  constructor(private messageService:MessageService, private http: HttpClient) { }

  heroesList:Hero[];

  
  getHeroes():Observable<Hero[]>{
    //const heroes = of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    // this.messageService.add('HeroService: fetched heroes');
    // return heroes;
    
    /**
     * In real world applications, service class methods that make HTTP requests will often have to wait 
     * for a response to those requests, and thus must have an ASYNCHRONOUS SIGNATURE of some kind,
     * meaning their return type must be an Observable<> of some given type. 
     */
    
    const heroesMockUrl:string='assets/heroes.json';
    return this.http.get<Hero[]>(heroesMockUrl);
  }

  getHero(id: number):Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: Fetched hero id = ${id}`);
    return of(hero); //returns a MOCK hero as an OBSERVABLE, using of() function. 

    /**
     * !
     * "Non-Null Assertion Operator"
     */
  }
  incrementCount(hero:Hero):void{
    const foundHero = HEROES.find(fHero => fHero.id == hero.id);
    foundHero.counter += foundHero.counter;
  }

}
