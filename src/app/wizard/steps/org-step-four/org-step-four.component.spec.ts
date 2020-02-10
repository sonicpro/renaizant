import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStepFourComponent } from './org-step-four.component';

describe('OrgStepFourComponent', () => {
  let component: OrgStepFourComponent;
  let fixture: ComponentFixture<OrgStepFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStepFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
