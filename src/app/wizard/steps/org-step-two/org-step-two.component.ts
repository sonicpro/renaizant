import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WizardStepService } from '../../wizardStepService';
import { Option } from '../../../interfaces';

@Component({
  selector: 'ren-org-step-two',
  templateUrl: './org-step-two.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepTwoComponent implements OnInit, AfterViewInit {
  organizationName: string;
  organizationNameLabel = 'Organization Name';
  organizationNameHint = 'Enter organization name';

  industry: number;
  industryLabel = 'Industry';
  industries: Option[] = [
    { id: 0, text: 'Select Industry' },
    { id: 1, text: 'Manufacturing' },
    { id: 2, text: 'Production' },
    { id: 3, text: 'Mining' },
    { id: 4, text: 'Agriculture' },
    { id: 5, text: 'Construction' }
  ];

  description: string;
  descriptionLabel = 'Description';
  descriptionHint = 'Fill organization description';

  @Output() readonly isValid: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('admissionForm', { static: false }) theForm: NgForm;

  private readonly organizationNameStateKey = 'organizationName';
  private readonly industryStateKey = 'industry';
  private readonly descriptionStateKey = 'description';

  constructor(private readonly step: WizardStepService) {

  }

  ngOnInit(): void {
    this.organizationName = this.step.getItem(this.organizationNameStateKey);
    this.industry = this.step.getItem(this.industryStateKey);
    this.description = this.step.getItem(this.descriptionStateKey);
  }

  ngAfterViewInit(): void {
    this.revalidate();
  }

  revalidate(): void {
    this.isValid.emit(this.theForm.valid);
  }

  saveState(): void {
    this.step.setItem(this.organizationNameStateKey, this.organizationName);
    this.step.setItem(this.industryStateKey, this.industry);
    this.step.setItem(this.descriptionStateKey, this.description);
  }
}
