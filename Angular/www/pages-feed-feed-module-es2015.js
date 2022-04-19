(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-menu-button style=\"color:#707070\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help', 'tab')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"moring\">{{ greetingmsg }}</div>\r\n  <div class=\"username\">\r\n    <h1>{{ authUser?.name }}</h1>\r\n  </div>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/workreport','workreport')\">\r\n    <ion-item class=\"application\">\r\n      {{ dataLeng?.application }}\r\n    </ion-item>\r\n    <ion-item class=\"link-pages\">\r\n      {{ dataLeng?.workreport_application }}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/workreport','transporatiion')\">\r\n    <ion-item class=\"application\">\r\n      {{ dataLeng?.application }}\r\n    </ion-item>\r\n    <ion-item class=\"link-pages\">\r\n      {{ dataLeng?.transportation_expense }}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"gotoPagesAction('home/workreport','customer')\">\r\n    <ion-item class=\"application\">\r\n      {{ dataLeng?.application }}\r\n    </ion-item>\r\n    <ion-item class=\"link-pages\">\r\n      {{ dataLeng?.customer_workreport }}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\" class=\"nextview-blk\">\r\n    <ion-item class=\"link-pages\" (click)=\"gotoPagesAction('home/messages','profile')\">\r\n      {{ dataLeng?.my_profile }}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list lines=\"none\"  class=\"nextview-blk bggray\">\r\n    <ion-item color=\"newColor\" class=\"link-pages\">\r\n      <a href=\"tel:{{ authUser?.phone_no }}\" class=\"phone-no-style\">\r\n      <ion-icon slot=\"start\" style=\"font-size: 22px;\" name=\"call-sharp\"></ion-icon>\r\n      {{ dataLeng?.contact_title }}</a>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n  <!--<ion-item>\r\n    <h2>Welcome to {{ authUser?.name }}</h2>\r\n  </ion-item>\r\n  <div style=\"text-align: center;\">\r\n    <app-logo></app-logo>\r\n  </div>\r\n  {{ curtime }}\r\n  <app-feed-update [loginUser]=\"authUser\"></app-feed-update>\r\n  <app-feed-card [loginUser]=\"authUser\"></app-feed-card>-->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/feed/feed-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feed/feed-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "./src/app/pages/feed/feed-routing.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".moring {\n  color: #707070;\n  width: 100%;\n  margin: 5px 20px;\n  padding-top: 16px;\n  font-size: 22px;\n}\n\n.username {\n  margin: 1px 20px;\n}\n\n.username h1 {\n  font-size: 44px;\n  color: #1dbc9c;\n  font-weight: 700;\n  padding-top: 0px;\n  margin-top: -5px;\n}\n\n.phone-no-style {\n  text-decoration: none;\n  color: #717070;\n}\n\n.btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.nextview-blk {\n  padding: 15px;\n  border: 1px solid #eeeeee;\n  margin: 15px;\n  border-radius: 20px;\n}\n\n.bggray, .item-inner {\n  background: #eeeeee;\n}\n\n.application {\n  font-size: 17px;\n  color: #707070;\n}\n\n.link-pages {\n  font-size: 21px;\n  color: #717070;\n  font-weight: 500;\n}\n\n.item-native {\n  background: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcZmVlZFxcZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vcmluZ3tcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLnVzZXJuYW1le1xyXG4gICAgbWFyZ2luOiAxcHggMjBweDtcclxufVxyXG4udXNlcm5hbWUgaDEge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgY29sb3I6ICMxZGJjOWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5waG9uZS1uby1zdHlsZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNzE3MDcwO1xyXG59XHJcblxyXG4uYnRuLWhlbHB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYmU5ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG59XHJcblxyXG4ubmV4dHZpZXctYmxre1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5iZ2dyYXksIC5pdGVtLWlubmVye1xyXG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxufVxyXG5cclxuXHJcbi5hcHBsaWNhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5saW5rLXBhZ2Vze1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgY29sb3I6ICM3MTcwNzA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5pdGVtLW5hdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbn0iLCIubW9yaW5nIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udXNlcm5hbWUge1xuICBtYXJnaW46IDFweCAyMHB4O1xufVxuXG4udXNlcm5hbWUgaDEge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjMWRiYzljO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucGhvbmUtbm8tc3R5bGUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzE3MDcwO1xufVxuXG4uYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi5uZXh0dmlldy1ibGsge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5iZ2dyYXksIC5pdGVtLWlubmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cblxuLmFwcGxpY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmxpbmstcGFnZXMge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAjNzE3MDcwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer-workreport-info.service */ "./src/app/services/customer-workreport-info.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");









let FeedPage = class FeedPage {
    constructor(auth, menu, router, route, customerServices, langServe, langSwitch) {
        this.auth = auth;
        this.menu = menu;
        this.router = router;
        this.route = route;
        this.customerServices = customerServices;
        this.langServe = langServe;
        this.langSwitch = langSwitch;
        this.postData = {
            member_id: '',
            year: '',
            month: '',
            language: '',
            pages: '',
            token: ''
        };
        this.tokenExpire = false;
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
            this.postData.token = this.authUser["access-token"];
            console.log(res.status, this.postData.token, "home 2");
            //check token session
            this.checkTokenSession();
            //check token is expire or not
            if (res.status == 0 || this.tokenExpire == 1) {
                this.logoutAction();
            }
        });
    }
    ngOnInit() {
        this.newDate = new Date().getFullYear();
        this.newMonth = new Date().getMonth();
        this.postData.year = this.newDate;
        this.postData.month = this.newMonth + 1;
        //console.log(this.authUser, "token check");
        this.curtime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'HH', 'en');
        this.greetingMessage();
        //language switch
        this.languageDefault();
    }
    //logout action
    logoutAction() {
        this.auth.logout();
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            console.log(this.postData.language, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                console.log(this.postData, 'default');
            }
            this.postData.pages = 'home_mobile';
            this.langServe.languageData(this.postData).subscribe((res) => {
                console.log(res.data, ' Home Page');
                this.dataLeng = res.data;
            });
        });
    }
    //check token was expired or not
    checkTokenSession() {
        console.log(this.postData.token, "Token Session check is what Feed");
        this.auth.checkTokenSession(this.postData).subscribe((res) => {
            console.log(res, "check Token Result is what Feed");
            this.tokenExpire = res.status;
        });
    }
    greetingMessage() {
        if (this.curtime <= 11) {
            this.greetingmsg = "Good Morning,";
        }
        else if (this.curtime <= 16) {
            this.greetingmsg = "Good Afternoon,";
        }
        else {
            this.greetingmsg = "Good Evening,";
        }
    }
    gotoPagesAction(urls, tabsopen) {
        this.router.navigate([urls], { queryParams: { year: this.postData.year, month: this.postData.month, tabs: tabsopen } });
    }
    //customer workreport data
    goMoreInfo(urls) {
        this.postData.member_id = this.authUser.email;
        //console.log(this.postData.month + " login");
        //search by date again
        this.customerServices.getcustomerData(this.postData).subscribe((res) => {
            this.newData = res;
            //console.log(this.newData.customer_work_report);
            this.customerServices.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.newData.customer_work_report,
                    year: this.postData.year,
                    month: this.postData.month,
                    tabs: "hello"
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__["CustomerWorkreportInfoService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitchService"] }
];
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__["CustomerWorkreportInfoService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitchService"]])
], FeedPage);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map