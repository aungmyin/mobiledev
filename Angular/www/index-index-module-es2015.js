(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <router-outlet></router-outlet>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/guards/index.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/index.guard.ts ***!
  \***************************************/
/*! exports provided: IndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexGuard", function() { return IndexGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");





let IndexGuard = class IndexGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService
                .get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH)
                .then(res => {
                if (res) {
                    this.router.navigate(['home/feed/']);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            })
                .catch(err => {
                resolve(true);
            });
        });
    }
};
IndexGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndexGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IndexGuard);



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _index_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.router */ "./src/app/index/index.router.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_router__WEBPACK_IMPORTED_MODULE_5__["IndexRouter"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/index/index.page.scss":
/*!***************************************!*\
  !*** ./src/app/index/index.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/index/index.page.ts":
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() {
    }
};
IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.page.scss */ "./src/app/index/index.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexPage);



/***/ }),

/***/ "./src/app/index/index.router.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.router.ts ***!
  \***************************************/
/*! exports provided: IndexRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRouter", function() { return IndexRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");
/* harmony import */ var _guards_index_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/index.guard */ "./src/app/guards/index.guard.ts");





const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"],
        canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_4__["IndexGuard"]],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | pages-welcome-welcome-module */[__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-welcome-welcome-module")]).then(__webpack_require__.bind(null, /*! ../pages/welcome/welcome.module */ "./src/app/pages/welcome/welcome.module.ts")).then(m => m.WelcomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ../pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginPageModule)
            },
            {
                path: 'signup',
                loadChildren: () => Promise.all(/*! import() | pages-signup-signup-module */[__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-signup-signup-module")]).then(__webpack_require__.bind(null, /*! ../pages/signup/signup.module */ "./src/app/pages/signup/signup.module.ts")).then(m => m.SignupPageModule)
            },
            {
                path: 'forgot-password',
                loadChildren: () => Promise.all(/*! import() | pages-forgot-password-forgot-password-module */[__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ../pages/forgot-password/forgot-password.module */ "./src/app/pages/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordPageModule)
            }
        ]
    }
];
let IndexRouter = class IndexRouter {
};
IndexRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexRouter);



/***/ })

}]);
//# sourceMappingURL=index-index-module-es2015.js.map