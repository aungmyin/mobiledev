(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color='dark'>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/\" text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign up</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding='true'>\r\n  <div style=\"text-align: center;\">\r\n    <app-logo></app-logo>\r\n    <h1>Create Account</h1>\r\n  </div>\r\n  <form>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Name</ion-label>\r\n        <ion-input autocomplete=\"off\" name=\"name\" type=\"text\" [(ngModel)]=\"postData.name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input autocomplete=\"off\" name=\"email\" type=\"email\" [(ngModel)]=\"postData.email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Company</ion-label>\r\n        <ion-input type=\"text\" autocomplete=\"off\" name=\"company\" [(ngModel)]=\"postData.company\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item lines='none'>\r\n        Already have an account? <a routerLink='/login'>Sign in.</a>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"success\" (click)=\"signupAction()\">Registration</ion-button>\r\n  </form>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/signup/signup-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: SignupPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () { return SignupPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
            var routes = [
                {
                    path: '',
                    component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
                }
            ];
            var SignupPageRoutingModule = /** @class */ (function () {
                function SignupPageRoutingModule() {
                }
                return SignupPageRoutingModule;
            }());
            SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], SignupPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pages/signup/signup.module.ts ***!
          \***********************************************/
        /*! exports provided: SignupPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () { return SignupPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
            /* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var SignupPageModule = /** @class */ (function () {
                function SignupPageModule() {
                }
                return SignupPageModule;
            }());
            SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                        _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
                    ],
                    declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
                })
            ], SignupPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.page.scss": 
        /*!***********************************************!*\
          !*** ./src/app/pages/signup/signup.page.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.page.ts": 
        /*!*********************************************!*\
          !*** ./src/app/pages/signup/signup.page.ts ***!
          \*********************************************/
        /*! exports provided: SignupPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function () { return SignupPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/auth-constants */ "./src/app/config/auth-constants.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
            /* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            var SignupPage = /** @class */ (function () {
                function SignupPage(authService, toastService, storageService, router, menu) {
                    this.authService = authService;
                    this.toastService = toastService;
                    this.storageService = storageService;
                    this.router = router;
                    this.menu = menu;
                    this.postData = {
                        name: '',
                        username: '',
                        email: '',
                        password: '',
                        company: ''
                    };
                    this.menuActive();
                }
                SignupPage.prototype.ngOnInit = function () { };
                SignupPage.prototype.validateInputs = function () {
                    var username = this.postData.username.trim();
                    var password = this.postData.password.trim();
                    var email = this.postData.email.trim();
                    var name = this.postData.name.trim();
                    var company = this.postData.company.trim();
                    return (this.postData.name &&
                        this.postData.username &&
                        this.postData.password &&
                        this.postData.email &&
                        this.postData.company &&
                        email.length > 0 &&
                        username.length > 0 &&
                        email.length > 0 &&
                        password.length > 0 &&
                        company.length > 0);
                };
                SignupPage.prototype.menuActive = function () {
                    this.activeMenu = "first";
                    this.menu.enable(false, "first");
                };
                SignupPage.prototype.signupAction = function () {
                    var _this = this;
                    if (this.validateInputs()) {
                        this.authService.signup(this.postData).subscribe(function (res) {
                            if (res.userData) {
                                // Storing the User data.
                                _this.storageService
                                    .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData)
                                    .then(function (res) {
                                    _this.router.navigate(['home/feed']);
                                });
                            }
                            else {
                                _this.toastService.presentToast('Data alreay exists, please enter new details.');
                            }
                        }, function (error) {
                            _this.toastService.presentToast('Network Issue.');
                        });
                    }
                    else {
                        this.toastService.presentToast('Please enter name, email, username or password.');
                    }
                };
                return SignupPage;
            }());
            SignupPage.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
                { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
            ]; };
            SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
                    _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]])
            ], SignupPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map
//# sourceMappingURL=pages-signup-signup-module-es5.js.map
//# sourceMappingURL=pages-signup-signup-module-es5.js.map