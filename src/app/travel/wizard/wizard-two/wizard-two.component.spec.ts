import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTwoComponent } from './wizard-two.component';

describe('WizardTwoComponent', () => {
  let component: WizardTwoComponent;
  let fixture: ComponentFixture<WizardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
