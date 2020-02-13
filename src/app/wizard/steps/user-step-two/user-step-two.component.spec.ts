import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStepTwoComponent } from './user-step-two.component';

describe('UserStepTwoComponent', () => {
  let component: UserStepTwoComponent;
  let fixture: ComponentFixture<UserStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
