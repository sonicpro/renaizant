import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardStepService } from './wizardStepService';
import { OrgStepOneComponent, OrgStepTwoComponent } from './steps';

@Component({
  selector: 'ren-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  markers: {}[]; // contains empty objects, only indices are uses in isCurrent()
  nextIsEnabled: boolean;

  private readonly step: WizardStepService;

  @ViewChild(OrgStepOneComponent, { static: false })
  private readonly stepOne: OrgStepOneComponent;

  @ViewChild(OrgStepTwoComponent, { static: false })
  private readonly stepTwo: OrgStepTwoComponent;

  constructor(step: WizardStepService) {
    this.step = step;
  }

  isCurrentStep(index: number): boolean {
    return (this.step.getStepIndex()) === index;
  }

  ngOnInit(): void {
    this.markers = new Array(this.step.getNumberOfSteps());
  }

  advance(): void {
    switch (this.step.getStepIndex()) {
      case 0:
        this.stepOne.saveState();
        this.step.advance();
        break;
      case 1:
        this.stepTwo.saveState();
        this.step.advance();
        break;
      default:
        this.step.advance();
    }
  }

  retreat(): void {
    switch (this.step.getStepIndex()) {
      case 0:
        this.stepOne.saveState();
        this.step.retreat();
        break;
      case 1:
        this.stepTwo.saveState();
        this.step.retreat();
        break;
      default:
        this.step.retreat();
    }
  }

  setButtonState(isFormValid: boolean): void {
    this.nextIsEnabled = isFormValid;
  }
}
