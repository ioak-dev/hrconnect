import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFiveComponent } from './wizard-five.component';

describe('WizardFiveComponent', () => {
  let component: WizardFiveComponent;
  let fixture: ComponentFixture<WizardFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
