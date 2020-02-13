import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WizardStepService } from '../../wizardStepService';
import { WizardViewModel } from '../../../viewModels/wizard-view-model';
import { Option } from '../../../interfaces';

@Component({
  selector: 'ren-user-step-two',
  templateUrl: './user-step-two.component.html',
  styleUrls: ['../user-step.component.scss']
})
export class UserStepTwoComponent implements OnInit, AfterViewInit {
  readonly wizardViewData: WizardViewModel = new WizardViewModel(
    'Experience',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    'Next'
  );
  jobFamilyLabel = 'Job family';
  jobFamily: number;
  jobFamiliesMock: Option[] = [
    { id: 0, text: 'Select job family' },
    { id: 1, text: 'Bank Audit and Compliance' },
    { id: 2, text: 'Branch Banking' },
    { id: 3, text: 'Card Services' },
    { id: 4, text: 'Commercial Lending Operations' },
    { id: 5, text: 'Investment Banking' },
    { id: 6, text: 'Bank Investment Risk Management' }
  ];
  jobTitleLabel = 'Job title';
  jobTitle: number;
  jobTitlesMock: Option[] = [
    { id: 0, text: 'Select job title' },
    { id: 1, text: 'Compliance Manager - Bank Services' },
    { id: 2, text: 'Fraud Investigation Manager' },
    { id: 3, text: 'Head Teller' },
    { id: 4, text: 'Checking/Debit Card Business Manager' },
    { id: 5, text: 'Group Operations Director' },
    { id: 6, text: 'Loan Operations Manager' },
    { id: 7, text: 'Investment Banking Director' },
    { id: 8, text: 'Risk Analyst, Senior - Credit Risk' }
  ];
  workExperienceAtJobFamilyTitle = 'Work Experience at Job Title';
  workExperienceAtJobFamilyFrom: Date;
  workExperienceAtJobFamilyTo: Date;
  workExperienceAtCurrentJobTitle = 'Work Experience at Current Job Title';
  workExperienceAtCurrentJobFrom: Date;
  workExperienceAtCurrentJobTo: Date;
  workExperienceAtOrganization = 'Work Experience at Organization';
  workExperienceAtOrganizationFrom: Date;
  workExperienceAtOrganizationTo: Date;
  fromLabel = 'From';
  toLabel = 'To';
  fromDefaultValue: Date;
  toHint = 'Current date';

  @Output() readonly isValid: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('admissionForm', { static: false }) theForm: NgForm;

  private readonly jobFamilyStateKey = 'jobFamily';
  private readonly jobTitleStateKey = 'jobTitle';
  private readonly workExperienceAtJobFamilyFromStateKey = 'workExperienceAtJobFamilyFrom';
  private readonly workExperienceAtJobFamilyToStateKey = 'workExperienceAtJobFamilyTo';
  private readonly workExperienceAtCurrentJobFromStateKey = 'workExperienceAtCurrentJobFrom';
  private readonly workExperienceAtCurrentJobToStateKey = 'workExperienceAtCurrentJobTo';
  private readonly workExperienceAtOrganizationFromStateKey = 'workExperienceAtOrganizationFrom';
  private readonly workExperienceAtOrganizationToStateKey = 'workExperienceAtOrganizationTo';

  constructor(private readonly step: WizardStepService) {
    const now = new Date(Date.now());
    this.fromDefaultValue = new Date(now.getFullYear() - 1, now.getMonth());
  }

  ngOnInit() {
    this.jobFamily = this.step.getItem(this.jobFamilyStateKey, 0);
    this.jobTitle = this.step.getItem(this.jobTitleStateKey, 0);
    this.workExperienceAtJobFamilyFrom = this.step.getItem(this.workExperienceAtJobFamilyFromStateKey,
      this.fromDefaultValue);
    this.workExperienceAtJobFamilyTo = this.step.getItem(this.workExperienceAtJobFamilyToStateKey, null);
    this.workExperienceAtCurrentJobFrom = this.step.getItem(this.workExperienceAtCurrentJobFromStateKey,
      this.fromDefaultValue);
    this.workExperienceAtCurrentJobTo = this.step.getItem(this.workExperienceAtCurrentJobToStateKey, null);
    this.workExperienceAtOrganizationFrom = this.step.getItem(this.workExperienceAtOrganizationFromStateKey,
      this.fromDefaultValue);
    this.workExperienceAtOrganizationTo = this.step.getItem(this.workExperienceAtOrganizationToStateKey, null);
  }

  ngAfterViewInit(): void {
    this.revalidate();
  }

  revalidate(): void {
    this.isValid.emit(this.theForm.valid && this.jobFamily > 0 && this.jobTitle > 0);
  }

  saveState(): void {
    this.step.setItem(this.jobFamilyStateKey, this.jobFamily);
    this.step.setItem(this.jobTitleStateKey, this.jobTitle);
    this.step.setItem(this.workExperienceAtJobFamilyFromStateKey, this.workExperienceAtJobFamilyFrom);
    this.step.setItem(this.workExperienceAtJobFamilyToStateKey, this.workExperienceAtJobFamilyTo);
    this.step.setItem(this.workExperienceAtCurrentJobFromStateKey, this.workExperienceAtCurrentJobFrom);
    this.step.setItem(this.workExperienceAtCurrentJobToStateKey, this.workExperienceAtCurrentJobTo);
    this.step.setItem(this.workExperienceAtOrganizationFromStateKey, this.workExperienceAtOrganizationFrom);
    this.step.setItem(this.workExperienceAtOrganizationToStateKey, this.workExperienceAtOrganizationTo);
  }
}
