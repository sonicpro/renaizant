import { ChipWithValue } from '../interfaces';

export interface StepState {
  [index: string]: string | string[] | number | boolean | ChipWithValue | ChipWithValue[];
}
