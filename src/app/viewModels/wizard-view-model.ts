import { StepState } from '../wizard/step-state';

export class WizardViewModel {
  stepName: string;
  headerText: string;
  buttonText: string;
  canBeSkipped: boolean;
  stepState: StepState = {};

  constructor(
    stepName: string,
    headerText: string,
    buttonText: string,
    canBeSkipped = false
  ) {
    this.stepName = stepName;
    this.headerText = headerText;
    this.buttonText = buttonText;
    this.canBeSkipped = canBeSkipped;
  }
}
