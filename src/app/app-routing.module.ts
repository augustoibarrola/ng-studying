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

/* Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar */
const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'}, /* This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'. */
  // {path:'heroes', component: HeroesComponent},
  // {path: 'heroes/:id', component: HeroDetailComponent},
  // {path: 'directives', component: DirectivesDemoComponent},
  // {path: 'forms', component: FormsComponent},
  // {path: 'template-form', component: TemplateFormComponent},
  // {path: 'reactive-form', component: ReactiveFormComponent},
  // {path: 'validations-form', component: ValidationsComponent},
  // {path: 'router', component: RouterComponent},
  // {path: 'pipes', component: PipesComponent},
  // {path: 'services', component:ServicesComponent},
  {path: 'welcome', component: WelcomeComponent},
  { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  // {path: '**', redirectTo:'welcome', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* The method is called forRoot() because you configure the router at the application's root level. */
  exports: [RouterModule] /* makes RouterModule available throughout the application */
})
export class AppRoutingModule { }

/**
 * In Angular, the best practice is to load and configure the router in a separate, 
 * top-level module that is dedicated to routing and imported by the root AppModule.
 */