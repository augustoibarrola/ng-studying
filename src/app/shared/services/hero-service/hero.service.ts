import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
// import { HEROES } from '../../mock-heroes';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message-service/message.service';
import { Observable, of } from 'rxjs';
import { FormGroup, AbstractControl } from '@angular/forms';
import { HeroDetailComponent } from 'src/app/heroes/heroes-deck/hero-detail/hero-detail.component';
import { Image } from '../../image';


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

  constructor(private messageService: MessageService, private http: HttpClient) { }

  heroesList: Hero[];
  // createdHero?:Hero;
  heroesURL: string = "http://localhost:3333/heroes-api";


  getHeroes(){
    // const heroes = of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    // const heroes = this.http.get(this.heroesURL + "/heroes");
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesURL + "/heroes");

    /**
     * In real world applications, service class methods that make HTTP requests will often have to wait 
     * for a response to those requests, and thus must have an ASYNCHRONOUS SIGNATURE of some kind,
     * meaning their return type must be an Observable<> of some given type. 
     */

    const heroesMockUrl: string = "http://localhost:3000/heroes";
    return this.http.get<Hero[]>(heroesMockUrl);
  }

  getHero(id: number):Observable<Hero>{
    const Headers = { 'content-type': 'application/json' }

    return this.http.get<Hero>(this.heroesURL + `/heroes/${id}`, { 'headers': Headers });
    // return this.http.get<Hero>(this.heroesURL + `/heroes/${id}`);

    // for (let hero of this.heroesList) {
    //   this.messageService.add(`HeroService: Fetched hero id = ${id}`);
    //   if (hero.id == id) {
    //     return hero;
    //   }
    // }
    // return of(hero); //returns a MOCK hero as an OBSERVABLE, using of() function. 

    /**
     * !
     * "Non-Null Assertion Operator"
     */
  }


  postHero(hero: Hero) {
    const headers = { 'content-type': 'application/json' }
    console.log(hero)

    const heroImage = new FormData();

    // heroImage.append('imageFile', hero.images, hero.images.name)
    // hero.images = heroImage as Blob;

    // const heroJSON = JSON.stringify(Hero);
    return this.http.post("http://localhost:3333/heroes-api/heroes", hero,  {observe: 'response'});
  }

  updateHero(hero: Hero) {
    console.log(hero)
    this.postPicture(hero.images[0], hero.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    const headers = { 'content-type': 'application/json' }    
    const heroJSON = JSON.stringify(hero);
    console.log(hero)
    return this.http.put<Hero>(`http://localhost:3333/heroes-api/hero/${hero.id}`, heroJSON, { 'headers': headers });
  }



  postPicture(picture: File, heroId:number){
    const headers = { 'content-type': 'application/json' }
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', picture, picture.name);
    return this.http.post(`http://localhost:3333/image-api/${heroId}/images`, uploadImageData, {observe: 'response'});

    // return this.http.post("http://localhost:3333/image-api/images", uploadImageData, {'headers': headers, observe: 'response'});
    // return this.http.post("http://localhost:3333/image-api/images", uploadImageData, {'headers': headers});

  }

  getImage(imageId:any){
    const headers = { 'content-type': 'application/json' }

    return this.http.get('http://localhost:3333/image-api/images/' + imageId,{ 'headers': headers });

  }

  // formControlToHero(newHero:AbstractControl):Hero{
  //   //  controlHeroName
  //   //   controlAlias
  //   //   controlSuperpower
  //   //   controlWeakness
  //   //   controlDescription
  //   //   controlProfilePicture
  //   let hero = new Hero();
  //   hero.name = newHero.value.controlHeroName
  //   console.log(hero)
  //   return hero;
  // }

}
