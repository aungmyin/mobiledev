(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customerwkreport-customerwkreport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerwkreport/customerwkreport.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerwkreport/customerwkreport.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 10px;\">\r\n      <ion-back-button defaultHref=\"/home/workreport?year={{postData.year}}&month={{postData.month}}\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Customer Work Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form>\r\n    <ion-list *ngFor=\"let d of data\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Customer Name: {{ d.client_name }} </ion-label>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Project Name: {{d.project_name}}</ion-label>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Contract Period: {{d.start_contract_date | date}} ~ {{d.end_contract_date | date}}</ion-label>\r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label>Customer Work Report: </ion-label>\r\n        <ion-select slot=\"end\" value=\"{{d.client_report_flg}}\" name=\"custWkReport\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let r of report_flgs\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n        </ion-select> \r\n      </ion-item>\r\n  \r\n      <ion-item>\r\n        <ion-label>Client Work Report (PDF)</ion-label>\r\n        <ion-input slot=\"end\" name=\"cwfile\" type=\"file\" accept=\"image/*\" [(ngModel)]=\"postData.cwfile\"></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Actual Working Hours (Total)</ion-label>\r\n        <ion-input value=\"{{d.customer_working_time}}\" autocomplete=\"off\" name=\"actWorkHour\" type=\"text\" [(ngModel)]=\"postData.actWorkHour\"></ion-input>\r\n      </ion-item>\r\n  \r\n    </ion-list>\r\n    <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"success\" >Store</ion-button>\r\n  </form>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/customerwkreport/customerwkreport-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/customerwkreport/customerwkreport-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerwkreportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerwkreportPageRoutingModule", function() { return CustomerwkreportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerwkreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerwkreport.page */ "./src/app/pages/customerwkreport/customerwkreport.page.ts");




const routes = [
    {
        path: '',
        component: _customerwkreport_page__WEBPACK_IMPORTED_MODULE_3__["CustomerwkreportPage"]
    }
];
let CustomerwkreportPageRoutingModule = class CustomerwkreportPageRoutingModule {
};
CustomerwkreportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerwkreportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/customerwkreport/customerwkreport.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/customerwkreport/customerwkreport.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerwkreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerwkreportPageModule", function() { return CustomerwkreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _customerwkreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerwkreport-routing.module */ "./src/app/pages/customerwkreport/customerwkreport-routing.module.ts");
/* harmony import */ var _customerwkreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerwkreport.page */ "./src/app/pages/customerwkreport/customerwkreport.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let CustomerwkreportPageModule = class CustomerwkreportPageModule {
};
CustomerwkreportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerwkreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerwkreportPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_customerwkreport_page__WEBPACK_IMPORTED_MODULE_6__["CustomerwkreportPage"]]
    })
], CustomerwkreportPageModule);



/***/ }),

/***/ "./src/app/pages/customerwkreport/customerwkreport.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/customerwkreport/customerwkreport.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyd2tyZXBvcnQvY3VzdG9tZXJ3a3JlcG9ydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/customerwkreport/customerwkreport.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customerwkreport/customerwkreport.page.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerwkreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerwkreportPage", function() { return CustomerwkreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer-workreport-info.service */ "./src/app/services/customer-workreport-info.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");






let CustomerwkreportPage = class CustomerwkreportPage {
    constructor(route, router, auth, toastService, customerServe) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.toastService = toastService;
        this.customerServe = customerServe;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            cwfile: '',
            actWorkHour: ''
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.special;
                this.postData.year = this.router.getCurrentNavigation().extras.state.year;
                this.postData.month = this.router.getCurrentNavigation().extras.state.month;
            }
        });
    }
    ngOnInit() {
        this.report_flgs = [
            {
                id: 0,
                value: 'No'
            },
            {
                id: 1,
                value: 'Yes'
            }
        ];
        if (!this.postData.year || this.postData.year.length == 0) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            // console.log(this.newDate + this.newMonth + "current year");
        }
        // this.route.queryParams.subscribe(params => {
        //   if (this.router.getCurrentNavigation().extras.state) {
        //     this.data = '';
        //     this.data = this.router.getCurrentNavigation().extras.state.special;
        //     this.postData.year = this.router.getCurrentNavigation().extras.state.year;
        //     this.postData.month = this.router.getCurrentNavigation().extras.state.month;
        //     this.customerReports = this.data.customer_work_report;
        //     console.log(this.data);
        //     console.log("hello customer");
        //   }
        // });
    }
};
CustomerwkreportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_3__["CustomerWorkreportInfoService"] }
];
CustomerwkreportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerwkreport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerwkreport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerwkreport/customerwkreport.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerwkreport.page.scss */ "./src/app/pages/customerwkreport/customerwkreport.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_3__["CustomerWorkreportInfoService"]])
], CustomerwkreportPage);



/***/ })

}]);
//# sourceMappingURL=pages-customerwkreport-customerwkreport-module-es2015.js.map