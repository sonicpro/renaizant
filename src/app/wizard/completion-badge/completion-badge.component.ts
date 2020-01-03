import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ren-completion-badge',
  templateUrl: './completion-badge.component.html',
  styleUrls: ['./completion-badge.component.scss']
})
export class CompletionBadgeComponent implements OnInit {
  profileDescription: string;
  completionNotice: string;
  percentage: number;

  constructor() {}

  ngOnInit() {
    this.profileDescription = 'Organization profile';
    this.completionNotice = 'Not enough to start';
    this.percentage = 0.37;
  }

}
