(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color:#707070\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"postData.language == 'en'\">Settings</ion-title>\r\n    <ion-title *ngIf=\"postData.language == 'jp'\">設定</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"primary\" style=\"background-color: aquamarine;\">\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col class=\"primary\">\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <h4 class=\"languageSwitch\" *ngIf=\"postData.language == 'en'\">Language Switch</h4>\r\n  <h4 class=\"languageSwitch\" *ngIf=\"postData.language == 'jp'\">言語スイッチ</h4>\r\n  <ion-select [(ngModel)]=\"postData.language\" (ngModelChange)=\"changeLanguageClick()\" class=\"languageChange\">\r\n    <ion-select-option value=\"en\">English</ion-select-option>\r\n    <ion-select-option value=\"jp\">Japanese</ion-select-option>\r\n  </ion-select>\r\n\r\n  <ion-button *ngIf=\"postData.language == 'en'\" expand=\"block\" color=\"primary btn-position\" (click)=\"logoutAction()\" >\r\n    <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\r\n    Log out\r\n  </ion-button>\r\n  <ion-button *ngIf=\"postData.language == 'jp'\" expand=\"block\" color=\"primary btn-position\" (click)=\"logoutAction()\" >\r\n    <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\r\n    ログアウト\r\n  </ion-button>\r\n  <!-- <p>token: {{ displayUserData['access-token'] }}</p> \r\n  <p>Company: {{ displayUserData.company }}</p>\r\n  <p><a routerLink='/home/downloads'>downloads</a></p>-->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".languageChange {\n  border: 2px solid #bfbfbf;\n  margin: 15px;\n}\n\n.languageSwitch {\n  margin: 45px 15px 15px 15px;\n  font-weight: 600;\n  color: #a2a4ab;\n}\n\n.btn-position {\n  margin: 35px 15px;\n}\n\n.btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZUNoYW5nZXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLmxhbmd1YWdlU3dpdGNoe1xyXG4gICAgbWFyZ2luOiA0NXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjYTJhNGFiO1xyXG59XHJcbi5idG4tcG9zaXRpb257XHJcbiAgICBtYXJnaW46IDM1cHggMTVweDtcclxufVxyXG5cclxuLmJ0bi1oZWxwe1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcclxufSIsIi5sYW5ndWFnZUNoYW5nZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYmY7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmxhbmd1YWdlU3dpdGNoIHtcbiAgbWFyZ2luOiA0NXB4IDE1cHggMTVweCAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2EyYTRhYjtcbn1cblxuLmJ0bi1wb3NpdGlvbiB7XG4gIG1hcmdpbjogMzVweCAxNXB4O1xufVxuXG4uYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






function helloalert() {
    alert('Hello!!!');
}
let SettingsPage = class SettingsPage {
    constructor(authoService, langServe, langSwitch, router) {
        this.authoService = authoService;
        this.langServe = langServe;
        this.langSwitch = langSwitch;
        this.router = router;
        this.postData = {
            language: ''
        };
    }
    ngOnInit() {
        this.authoService.userData$.subscribe((res) => {
            //console.log(res);
            this.displayUserData = res;
        });
        this.languageSwitch('');
    }
    logoutAction() {
        this.authoService.logout();
        //location.reload(true);
    }
    //language switch control
    languageSwitch(newLang) {
        if (newLang.length > 0) {
            this.postData.language = newLang;
        }
        else {
            this.postData.language = "en";
        }
        this.langSwitch.updateLangSwitchData(this.postData);
    }
    changeLanguageClick() {
        //change language depend on user select
        this.languageSwitch(this.postData.language);
        // console.log(this.postData.language, " selected");
    }
    gotoPagesAction(urls) {
        this.router.navigate([urls]);
    }
};
SettingsPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SettingsPage);



/***/ }),

/***/ "./src/app/services/language-switch.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/language-switch.service.ts ***!
  \*****************************************************/
/*! exports provided: LanguageSwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchService", function() { return LanguageSwitchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LanguageSwitchService = class LanguageSwitchService {
    constructor() {
        this.langSwitchData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeLangSwitchData(data) {
        this.langSwitchData$.next(data);
    }
    updateLangSwitchData(newdata) {
        this.changeLangSwitchData(newdata);
    }
};
LanguageSwitchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LanguageSwitchService);



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let LanguageService = class LanguageService {
    constructor(httpService) {
        this.httpService = httpService;
        this.languageData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeLanguageData(data) {
        this.languageData$.next(data);
    }
    languageData(data) {
        return this.httpService.getLanguageData("public_lang/get_hflr", data);
    }
    updateLangData(newdata) {
        this.changeLanguageData(newdata);
    }
};
LanguageService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], LanguageService);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map