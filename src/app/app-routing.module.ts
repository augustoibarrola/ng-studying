import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; /* imports RouterModule and Routes give the application routing functionality */
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path: 'welcome', component: WelcomeComponent},
  { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
    )], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }

