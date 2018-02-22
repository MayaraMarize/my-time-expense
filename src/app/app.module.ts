import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';


@NgModule({
  declarations: [
    AppComponent,
    NavLateralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
