export class WizardViewModel {
  constructor(
    public stepName: string,
    public headerText: string,
    public buttonText: string,
    public canBeSkipped = false
  ) { }
}
