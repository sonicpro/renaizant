import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStepOneComponent } from './org-step-one.component';

describe('OrgStepOneComponent', () => {
  let component: OrgStepOneComponent;
  let fixture: ComponentFixture<OrgStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
