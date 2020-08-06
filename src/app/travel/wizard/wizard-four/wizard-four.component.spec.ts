import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFourComponent } from './wizard-four.component';

describe('WizardFourComponent', () => {
  let component: WizardFourComponent;
  let fixture: ComponentFixture<WizardFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
