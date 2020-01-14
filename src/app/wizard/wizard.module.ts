import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardRoutingModule } from './wizard-routing.module';
import { FormsModule }   from '@angular/forms';
import { WizardComponent } from './wizard.component';
import { CompletionBadgeComponent } from './completion-badge/completion-badge.component';
import { WizardStepService } from './wizardStepService';
import { OrgStepOneComponent } from './steps/org-step-one/org-step-one.component';
import { OrgStepTwoComponent } from './steps/org-step-two/org-step-two.component';

@NgModule({
  declarations: [
    WizardComponent,
    CompletionBadgeComponent,
    OrgStepOneComponent,
    OrgStepTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WizardRoutingModule
  ],
  providers: [ WizardStepService ]
})
export class WizardModule {}
