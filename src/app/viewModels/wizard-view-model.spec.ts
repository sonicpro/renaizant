import { WizardViewModel } from './wizard-view-model';

describe('WizardViewModel', () => {
  it('should create an instance', () => {
    expect(new WizardViewModel('', '', '')).toBeTruthy();
  });
});
