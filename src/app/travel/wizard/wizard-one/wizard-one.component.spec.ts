import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardOneComponent } from './wizard-one.component';

describe('WizardOneComponent', () => {
  let component: WizardOneComponent;
  let fixture: ComponentFixture<WizardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
