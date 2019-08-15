import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ChangePasswordModel } from "../models/change-password.model";

@Injectable({
  providedIn: "root"
})
export class AuthService extends BaseService {
  constructor() {
    super();
  }

  public authByEmail(data: ChangePasswordModel): Observable<string> {
    console.log(data);
    this.setApiUrl(`/auth/password`);
    this.setApiData(data);

    return this.httpPut()
      .pipe(map(() => "Senha cadastrada com sucesso!"))
      .pipe(
        catchError(message => {
          return throwError(message ? message : "Erro ao autenticar o usuário");
        })
      );
  }

  public generateNewToken(email: string): Observable<string> {
    this.setApiUrl(`/auth/${email}`);

    return this.httpGet().pipe(
      catchError(message => {
        return throwError(
          message
            ? message
            : 'Erro ao gerar token. Tente novamente'
        );
      })
    );
  }
}
