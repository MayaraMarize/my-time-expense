import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NavLateralComponent } from './nav-lateral/nav-lateral.component';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,

    NavLateralComponent

    HeaderComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
