import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ren-user-onboarding-landing-page',
  templateUrl: '../landing-page/landing-page.component.html',
  styleUrls: ['../landing-page/landing-page.component.scss']
})
export class UserOnboardingLandingPageComponent implements OnInit {
  title: string;
  text: string;
  inputValue: string;
  isUserOnboarding = true;
  onboardingIsCompleted = false;

  ngOnInit() {
    this.title = 'Welcome!';
    this.text = `You have been invited to join Valor Software on renaizant!<br />
      Please take a moment to tell us about yourself`;
    this.inputValue = 'START';
  }
}
