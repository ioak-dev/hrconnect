import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSevenComponent } from './wizard-seven.component';

describe('WizardSevenComponent', () => {
  let component: WizardSevenComponent;
  let fixture: ComponentFixture<WizardSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
