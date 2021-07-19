import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroService } from 'src/app/shared/services/hero-service/hero.service';
import { Hero } from 'src/app/shared/hero';

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html',
  styleUrls: ['./post-hero.component.css']
})
export class PostHeroComponent implements OnInit {

  newHeroForm:FormGroup;
  newHero:Hero;

  constructor(private heroService: HeroService, private fb:FormBuilder){};


  ngOnInit(): void {

    this.newHeroForm = this.fb.group({
      controlHeroName:['',[Validators.required]],
      controlAlias:['',[Validators.required]],
      controlSuperpower:['',[Validators.required]],
      controlWeakness:['',[Validators.required]],
      controlDescription:['',[Validators.required]],
      controlProfilePicture:[]
    })

    this.newHero= {id: NaN, imageSrc:"", name:"", alias:"", superpower:"",weakness:"", description:"", images:null};

  }

  onFileChanged(event){
    console.log(this.newHero)
    console.log(event.target.files[0])
    this.newHero.images = (event.target.files[0]);
  }

  postNewHero(){
    this.newHero.name = this.newHeroForm.value.controlHeroName;
    this.newHero.alias = this.newHeroForm.value.controlHeroAlias;
    this.newHero.superpower = this.newHeroForm.value.controlSuperpower;
    this.newHero.weakness = this.newHeroForm.value.controlWeakness;
    this.newHero.description = this.newHeroForm.value.controlDescription;

    this.heroService.postHero(this.newHero).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }


}
