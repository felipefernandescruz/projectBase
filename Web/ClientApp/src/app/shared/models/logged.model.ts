export class LoggedModel {
  id: number;
  loginDateTime: Date;
  name: string;
  profile: number;
  email: string;

  constructor() {
    this.id = null;
    this.loginDateTime = null;
    this.name = '';
    this.profile = null;
    this.email = '';
  }
}
