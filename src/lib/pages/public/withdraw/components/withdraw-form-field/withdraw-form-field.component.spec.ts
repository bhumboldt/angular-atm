import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFormFieldComponent } from './withdraw-form-field.component';

describe('WithdrawFormFieldComponent', () => {
  let component: WithdrawFormFieldComponent;
  let fixture: ComponentFixture<WithdrawFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawFormFieldComponent]
    });
    fixture = TestBed.createComponent(WithdrawFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
