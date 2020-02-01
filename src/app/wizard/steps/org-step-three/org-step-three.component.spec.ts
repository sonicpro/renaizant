import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStepThreeComponent } from './org-step-three.component';

describe('OrgStepThreeComponent', () => {
  let component: OrgStepThreeComponent;
  let fixture: ComponentFixture<OrgStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
