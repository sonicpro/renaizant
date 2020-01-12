import { WizardViewModel } from '../viewModels/wizard-view-model';

export class WizardStepService {
  private readonly steps: WizardViewModel[] = [
    ...[
      new WizardViewModel(
        'General settings',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        'Next'
      ),
      new WizardViewModel(
        'Fill in the organization description',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        'Next'
      ),
      new WizardViewModel(
        'Set up organization Career Path',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        'Next',
        true
      ),
      new WizardViewModel(
        'Set up Organization Structure',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        'Finish'
      )
    ]
  ];

  constructor(
    private stepIndex = 0,
    private isCompleted = false
  ) { }

  getStepIndex(): number {
    return this.stepIndex;
  }

  getNumberOfSteps(): number {
    return this.steps.length;
  }

  getStepName(): string {
    return this.steps[this.stepIndex].stepName;
  }

  getHeaderText(): string {
    return this.steps[this.stepIndex].headerText;
  }

  getNextButtonText(): string {
    return this.steps[this.stepIndex].buttonText;
  }

  getBackButtonText(): string {
    return 'Back';
  }

  getSkipButtonText(): string {
    return 'Skip this step';
  }

  allowSkipOver(): boolean {
    return this.steps[this.stepIndex].canBeSkipped;
  }

  hasBackButton(): boolean {
    return this.stepIndex !== 0;
  }

  advance(): void {
    if (this.stepIndex !== this.steps.length - 1) {
      this.stepIndex++;
    } else if (!this.isCompleted) {
      this.isCompleted = true;
    }
  }

  retreat(): void {
    if (this.isCompleted) {
      return;
    } else {
      this.stepIndex--;
    }
  }

  isAlreadyCompleted(): boolean {
    return this.isCompleted;
  }

  getItem(key: string) {
    if (key in this.steps[this.stepIndex].stepState) {
      return this.steps[this.stepIndex].stepState[key];
    } else {
      return null;
    }
  }

  setItem(key: string, value: any) {
    this.steps[this.stepIndex].stepState[key] = value;
  }
}
