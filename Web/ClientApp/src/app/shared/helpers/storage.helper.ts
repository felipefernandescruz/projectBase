import decode from 'jwt-decode';
import { LoggedModel } from '../models/logged.model';

export class StorageHelper {
  private TOKEN = 'token';

  constructor() {}

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  public setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  public getLoggedModel(): LoggedModel {
    const token = this.getToken();
    return token ? <LoggedModel>decode(token).loggedUser : null;
  }

  public clearToken() {
    localStorage.removeItem(this.TOKEN);
  }
}
