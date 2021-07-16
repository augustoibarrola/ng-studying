import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './heroes-deck/hero-detail/hero-detail.component';
import { HeroesDeckComponent } from './heroes-deck/heroes-deck.component';

const routes: Routes = [
  {path: '', redirectTo: 'heroes-deck', pathMatch:'full' },
  {path:'heroes-deck', component: HeroesDeckComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
