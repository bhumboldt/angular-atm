import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockFormFieldComponent } from './restock-form-field.component';

describe('RestockFormFieldComponent', () => {
  let component: RestockFormFieldComponent;
  let fixture: ComponentFixture<RestockFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestockFormFieldComponent]
    });
    fixture = TestBed.createComponent(RestockFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
