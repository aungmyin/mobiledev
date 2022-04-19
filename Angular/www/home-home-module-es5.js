(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-tabs >\r\n  <ion-tab-bar slot=\"bottom\" >\r\n    <ion-tab-button tab=\"feed\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"messages\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>My Profile</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"workreport\">\r\n      <ion-icon name=\"alarm-outline\"></ion-icon>\r\n      <ion-label>Work Report</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"settings\">\r\n      <ion-icon name=\"cog-outline\"></ion-icon>\r\n      <ion-label>Settings</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");
            /***/ 
        }),
        /***/ "./src/app/guards/home.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/home.guard.ts ***!
          \**************************************/
        /*! exports provided: HomeGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function () { return HomeGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/auth-constants */ "./src/app/config/auth-constants.ts");
            /* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
            var HomeGuard = /** @class */ (function () {
                function HomeGuard(storageService, router) {
                    this.storageService = storageService;
                    this.router = router;
                }
                HomeGuard.prototype.canActivate = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.storageService
                            .get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH)
                            .then(function (res) {
                            if (res) {
                                resolve(true);
                            }
                            else {
                                // this.router.navigate(['login']);
                                resolve(false);
                            }
                        })
                            .catch(function (err) {
                            resolve(false);
                        });
                    });
                };
                return HomeGuard;
            }());
            HomeGuard.ctorParameters = function () { return [
                { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], HomeGuard);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function () { return HomePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _home_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.router */ "./src/app/home/home.router.ts");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
            var HomePageModule = /** @class */ (function () {
                function HomePageModule() {
                }
                return HomePageModule;
            }());
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _home_router__WEBPACK_IMPORTED_MODULE_5__["HomeRouter"]
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
                })
            ], HomePageModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.page.scss": 
        /*!*************************************!*\
          !*** ./src/app/home/home.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbiAgfSIsIi5teS1jdXN0b20tbWVudSB7XG4gIC0td2lkdGg6IDUwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.page.ts": 
        /*!***********************************!*\
          !*** ./src/app/home/home.page.ts ***!
          \***********************************/
        /*! exports provided: HomePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function () { return HomePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            var HomePage = /** @class */ (function () {
                function HomePage(menu) {
                    this.menu = menu;
                }
                HomePage.prototype.ngOnInit = function () {
                    this.menu.close();
                    this.menuActive();
                };
                HomePage.prototype.menuActive = function () {
                    this.activeMenu = "first";
                    this.menu.enable(true, "first");
                };
                return HomePage;
            }());
            HomePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
            ]; };
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
            ], HomePage);
            /***/ 
        }),
        /***/ "./src/app/home/home.router.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.router.ts ***!
          \*************************************/
        /*! exports provided: HomeRouter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouter", function () { return HomeRouter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/home.guard */ "./src/app/guards/home.guard.ts");
            /* harmony import */ var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/userData.resolver */ "./src/app/resolvers/userData.resolver.ts");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
            var routes = [
                {
                    path: 'home',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
                    canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__["HomeGuard"]],
                    resolve: {
                        userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_4__["UserDataResolver"]
                    },
                    children: [
                        {
                            path: 'feed',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-feed-feed-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/app/pages/feed/feed.module.ts")).then(function (m) { return m.FeedPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'messages',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-messages-messages-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-messages-messages-module")]).then(__webpack_require__.bind(null, /*! ../pages/messages/messages.module */ "./src/app/pages/messages/messages.module.ts")).then(function (m) { return m.MessagesPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'notifications',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-notifications-notifications-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ../pages/notifications/notifications.module */ "./src/app/pages/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'workreport',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-workreport-workreport-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-workreport-workreport-module")]).then(__webpack_require__.bind(null, /*! ../pages/workreport/workreport.module */ "./src/app/pages/workreport/workreport.module.ts")).then(function (m) { return m.WorkreportPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'settings',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(function (m) { return m.SettingsPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'changepassword',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-changepassword-changepassword-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-changepassword-changepassword-module")]).then(__webpack_require__.bind(null, /*! ../pages/changepassword/changepassword.module */ "./src/app/pages/changepassword/changepassword.module.ts")).then(function (m) { return m.ChangepasswordPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'client',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-client-client-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-client-client-module")]).then(__webpack_require__.bind(null, /*! ../pages/client/client.module */ "./src/app/pages/client/client.module.ts")).then(function (m) { return m.ClientPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'customerwkreport',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-customerwkreport-customerwkreport-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-customerwkreport-customerwkreport-module")]).then(__webpack_require__.bind(null, /*! ../pages/customerwkreport/customerwkreport.module */ "./src/app/pages/customerwkreport/customerwkreport.module.ts")).then(function (m) { return m.CustomerwkreportPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'transportationexpenses',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-transportationexpenses-transportationexpenses-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-transportationexpenses-transportationexpenses-module")]).then(__webpack_require__.bind(null, /*! ../pages/transportationexpenses/transportationexpenses.module */ "./src/app/pages/transportationexpenses/transportationexpenses.module.ts")).then(function (m) { return m.TransportationexpensesPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'workreportdetail',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-workreportdetail-workreportdetail-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-workreportdetail-workreportdetail-module")]).then(__webpack_require__.bind(null, /*! ../pages/workreportdetail/workreportdetail.module */ "./src/app/pages/workreportdetail/workreportdetail.module.ts")).then(function (m) { return m.WorkreportdetailPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'edit-profile',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-edit-profile-edit-profile-module */ "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null, /*! ../pages/edit-profile/edit-profile.module */ "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) { return m.EditProfilePageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'downloads',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-downloads-downloads-module */ "pages-downloads-downloads-module").then(__webpack_require__.bind(null, /*! ../pages/downloads/downloads.module */ "./src/app/pages/downloads/downloads.module.ts")).then(function (m) { return m.DownloadsPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'help',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return __webpack_require__.e(/*! import() | pages-need-help-need-help-module */ "pages-need-help-need-help-module").then(__webpack_require__.bind(null, /*! ../pages/need-help/need-help.module */ "./src/app/pages/need-help/need-help.module.ts")).then(function (m) { return m.NeedHelpPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'user-guide',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-user-guide-user-guide-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-user-guide-user-guide-module")]).then(__webpack_require__.bind(null, /*! ../pages/user-guide/user-guide.module */ "./src/app/pages/user-guide/user-guide.module.ts")).then(function (m) { return m.UserGuidePageModule; }); }
                                }
                            ]
                        },
                        {
                            path: 'faq',
                            children: [
                                {
                                    path: '',
                                    loadChildren: function () { return Promise.all(/*! import() | pages-faq-faq-module */ [__webpack_require__.e("default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"), __webpack_require__.e("pages-faq-faq-module")]).then(__webpack_require__.bind(null, /*! ../pages/faq/faq.module */ "./src/app/pages/faq/faq.module.ts")).then(function (m) { return m.FaqPageModule; }); }
                                }
                            ]
                        },
                        {
                            path: '',
                            redirectTo: '/home/feed',
                            pathMatch: 'full'
                        }
                    ]
                }
            ];
            var HomeRouter = /** @class */ (function () {
                function HomeRouter() {
                }
                return HomeRouter;
            }());
            HomeRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], HomeRouter);
            /***/ 
        }),
        /***/ "./src/app/resolvers/userData.resolver.ts": 
        /*!************************************************!*\
          !*** ./src/app/resolvers/userData.resolver.ts ***!
          \************************************************/
        /*! exports provided: UserDataResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataResolver", function () { return UserDataResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var UserDataResolver = /** @class */ (function () {
                function UserDataResolver(authService) {
                    this.authService = authService;
                }
                UserDataResolver.prototype.resolve = function () {
                    console.log('Call a user data');
                    return this.authService.getUserData();
                };
                return UserDataResolver;
            }());
            UserDataResolver.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            UserDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
            ], UserDataResolver);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map