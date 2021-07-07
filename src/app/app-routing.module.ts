import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* imports RouterModule and Routes give the application routing functionality */
import { HeroesDeckComponent } from './heroes/heroes-deck/heroes-deck.component';
import { HeroDetailComponent } from './heroes/heroes-deck/hero-detail/hero-detail.component';
import { DirectivesDemoComponent } from './notes/directives-demo/directives-demo.component';
import { TemplateFormComponent } from './notes/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './notes/forms/reactive-form/reactive-form.component';
import { PipesComponent } from './notes/pipes/pipes.component';
import { ServicesComponent } from './notes/services/services.component';
import { FormsComponent } from './notes/forms/forms.component';
import { ValidationsComponent } from './notes/forms/validations/validations.component';
import { RouterComponent } from './notes/router/router.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path: 'welcome', component: WelcomeComponent},
  { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }

