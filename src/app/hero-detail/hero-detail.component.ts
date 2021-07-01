import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //https://angular.io/api/router/ActivatedRoute
import { Location } from '@angular/common'; //https://angular.io/api/common/Location
import { Hero } from '../hero';
import{ HeroService } from '../services/hero-service/hero.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero?: Hero; 
  /**@Input recieves an input from the template from which this component's template is a child of
   * 
   * https://angular.io/api/core/Input
  */
 submittedHero:Hero;
  heroForm:FormGroup;


 constructor(private route: ActivatedRoute, private heroService: HeroService, private location:Location, private formBuilder:FormBuilder) { }
 
 ngOnInit(): void {
   this.getHero();
  console.log(this.hero)
   this.heroForm = this.formBuilder.group({
     controlHeroName:['',[Validators.required]],
     controlAlias:['',[Validators.required]],
     controlSuperpower:['',[Validators.required]],
     controlWeakness:['',[Validators.required]],
   })
  }
  
  @Output() outputMsg = new EventEmitter<Hero>(); 
  outputMsgTrigger(hero:Hero):void{
    this.outputMsg.emit(hero);
  }

  getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);


    /** route.snapshot => static image of the route information shortly after the component is created
     * paramMap => dictionary of route parameter values extracted from the URL.
     * 
     * NOTE: route paramters are ALWAYS STRINGS (hence the `Number()` function that converts the string into an integer).
     */
  }

  goBack():void{
    this.location.back();
    /**
     * navigates backward one step in the browser's history stack using the Location service 
     * that was injected through the constructor().
     */
  }

  onSubmit(heroForm:FormGroup){
    // this.heroForm.reset();
this.submittedHero.name = heroForm.value.controlHeroName;
this.submittedHero.alias = heroForm.value.controlAlias;
this.submittedHero.superpower = heroForm.value.controlSuperpower;
this.submittedHero.weakness = heroForm.value.controlWeakness;
console.log(this.submittedHero);
    this.heroService.postHero(this.submittedHero);
  }
}


/** { ACTIVATED-ROUTE } => @angular/router
 * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
 * It allows for the capturing and binding of values passed in as URL parameters to component properties. 
 */

/** { LOCATION } => @angular/common
 *  Built-in Angular service for interacting with the browser.
 */