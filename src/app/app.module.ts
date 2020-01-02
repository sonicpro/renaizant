import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule, LandingPageComponent } from './landing-page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    RouterModule.forRoot([ { path: '', component: LandingPageComponent } ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
