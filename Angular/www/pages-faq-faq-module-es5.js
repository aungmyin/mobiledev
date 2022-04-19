(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/help\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-faqs></app-faqs>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/faq/faq-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/faq/faq-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: FaqPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () { return FaqPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");
            var routes = [
                {
                    path: '',
                    component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
                }
            ];
            var FaqPageRoutingModule = /** @class */ (function () {
                function FaqPageRoutingModule() {
                }
                return FaqPageRoutingModule;
            }());
            FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], FaqPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/faq/faq.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pages/faq/faq.module.ts ***!
          \*****************************************/
        /*! exports provided: FaqPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () { return FaqPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/faq/faq-routing.module.ts");
            /* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var FaqPageModule = /** @class */ (function () {
                function FaqPageModule() {
                }
                return FaqPageModule;
            }());
            FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
                })
            ], FaqPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/faq/faq.page.scss": 
        /*!*****************************************!*\
          !*** ./src/app/pages/faq/faq.page.scss ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.bluegreen {\n  background-color: #cbe9ff;\n  border: 1px solid #77b3df;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.graylight {\n  background-color: #f8f9fb;\n  border: 0px solid #c6c6c7;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.whitebg {\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.datastyle {\n  font-size: 17px;\n  line-height: 25px;\n}\n\nh2 {\n  color: #37c3a7;\n}\n\n.remainer {\n  background-color: #ffe8a3;\n  border: 1px solid #d6d6d6;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.warning {\n  background-color: #f80a0a;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxmYXFcXGZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1oZWxwe1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcclxufVxyXG5cclxuLmJsdWVncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmU5ZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzdiM2RmO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZ3JheWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYjtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNjNmM2Yzc7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi53aGl0ZWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5kYXRhc3R5bGV7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBjb2xvcjogIzM3YzNhNztcclxufVxyXG5cclxuLnJlbWFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLndhcm5pbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgwYTBhO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0iLCIuYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi5ibHVlZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlOWZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzdiM2RmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5ncmF5bGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZiO1xuICBib3JkZXI6IDBweCBzb2xpZCAjYzZjNmM3O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi53aGl0ZWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZGF0YXN0eWxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuaDIge1xuICBjb2xvcjogIzM3YzNhNztcbn1cblxuLnJlbWFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODBhMGE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/faq/faq.page.ts": 
        /*!***************************************!*\
          !*** ./src/app/pages/faq/faq.page.ts ***!
          \***************************************/
        /*! exports provided: FaqPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function () { return FaqPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
            /* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
            var FaqPage = /** @class */ (function () {
                function FaqPage(auth, router, langServe, langSwitch, authService) {
                    this.auth = auth;
                    this.router = router;
                    this.langServe = langServe;
                    this.langSwitch = langSwitch;
                    this.authService = authService;
                }
                FaqPage.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.userData$.subscribe(function (res) {
                        _this.authUser = res;
                    });
                };
                // getUserGuide() {
                //   console.log(this.postData, "PostData")
                //   this.auth.getUserGuide(this.postData).subscribe((res: any) => {
                //     console.log(res.data, "FAQ")
                //     this.userGuide = res.data;
                //   })
                // }
                FaqPage.prototype.gotoPagesAction = function (urls) {
                    this.router.navigate([urls]);
                };
                return FaqPage;
            }());
            FaqPage.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
                { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-faq',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
                    src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"],
                    src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
            ], FaqPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-faq-faq-module-es2015.js.map
//# sourceMappingURL=pages-faq-faq-module-es5.js.map
//# sourceMappingURL=pages-faq-faq-module-es5.js.map