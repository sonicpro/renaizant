import { InputType } from './input-type.enum';

export class InputViewModel {
  constructor(
    public type: InputType,
    public label: string,
    public hint: string,
    public isRequired: boolean = false
  ) { }
}
