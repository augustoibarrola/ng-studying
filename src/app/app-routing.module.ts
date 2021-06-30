import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* imports RouterModule and Routes give the application routing functionality */
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';

/* Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar */
const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'}, /* This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'. */
  {path:'heroes', component: HeroesComponent},
  {path: 'heroes/:id', component: HeroDetailComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component:ServicesComponent}
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