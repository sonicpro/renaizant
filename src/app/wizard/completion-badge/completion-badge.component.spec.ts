import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionBadgeComponent } from './completion-badge.component';

describe('CompletionBadgeComponent', () => {
  let component: CompletionBadgeComponent;
  let fixture: ComponentFixture<CompletionBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
