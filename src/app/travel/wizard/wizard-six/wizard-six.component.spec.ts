import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSixComponent } from './wizard-six.component';

describe('WizardSixComponent', () => {
  let component: WizardSixComponent;
  let fixture: ComponentFixture<WizardSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
