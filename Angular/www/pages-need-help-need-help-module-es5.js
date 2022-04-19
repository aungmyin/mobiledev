(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-need-help-need-help-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/need-help/need-help.page.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/need-help/need-help.page.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <!-- <div [innerHtml]=\"helpHtml\"></div> -->\r\n  <ion-list>\r\n    <ion-item lines=\"none\" >\r\n      <h2 *ngIf=\"postData.language == 'en'\" style=\"color: #79d4c8;\">Need Help?</h2>\r\n      <h2 *ngIf=\"postData.language == 'jp'\" style=\"color: #79d4c8;\">助けが必要?</h2>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/user-guide')\">\r\n    <ion-item class=\"link-pages\" *ngIf=\"postData.language == 'en'\">\r\n      User Guide\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item class=\"link-pages\" *ngIf=\"postData.language == 'jp'\">\r\n      ユーザーガイド\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/faq')\">\r\n    <ion-item class=\"link-pages\" *ngIf=\"postData.language == 'en'\">\r\n      FAQ\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item class=\"link-pages\" *ngIf=\"postData.language == 'jp'\">\r\n      よくある質問\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/workreport')\">\r\n    <ion-item class=\"link-pages\">\r\n      Inquiry\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/need-help/need-help-routing.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/need-help/need-help-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: NeedHelpPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpPageRoutingModule", function () { return NeedHelpPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _need_help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./need-help.page */ "./src/app/pages/need-help/need-help.page.ts");
            var routes = [
                {
                    path: '',
                    component: _need_help_page__WEBPACK_IMPORTED_MODULE_3__["NeedHelpPage"]
                }
            ];
            var NeedHelpPageRoutingModule = /** @class */ (function () {
                function NeedHelpPageRoutingModule() {
                }
                return NeedHelpPageRoutingModule;
            }());
            NeedHelpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], NeedHelpPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/need-help/need-help.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/need-help/need-help.module.ts ***!
          \*****************************************************/
        /*! exports provided: NeedHelpPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpPageModule", function () { return NeedHelpPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _need_help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./need-help-routing.module */ "./src/app/pages/need-help/need-help-routing.module.ts");
            /* harmony import */ var _need_help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./need-help.page */ "./src/app/pages/need-help/need-help.page.ts");
            var NeedHelpPageModule = /** @class */ (function () {
                function NeedHelpPageModule() {
                }
                return NeedHelpPageModule;
            }());
            NeedHelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _need_help_routing_module__WEBPACK_IMPORTED_MODULE_5__["NeedHelpPageRoutingModule"]
                    ],
                    declarations: [_need_help_page__WEBPACK_IMPORTED_MODULE_6__["NeedHelpPage"]]
                })
            ], NeedHelpPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/need-help/need-help.page.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/need-help/need-help.page.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.nextview-blk {\n  padding: 15px;\n  border: 1px solid #eeeeee;\n  margin: 15px;\n  border-radius: 20px;\n}\n\n.link-pages {\n  font-size: 17px;\n  color: #646363;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmVlZC1oZWxwL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxuZWVkLWhlbHBcXG5lZWQtaGVscC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25lZWQtaGVscC9uZWVkLWhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25lZWQtaGVscC9uZWVkLWhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1oZWxwe1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcclxufVxyXG5cclxuLm5leHR2aWV3LWJsa3tcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubGluay1wYWdlc3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNjQ2MzYzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSIsIi5idG4taGVscCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcbn1cblxuLm5leHR2aWV3LWJsayB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmxpbmstcGFnZXMge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjNjQ2MzYzO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/need-help/need-help.page.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/need-help/need-help.page.ts ***!
          \***************************************************/
        /*! exports provided: NeedHelpPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpPage", function () { return NeedHelpPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
            var NeedHelpPage = /** @class */ (function () {
                function NeedHelpPage(sanitizer, http, router, langSwitch) {
                    this.sanitizer = sanitizer;
                    this.http = http;
                    this.router = router;
                    this.langSwitch = langSwitch;
                    this.postData = {
                        language: ''
                    };
                }
                NeedHelpPage.prototype.ngOnInit = function () {
                    //this.http.get('http://ocjapan-hr.com/html.php?app=mob',{responseType:'text'}).subscribe(res=>{
                    //this.helpHtml = this.sanitizer.bypassSecurityTrustHtml(res);
                    //});
                    this.languageDefault();
                };
                NeedHelpPage.prototype.gotoPagesAction = function (urls) {
                    this.router.navigate([urls]);
                };
                NeedHelpPage.prototype.languageDefault = function () {
                    var _this = this;
                    // console.log("language selecct", this.postData);
                    this.langSwitch.langSwitchData$.subscribe(function (res) {
                        _this.postData.language = res.language;
                        console.log(_this.postData.language, 'assign');
                        if (!_this.postData.language) {
                            _this.postData.language = 'en';
                            //console.log(this.postData.language, 'default');
                        }
                    });
                };
                return NeedHelpPage;
            }());
            NeedHelpPage.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSwitchService"] }
            ]; };
            NeedHelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-need-help',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./need-help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/need-help/need-help.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./need-help.page.scss */ "./src/app/pages/need-help/need-help.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                    src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_5__["LanguageSwitchService"]])
            ], NeedHelpPage);
            /***/ 
        }),
        /***/ "./src/app/services/language-switch.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/language-switch.service.ts ***!
          \*****************************************************/
        /*! exports provided: LanguageSwitchService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchService", function () { return LanguageSwitchService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var LanguageSwitchService = /** @class */ (function () {
                function LanguageSwitchService() {
                    this.langSwitchData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
                }
                LanguageSwitchService.prototype.changeLangSwitchData = function (data) {
                    this.langSwitchData$.next(data);
                };
                LanguageSwitchService.prototype.updateLangSwitchData = function (newdata) {
                    this.changeLangSwitchData(newdata);
                };
                return LanguageSwitchService;
            }());
            LanguageSwitchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], LanguageSwitchService);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-need-help-need-help-module-es2015.js.map
//# sourceMappingURL=pages-need-help-need-help-module-es5.js.map
//# sourceMappingURL=pages-need-help-need-help-module-es5.js.map