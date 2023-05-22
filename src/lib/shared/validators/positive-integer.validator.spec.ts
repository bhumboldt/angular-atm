import { AbstractControl, FormControl } from '@angular/forms';
import { positiveIntegerValidator } from './positive-integer.validator';

describe('Positive Integer Validator', () => {
  describe('positiveIntegerValidator', () => {
    it('should return null when there is no value in the control', () => {
      const control = new FormControl();

      const positiveIntResponse = positiveIntegerValidator(control);

      expect(positiveIntResponse).toBeNull();
    });

    it('should return null when there is a positive integer in the control', () => {
      const control = new FormControl();

      control.patchValue(20);
      const positiveInteResponse = positiveIntegerValidator(control);

      expect(positiveInteResponse).toBeNull();
    });

    it('should return a validation error when there is 0 in the control', () => {
      const control = new FormControl();

      control.patchValue(0);
      const positiveIntResponse = positiveIntegerValidator(control);

      expect(positiveIntResponse).toEqual({
        invalidInteger: true
      });
    });

    it('should return a validation error when there is a decimal in the control', () => {
      const control = new FormControl();

      control.patchValue(10.99);
      const positiveIntResponse = positiveIntegerValidator(control);

      expect(positiveIntResponse).toEqual({
        invalidInteger: true
      });
    });
  })
})
