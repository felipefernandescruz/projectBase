import { Component, Input } from "@angular/core";

@Component({
  selector: "form-error",
  templateUrl: "./form-error.component.html",
  styleUrls: ["./form-error.component.scss"]
})
export class FormErrorComponent {
  @Input() field: any;
  @Input() isSubmitted: boolean;

  @Input() requiredMessage: string;

  constructor() {}

  ngOnInit() {}

  isRequiredError() {
    return (
      this.field &&
      (this.field.touched || this.isSubmitted) &&
      this.field.errors &&
      this.field.errors.required
    );
  }

  isEmailError() {
    return (
      this.field &&
      (this.field.touched || this.isSubmitted) &&
      this.field.errors &&
      this.field.errors.email
    );
  }

  isPasswordMatchError() {
    return (
      this.field &&
      (this.field.touched || this.isSubmitted) &&
      this.field.errors &&
      this.field.errors.matchPassword
    );
  }
}
