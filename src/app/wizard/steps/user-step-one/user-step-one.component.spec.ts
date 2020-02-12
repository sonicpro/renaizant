import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStepOneComponent } from './user-step-one.component';

describe('UserStepOneComponent', () => {
  let component: UserStepOneComponent;
  let fixture: ComponentFixture<UserStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
