import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  constructor() {
    super();
  }

  public list(): Observable<UserModel[]> {
    this.setApiUrl(`/user`);

    return this.httpGet().pipe(
      catchError(message => {
        return throwError(
          message ? message : 'Erro ao listar os usuários. Tente novamente.'
        );
      })
    );
  }

  public create(data: UserModel): Observable<string> {
    this.setApiUrl(`/user`);
    this.setApiData(data);

    return this.httpPost()
      .pipe(map(() => 'O usuário foi criado com sucesso.'))
      .pipe(
        catchError(message => {
          return throwError(message ? message : 'Erro ao salvar o usuário');
        })
      );
  }
}
