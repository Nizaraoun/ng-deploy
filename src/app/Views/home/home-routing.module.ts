import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'product/:id', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
