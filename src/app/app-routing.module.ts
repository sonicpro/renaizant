import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserOnboardingLandingPageComponent } from './user-onboarding-landing-page/user-onboarding-landing-page.component';

const routes: Routes = [
  { path: 'companyRoute/:onboardingIsCompleted', redirectTo: '', component: LandingPageComponent },
  { path: 'userRoute', component: UserOnboardingLandingPageComponent },
  {
    path: 'wizard/:isUserOnboarding', loadChildren: () => import('./wizard/wizard.module')
      .then(m => m.WizardModule)
  },
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
