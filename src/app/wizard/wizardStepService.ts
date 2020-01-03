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
    public stepIndex = 0
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

  advanceThoughWizard(): void {
    this.stepIndex++;
  }
}
