import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BasePage } from "../../base.page";
import { FormGroup, Validators } from "@angular/forms";
import { ChangePasswordModel } from "src/app/shared/models/change-password.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-user-athentication",
  templateUrl: "./user-athentication.page.html",
  styleUrls: ["./user-athentication.page.scss"]
})
export class UserAthenticationPage extends BasePage implements OnInit {
  public changePasswordModel: ChangePasswordModel;

  public userAuthenticationFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    super();
    this.changePasswordModel = new ChangePasswordModel();
    this.changePasswordModel.email = this.activatedRoute.snapshot.paramMap.get(
      "userEmail"
    );
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.userAuthenticationFormGroup = this.formBuilder.group({
      token: [this.changePasswordModel.token, [Validators.required]],
      password: [this.changePasswordModel.password, [Validators.required]],
      confirmPassword: [
        this.changePasswordModel.confirmPassword,
        [Validators.required]
      ]
    });

    this.setOnChanges();
  }

  private setOnChanges() {
    this.userAuthenticationFormGroup
      .get("token")
      .valueChanges.subscribe(
        (value: string) =>
          (this.changePasswordModel.token = value.toUpperCase())
      );

    this.userAuthenticationFormGroup
      .get("password")
      .valueChanges.subscribe(
        (value: string) => (this.changePasswordModel.password = value)
      );

    this.userAuthenticationFormGroup
      .get("confirmPassword")
      .valueChanges.subscribe(
        (value: string) => (this.changePasswordModel.confirmPassword = value)
      );
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.userAuthenticationFormGroup.valid) {
      this.authenticationUser();
    } else {
      this.toastHelper.show("Informe os campos destacados para salvar.");
    }
  }

  private authenticationUser() {
    if (
      this.changePasswordModel.password ===
      this.changePasswordModel.confirmPassword
    ) {
      this.loadingHelper.showLoading();
      this.authService
        .authByEmail(this.changePasswordModel)
        .pipe(finalize(() => this.loadingHelper.hideLoading()))
        .subscribe(
          (success: string) => {
            this.router.navigate(["/login"]);
          },
          (error: string) => {
            this.toastHelper.show(error);
          }
        );
    } else {
      this.alertHelper.errorAlert(
        "Senha e confimar senhas diferentes. Tente novamente!"
      );
    }
  }

  public generateNewToken() {
    this.loadingHelper.showLoading();
    this.authService
      .generateNewToken(this.changePasswordModel.email)
      .pipe(finalize(() => this.loadingHelper.hideLoading()))
      .subscribe(
        (success: string) => {
          this.alertHelper.okAlert(
            "Um novo token foi enviado para: " + this.changePasswordModel.email
          );
        },
        (error: string) => {
          this.toastHelper.show(error);
        }
      );
  }
}
