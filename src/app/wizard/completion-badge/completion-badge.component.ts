import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ren-completion-badge',
  templateUrl: './completion-badge.component.html',
  styleUrls: ['./completion-badge.component.scss']
})
export class CompletionBadgeComponent implements OnInit {

  constructor(public isWizard: boolean = true) {}

  ngOnInit() {
  }

}
