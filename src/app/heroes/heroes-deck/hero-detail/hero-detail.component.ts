import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //https://angular.io/api/router/ActivatedRoute
import { Location } from '@angular/common'; //https://angular.io/api/common/Location
import { Hero } from '../../../shared/hero';
import{ HeroService } from '../../../shared/services/hero-service/hero.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';




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
  heroName:string;
  

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageId: any;

  imagePath;
  image;
  imageTwo;


 constructor(private route: ActivatedRoute, private heroService: HeroService, private location:Location, private formBuilder:FormBuilder, private _sanitizer: DomSanitizer) { }
 
 ngOnInit(): void {
   this.getHero();
   this.heroForm = this.formBuilder.group({
     controlHeroName:['',[Validators.required]],
     controlAlias:['',[Validators.required]],
     controlSuperpower:['',[Validators.required]],
     controlWeakness:['',[Validators.required]],
     controlDescription:['',[Validators.required]],

    })
   this.submittedHero={id: NaN, imageSrc:"", name:"", alias:"", superpower:"",weakness:"", description:""};
   console.log(this.hero)
  }
  
  @Output() outputMsg = new EventEmitter<Hero>(); 
  outputMsgTrigger(hero:Hero):void{
    this.outputMsg.emit(hero);
  }

  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
     this.hero = this.heroService.getHero(id);


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
this.submittedHero.id = this.hero.id;
this.submittedHero.name = heroForm.value.controlHeroName == "" ? this.hero.name : heroForm.value.controlHeroName;
this.submittedHero.imageSrc =  this.hero.imageSrc;
this.submittedHero.alias = heroForm.value.controlAlias == "" ? this.hero.alias : heroForm.value.controlAlias;
this.submittedHero.superpower = heroForm.value.controlSuperpower == "" ? this.hero.superpower : heroForm.value.controlSuperpower;
this.submittedHero.weakness = heroForm.value.controlWeakness == "" ? this.hero.weakness : heroForm.value.controlWeakness;
this.submittedHero.description = heroForm.value.controlDescription == "" ? this.hero.description : heroForm.value.controlDescription;
this.heroService.updateHero(this.submittedHero).subscribe(hero => console.log(hero));
  }

  onFileChanged(event){
    console.log(event)
    console.log(event.target)
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    
  
    //Make a call to the Spring Boot Application to save the image
    
    this.heroService.postPicture(this.selectedFile)
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
    
  }

  getImage() {
    // Make a call to Sprinf Boot to get the Image Bytes.
    this.heroService.getImage(this.imageId)
    // this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

          // this.createImage(this.retrievedImage)
         
          console.log(this.retrieveResonse)
        

        // let objectURL = 'data:image/png;base64,' + JSON.stringify(this.retrieveResonse);
        let objectURL = 'data:image/jpeg;base64,' + this.base64Data;
        // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(objectURL);
        this.imagePath = this._sanitizer.bypassSecurityTrustUrl(objectURL);
      
  })}

}


/** { ACTIVATED-ROUTE } => @angular/router
 * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
 * It allows for the capturing and binding of values passed in as URL parameters to component properties. 
 */

/** { LOCATION } => @angular/common
 *  Built-in Angular service for interacting with the browser.
 */