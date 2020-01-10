import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'wizard', loadChildren: () => import('./wizard/wizard.module')
      .then(m => m.WizardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
