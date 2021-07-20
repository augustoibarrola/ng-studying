import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroService } from 'src/app/shared/services/hero-service/hero.service';
import { Hero } from 'src/app/shared/hero';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

    this.newHero = new Hero();

    this.newHeroForm = this.fb.group({
      controlHeroName:['',[Validators.required]],
      controlAlias:['',[Validators.required]],
      controlSuperpower:['',[Validators.required]],
      controlWeakness:['',[Validators.required]],
      controlDescription:['',[Validators.required]],
    })

    // this.newHero= {id: NaN, imageSrc:"", name:"", alias:"", superpower:"",weakness:"", description:"", images:null};

  }

  onFileChanged(event){
    console.log(event.target.files[0])
    this.newHero.profilePicture = event.target.files[0];
  }

  postNewHero(){
    console.log(this.newHeroForm.value)
    this.newHero.name = this.newHeroForm.value.controlHeroName;
    this.newHero.alias = this.newHeroForm.value.controlAlias;
    this.newHero.superpower = this.newHeroForm.value.controlSuperpower;
    this.newHero.weakness = this.newHeroForm.value.controlWeakness;
    this.newHero.description = this.newHeroForm.value.controlDescription;

    this.heroService.postHero(this.newHero).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  redirect(){

  }

}
