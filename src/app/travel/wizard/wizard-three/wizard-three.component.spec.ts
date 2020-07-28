import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardThreeComponent } from './wizard-three.component';

describe('WizardThreeComponent', () => {
  let component: WizardThreeComponent;
  let fixture: ComponentFixture<WizardThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
