import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { RouterComponent } from './router/router.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  // { path: '', component: NotesComponent },
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'validations-form', component: ValidationsComponent},
  {path: 'router', component: RouterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
