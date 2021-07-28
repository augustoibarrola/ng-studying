import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
// import { HEROES } from '../../mock-heroes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../message-service/message.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
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


    // heroImage.append('imageFile', hero.images, hero.images.name)
    // hero.images = heroImage as Blob;

    // const heroJSON = JSON.stringify(Hero);

      const uploadImageData = new FormData();
      // uploadImageData.append('imageFile', hero.images, hero.images.name);

    return this.http.post<Hero>("http://localhost:3333/heroes-api/heroes", hero);

  // test(hero:Hero){
  //   const headers = { 'content-type': 'application/json' }    
  //   const heroJSON = JSON.stringify(hero);
  //   console.log(hero)
  //   return this.http.put<Hero>(`http://localhost:3333/heroes-api/hero/${hero.id}`, heroJSON, { 'headers': headers });
  }

  updateHero(hero: Hero) {
    console.log(hero);
    return this.http.put<Hero>(`http://localhost:3333/heroes-api/hero/${hero.id}`, hero);
  }



  uploadProfilePicture(picture: File, heroId:number):any{
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', picture, picture.name);
    return this.http.post<any>(`http://localhost:3333/image-api/${heroId}/images`, uploadImageData, {observe: 'response'});
  }

  getImage(imageId:any){
    const headers = { 'content-type': 'application/json' }

    return this.http.get('http://localhost:3333/image-api/images/' + imageId,{ 'headers': headers });

  }

  deleteHero(heroId:string){
    const headers = { 'content-type': 'application/json' }

    return this.http.delete(`http://localhost:3333/heroes-api/hero/${heroId}`, {'headers': headers}).pipe(catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    let errorMessage = '';
    if(error.error instanceof HttpErrorResponse){
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else if (typeof error.error ==='string'){
      errorMessage = JSON.parse(error.error).errorMessage;
      console.log(errorMessage);
    }
    else{
      if(error.status===0){
        errorMessage = "A connection with backend cannot be established";
        console.log(errorMessage);
      }else{
        errorMessage = error.error.message;
        console.log(errorMessage);
      }
    }
    return throwError(errorMessage)
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
