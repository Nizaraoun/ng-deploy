import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
