import { AbstractControl } from "@angular/forms";

export const lowerCaseValidator = (control: AbstractControl): { lowerCase: boolean } | null => {
  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { lowerCase: true }
  }
  return null
}
