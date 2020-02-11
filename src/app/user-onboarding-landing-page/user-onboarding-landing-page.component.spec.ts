import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnboardingLandingPageComponent } from './user-onboarding-landing-page.component';

describe('UserOnboardingLandingPageComponent', () => {
  let component: UserOnboardingLandingPageComponent;
  let fixture: ComponentFixture<UserOnboardingLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnboardingLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnboardingLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
