import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStepTwoComponent } from './org-step-two.component';

describe('OrgStepTwoComponent', () => {
  let component: OrgStepTwoComponent;
  let fixture: ComponentFixture<OrgStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
