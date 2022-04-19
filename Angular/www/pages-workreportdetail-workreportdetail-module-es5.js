(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workreportdetail-workreportdetail-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreportdetail/workreportdetail.page.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreportdetail/workreportdetail.page.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-back-button defaultHref=\"/home/workreport?year={{ postData.year }}&month={{ postData.month }}\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Work Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<app-workreport-detail-info></app-workreport-detail-info>-->\r\n  <ion-item style=\"background: blueviolet;\">\r\n    <h3>Work Report Date: {{ wkreport_detail_date | date }}</h3>\r\n  </ion-item>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\"> \r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"firstWidth\">#</th>\r\n          <th scope=\"col\" class=\"minwidth\">Work Hour</th>\r\n          <th scope=\"col\" class=\"minwidth\">Break Time</th>\r\n          <th scope=\"col\" class=\"minwidth\">Night Break</th>\r\n          <th scope=\"col\" class=\"minwidth\">Working Time</th>\r\n          <th scope=\"col\" class=\"minwidth\">Over Time</th>\r\n          <th scope=\"col\" class=\"minwidth\">Night Work Time</th>\r\n          <th scope=\"col\" class=\"minwidth\">Deducation</th>\r\n          <th scope=\"col\" >Att Type</th>\r\n          <th scope=\"col\" class=\"minwidth\">Reason</th>\r\n        </tr>\r\n      </thead>\r\n    <tr *ngFor=\"let r of wkreport_detail; let i = index\" >\r\n      <td>{{ r.report_date | date: 'MM/dd' }}</td>\r\n      <td>\r\n        <div *ngIf=\"r.atendance_type == 0\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-select class=\"borderOnewidth\" style=\"width: 100%\" value=\"{{r.atendance_type}}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let p of workPatternExist\" value=\"{{ p.pattern }}\">勤務時間_パタン{{ p.pattern }}</ion-select-option>\r\n                </ion-select> \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-input class=\"borderOneCol\" name=\"starttime\"  value=\"{{r.start_time}}\" type=\"text\"></ion-input>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-input  class=\"borderOneCol\" name=\"endtime\"  value=\"{{r.end_time}}\" type=\"text\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"totalbreaktime\"  value=\"{{r.total_break_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"night_breaktime\"  value=\"{{r.night_break_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"total_work_time\"  value=\"{{r.total_work_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"orver_work_time\"  value=\"{{r.orver_work_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"night_work_time\"  value=\"{{r.night_work_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"deduction_time\"  value=\"{{r.deduction_time}}\" type=\"text\"></ion-input>\r\n      </td>\r\n      <td>\r\n        <ion-select style=\"width: 150px\" class=\"borderOnewidth\" value=\"{{r.atendance_type}}\" name=\"custWkReport\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let a of attendance_type\" value=\"{{ a.id }}\">{{ a.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>\r\n        <ion-textarea  name=\"deduction_time\" style=\"border: 1px solid #cccccc;\" value=\"{{r.reason}}\" type=\"text\"></ion-textarea>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  </div>\r\n  \r\n  <ion-list>\r\n    <ion-item><h3>Total</h3></ion-item>\r\n  </ion-list>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" >Working Hours</th>\r\n          <th scope=\"col\" >Overtime (Total)\t</th>\r\n          <th scope=\"col\" >Night Work Hours</th>\r\n          <th scope=\"col\" >Deduct Hours</th>\r\n        </tr>\r\n      </thead>\r\n        <tr>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_total_work_time}}\" name=\"totalWH\" [(ngModel)]=\"postData.totalWH\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_orver_work_time}}\" name=\"totalOverTime\" [(ngModel)]=\"postData.totalOverTime\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_night_work_time}}\" name=\"totalNight\" [(ngModel)]=\"postData.totalNight\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_deduction_time}}\" name=\"totalDeduct\" [(ngModel)]=\"postData.totalDeduct\"></ion-input></td>\r\n        </tr>\r\n      </table>\r\n  </div>\r\n  \r\n  <ion-list>\r\n    <ion-item><h3>Result</h3></ion-item>\r\n  </ion-list>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" >Working Hours</th>\r\n          <th scope=\"col\" >Overtime (Total)\t</th>\r\n          <th scope=\"col\" >Overtime (Payments)</th>\r\n          <th scope=\"col\" >Night Work Hours</th>\r\n          <th scope=\"col\" >Deduct Hours</th>\r\n          <th scope=\"col\" class=\"minwidth\">Exercise of Paid Holidays</th>\r\n          <th scope=\"col\" class=\"minwidth\">Exercise of Paid Half Holiday</th>\r\n          <th scope=\"col\" >Total</th>\r\n          <th scope=\"col\" >Absenteeism Days</th>\r\n          <th scope=\"col\" >Closing Dates</th>\r\n        </tr>\r\n      </thead>\r\n        <tr>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_operated_time}}\" name=\"rstWH\" [(ngModel)]=\"postData.rstWH\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_orver_work_time}}\" name=\"rstOvt\" [(ngModel)]=\"postData.rstOvt\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_salary_time}}\" name=\"rstOvtPay\" [(ngModel)]=\"postData.rstOvtPay\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_night_work_time}}\" name=\"rstNgWH\" [(ngModel)]=\"postData.rstNgWH\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_deduction_time}}\" name=\"rstDeHr\" [(ngModel)]=\"postData.rstDeHr\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_holiday}}\" name=\"rstPaidHld\" [(ngModel)]=\"postData.rstPaidHld\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_harf_holiday}}\" name=\"rstPaidHfHld\" [(ngModel)]=\"postData.rstPaidHfHld\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_total_holiday}}\" name=\"rstTotal\" [(ngModel)]=\"postData.rstTotal\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_absence_num}}\" name=\"rstAbsDay\" [(ngModel)]=\"postData.rstAbsDay\"></ion-input></td>\r\n          <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_special_holiday}}\" name=\"rstCloseDate\" [(ngModel)]=\"postData.rstCloseDate\"></ion-input></td>\r\n        </tr>\r\n      </table>\r\n  </div>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/workreportdetail/workreportdetail-routing.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/workreportdetail/workreportdetail-routing.module.ts ***!
          \***************************************************************************/
        /*! exports provided: WorkreportdetailPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportdetailPageRoutingModule", function () { return WorkreportdetailPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _workreportdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workreportdetail.page */ "./src/app/pages/workreportdetail/workreportdetail.page.ts");
            var routes = [
                {
                    path: '',
                    component: _workreportdetail_page__WEBPACK_IMPORTED_MODULE_3__["WorkreportdetailPage"]
                }
            ];
            var WorkreportdetailPageRoutingModule = /** @class */ (function () {
                function WorkreportdetailPageRoutingModule() {
                }
                return WorkreportdetailPageRoutingModule;
            }());
            WorkreportdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], WorkreportdetailPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/workreportdetail/workreportdetail.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/workreportdetail/workreportdetail.module.ts ***!
          \*******************************************************************/
        /*! exports provided: WorkreportdetailPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportdetailPageModule", function () { return WorkreportdetailPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _workreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workreportdetail-routing.module */ "./src/app/pages/workreportdetail/workreportdetail-routing.module.ts");
            /* harmony import */ var _workreportdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workreportdetail.page */ "./src/app/pages/workreportdetail/workreportdetail.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var WorkreportdetailPageModule = /** @class */ (function () {
                function WorkreportdetailPageModule() {
                }
                return WorkreportdetailPageModule;
            }());
            WorkreportdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _workreportdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkreportdetailPageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_workreportdetail_page__WEBPACK_IMPORTED_MODULE_6__["WorkreportdetailPage"]]
                })
            ], WorkreportdetailPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/workreportdetail/workreportdetail.page.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/workreportdetail/workreportdetail.page.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.middlewidth {\n  min-width: 200px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.borderOne {\n  border: 1px solid #000000;\n  padding: 3px;\n}\n\n.borderOneCol {\n  border: 1px solid #000000;\n  padding: 1px;\n}\n\n.borderOnewidth {\n  border: 1px solid #000000;\n  padding: 3px;\n  width: 87px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya3JlcG9ydGRldGFpbC9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcd29ya3JlcG9ydGRldGFpbFxcd29ya3JlcG9ydGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtyZXBvcnRkZXRhaWwvd29ya3JlcG9ydGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNHSjs7QURBQTtFQUFtQix5QkFBQTtBQ0luQjs7QURGQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya3JlcG9ydGRldGFpbC93b3JrcmVwb3J0ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG4gIC5taW53aWR0aHtcclxuICAgIG1pbi13aWR0aDogMTM1cHg7XHJcbiAgfVxyXG4gIC5taWRkbGV3aWR0aHtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5maXJzdFdpZHRoe1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9XHJcblxyXG4uYm9yZGVyT25lIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4uYm9yZGVyT25lQ29sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG4uYm9yZGVyT25ld2lkdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHdpZHRoOiA4N3B4O1xyXG4gIGhlaWdodDogMzBweDtcclxufSIsIi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5taW53aWR0aCB7XG4gIG1pbi13aWR0aDogMTM1cHg7XG59XG5cbi5taWRkbGV3aWR0aCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5maXJzdFdpZHRoIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5ib3JkZXJPbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5ib3JkZXJPbmVDb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5ib3JkZXJPbmV3aWR0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDg3cHg7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/workreportdetail/workreportdetail.page.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/workreportdetail/workreportdetail.page.ts ***!
          \*****************************************************************/
        /*! exports provided: WorkreportdetailPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportdetailPage", function () { return WorkreportdetailPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var WorkreportdetailPage = /** @class */ (function () {
                function WorkreportdetailPage(authService, route, router) {
                    var _this = this;
                    this.authService = authService;
                    this.route = route;
                    this.router = router;
                    this.postData = {
                        year: '',
                        month: '',
                        member_id: '',
                        totalWH: '',
                        totalOverTime: '',
                        totalNight: '',
                        totalDeduct: '',
                        rstWH: '',
                        rstOvt: '',
                        rstOvtPay: '',
                        rstNgWH: '',
                        rstDeHr: '',
                        rstPaidHld: '',
                        rstPaidHfHld: '',
                        rstTotal: '',
                        rstAbsDay: '',
                        rstCloseDate: '',
                    };
                    this.attendance_type = [];
                    this.workPatternExist = [];
                    this.route.queryParams.subscribe(function (params) {
                        if (_this.router.getCurrentNavigation().extras.state) {
                            _this.wkreport_detail = _this.router.getCurrentNavigation().extras.state.special;
                            _this.wkReport = _this.router.getCurrentNavigation().extras.state.wkReport;
                            _this.workPattern = _this.router.getCurrentNavigation().extras.state.workPattern;
                            _this.workingHour = _this.router.getCurrentNavigation().extras.state.workingHour;
                            _this.wkreport_detail_date = _this.router.getCurrentNavigation().extras.state.wkreport_detail_date;
                            _this.postData.year = _this.router.getCurrentNavigation().extras.state.year;
                            _this.postData.month = _this.router.getCurrentNavigation().extras.state.month;
                            //to display exist work pattern
                            for (var index = 0; index < 6; index++) {
                                if (_this.workPattern[index]['pattern_flg'] == 1) {
                                    _this.workPatternExist[index] = _this.workPattern[index];
                                }
                            }
                            //console.log(this.workPatternExist);
                        }
                    });
                }
                WorkreportdetailPage.prototype.ngOnInit = function () {
                    if (!this.postData.year || this.postData.year.length == 0) {
                        this.newDate = new Date().getFullYear();
                        this.newMonth = new Date().getMonth();
                        this.postData.year = this.newDate;
                        this.postData.month = this.newMonth + 1;
                        // console.log(this.newDate + this.newMonth + "current year");
                    }
                    this.attendance_type = [
                        {
                            id: 0,
                            value: '-'
                        },
                        {
                            id: 1,
                            value: 'Public Holiday'
                        },
                        {
                            id: 2,
                            value: 'Shift Holiday'
                        },
                        {
                            id: 3,
                            value: 'Paid Holiday'
                        },
                        {
                            id: 4,
                            value: 'Half Holiday'
                        },
                        {
                            id: 5,
                            value: 'ABSENCE'
                        },
                        {
                            id: 6,
                            value: 'Delay'
                        },
                        {
                            id: 7,
                            value: 'Early'
                        },
                        {
                            id: 8,
                            value: 'Special Holiday'
                        },
                        {
                            id: 9,
                            value: 'Holiday Work'
                        },
                        {
                            id: 10,
                            value: 'Substitute Holiday'
                        },
                        {
                            id: 11,
                            value: 'Others'
                        }
                    ];
                    // console.log(this.attendance_type);
                };
                return WorkreportdetailPage;
            }());
            WorkreportdetailPage.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            WorkreportdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-workreportdetail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workreportdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workreportdetail/workreportdetail.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workreportdetail.page.scss */ "./src/app/pages/workreportdetail/workreportdetail.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], WorkreportdetailPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-workreportdetail-workreportdetail-module-es2015.js.map
//# sourceMappingURL=pages-workreportdetail-workreportdetail-module-es5.js.map
//# sourceMappingURL=pages-workreportdetail-workreportdetail-module-es5.js.map