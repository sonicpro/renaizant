import { Component } from '@angular/core';

@Component({
  selector: 'ren-org-step-one',
  templateUrl: './org-step-one.component.html',
  styleUrls: ['./org-step.component.scss']
})
export class OrgStepOneComponent {
  languages: string[] = [
    'English (UK)',
    'Ukrainian'
  ];
  languageLabel = 'Language';
  languagesExpanded = false;

  timeZones: string[] = [
    '(GMT-05:00) Easter Time - New York'
  ];
  timeZonesLabel = 'Time zone';
  timeZonesExpanded = false;

  subTitle="Work hours";
}
