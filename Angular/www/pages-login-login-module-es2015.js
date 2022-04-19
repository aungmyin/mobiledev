(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar color='dark'>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"textcenter logo-container\">\r\n    <app-logo-large style=\"width: 83%;\"></app-logo-large>\r\n  </div>\r\n<div class=\"form-container\">\r\n\r\n  <form >\r\n    <p>\r\n      <ion-label class=\"login-lable\" position=\"stacked\">Email/Account</ion-label>\r\n      <ion-input type=\"text\" name=\"username\" class=\"input-style\" [(ngModel)]=\"postData.username\"></ion-input>\r\n    </p>\r\n    <p>\r\n      <ion-label class=\"login-lable\" position=\"stacked\">Password</ion-label>\r\n      <ion-input type=\"password\" autocomplete=\"off\" class=\"input-style\" name=\"password\" [(ngModel)]=\"postData.password\"></ion-input> \r\n    </p>\r\n    <p>\r\n      <ion-label class=\"login-lable\"  position=\"stacked\">Company</ion-label>\r\n      <ion-input type=\"text\" autocomplete=\"off\" class=\"input-style\" name=\"company\" [(ngModel)]=\"postData.company\"></ion-input>\r\n      \r\n    </p>\r\n    \r\n\r\n      <!-- <ion-item lines=\"none\">\r\n        <ion-label class=\"login-lable\" position=\"stacked\">Email/Account\r\n          <ion-input type=\"text\" name=\"username\" style=\"border-bottom: 1px solid #707070;\" [(ngModel)]=\"postData.username\"></ion-input>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label class=\"login-lable\" position=\"stacked\">Password\r\n          <ion-input type=\"password\" autocomplete=\"off\" style=\"border-bottom: 1px solid #707070;\" name=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-label class=\"login-lable\"  position=\"stacked\">Company\r\n          <ion-input type=\"text\" autocomplete=\"off\" style=\"border-bottom: 1px solid #707070;\" name=\"company\" [(ngModel)]=\"postData.company\"></ion-input>\r\n        </ion-label>\r\n      </ion-item> -->\r\n    <p>\r\n      <ion-item lines=\"none\" style=\"margin-bottom: 20px;\">\r\n        <a slot=\"end\" routerLink=\"/forgot-password\" style=\"color: #c1c5ca;\">Forgot password</a>\r\n      </ion-item>\r\n    </p>\r\n    <ion-button expand=\"block\" style=\"font-size: 20px;\" color=\"primary\" (click)=\"loginAction()\" >Login</ion-button>\r\n\r\n  \r\n  </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-container {\n  height: 40%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-container {\n  margin: 35px 20px 20px;\n}\n\n.login-lable {\n  font-size: 1rem;\n  color: #3bc4c1;\n  text-transform: uppercase;\n}\n\n.input-style {\n  width: 100% !important;\n  border-bottom: 1px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUF3QixnQ0FBQTtBQ0c1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMzVweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1sYWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjM2JjNGMxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uaW5wdXQtc3R5bGV7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxufSIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMzVweCAyMHB4IDIwcHg7XG59XG5cbi5sb2dpbi1sYWJsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMzYmM0YzE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbnB1dC1zdHlsZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");









let LoginPage = class LoginPage {
    constructor(router, authService, storageService, toastService, menu, langServe) {
        // this.menuActive();
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.menu = menu;
        this.langServe = langServe;
        this.postData = {
            username: '',
            password: '',
            company: '',
            language: '',
            pages: '',
            token: ''
        };
    }
    ngOnInit() {
        //this.languageDefault();
    }
    validateInputs() {
        console.log(this.postData);
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        let company = this.postData.company.trim();
        return (this.postData.username &&
            this.postData.password &&
            this.postData.company &&
            username.length > 0 &&
            password.length > 0 &&
            company.length > 0);
    }
    menuActive() {
        this.activeMenu = "first";
        this.menu.enable(true, "first");
    }
    loginAction() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe((res) => {
                console.log(res);
                this.postData.token = res['access-token'];
                if (res['access-token']) {
                    // Storing the User data.
                    this.storageService
                        .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res)
                        .then(res => {
                        this.router.navigate(['home']);
                        this.menuActive();
                        //window.location.href = "/home/feed";
                    });
                }
                else {
                    this.toastService.presentToast('Incorrect username and password.');
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter email/username or password.');
        }
    }
    languageDefault() {
        this.postData.language = 'jp';
        this.postData.pages = 'login';
        // console.log("language selecct", this.postData);
        this.langServe.languageData(this.postData).subscribe((res) => {
            console.log(res);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map