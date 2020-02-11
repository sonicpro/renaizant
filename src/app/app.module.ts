import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserOnboardingLandingPageComponent } from './user-onboarding-landing-page/user-onboarding-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserOnboardingLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
