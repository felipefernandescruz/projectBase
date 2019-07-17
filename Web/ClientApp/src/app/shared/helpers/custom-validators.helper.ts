import { AbstractControl } from '@angular/forms';

export class CustomValidatorsHelper {
  public static confirmPasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordNotMatch: true };
    }
    return null;
  }
}
