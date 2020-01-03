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

  getStepName(): string {
    return this.steps[this.stepIndex].stepName;
  }

  getHeaderText(): string {
    return this.steps[this.stepIndex].headerText;
  }

  getButtonText(): string {
    return this.steps[this.stepIndex].buttonText;
  }

  isSkipEnabled(): boolean {
    return this.steps[this.stepIndex].canBeSkipped;
  }

  advance(): void {
    if (this.stepIndex !== this.steps.length - 1) {
      this.stepIndex++;
    } else if (!this.isCompleted) {
      this.isCompleted = true;
    }
  }

  isAlreadyCompleted(): boolean {
    return this.isCompleted;
  }
}
