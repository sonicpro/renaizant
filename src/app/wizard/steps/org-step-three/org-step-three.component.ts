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
import { Chip } from '../../../interfaces/chip';

@Component({
  selector: 'ren-org-step-three',
  templateUrl: './org-step-three.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepThreeComponent implements OnInit, AfterViewInit {
  organizationCareerTracksHeading = 'Organization\'s career tracks';
  organizationCareerTracks: Chip[];
  addCareerTrackText = 'Add career track';

  setupBandsAndGradesHeading = 'Set Up Bands and Grades';
  gradeRadios: string[] = [ 'Grade per band', 'Custom grade' ];
  faTrash = faTrash;

  gradePerBand: ChipWithValue[];

  cusomGradeBandLabel = 'Band ';
  customGrade: ChipWithValue[];
  addBandText = 'Add band';

  @Output() readonly isValid: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('admissionForm', { static: false }) theForm: NgForm;

  private readonly organizationCareerTracksStateKey: string = 'organizationCareerTracks';
  private readonly gradePerBandStateKey: string = 'gradePerBand';
  private readonly customGradeStateKey: string = 'customGrade';

  private readonly organizationCareerTracksMock: Chip[] = [
    { text: 'Individual Contributor' },
    { text: 'Managerial' }
  ];

  private readonly numberOfBandsChip: ChipWithValue = {
    text: 'Number of bands',
    value: 7
  };

  constructor(private readonly step: WizardStepService) {
  }

  ngOnInit() {
    this.organizationCareerTracks = this.step.getItem(this.organizationCareerTracksStateKey, [
      ...this.organizationCareerTracksMock
    ]);
    this.gradePerBand = this.step.getItem(this.gradePerBandStateKey, [
      {
        name: 'Grade coding',
        value: null
      },
      { ...this.numberOfBandsChip },
      {
        name: 'Number of grades per band',
        value: 2
      }
    ]);
    this.customGrade = this.step.getItem(this.customGradeStateKey, [
      { ...this.numberOfBandsChip },
      { ...this.numberOfBandsChip }
    ]);
  }

  ngAfterViewInit() {
    this.revalidate();
  }

  revalidate(): void {
    this.isValid.emit(!this.theForm.valid);
  }

  saveState(): void {
    this.step.setItem(this.organizationCareerTracksStateKey, this.organizationCareerTracks);
    this.step.setItem(this.gradePerBandStateKey, this.gradePerBand);
    this.step.setItem(this.customGradeStateKey, this.customGrade);
  }
}
