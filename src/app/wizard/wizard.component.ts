import { Component, OnInit } from '@angular/core';
import { WizardStepService } from './wizardStepService';

@Component({
  selector: 'ren-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(public step: WizardStepService) { }

  ngOnInit() {
  }
}
