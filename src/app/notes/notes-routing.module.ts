import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { RouterComponent } from './router/router.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { LazyLoadingComponent } from './router/lazy-loading/lazy-loading.component';
import { RouteGuardsComponent } from './router/route-guards/route-guards.component';
import { RouterLandingPageComponent } from './router/router-landing-page/router-landing-page.component';

const routes: Routes = [
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'forms', component: FormsComponent, children: [
    {path: '', redirectTo:'template-form', pathMatch:'full'},
    {path: 'template-form', component: TemplateFormComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'validations-form', component: ValidationsComponent},
  ]},
  {path: 'router', component: RouterComponent, children: [
    {path: '', redirectTo:'routes', pathMatch:'full'},
    {path: 'routes', component:RouterLandingPageComponent},
      {path: 'lazy-loading', component: LazyLoadingComponent},
      {path: 'route-guards', component: RouteGuardsComponent},
  ]},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
