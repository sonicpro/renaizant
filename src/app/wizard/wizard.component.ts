import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WizardStepService } from './wizardStepService';
import { WizardViewModel } from '../viewModels/wizard-view-model';

import {
  OrgStepOneComponent,
  OrgStepTwoComponent,
  OrgStepThreeComponent,
  OrgStepFourComponent,
  UserStepOneComponent
} from './steps';

@Component({
  selector: 'ren-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit, AfterViewChecked {
  stepHeaderTitle: string;
  markers: {}[]; // contains empty objects, only indices are used in isCurrentStep()
  stepHeaderText: string;
  nextIsEnabled: boolean;
  nextButtonText: string;
  isBackButtonVisible = false;
  readonly backButtonText = 'Back';
  skipIsAllowed: boolean;
  readonly skipLinkText = 'Skip this step';
  proceedToCompletionPage = false;
  isUserOnboarding = false;

  @ViewChild(OrgStepOneComponent, { static: false }) private readonly stepOne: OrgStepOneComponent;
  @ViewChild(OrgStepTwoComponent, { static: false }) private readonly stepTwo: OrgStepTwoComponent;
  @ViewChild(OrgStepThreeComponent, { static: false }) private readonly stepThree: OrgStepThreeComponent;
  @ViewChild(OrgStepFourComponent, { static: false }) private readonly stepFour: OrgStepFourComponent;
  @ViewChild(UserStepOneComponent, { static: false }) private readonly userStepOne: UserStepOneComponent;

  constructor(private readonly step: WizardStepService, private readonly route: ActivatedRoute) {
  }

  isCurrentStep(index: number): boolean {
    return (this.step.getStepIndex()) === index;
  }

  ngOnInit(): void {
    this.markers = new Array(this.step.getNumberOfSteps());
    this.isUserOnboarding = this.route.snapshot.paramMap.get('isUserOnboarding') === 'true';
    if (this.isUserOnboarding) {
      this.step.toggleRoute();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const viewData: WizardViewModel = this.isUserOnboarding ? this.userStepOne.wizardViewData :
        this.stepOne.wizardViewData;
      this.nextButtonText = viewData.buttonText;
      this.skipIsAllowed = viewData.canBeSkipped;
      this.stepHeaderTitle = viewData.stepName;
      this.stepHeaderText = viewData.headerText;
    }, 0);
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.updateView(this.step.getStepIndex());
    }, 0);
  }

  advance(): void {
    switch (this.step.getStepIndex()) {
      case 0:
        if (this.isUserOnboarding) {
          this.userStepOne.saveState();
        } else {
          this.stepOne.saveState();
        }
        this.step.advance();
        break;
      case 1:
        this.stepTwo.saveState();
        this.step.advance();
        break;
      case 2:
        this.stepThree.saveState();
        this.step.advance();
        break;
      case 3:
        this.stepFour.saveState();
        this.step.advance();
        break;
      default:
        this.step.advance();
    }
    this.proceedToCompletionPage = this.step.stepIsTheLastOne();
  }

  retreat(): void {
    switch (this.step.getStepIndex()) {
      case 1:
        this.stepTwo.saveState();
        this.step.retreat();
        break;
      case 2:
        this.stepThree.saveState();
        this.step.retreat();
        break;
      case 3:
        this.stepFour.saveState();
        this.step.retreat();
        break;
      default:
        this.step.retreat();
    }
  }

  setButtonState(isFormValid: boolean): void {
    this.nextIsEnabled = isFormValid;
  }

  private updateView(targetStepIndex: number): void {
    let viewData: WizardViewModel;
    switch (targetStepIndex) {
      case 0:
        this.isUserOnboarding ? viewData = this.userStepOne.wizardViewData : viewData = this.stepOne.wizardViewData;
        break;
      case 1:
        viewData = this.stepTwo.wizardViewData;
        break;
      case 2:
        viewData = this.stepThree.wizardViewData;
        break;
      case 3:
        viewData = this.stepFour.wizardViewData;
        break;
      default:
        viewData = new WizardViewModel('Title', 'Text', 'Next');
    }
    this.nextButtonText = viewData.buttonText;
    this.skipIsAllowed = viewData.canBeSkipped;
    this.stepHeaderTitle = viewData.stepName;
    this.stepHeaderText = viewData.headerText;
    this.isBackButtonVisible = this.step.stepIsNotTheFirst();
  }
}
