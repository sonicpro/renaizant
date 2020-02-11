import { ChipWithValue } from '../interfaces';

export class WizardStepService {
  private readonly numberOfSteps = 4;
  // TODO - get the array length in sync with "numberOfSteps" field.
  private readonly stepStates: {}[] = [{}, {}, {}, {}];
  private isUserRoute = false;

  constructor(
    private stepIndex = 0,
    private isCompleted = false
  ) { }

  getStepIndex(): number {
    return this.stepIndex;
  }

  getNumberOfSteps(): number {
    return this.numberOfSteps;
  }

  stepIsNotTheFirst(): boolean {
    return this.stepIndex !== 0;
  }

  stepIsTheLastOne(): boolean {
    return this.stepIndex === this.numberOfSteps - 1;
  }

  advance(): void {
    if (this.stepIndex !== this.numberOfSteps - 1) {
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

  isUserOnboarding(): boolean {
    return this.isUserRoute;
  }

  getItem(key: string, defaultValue: string | string[] | number | boolean | ChipWithValue | ChipWithValue[] = null) {
    if (key in this.stepStates[this.stepIndex]) {
      return this.stepStates[this.stepIndex][key];
    } else {
      return defaultValue;
    }
  }

  setItem(key: string, value: string | string[] | number | boolean | ChipWithValue | ChipWithValue[]) {
    this.stepStates[this.stepIndex][key] = value;
  }

  switchToUserRoute() {
    this.isUserRoute = true;
  }
}
