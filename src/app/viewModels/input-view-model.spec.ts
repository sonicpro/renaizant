import { InputViewModel } from './input-view-model';
import { InputType } from './input-type.enum';

describe('InputViewModel', () => {
  it('should create an instance', () => {
    expect(new InputViewModel(InputType.Input, '', '')).toBeTruthy();
  });
});
