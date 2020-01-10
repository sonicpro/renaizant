export class WizardViewModel {
  stepName: string;
  headerText: string;
  buttonText: string;
  canBeSkipped: boolean;

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
