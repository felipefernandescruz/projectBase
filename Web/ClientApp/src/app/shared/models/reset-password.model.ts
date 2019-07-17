export class ResetPasswordModel {
  email: string;
  token: string;
  profile: number;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email = '';
    this.token = '';
    this.profile = null;
    this.password = '';
    this.confirmPassword = '';
  }
}
