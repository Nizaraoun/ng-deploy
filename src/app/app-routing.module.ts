import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontlayoutComponent } from './layouts/frontlayout/frontlayout.component';

const routes: Routes = [
  { path: '', component: FrontlayoutComponent,children:[
    { path: '', loadChildren: () => import('./Views/home/home.module').then(m => m.HomeModule)},
    { path: '', loadChildren: () => import('./Views/authentification/authentification.module').then(m => m.AuthentificationModule)},
   ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
