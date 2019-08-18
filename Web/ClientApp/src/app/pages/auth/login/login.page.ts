import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../base.page';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginModel } from 'src/app/shared/models/login.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage extends BasePage implements OnInit {
  public loginFormGroup: FormGroup;
  private loginModel: LoginModel;

  constructor(private authService: AuthService) {
    super();
    this.loginModel = new LoginModel();
    this.validateLoginPage();
  }

  ngOnInit() {
    this.buildForm();
  }

  private validateLoginPage() {
    if (this.storageHelper.getToken()) {
      this.router.navigateByUrl('home');
    }
  }

  private buildForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: [this.loginModel.email, [Validators.required, Validators.email]],
      password: [this.loginModel.password, [Validators.required]]
    });

    this.setOnChanges();
  }

  private setOnChanges() {
    this.loginFormGroup
      .get('email')
      .valueChanges.subscribe(value => (this.loginModel.email = value));
    this.loginFormGroup
      .get('password')
      .valueChanges.subscribe(value => (this.loginModel.password = value));
  }

  public userRegisterClick() {
    this.router.navigateByUrl('user/new');
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.loginFormGroup.valid) {
      this.doLogin();
    } else {
      this.toastHelper.show('Informe os campos destacados para entrar.');
    }
  }

  private doLogin() {
    this.loadingHelper.showLoading();

    this.authService
      .login(this.loginModel)
      .pipe(finalize(() => this.loadingHelper.hideLoading()))
      .subscribe(
        (response: string) => {
          this.storageHelper.setToken(response);
          this.router.navigateByUrl('home');
        },
        (error: string) => {
          this.toastHelper.show(error);
        }
      );
  }

  public promptAlertHelper() {
    this.alertHelper.presentPrompt(
      'Digite seu e-mail para recuperar sua senha:',
      'Esqueceu a senha?',
      (email: string) => this.forgetPasswordClick(email)
    );
  }

  private forgetPasswordClick(data: any) {
    this.loadingHelper.showLoading();
    this.authService
      .generateNewToken(data.email)
      .pipe(finalize(() => this.loadingHelper.hideLoading()))
      .subscribe(
        (success: string) => {
          this.router.navigate(['user/athentication/' + data.email]);
        },
        (error: string) => {
          this.toastHelper.show(error);
        }
      );
  }
}
