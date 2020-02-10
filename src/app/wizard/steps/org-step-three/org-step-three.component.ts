import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { WizardStepService } from '../../wizardStepService';
import { ChipWithValue } from '../../../interfaces';

@Component({
  selector: 'ren-org-step-three',
  templateUrl: './org-step-three.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepThreeComponent implements OnInit, AfterViewInit {
  organizationCareerTracksHeading = 'Organization\'s career tracks';
  organizationCareerTracks: string[];
  addCareerTrackText = 'Add career track';

  setupBandsAndGradesHeading = 'Set Up Bands and Grades';
  faTrash = faTrash;

  gradeType: string;
  gradeRadios: string[] = [ 'Grade per band', 'Custom grade' ];

  gradeCoding: ChipWithValue;
  gradePerBand: ChipWithValue;
  bands: ChipWithValue[];

  cusomGradeBandLabel = 'Band ';
  addBandText = 'Add band';

  @Output() readonly isValid: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('admissionForm', { static: false }) theForm: NgForm;


  private readonly organizationCareerTracksStateKey: string = 'organizationCareerTracks';
  private readonly gradeTypeStateKey: string = 'gradeType';
  private readonly gradeCodingStateKey: string = 'gradeCoding';
  private readonly gradePerBandStateKey: string = 'gradePerBand';
  private readonly bandsStateKey: string = 'bands';

  private readonly organizationCareerTracksMock: string[] = [
    'Individual Contributor',
    'Managerial'
  ];
  private readonly bandChip: ChipWithValue = {
    text: 'Number of bands',
    value: "7"
  };

  constructor(private readonly step: WizardStepService) {
  }

  ngOnInit() {
    this.organizationCareerTracks = this.step.getItem(this.organizationCareerTracksStateKey, [
      ...this.organizationCareerTracksMock
    ]);
    this.gradeType = this.step.getItem(this.gradeTypeStateKey, 'non-custom');
    this.gradeCoding = this.step.getItem(this.gradeCodingStateKey, {
      text: 'Grade coding',
      value: null
    });
    this.bands = this.step.getItem(this.bandsStateKey, [
      { ...this.bandChip }
    ]);
    this.gradePerBand = this.step.getItem(this.gradePerBandStateKey, {
      text: 'Number of grades per band',
      value: "2"
    });
  }

  ngAfterViewInit() {
    this.revalidate();
  }

  removeTrack(index: number): void {
    this.organizationCareerTracks.splice(index, 1);
  }

  addBand(): void {
    this.bands.push({ ...this.bandChip });
  }

  hideRemoveButton(): boolean {
    return this.bands.length === 1;
  }

  removeBand(index: number): void {
    this.bands.splice(index, 1);
  }

  gradeTypeChange(event: MouseEvent): void {
    let value: string = (event.target as HTMLInputElement).value;
    if (value === 'non-custom' && this.bands.length > 1) {
      this.bands.splice(1);
    }
    this.gradeType = value;
  }

  revalidate(): void {
    this.isValid.emit(this.theForm.valid);
  }

  saveState(): void {
    this.step.setItem(this.organizationCareerTracksStateKey, this.organizationCareerTracks);
    this.step.setItem(this.gradeTypeStateKey, this.gradeType);
    this.step.setItem(this.gradeCodingStateKey, this.gradeCoding);
    this.step.setItem(this.bandsStateKey, this.bands);
    this.step.setItem(this.gradePerBandStateKey, this.gradePerBand);
  }
}
