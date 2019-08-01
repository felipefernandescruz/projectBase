import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ServiceLocatorHelper } from "../helpers/service-locator.helper";
import { StorageHelper } from "../helpers/storage.helper";

@Injectable()
export class BaseService {
  private serverUrl = environment.apiUrl;

  private http: HttpClient;
  private storageHelper: StorageHelper;

  private apiUrl: string;
  private apiData: any;
  private params: HttpParams;

  constructor() {
    this.http = ServiceLocatorHelper.injector.get(HttpClient);
    this.storageHelper = ServiceLocatorHelper.injector.get(StorageHelper);
    this.params = new HttpParams();
  }

  protected setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  protected setApiData(apiData: any) {
    this.apiData = apiData;
  }

  protected setParams(key: string, value: string) {
    this.params = this.params.set(key, value);
  }

  protected appendParams(key: string, value: string) {
    this.params = this.params.append(key, value);
  }

  private getRequestUrl() {
    return this.serverUrl + this.apiUrl;
  }

  private getHttpHeaders() {
    let headers = new HttpHeaders()
      .append("Content-Type", "application/json")
      .append("Accept", "application/json");

    if (this.storageHelper.getToken()) {
      headers = headers.append("AuthToken", this.storageHelper.getToken());
    }

    return headers;
  }

  private getOptions() {
    return { headers: this.getHttpHeaders(), params: this.params };
  }

  protected httpGet() {
    const isOffline = this.checkIsOffline();
    if (isOffline) {
      return isOffline;
    }

    return this.http
      .get(this.getRequestUrl(), this.getOptions())
      .pipe(map(res => this.handleSuccess(res)))
      .pipe(catchError(error => this.handleError(error)));
  }

  protected httpPost() {
    const isOffline = this.checkIsOffline();
    if (isOffline) {
      return isOffline;
    }

    return this.http
      .post(this.getRequestUrl(), this.apiData, this.getOptions())
      .pipe(map(res => this.handleSuccess(res)))
      .pipe(catchError(error => this.handleError(error)));
  }

  protected httpPut() {
    const isOffline = this.checkIsOffline();
    if (isOffline) {
      return isOffline;
    }

    return this.http
      .put(this.getRequestUrl(), this.apiData, this.getOptions())
      .pipe(map(res => this.handleSuccess(res)))
      .pipe(catchError(error => this.handleError(error)));
  }

  protected httpDelete() {
    const isOffline = this.checkIsOffline();
    if (isOffline) {
      return isOffline;
    }

    return this.http
      .delete(this.getRequestUrl(), this.getOptions())
      .pipe(map(res => this.handleSuccess(res)))
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleSuccess(response) {
    return response;
  }

  private handleError(response) {
    const message =
      response && response.error && response.error.message
        ? response.error.message
        : null;
    return throwError(message);
  }

  private checkIsOffline() {
    if (!window.navigator.onLine) {
      return Observable.throw(
        "Parece que você está off-line! Por favor, verifique sua conexão de rede e tente novamente."
      );
    }
  }
}
