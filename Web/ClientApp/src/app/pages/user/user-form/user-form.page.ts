import { Component, OnInit } from "@angular/core";
import { BasePage } from "../../base.page";
import { FormGroup, Validators } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";
import { UserService } from "src/app/shared/services/user.service";
import { finalize } from "rxjs/operators";
import { GenderEnum } from "src/app/shared/enum/gender.enum";
import { PronounEnum } from "src/app/shared/enum/pronun.enum";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.page.html",
  styleUrls: ["./user-form.page.scss"]
})
export class UserFormPage extends BasePage implements OnInit {
  public userFormGroup: FormGroup;
  private userModel: UserModel;

  public genderEnumList: GenderEnum[];
  public pronounEnumList: PronounEnum[];

  public selectedGenderController: boolean = false;

  constructor(private userService: UserService) {
    super();
    this.userModel = new UserModel();
    this.genderEnumList = GenderEnum.List();
    this.pronounEnumList = PronounEnum.List();
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.userFormGroup = this.formBuilder.group({
      name: [this.userModel.name, [Validators.required]],
      lastName: [this.userModel.lastName, [Validators.required]],
      email: [this.userModel.email, [Validators.required, Validators.email]],
      dateOfBirth: [this.userModel.dateOfBirth],
      genderEnum: [this.userModel.gender],
      pronoun: [this.userModel.pronoun],
      customGender: [this.userModel.customGender]
    });

    this.setOnChanges();
  }

  private setOnChanges() {
    this.userFormGroup
      .get("name")
      .valueChanges.subscribe(value => (this.userModel.name = value));
    this.userFormGroup
      .get("lastName")
      .valueChanges.subscribe(value => (this.userModel.lastName = value));
    this.userFormGroup
      .get("email")
      .valueChanges.subscribe(value => (this.userModel.email = value));
    this.userFormGroup
      .get("dateOfBirth")
      .valueChanges.subscribe(value => (this.userModel.dateOfBirth = value));
    this.userFormGroup.get("genderEnum").valueChanges.subscribe(value => {
      this.userModel.gender = value;
      this.genderFormControl();
    });
    this.userFormGroup
      .get("pronoun")
      .valueChanges.subscribe(value => (this.userModel.pronoun = value));
    this.userFormGroup
      .get("customGender")
      .valueChanges.subscribe(value => (this.userModel.customGender = value));
  }

  public genderFormControl() {
    this.selectedGenderController =
      this.userFormGroup.get("genderEnum").value === GenderEnum.Custom.value;
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.userFormGroup.valid) {
      this.saveUser();
    } else {
      this.toastHelper.show("Informe os campos destacados para salvar.");
    }
  }

  private saveUser() {
    this.loadingHelper.showLoading();
    this.userService
      .create(this.userModel)
      .pipe(finalize(() => this.loadingHelper.hideLoading()))
      .subscribe(
        (success: string) => {
          this.router.navigate(["user/athentication/" + this.userModel.email]);
        },
        (error: string) => {
          this.toastHelper.show(error);
        }
      );
  }
}
