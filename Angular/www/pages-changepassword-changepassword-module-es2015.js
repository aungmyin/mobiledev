(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-changepassword-changepassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-left: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/messages\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding='true'>\r\n  <div>\r\n    <h2 class=\"page-title\">{{ dataLeng?.title }}</h2>\r\n  </div>\r\n  <div  class=\"form-container\">\r\n    <form>\r\n      <p>\r\n        <ion-label position=\"stacked\" class=\"login-lable\">{{ dataLeng?.newpassword }}</ion-label>\r\n        <ion-input autocomplete=\"off\" class=\"input-style\" name=\"new_password\" type=\"password\" [(ngModel)]=\"postData.new_password\"></ion-input>\r\n      </p>\r\n      <p>\r\n        <ion-label position=\"stacked\" class=\"login-lable\">{{ dataLeng?.oldpassword }}</ion-label>\r\n        <ion-input autocomplete=\"off\" class=\"input-style\" name=\"old_password\" type=\"password\" [(ngModel)]=\"postData.old_password\"></ion-input>\r\n      </p>\r\n      <p style=\"color: #707070;\">{{ dataLeng?.message }}</p>\r\n      \r\n      <ion-button expand=\"block\" share=\"round\" style=\"font-size: 20px;\" color=\"primary\" (click)=\"changePasswordAction()\">{{ dataLeng?.change_password }}</ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/changepassword/changepassword-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChangepasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageRoutingModule", function() { return ChangepasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/pages/changepassword/changepassword.page.ts");




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordPage"]
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.module.ts ***!
  \***************************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepassword-routing.module */ "./src/app/pages/changepassword/changepassword-routing.module.ts");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/pages/changepassword/changepassword.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPageRoutingModule"]
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.page-title {\n  color: #707070;\n  margin: 40px 20px;\n  font-weight: 600;\n}\n\n.form-container {\n  margin: 35px 20px;\n}\n\n.login-lable {\n  font-size: 1rem;\n  color: #3bc4c1;\n  text-transform: uppercase;\n}\n\n.input-style {\n  width: 100% !important;\n  border-bottom: 1px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlcGFzc3dvcmQvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGNoYW5nZXBhc3N3b3JkXFxjaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUFnQixpQkFBQTtFQUFvQixnQkFBQTtBQ0d4Qzs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxzQkFBQTtFQUF3QixnQ0FBQTtBQ0s1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taGVscHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NiZTlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxle1xyXG4gICAgY29sb3I6ICM3MDcwNzA7IG1hcmdpbjogNDBweCAyMHB4OyAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMzVweCAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tbGFibGV7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzNiYzRjMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmlucHV0LXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbn0iLCIuYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbjogNDBweCAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXJnaW46IDM1cHggMjBweDtcbn1cblxuLmxvZ2luLWxhYmxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzNiYzRjMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlucHV0LXN0eWxlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.ts ***!
  \*************************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");








let ChangepasswordPage = class ChangepasswordPage {
    constructor(menu, router, toastService, authoService, langSwitch, langServe) {
        this.menu = menu;
        this.router = router;
        this.toastService = toastService;
        this.authoService = authoService;
        this.langSwitch = langSwitch;
        this.langServe = langServe;
        this.postData = {
            company: '',
            email: '',
            member_id: '',
            account: '',
            old_password: '',
            new_password: '',
            token: '',
            language: '',
            pages: ''
        };
        //this.menuActive();
    }
    ngOnInit() {
        this.authoService.userData$.subscribe((res) => {
            console.log(res);
            this.dlyuser = res;
        });
        this.languageDefault();
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            //console.log(this.postData.language, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                //console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'changepass';
            this.langServe.languageData(this.postData).subscribe((res) => {
                console.log(res.data, ' changepass');
                this.dataLeng = res.data;
            });
        });
    }
    menuActive() {
        this.activeMenu = "first";
        this.menu.enable(false, "first");
    }
    validateInputs() {
        let new_password = this.postData.new_password.trim();
        let old_password = this.postData.old_password.trim();
        let email = this.postData.email.trim();
        return (new_password &&
            old_password &&
            new_password.length > 0 &&
            old_password.length > 0);
    }
    changePasswordAction() {
        if (this.validateInputs()) {
            this.postData.token = this.dlyuser['access-token'];
            this.postData.company = this.dlyuser['company'];
            this.postData.email = this.dlyuser['email'];
            this.postData.account = this.dlyuser['name'];
            this.postData.member_id = this.dlyuser['member_id'];
            console.log(this.postData);
            this.authoService.updatepassword(this.postData).subscribe((res) => {
                console.log(res);
                if (res.status == 1) {
                    //console.log("changed");
                    this.postData.new_password = '';
                    this.postData.old_password = '';
                    this.router.navigate(['home/messages']);
                }
                else if (res.error) {
                    this.toastService.presentToast(res.message);
                }
                else {
                    //console.log("something wrong!");
                    this.toastService.presentToast(res[0]['password']);
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter new password or old password.');
        }
    }
    gotoPagesAction(urls) {
        this.router.navigate([urls]);
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSwitchService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }
];
ChangepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/pages/changepassword/changepassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSwitchService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])
], ChangepasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-changepassword-changepassword-module-es2015.js.map