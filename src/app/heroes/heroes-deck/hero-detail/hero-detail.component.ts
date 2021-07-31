import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //https://angular.io/api/router/ActivatedRoute
import { Location } from '@angular/common'; //https://angular.io/api/common/Location
import { Hero } from '../../../shared/hero';
import{ HeroService } from '../../../shared/services/hero-service/hero.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/shared/image';
import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';




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
  heroForm:FormGroup;
  heroName:string;
  

  profilePicture: any;
  pictureHttpResponse: any;
  message: string;
  imageId: any;


 constructor(private route: ActivatedRoute, private router:Router, private heroService: HeroService, private location:Location, private formBuilder:FormBuilder, private _sanitizer: DomSanitizer) { }
 
 ngOnInit(): void {
   this.getHero();
   this.heroForm = this.formBuilder.group({
     controlHeroName:['',[Validators.required]],
     controlAlias:['',[Validators.required]],
     controlSuperpower:['',[Validators.required]],
     controlWeakness:['',[Validators.required]],
     controlDescription:['',[Validators.required]],
    })
  }
  
  @Output() outputMsg = new EventEmitter<Hero>(); 
  outputMsgTrigger(hero:Hero):void{
    this.outputMsg.emit(hero);
  }

  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
     this.heroService.getHero(id).subscribe(res => {
        this.hero = res;
        if(this.hero.profilePicture!=null){
          let imageIdParser = this.hero.profilePicture as Image;
          this.imageId = imageIdParser.id
          this.getImage();
        }
        console.log(this.hero)
     })
  }

  getImage() {
    this.heroService.getImage(this.imageId)
      .subscribe(
        res => {
          this.pictureHttpResponse = res;
          this.profilePicture = 'data:image/jpeg;base64,' + this.pictureHttpResponse.picByte;      
  })}

  goBack():void{
    this.location.back();
    /**
     * navigates backward one step in the browser's history stack using the Location service 
     * that was injected through the constructor().
     */
  }

  
  onFileChanged(event){
    this.hero.profilePicture = (event.target.files[0]);
    this.uploadProfilePicture();
  }
  
  uploadProfilePicture() {
    
    this.heroService.uploadProfilePicture(this.hero.profilePicture, this.hero.id)
    .subscribe((response) => {
      let profilePicture = response.body as Image;
      if (response.status == 200 || response.status == 201) {
        this.message = 'Image uploaded successfully';
        this.profilePicture = 'data:image/jpeg;base64,' + profilePicture.picByte;
        this.hero.profilePicture = this.profilePicture;
        console.log("image upload response");
        console.log(response)
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
    
  }
      onSubmit(heroForm:FormGroup){
    this.hero.id = this.hero.id;
    this.hero.name = heroForm.value.controlHeroName == "" ? this.hero.name : heroForm.value.controlHeroName;
    // this.hero.imageSrc =  this.hero.imageSrc;
    this.hero.alias = heroForm.value.controlAlias == "" ? this.hero.alias : heroForm.value.controlAlias;
    this.hero.superpower = heroForm.value.controlSuperpower == "" ? this.hero.superpower : heroForm.value.controlSuperpower;
    this.hero.weakness = heroForm.value.controlWeakness == "" ? this.hero.weakness : heroForm.value.controlWeakness;
    this.hero.description = heroForm.value.controlDescription == "" ? this.hero.description : heroForm.value.controlDescription;
    this.heroService.updateHero(this.hero).subscribe(response =>{
      console.log(response);
    })
  }

  deleteHero(){
    console.log("DELETE HERO");
    
    this.heroService.deleteHero(JSON.stringify(this.hero.id)).subscribe(response  => {
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.router.navigate(['/heroes-deck'])
  }

}


/** { ACTIVATED-ROUTE } => @angular/router
 * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
 * It allows for the capturing and binding of values passed in as URL parameters to component properties. 
 */

/** { LOCATION } => @angular/common
 *  Built-in Angular service for interacting with the browser.
 */