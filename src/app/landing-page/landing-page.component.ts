import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ren-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title: string;
  text: string;
  inputValue: string;

  ngOnInit() {
    this.title = 'Welcome!';
    this.text = `Please tell us about your organization.<br />
      It will help onboard employees at Renaizant`;
    this.inputValue = 'START';
  }

}
