(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-guide-user-guide-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-guide/user-guide.page.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-guide/user-guide.page.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/help\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <app-user-guide-com></app-user-guide-com>\r\n\r\n</ion-content> \r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/user-guide/user-guide-routing.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/user-guide/user-guide-routing.module.ts ***!
          \***************************************************************/
        /*! exports provided: UserGuidePageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuidePageRoutingModule", function () { return UserGuidePageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_guide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-guide.page */ "./src/app/pages/user-guide/user-guide.page.ts");
            var routes = [
                {
                    path: '',
                    component: _user_guide_page__WEBPACK_IMPORTED_MODULE_3__["UserGuidePage"]
                }
            ];
            var UserGuidePageRoutingModule = /** @class */ (function () {
                function UserGuidePageRoutingModule() {
                }
                return UserGuidePageRoutingModule;
            }());
            UserGuidePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], UserGuidePageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/user-guide/user-guide.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/user-guide/user-guide.module.ts ***!
          \*******************************************************/
        /*! exports provided: UserGuidePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuidePageModule", function () { return UserGuidePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _user_guide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-guide-routing.module */ "./src/app/pages/user-guide/user-guide-routing.module.ts");
            /* harmony import */ var _user_guide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-guide.page */ "./src/app/pages/user-guide/user-guide.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var UserGuidePageModule = /** @class */ (function () {
                function UserGuidePageModule() {
                }
                return UserGuidePageModule;
            }());
            UserGuidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _user_guide_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserGuidePageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_user_guide_page__WEBPACK_IMPORTED_MODULE_6__["UserGuidePage"]]
                })
            ], UserGuidePageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/user-guide/user-guide.page.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/user-guide/user-guide.page.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.bluegreen {\n  background-color: #cbe9ff;\n  border: 1px solid #77b3df;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.graylight {\n  background-color: #f8f9fb;\n  border: 0px solid #c6c6c7;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.whitebg {\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.remainer {\n  background-color: #ffe8a3;\n  border: 1px solid #d6d6d6;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.warning {\n  background-color: #f80a0a;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1ndWlkZS9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcdXNlci1ndWlkZVxcdXNlci1ndWlkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItZ3VpZGUvdXNlci1ndWlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZ3VpZGUvdXNlci1ndWlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWhlbHB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYmU5ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG59XHJcblxyXG4uYmx1ZWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZTlmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3N2IzZGY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5ncmF5bGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZiO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2M2YzZjNztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLndoaXRlYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLnJlbWFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLndhcm5pbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgwYTBhO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0iLCIuYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi5ibHVlZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlOWZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzdiM2RmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5ncmF5bGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZiO1xuICBib3JkZXI6IDBweCBzb2xpZCAjYzZjNmM3O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi53aGl0ZWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ucmVtYWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGEzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MGEwYTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/user-guide/user-guide.page.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/user-guide/user-guide.page.ts ***!
          \*****************************************************/
        /*! exports provided: UserGuidePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuidePage", function () { return UserGuidePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            var UserGuidePage = /** @class */ (function () {
                function UserGuidePage(auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.postData = {
                        filename: 'user_guide',
                        language: '',
                        token: ''
                    };
                }
                UserGuidePage.prototype.ngOnInit = function () {
                    var _this = this;
                    this.auth.userData$.subscribe(function (res) {
                        //console.log(res);
                        _this.displayUserData = res;
                        _this.postData.token = _this.displayUserData['access-token'];
                        _this.postData.language = 'en';
                    });
                    this.getUserGuide();
                };
                UserGuidePage.prototype.getUserGuide = function () {
                    var _this = this;
                    console.log(this.postData, "PostData");
                    this.auth.getUserGuide(this.postData).subscribe(function (res) {
                        console.log(res.data, "User Guide");
                        _this.userGuide = res.data;
                    });
                };
                UserGuidePage.prototype.gotoPagesAction = function (urls) {
                    this.router.navigate([urls]);
                };
                return UserGuidePage;
            }());
            UserGuidePage.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            UserGuidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-guide',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-guide.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-guide/user-guide.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-guide.page.scss */ "./src/app/pages/user-guide/user-guide.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], UserGuidePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-user-guide-user-guide-module-es2015.js.map
//# sourceMappingURL=pages-user-guide-user-guide-module-es5.js.map
//# sourceMappingURL=pages-user-guide-user-guide-module-es5.js.map