(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/feed\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\"> \r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content \r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <app-profile [loginUser]=\"authUser\"></app-profile>\r\n  \r\n <!-- <ion-list>   \r\n    <ion-reorder-group (ionItemReorder)=\"onRenderItems($event)\" disabled=\"false\">  \r\n      <ion-item *ngFor=\"let item of listItems\">  \r\n        <ion-label>  \r\n          {{item}}  \r\n        </ion-label>  \r\n        <ion-reorder></ion-reorder>  \r\n      </ion-item>  \r\n    </ion-reorder-group>  \r\n  </ion-list>  \r\n  <ion-list class=\"ion-text-center\">  \r\n    <ion-button (click)=\"getList()\">Get Updated new List</ion-button>  \r\n  </ion-list> --> \r\n</ion-content>  \r\n<!-- <ion-footer >\r\n  <ion-toolbar class=\"footerbar\" color=\"newColor\">\r\n    <ion-grid class=\"footerbar\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button class=\"ftbtnColor\" color=\"ftbtnColor\">Store</ion-button>\r\n        </ion-col>\r\n        <ion-col >\r\n          <ion-button class=\"ftbtngrayColor\" color=\"ftbtnColor\">Apply</ion-button>\r\n        </ion-col>\r\n        <ion-col >\r\n          <ion-button class=\"ftbtngrayColor\" color=\"ftbtnColor\">Expense</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/pages/messages/messages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/messages/messages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/pages/messages/messages-routing.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/messages/messages.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.ftbtnColor {\n  background-color: #6fd3bf;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #6fd3bf;\n  width: 90%;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.ftbtngrayColor {\n  background-color: #2d9f88;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #2d9f88;\n  width: 95%;\n  color: #ffffff;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.footerbar {\n  background: #37c3a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnZXMvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWhlbHB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYmU5ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG59XHJcblxyXG4uZnRidG5Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZmQzYmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZmQzYmY7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uZnRidG5ncmF5Q29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5Zjg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5Zjg4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmZvb3RlcmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzdjM2E3O1xyXG59IiwiLmJ0bi1oZWxwIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNjYmU5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xufVxuXG4uZnRidG5Db2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZmQzYmY7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZmQzYmY7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmZ0YnRuZ3JheUNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkOWY4ODtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkOWY4ODtcbiAgd2lkdGg6IDk1JTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmZvb3RlcmJhciB7XG4gIGJhY2tncm91bmQ6ICMzN2MzYTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");







let MessagesPage = class MessagesPage {
    constructor(httpService, router, authService, menu, langServe) {
        this.httpService = httpService;
        this.router = router;
        this.authService = authService;
        this.menu = menu;
        this.langServe = langServe;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            language: '',
            pages: ''
        };
        this.author_type = [];
        this.listItems = [
            'Java',
            'Python',
            'Node.js',
            'Android',
            'React.js',
            'HTML',
            'PHP',
            'C++'
        ];
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.authUser = res;
            this.getCurrentUserProfile();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.authService.userData$.subscribe((res) => {
            this.authUser = res;
            this.getCurrentUserProfile();
            event.target.complete();
        });
        setTimeout(() => {
            console.log('Async operation has ended');
        }, 3000);
    }
    onRenderItems(event) {
        console.log(`Move item from ${event.detail.from} to ${event.detail.to}`);
        const draggedItem = this.listItems.splice(event.detail.from, 1)[0];
        this.listItems.splice(event.detail.to, 0, draggedItem);
        event.detail.complete();
    }
    getList() {
        console.table(this.listItems);
    }
    getCurrentUserProfile() {
        this.postData.member_id = this.authUser.email;
        console.log(this.postData);
        this.authService.getUserDatail(this.authUser.email).subscribe((res) => {
            //console.log(res.show_detail);
            this.UserProfile = res.show_detail;
            this.memberNo = this.UserProfile.member_no;
            this.memberNoFormat(this.UserProfile.member_no);
            this.authority(this.UserProfile.authority_type);
            this.employmentType(this.UserProfile.employment_type);
            this.employmentStatus(this.UserProfile.employment_status);
            // console.log(this.UserProfile.member_no, "member no");
        });
    }
    memberNoFormat(mbno) {
        if (mbno.toString().length == 3) {
            this.fmmemberNo = "0" + mbno;
        }
        else if (mbno.toString().length == 2) {
            this.fmmemberNo = "00" + mbno;
        }
        else if (mbno.toString().length == 1) {
            this.fmmemberNo = "000" + mbno;
        }
        else {
            this.fmmemberNo = mbno;
        }
    }
    authority(authId) {
        if (authId == 2) {
            this.authorityName = "Admin User";
        }
        else if (authId == 3) {
            this.authorityName = "Manage User";
        }
        else if (authId == 4) {
            this.authorityName = "Basic User";
        }
        else {
            this.authorityName = "";
        }
    }
    employmentType(empId) {
        if (empId == 0) {
            this.empTypeName = "Executives";
        }
        else if (empId == 1) {
            this.empTypeName = "Regular Employees";
        }
        else if (empId == 2) {
            this.empTypeName = "Contract Employees";
        }
        else if (empId == 3) {
            this.empTypeName = "Part Time";
        }
        else if (empId == 4) {
            this.empTypeName = "Side Job";
        }
        else {
            this.empTypeName = "";
        }
    }
    employmentStatus(empStatus) {
        if (empStatus == 1) {
            this.empStatusName = "Enrolled";
        }
        else if (empStatus == 2) {
            this.empStatusName = "Suspended";
        }
        else if (empStatus == 3) {
            this.empStatusName = "Retired";
        }
        else {
            this.empStatusName = "";
        }
    }
    changePasswordAction() {
        this.router.navigate(['changepassword']);
    }
    gotoPagesAction(urls) {
        this.router.navigate([urls]);
    }
};
MessagesPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] }
];
MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messages/messages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/messages/messages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es2015.js.map