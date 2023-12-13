import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontlayoutComponent } from './frontlayout/frontlayout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FrontlayoutComponent
  ],
  imports: [
  CommonModule,
  RouterModule
  ]
})
export class LayoutsModule { }
