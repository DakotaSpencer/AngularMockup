import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserWizardStepOneComponent } from './create-user-wizard-step-one.component';

describe('CreateUserWizardStepOneComponent', () => {
  let component: CreateUserWizardStepOneComponent;
  let fixture: ComponentFixture<CreateUserWizardStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserWizardStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserWizardStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
