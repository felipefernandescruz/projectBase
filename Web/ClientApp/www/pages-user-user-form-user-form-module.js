(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-form-user-form-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-error/form-error.component */ "./src/app/components/form-error/form-error.component.ts");
/* harmony import */ var _ion_expandable_ion_expandable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ion-expandable/ion-expandable.component */ "./src/app/components/ion-expandable/ion-expandable.component.ts");




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorComponent"], _ion_expandable_ion_expandable_component__WEBPACK_IMPORTED_MODULE_3__["IonExpandableComponent"]],
            imports: [],
            exports: [_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_2__["FormErrorComponent"], _ion_expandable_ion_expandable_component__WEBPACK_IMPORTED_MODULE_3__["IonExpandableComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/form-error/form-error.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-error/form-error.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p padding-left [hidden]=\"!isRequiredError()\">\n  {{ requiredMessage ? requiredMessage : 'Campo obrigatório' }}\n</p>\n<p padding-left [hidden]=\"!isEmailError()\">\n  Email inválido\n</p>\n"

/***/ }),

/***/ "./src/app/components/form-error/form-error.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-error/form-error.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #f04141;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWxpcGVmZXJuYW5kZXMvRGVza3RvcC9GZWxpcGUvUHJvamV0b3MvUHJvamVjdEJhc2UvV2ViL0NsaWVudEFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1lcnJvci9mb3JtLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWVycm9yL2Zvcm0tZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgY29sb3I6ICNmMDQxNDE7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/form-error/form-error.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-error/form-error.component.ts ***!
  \***************************************************************/
/*! exports provided: FormErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorComponent", function() { return FormErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormErrorComponent = /** @class */ (function () {
    function FormErrorComponent() {
    }
    FormErrorComponent.prototype.ngOnInit = function () { };
    FormErrorComponent.prototype.isRequiredError = function () {
        return (this.field &&
            (this.field.touched || this.isSubmitted) &&
            this.field.errors &&
            this.field.errors.required);
    };
    FormErrorComponent.prototype.isEmailError = function () {
        return (this.field &&
            (this.field.touched || this.isSubmitted) &&
            this.field.errors &&
            this.field.errors.email);
    };
    FormErrorComponent.prototype.isPasswordMatchError = function () {
        return (this.field &&
            (this.field.touched || this.isSubmitted) &&
            this.field.errors &&
            this.field.errors.matchPassword);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormErrorComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormErrorComponent.prototype, "isSubmitted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormErrorComponent.prototype, "requiredMessage", void 0);
    FormErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "form-error",
            template: __webpack_require__(/*! ./form-error.component.html */ "./src/app/components/form-error/form-error.component.html"),
            styles: [__webpack_require__(/*! ./form-error.component.scss */ "./src/app/components/form-error/form-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormErrorComponent);
    return FormErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/ion-expandable/ion-expandable.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ion-expandable/ion-expandable.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ion-expandable works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/ion-expandable/ion-expandable.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/ion-expandable/ion-expandable.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW9uLWV4cGFuZGFibGUvaW9uLWV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ion-expandable/ion-expandable.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/ion-expandable/ion-expandable.component.ts ***!
  \***********************************************************************/
/*! exports provided: IonExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonExpandableComponent", function() { return IonExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IonExpandableComponent = /** @class */ (function () {
    function IonExpandableComponent() {
    }
    IonExpandableComponent.prototype.ngOnInit = function () { };
    IonExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ion-expandable',
            template: __webpack_require__(/*! ./ion-expandable.component.html */ "./src/app/components/ion-expandable/ion-expandable.component.html"),
            styles: [__webpack_require__(/*! ./ion-expandable.component.scss */ "./src/app/components/ion-expandable/ion-expandable.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IonExpandableComponent);
    return IonExpandableComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.module.ts ***!
  \**********************************************************/
/*! exports provided: UserFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormPageModule", function() { return UserFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-form.page */ "./src/app/pages/user/user-form/user-form.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _user_form_page__WEBPACK_IMPORTED_MODULE_6__["UserFormPage"]
    }
];
var UserFormPageModule = /** @class */ (function () {
    function UserFormPageModule() {
    }
    UserFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_form_page__WEBPACK_IMPORTED_MODULE_6__["UserFormPage"]]
        })
    ], UserFormPageModule);
    return UserFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Sing Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <form [formGroup]=\"userFormGroup\" (ngSubmit)=\"onSubmit()\">\n    <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Nome</ion-label>\n          <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n    </ion-item>\n    <form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('name')\"></form-error>\n    <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Sobrenome</ion-label>\n        <ion-input formControlName=\"lastName\" type=\"text\"></ion-input>\n    </ion-item>\n<form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('lastName')\"></form-error>\n    <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input formControlName=\"email\" type=\"text\"></ion-input>\n    </ion-item>\n<form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('email')\"></form-error>\n    <ion-item>\n      <ion-label position=\"stacked\">Data de aniversário</ion-label>\n      <ion-input formControlName=\"dateOfBirth\" type=\"date\" >\n      </ion-input>\n    </ion-item>\n<form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('dateOfBirth')\"></form-error>\n    <ion-item>\n      <ion-label>Gênero</ion-label>\n      <ion-select formControlName=\"genderEnum\" placeholder=\"Selecione\" >\n         <ion-select-option *ngFor=\"let gender of genderEnumList\" [value]=\"gender.value\">{{gender.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('genderEnum')\"></form-error>\n    <div *ngIf=\"selectedGenderController\">\n      <ion-item >\n        <ion-label>Selecione seu pronome</ion-label>\n        <ion-select formControlName=\"pronoun\" placeholder=\"Selecione\">\n          <ion-select-option *ngFor=\"let pronoun of pronounEnumList\" [value]=\"pronoun.value\">{{pronoun.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('pronoun')\"></form-error>\n      <ion-item lines=\"full\">\n          <ion-input formControlName=\"customGender\" type=\"text\" placeholder=\"Informe seu gênero (Opicional)\"></ion-input>\n      </ion-item>\n      <form-error [isSubmitted]=\"isSubmitted\" [field]=\"userFormGroup.get('customGender')\"></form-error>\n    </div>\n\n\n    <ion-button form=\"userForm\" fill=\"outline\" type=\"submit\">\n        <ion-icon slot=\"start\" name=\"save\"></ion-icon>\n        Salvar\n    </ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1mb3JtL3VzZXItZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.ts ***!
  \********************************************************/
/*! exports provided: UserFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormPage", function() { return UserFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base.page */ "./src/app/pages/base.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_enum_gender_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/gender.enum */ "./src/app/shared/enum/gender.enum.ts");
/* harmony import */ var src_app_shared_enum_pronun_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/pronun.enum */ "./src/app/shared/enum/pronun.enum.ts");









var UserFormPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserFormPage, _super);
    function UserFormPage(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.selectedGenderController = false;
        _this.userModel = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
        _this.genderEnumList = src_app_shared_enum_gender_enum__WEBPACK_IMPORTED_MODULE_7__["GenderEnum"].List();
        _this.pronounEnumList = src_app_shared_enum_pronun_enum__WEBPACK_IMPORTED_MODULE_8__["PronounEnum"].List();
        return _this;
    }
    UserFormPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormPage.prototype.buildForm = function () {
        this.userFormGroup = this.formBuilder.group({
            name: [this.userModel.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: [this.userModel.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [this.userModel.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            dateOfBirth: [this.userModel.name],
            genderEnum: [this.userModel.name],
            pronoun: [this.userModel.pronoun],
            customGender: [this.userModel.customGender]
        });
        this.setOnChanges();
    };
    UserFormPage.prototype.setOnChanges = function () {
        var _this = this;
        this.userFormGroup
            .get("name")
            .valueChanges.subscribe(function (value) { return (_this.userModel.name = value); });
        this.userFormGroup
            .get("lastName")
            .valueChanges.subscribe(function (value) { return (_this.userModel.lastName = value); });
        this.userFormGroup
            .get("email")
            .valueChanges.subscribe(function (value) { return (_this.userModel.email = value); });
        this.userFormGroup
            .get("dateOfBirth")
            .valueChanges.subscribe(function (value) { return (_this.userModel.dateOfBirth = value); });
        this.userFormGroup.get("genderEnum").valueChanges.subscribe(function (value) {
            _this.userModel.genderEnum = value;
            _this.genderFormControl();
        });
        this.userFormGroup
            .get("pronoun")
            .valueChanges.subscribe(function (value) { return (_this.userModel.pronoun = value); });
        this.userFormGroup
            .get("customGender")
            .valueChanges.subscribe(function (value) { return (_this.userModel.customGender = value); });
    };
    UserFormPage.prototype.genderFormControl = function () {
        this.selectedGenderController =
            this.userFormGroup.get("genderEnum").value === src_app_shared_enum_gender_enum__WEBPACK_IMPORTED_MODULE_7__["GenderEnum"].Custom.value;
    };
    UserFormPage.prototype.onSubmit = function () {
        this.isSubmitted = true;
        if (this.userFormGroup.valid) {
            this.saveUser();
        }
        else {
            this.toastHelper.show("Informe os campos destacados para salvar.");
        }
    };
    UserFormPage.prototype.saveUser = function () {
        var _this = this;
        this.loadingHelper.showLoading();
        this.userService
            .create(this.userModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.loadingHelper.hideLoading(); }))
            .subscribe(function (success) { return _this.toastHelper.show(success); }, function (error) { return _this.toastHelper.show(error); });
    };
    UserFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-form",
            template: __webpack_require__(/*! ./user-form.page.html */ "./src/app/pages/user/user-form/user-form.page.html"),
            styles: [__webpack_require__(/*! ./user-form.page.scss */ "./src/app/pages/user/user-form/user-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserFormPage);
    return UserFormPage;
}(_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ }),

/***/ "./src/app/shared/enum/gender.enum.ts":
/*!********************************************!*\
  !*** ./src/app/shared/enum/gender.enum.ts ***!
  \********************************************/
/*! exports provided: GenderEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderEnum", function() { return GenderEnum; });
var GenderEnum = /** @class */ (function () {
    function GenderEnum(value, name) {
        this.value = value;
        this.name = name;
    }
    GenderEnum.List = function () {
        return [this.Male, this.Female, this.Custom];
    };
    GenderEnum.Get = function (value) {
        return this.List().find(function (item) { return item.value === value; });
    };
    GenderEnum.Male = new GenderEnum(1, "Masculino");
    GenderEnum.Female = new GenderEnum(2, "Feminino");
    GenderEnum.Custom = new GenderEnum(3, "Personalizado");
    return GenderEnum;
}());



/***/ }),

/***/ "./src/app/shared/enum/pronun.enum.ts":
/*!********************************************!*\
  !*** ./src/app/shared/enum/pronun.enum.ts ***!
  \********************************************/
/*! exports provided: PronounEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PronounEnum", function() { return PronounEnum; });
var PronounEnum = /** @class */ (function () {
    function PronounEnum(value, name) {
        this.value = value;
        this.name = name;
    }
    PronounEnum.List = function () {
        return [this.He, this.She, this.HeOrShe];
    };
    PronounEnum.Get = function (value) {
        return this.List().find(function (item) { return item.value === value; });
    };
    PronounEnum.He = new PronounEnum(1, "Ele");
    PronounEnum.She = new PronounEnum(2, "Ela");
    PronounEnum.HeOrShe = new PronounEnum(3, "Ele(a)");
    return PronounEnum;
}());



/***/ }),

/***/ "./src/app/shared/models/base.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/base.model.ts ***!
  \*********************************************/
/*! exports provided: BaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
        this.createdAt = '';
        this.deletedAt = '';
        this.updatedAt = '';
    }
    return BaseModel;
}());



/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.model */ "./src/app/shared/models/base.model.ts");


var UserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserModel, _super);
    function UserModel() {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.lastName = "";
        _this.email = "";
        _this.dateOfBirth = "";
        _this.genderEnum = null;
        _this.pronoun = null;
        _this.customGender = null;
        return _this;
    }
    return UserModel;
}(_base_model__WEBPACK_IMPORTED_MODULE_1__["BaseModel"]));



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_service_locator_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/service-locator.helper */ "./src/app/shared/helpers/service-locator.helper.ts");
/* harmony import */ var _helpers_storage_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/storage.helper */ "./src/app/shared/helpers/storage.helper.ts");








var BaseService = /** @class */ (function () {
    function BaseService() {
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.http = _helpers_service_locator_helper__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorHelper"].injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
        this.storageHelper = _helpers_service_locator_helper__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorHelper"].injector.get(_helpers_storage_helper__WEBPACK_IMPORTED_MODULE_7__["StorageHelper"]);
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    }
    BaseService.prototype.setApiUrl = function (apiUrl) {
        this.apiUrl = apiUrl;
    };
    BaseService.prototype.setApiData = function (apiData) {
        this.apiData = apiData;
    };
    BaseService.prototype.setParams = function (key, value) {
        this.params = this.params.set(key, value);
    };
    BaseService.prototype.appendParams = function (key, value) {
        this.params = this.params.append(key, value);
    };
    BaseService.prototype.getRequestUrl = function () {
        return this.serverUrl + this.apiUrl;
    };
    BaseService.prototype.getHttpHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append("Content-Type", "application/json")
            .append("Accept", "application/json");
        if (this.storageHelper.getToken()) {
            headers = headers.append("AuthToken", this.storageHelper.getToken());
        }
        return headers;
    };
    BaseService.prototype.getOptions = function () {
        return { headers: this.getHttpHeaders(), params: this.params };
    };
    BaseService.prototype.httpGet = function () {
        var _this = this;
        var isOffline = this.checkIsOffline();
        if (isOffline) {
            return isOffline;
        }
        return this.http
            .get(this.getRequestUrl(), this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.handleSuccess(res); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    BaseService.prototype.httpPost = function () {
        var _this = this;
        var isOffline = this.checkIsOffline();
        if (isOffline) {
            return isOffline;
        }
        return this.http
            .post(this.getRequestUrl(), this.apiData, this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.handleSuccess(res); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    BaseService.prototype.httpPut = function () {
        var _this = this;
        var isOffline = this.checkIsOffline();
        if (isOffline) {
            return isOffline;
        }
        return this.http
            .put(this.getRequestUrl(), this.apiData, this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.handleSuccess(res); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    BaseService.prototype.httpDelete = function () {
        var _this = this;
        var isOffline = this.checkIsOffline();
        if (isOffline) {
            return isOffline;
        }
        return this.http
            .delete(this.getRequestUrl(), this.getOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.handleSuccess(res); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    BaseService.prototype.handleSuccess = function (response) {
        return response;
    };
    BaseService.prototype.handleError = function (response) {
        var message = response && response.error && response.error.message
            ? response.error.message
            : null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(message);
    };
    BaseService.prototype.checkIsOffline = function () {
        if (!window.navigator.onLine) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw("Parece que você está off-line! Por favor, verifique sua conexão de rede e tente novamente.");
        }
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService() {
        return _super.call(this) || this;
    }
    UserService.prototype.list = function () {
        this.setApiUrl("/user");
        return this.httpGet().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(message ? message : "Erro ao listar os usuários. Tente novamente.");
        }));
    };
    UserService.prototype.create = function (data) {
        console.log(data);
        this.setApiUrl("/user");
        this.setApiData(data);
        return this.httpPost()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return "O usuário foi criado com sucesso."; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(message ? message : "O usuário foi criado com sucesso.");
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=pages-user-user-form-user-form-module.js.map