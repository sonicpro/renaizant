import { Component, OnInit } from '@angular/core';
import { WizardStepService } from './wizardStepService';

@Component({
  selector: 'ren-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  step: WizardStepService;
  markers: {}[]; // contains empty objects, only indices are uses in isCurrent()

  constructor(step: WizardStepService) {
    this.step = step;
  }

  isCurrentStep(index: number): boolean {
    return (this.step.getStepIndex()) === index;
  }

  ngOnInit(): void {
    this.markers = new Array(this.step.getNumberOfSteps());
  }
}
