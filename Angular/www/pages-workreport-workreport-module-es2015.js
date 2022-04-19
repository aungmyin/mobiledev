(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workreport-workreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreport/workreport.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreport/workreport.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color:#707070\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/feed\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" (click)=\"gotoPagesAction('home/help')\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content \r\n    pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <!-- <app-workreport-search [loginUser]=\"authUser\"></app-workreport-search> -->\r\n \r\n  <app-member-info [loginUser]=\"authUser\"></app-member-info>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/workreport/workreport-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/workreport/workreport-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WorkreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportPageRoutingModule", function() { return WorkreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _workreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workreport.page */ "./src/app/pages/workreport/workreport.page.ts");




const routes = [
    {
        path: '',
        component: _workreport_page__WEBPACK_IMPORTED_MODULE_3__["WorkreportPage"]
    }
];
let WorkreportPageRoutingModule = class WorkreportPageRoutingModule {
};
WorkreportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkreportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/workreport/workreport.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/workreport/workreport.module.ts ***!
  \*******************************************************/
/*! exports provided: WorkreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportPageModule", function() { return WorkreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _workreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workreport-routing.module */ "./src/app/pages/workreport/workreport-routing.module.ts");
/* harmony import */ var _workreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workreport.page */ "./src/app/pages/workreport/workreport.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let WorkreportPageModule = class WorkreportPageModule {
};
WorkreportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _workreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkreportPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_workreport_page__WEBPACK_IMPORTED_MODULE_6__["WorkreportPage"]]
    })
], WorkreportPageModule);



/***/ }),

/***/ "./src/app/pages/workreport/workreport.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/workreport/workreport.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-style {\n  border: 1px solid #000000 !important;\n  margin-top: 3px !important;\n  text-align: center !important;\n}\n\n.btn-style-search {\n  margin: 5px 10px 10px;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: 300px;\n  margin: 15px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.ftbtnColor {\n  background-color: #6fd3bf;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #6fd3bf;\n  width: 90%;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.ftbtngrayColor {\n  background-color: #2d9f88;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #2d9f88;\n  width: 95%;\n  color: #ffffff;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.footerbar {\n  background: #37c3a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya3JlcG9ydC9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcd29ya3JlcG9ydFxcd29ya3JlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtyZXBvcnQvd29ya3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENFO0VBQW1CLHlCQUFBO0FDR3JCOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ01KOztBREhBO0VBQ0ksbUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtyZXBvcnQvd29ya3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtc3R5bGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc3R5bGUtc2VhcmNoe1xyXG4gICAgbWFyZ2luOiA1cHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cclxuXHJcbi5idG4taGVscHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NiZTlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XHJcbn1cclxuLmZ0YnRuQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZkM2JmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmZkM2JmO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmZ0YnRuZ3JheUNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkOWY4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkOWY4ODtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5mb290ZXJiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM3YzNhNztcclxufVxyXG4iLCIuaW5wdXQtc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1zdHlsZS1zZWFyY2gge1xuICBtYXJnaW46IDVweCAxMHB4IDEwcHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi5mdGJ0bkNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZDNiZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzZmZDNiZjtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZnRidG5ncmF5Q29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5Zjg4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5Zjg4O1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZm9vdGVyYmFyIHtcbiAgYmFja2dyb3VuZDogIzM3YzNhNztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/workreport/workreport.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/workreport/workreport.page.ts ***!
  \*****************************************************/
/*! exports provided: WorkreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportPage", function() { return WorkreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/member-info.service */ "./src/app/services/member-info.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customer-workreport-info.service */ "./src/app/services/customer-workreport-info.service.ts");
/* harmony import */ var src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/transportation-expense.service */ "./src/app/services/transportation-expense.service.ts");








let WorkreportPage = class WorkreportPage {
    constructor(auth, toastService, customerInfo, memberInfo, route, router, transportServ) {
        this.auth = auth;
        this.toastService = toastService;
        this.customerInfo = customerInfo;
        this.memberInfo = memberInfo;
        this.route = route;
        this.router = router;
        this.transportServ = transportServ;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            member_info: '',
            token: ''
        };
        this.customer = {
            client_name: '',
            project_name: '',
            contract_period: '',
            client_report_flg: '',
            customer_working_time: '',
        };
        this.items = [];
        this.tran_expen = [];
        this.yeardropdown = [];
        this.yearlist = [];
        this.itemExpandedHeight = 200;
    }
    ngOnInit() {
        //for getting parameters
        this.route.queryParams.subscribe(params => {
            this.postData.year = params["year"];
            this.postData.month = params["month"];
            //console.log(this.postData.year + this.postData.month + " parameter");
        });
        if (this.postData.year == null) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            //console.log(this.newDate + this.newMonth + "mb info");
        }
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
            // console.log(this.authUser);
            this.getWorkReportData();
        });
        this.items = [
            { expanded: false },
            { expanded: false }
        ];
        this.tran_expen = [
            {
                id: 0,
                value: 'No'
            },
            {
                id: 1,
                value: 'Yes'
            }
        ];
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
            // console.log(this.authUser);
            this.getWorkReportData();
            event.target.complete();
        });
        setTimeout(() => {
            console.log('Async operation has ended');
        }, 3000);
    }
    getWorkReportData() {
        this.postData.member_id = this.authUser.email;
        this.postData.token = this.authUser['access-token'];
        // console.log(this.postData + "mingalar");
        if (this.postData.member_id) {
            this.memberInfo.memberData(this.postData).subscribe((res) => {
                //console.log(res); //refresh data
                this.data = res;
                this.memberInfo.changeMemberData(res);
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast("loading ...");
        }
    }
    expandedItem(item) {
        item.expanded = !item.expanded;
    }
    goMoreInfo(urls) {
        this.postData.member_id = this.authUser.email;
        //console.log(this.postData.month + " login");
        //search by date again
        this.customerInfo.getcustomerData(this.postData).subscribe((res) => {
            this.newData = res;
            //console.log(this.newData.customer_work_report);
            this.customerInfo.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.newData.customer_work_report,
                    year: this.postData.year,
                    month: this.postData.month
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
    }
    goMoreInfoClient(urls) {
        this.postData.member_id = this.authUser.email;
        //search by date again
        this.customerInfo.getcustomerData(this.postData).subscribe((res) => {
            this.newData = res;
            this.customerWorkReport = res.customer_work_report[0];
            this.clientRpFlg = res.customer_work_report;
            this.workingPattern = res.project_info.working_hour;
            this.workingHour = res.work_report;
            console.log(this.newData.project_info);
            this.customerInfo.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.newData.project_info,
                    clientrpflg: this.clientRpFlg,
                    workingPattern: this.workingPattern,
                    workingHour: this.workingHour,
                    year: this.postData.year,
                    month: this.postData.month
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
    }
    goMoreInfoWorkReport(urls) {
        this.postData.member_id = this.authUser.email;
        //console.log(this.postData.month + " login");
        //search by date again
        this.customerInfo.getcustomerData(this.postData).subscribe((res) => {
            this.wkreport_detail = res.work_report_detail;
            this.wkReport = res.work_report;
            this.workPattern = res.project_info.working_hour;
            this.wkreport_detail_date = res.work_report_detail[0]['report_date'];
            this.customerInfo.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.wkreport_detail,
                    wkReport: this.wkReport,
                    workPattern: this.workPattern,
                    wkreport_detail_date: this.wkreport_detail_date,
                    workingHour: this.workingHour,
                    year: this.postData.year,
                    month: this.postData.month
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
    }
    goMoreInfoTranExp(urls) {
        this.postData.member_id = this.authUser.email;
        //console.log(this.postData.month + " login");
        //search by date again
        this.customerInfo.getcustomerData(this.postData).subscribe((res) => {
            this.newData = res;
            console.log(this.newData.customer_work_report);
            this.customerInfo.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.newData.transport_expense,
                    year: this.postData.year,
                    month: this.postData.month
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
        /* this.postData.member_id = this.authUser.email;
        //console.log(this.postData.month + " login");
        //search by date again
        this.transportServ.transportExpenseData(this.postData).subscribe( (res: any) => {
          this.tranSportExpense = res;
          //console.log(this.tranSportExpense.transport_expense);
          console.log(this.postData);
          this.transportServ.updateTransportExpense(res);
    
          let navigationExtras: NavigationExtras = {
            state: {
              special: res.transport_expense,
              year: this.postData.year,
              month: this.postData.month
            }
          };
        
          this.router.navigate([urls], navigationExtras);
        }); */
    }
    gotoPagesAction(urls) {
        this.router.navigate([urls]);
    }
    unread() {
    }
};
WorkreportPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__["CustomerWorkreportInfoService"] },
    { type: src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__["MemberInfoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_7__["TransportationExpenseService"] }
];
WorkreportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workreport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreport/workreport.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workreport.page.scss */ "./src/app/pages/workreport/workreport.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_6__["CustomerWorkreportInfoService"],
        src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__["MemberInfoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_7__["TransportationExpenseService"]])
], WorkreportPage);



/***/ })

}]);
//# sourceMappingURL=pages-workreport-workreport-module-es2015.js.map