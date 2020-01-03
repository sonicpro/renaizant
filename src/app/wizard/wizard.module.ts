import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { CompletionBadgeComponent } from './completion-badge/completion-badge.component';
import { WizardStepService } from './wizardStepService';

@NgModule({
  declarations: [
    WizardComponent,
    CompletionBadgeComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule
  ],
  providers: [ WizardStepService ]
})
export class WizardModule {}
