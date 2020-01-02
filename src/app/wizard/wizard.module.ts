import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { CompletionBadgeComponent } from './completion-badge/completion-badge.component';


@NgModule({
  declarations: [CompletionBadgeComponent],
  imports: [
    CommonModule,
    WizardRoutingModule
  ]
})
export class WizardModule { }
