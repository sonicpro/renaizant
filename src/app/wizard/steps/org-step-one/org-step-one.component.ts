import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WizardStepService } from '../../wizardStepService';

@Component({
  selector: 'ren-org-step-one',
  templateUrl: './org-step-one.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepOneComponent implements OnInit, AfterViewInit {
  language: string;
  languages: string[] = [
    '',
    'English (US)',
    'English (UK)',
    'Ukrainian'
  ];
  languageLabel = 'Language';

  timeZone: string;
  timeZones: string[] = [
    '',
    '(GMT-05:00) Easter Time - New York',
    '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallin, Vilnius'
  ];
  timeZonesLabel = 'Time zone';

  subTitle = 'Work hours';

  workHoursStart: string;
  workHoursStartLabel = 'From';

  workHoursEnd: string;
  workHoursEndLabel = 'To';

  timePickerMock = [
    '', '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM',
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  @Output() public isValid: EventEmitter<boolean> = new EventEmitter();

  private readonly languageStateKey = 'language';
  private readonly timeZoneStateKey = 'timeZone';
  private readonly workHoursStartStateKey = 'workHoursStart';
  private readonly workHoursEndStateKey = 'workHoursEnd';
  @ViewChild('admissionForm', { static: false }) public theForm: NgForm;

  constructor(private readonly step: WizardStepService) {
  }

  ngOnInit(): void {
    this.language = this.step.getItem(this.languageStateKey) || this.languages[1];
    this.timeZone = this.step.getItem(this.timeZoneStateKey) || this.timeZones[1];
    this.workHoursStart = this.step.getItem(this.workHoursStartStateKey) || this.timePickerMock[1];
    this.workHoursEnd = this.step.getItem(this.workHoursEndStateKey) || this.timePickerMock[1];
  }

  ngAfterViewInit(): void {
    this.revalidate();
  }

  revalidate(): void {
    this.isValid.emit(this.theForm.form.valid);
  }

  saveState(): void {
    this.step.setItem(this.languageStateKey, this.language);
    this.step.setItem(this.timeZoneStateKey, this.timeZone);
    this.step.setItem(this.workHoursStartStateKey, this.workHoursStart);
    this.step.setItem(this.workHoursEndStateKey, this.workHoursEnd);
  }
}
