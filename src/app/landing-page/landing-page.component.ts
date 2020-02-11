import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ren-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title: string;
  text: string;
  inputValue: string;
  onboardingIsCompleted = false;
  isUserOnboarding = false;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.onboardingIsCompleted = !!(this.route.snapshot.paramMap.get('onboardingIsCompleted') === 'true');
    this.title = this.onboardingIsCompleted ? 'Congratulations!' : 'Welcome!';
    this.text = this.onboardingIsCompleted ? `We would like to thank you for your time during onboarding.<br />
      Now it is all done and you can start using our product!` : `Please tell us about your organization.<br />
      It will help onboard employees at Renaizant`;
    this.inputValue = this.onboardingIsCompleted ? 'GO TO THE APP' : 'START';
  }
}
