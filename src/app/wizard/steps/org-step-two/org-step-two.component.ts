import { Component } from '@angular/core';

@Component({
  selector: 'ren-org-step-two',
  templateUrl: './org-step-two.component.html',
  styleUrls: ['../org-step.component.scss']
})
export class OrgStepTwoComponent {
  organizationNameLabel = 'Organization Name';
  organizationNameHint = 'Enter organization name';

  industryLabel = 'Industry';
  industryHint = 'Select Industry';
  industries = [
    'Manufacturing',
    'Production',
    'Mining',
    'Agriculture',
    'Construction'
  ];

  descriptionLabel = 'Description';
  descriptionHint = 'Fill organization description';
}
