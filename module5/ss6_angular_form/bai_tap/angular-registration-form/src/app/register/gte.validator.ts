import {AbstractControl, ValidationErrors} from '@angular/forms';

export function gte(control: AbstractControl): ValidationErrors | null {
  const val = +control.value;
  if (isNaN(val)) {
    return {checkAge: true, requiredValue: 18};
  }
  if (val <= 18) {
    return {checkAge: true, required: 18};
  }
  return null;
}
