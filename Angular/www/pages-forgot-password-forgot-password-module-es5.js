(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin: 10px 5px;\">\r\n      <ion-back-button defaultHref=\"/login\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div >\r\n    <h2 class=\"page-title\">Forgot your password?</h2>\r\n  </div>\r\n  <div class=\"form-container\">\r\n    <form >\r\n      <p *ngIf=\"dlyuser == 0\">\r\n        <ion-label class=\"login-lable\" position=\"stacked\">Account</ion-label>\r\n        <ion-input type=\"text\" name=\"username\" class=\"input-style\" [(ngModel)]=\"postData.username\"></ion-input>\r\n      </p>\r\n      <p *ngIf=\"dlyuser == 0\">\r\n        <ion-label class=\"login-lable\"  position=\"stacked\">Company</ion-label>\r\n        <ion-input type=\"text\" autocomplete=\"off\" name=\"company\" class=\"input-style\" [(ngModel)]=\"postData.company\"></ion-input>\r\n      </p>\r\n\r\n      <p *ngIf=\"dlyuser == 1\">\r\n        <ion-label class=\"login-lable\"  position=\"stacked\">OTP Code</ion-label>\r\n        <ion-input type=\"text\" autocomplete=\"off\" name=\"company\" style=\"width: 100% !important; border-bottom: 1px solid #707070;\" [(ngModel)]=\"postData.reset\"></ion-input>\r\n      </p>\r\n\r\n      <p *ngIf=\"dlyuser == 2\">\r\n        <ion-label class=\"login-lable\"  position=\"stacked\">New Password</ion-label>\r\n        <ion-input type=\"password\" autocomplete=\"off\" name=\"newPsw\" style=\"width: 100% !important; border-bottom: 1px solid #707070;\" [(ngModel)]=\"postData.newPsw\"></ion-input>\r\n      </p>\r\n      <p *ngIf=\"dlyuser == 2\">\r\n        <ion-label class=\"login-lable\"  position=\"stacked\">Confirm Password</ion-label>\r\n        <ion-input type=\"password\" autocomplete=\"off\" name=\"confirmPsw\" style=\"width: 100% !important; border-bottom: 1px solid #707070;\" [(ngModel)]=\"postData.confirmPsw\"></ion-input>\r\n      </p>\r\n     \r\n      <ion-button *ngIf=\"dlyuser == 0\" expand=\"block\" class=\"btn-style\" color=\"primary\"  (click)=\"forgotPasswordAction()\" >Send</ion-button>\r\n\r\n      <ion-button *ngIf=\"dlyuser == 1\" expand=\"block\" class=\"btn-style\" color=\"primary\"  (click)=\"recoverpassAction()\" >Send</ion-button>\r\n\r\n      <ion-button *ngIf=\"dlyuser == 2\" expand=\"block\" class=\"btn-style\" color=\"primary\"  (click)=\"changepassAction()\" >Send</ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password-routing.module.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
          \*************************************************************************/
        /*! exports provided: ForgotPasswordPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () { return ForgotPasswordPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");
            var routes = [
                {
                    path: '',
                    component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
                }
            ];
            var ForgotPasswordPageRoutingModule = /** @class */ (function () {
                function ForgotPasswordPageRoutingModule() {
                }
                return ForgotPasswordPageRoutingModule;
            }());
            ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], ForgotPasswordPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
          \*****************************************************************/
        /*! exports provided: ForgotPasswordPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () { return ForgotPasswordPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/pages/forgot-password/forgot-password-routing.module.ts");
            /* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var ForgotPasswordPageModule = /** @class */ (function () {
                function ForgotPasswordPageModule() {
                }
                return ForgotPasswordPageModule;
            }());
            ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
                })
            ], ForgotPasswordPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password.page.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-container {\n  margin: 35px 20px 20px;\n}\n\n.login-lable {\n  font-size: 1rem;\n  color: #3bc4c1;\n  text-transform: uppercase;\n}\n\n.page-title {\n  color: #707070;\n  margin: 40px 20px;\n  font-weight: bold;\n}\n\n.btn-style {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n.marginlfmn15 {\n  margin-left: 0px;\n}\n\n.input-style {\n  width: 100% !important;\n  border-bottom: 1px solid #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFBZ0IsaUJBQUE7RUFBbUIsaUJBQUE7QUNHdkM7O0FEQUE7RUFDSSxnQkFBQTtFQUFrQixlQUFBO0FDSXRCOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLHNCQUFBO0VBQXdCLGdDQUFBO0FDTTVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAzNXB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWxhYmxle1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMzYmM0YzE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDsgbWFyZ2luOiA0MHB4IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLXN0eWxlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7IGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbmxmbW4xNXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmlucHV0LXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbn0iLCIuZm9ybS1jb250YWluZXIge1xuICBtYXJnaW46IDM1cHggMjBweCAyMHB4O1xufVxuXG4ubG9naW4tbGFibGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjM2JjNGMxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW46IDQwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG4tc3R5bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXJnaW5sZm1uMTUge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uaW5wdXQtc3R5bGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/forgot-password/forgot-password.page.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
          \***************************************************************/
        /*! exports provided: ForgotPasswordPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () { return ForgotPasswordPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
            var ForgotPasswordPage = /** @class */ (function () {
                function ForgotPasswordPage(menu, authoService, toastService) {
                    this.menu = menu;
                    this.authoService = authoService;
                    this.toastService = toastService;
                    this.postData = {
                        username: '',
                        company: '',
                        token: '',
                        rediRectUrl: '',
                        reset: '',
                        newPsw: '',
                        confirmPsw: ''
                    };
                    this.dlyuser = 0;
                }
                ForgotPasswordPage.prototype.ngOnInit = function () {
                    /* this.authoService.userData$.subscribe( (res: any) => {
                      console.log(res);
                     this.dlyuser = res;
                    }); */
                };
                ForgotPasswordPage.prototype.menuActive = function () {
                    this.activeMenu = "first";
                    this.menu.enable(false, "first");
                };
                ForgotPasswordPage.prototype.validateInputs = function () {
                    var username = this.postData.username.trim();
                    var company = this.postData.company.trim();
                    return (username &&
                        company &&
                        username.length > 0 &&
                        company.length > 0);
                };
                ForgotPasswordPage.prototype.forgotPasswordAction = function () {
                    var _this = this;
                    if (this.validateInputs()) {
                        console.log(this.postData);
                        this.authoService.forgotpassword(this.postData).subscribe(function (res) {
                            console.log(res);
                            if (res.status == 1) {
                                _this.toastService.presentToast("We have benn sent reset url in your mail.");
                                _this.postData.rediRectUrl = res.redirectURL;
                                _this.postData.token = _this.postData.rediRectUrl.replace("/recoverpass/reset?code=", "");
                                _this.dlyuser = 1;
                            }
                            else if (res.error) {
                                _this.toastService.presentToast(res.error);
                            }
                        });
                    }
                    else {
                        this.toastService.presentToast("Invalid entry");
                    }
                };
                ForgotPasswordPage.prototype.recoverpassAction = function () {
                    var _this = this;
                    console.log(this.postData, "rever OTP");
                    this.authoService.recoverpass(this.postData).subscribe(function (res) {
                        console.log(res, "revoerPass");
                        if (res.status == 1) {
                            _this.dlyuser = 2;
                        }
                        else {
                            _this.toastService.presentToast("invalid OTP, Please try again!");
                        }
                    });
                };
                ForgotPasswordPage.prototype.changepassAction = function () {
                    var _this = this;
                    console.log(this.postData, "change psw");
                    this.authoService.changepass(this.postData).subscribe(function (res) {
                        console.log(res, "change psw2");
                        _this.dlyuser = 0;
                        _this.postData.username = '';
                        _this.postData.company = '';
                        _this.postData.token = '';
                        _this.postData.rediRectUrl = '';
                        _this.postData.reset = '';
                        _this.postData.newPsw = '';
                        _this.postData.confirmPsw = '';
                        if (res.status == 1) {
                            window.location.replace('/login');
                        }
                        else {
                            _this.toastService.presentToast("Soemthing was wrong.");
                        }
                    });
                };
                return ForgotPasswordPage;
            }());
            ForgotPasswordPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
            ]; };
            ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forgot-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
            ], ForgotPasswordPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es2015.js.map
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es5.js.map
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es5.js.map