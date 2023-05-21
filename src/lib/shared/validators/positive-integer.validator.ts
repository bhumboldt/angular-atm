import { AbstractControl, ValidationErrors } from '@angular/forms';

export const positiveIntegerValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;

  if (value !== null && (value <= 0 || value.toString().includes('.'))) {
    return { invalidInteger: true }
  }

  return null;
}
