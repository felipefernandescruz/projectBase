export class ChangePasswordModel {
  email: string;
  token: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email = "";
    this.token = "";
    this.password = "";
    this.confirmPassword = "";
  }
}
