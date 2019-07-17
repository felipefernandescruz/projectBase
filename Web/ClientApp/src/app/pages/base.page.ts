import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { AlertHelper } from "../shared/helpers/alert-helper";
import { LoadingHelper } from "../shared/helpers/loading.helper";
import { ServiceLocatorHelper } from "../shared/helpers/service-locator.helper";
import { StorageHelper } from "../shared/helpers/storage.helper";
import { ToastHelper } from "../shared/helpers/toast.helper";
import { LoggedModel } from "../shared/models/logged.model";

export class BasePage {
  private title: string;
  private loggedModel: LoggedModel;
  protected formBuilder: FormBuilder;
  protected router: Router;

  protected navCtrl: NavController;

  protected loadingHelper: LoadingHelper;
  protected storageHelper: StorageHelper;
  protected toastHelper: ToastHelper;
  protected alertHelper: AlertHelper;

  public isSubmitted: boolean;

  constructor() {
    // this.loggedModel = this.storageHelper.getLoggedModel();
    this.formBuilder = ServiceLocatorHelper.injector.get(FormBuilder);
    this.router = ServiceLocatorHelper.injector.get(Router);

    this.navCtrl = ServiceLocatorHelper.injector.get(NavController);

    this.loadingHelper = ServiceLocatorHelper.injector.get(LoadingHelper);
    this.storageHelper = ServiceLocatorHelper.injector.get(StorageHelper);
    this.toastHelper = ServiceLocatorHelper.injector.get(ToastHelper);
    this.alertHelper = ServiceLocatorHelper.injector.get(AlertHelper);
  }

  protected validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  protected setTitle(title: string) {
    this.title = title;
  }

  public getTitle() {
    return this.title;
  }

  public getDateNow() {
    return moment().format("YYYY-MM-DD");
  }

  public getYearNow() {
    return moment().format("YYYY");
  }

  protected formatDate(date: any) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }

  public getMonthNames() {
    return [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
  }
}
