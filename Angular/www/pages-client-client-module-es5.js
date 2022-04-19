(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-client-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/client.page.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/client.page.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/workreport?year={{ postData.year }}&month={{ postData.month }}\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content \r\n    pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <app-clientinfo [loginUser]=\"authUser\"></app-clientinfo> -->\r\n  <ion-list>\r\n    <ion-item lines=\"none\" >\r\n      <p style=\"padding-top: 15px;\">{{ dataLeng?.application }} <br>\r\n        <span class=\"titlefont\">{{ dataLeng?.client_infomation }}</span> \r\n      </p>\r\n  \r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n  <ion-list class=\"topblk\" lines=\"none\">\r\n    \r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col size=\"1\"><ion-icon name=\"create-outline\" style=\"font-size: 1.4rem;\"></ion-icon></ion-col>\r\n        <ion-col size=\"11\">\r\n          <p style=\"margin-top: 0px;\">\r\n           <!-- <span style=\"font-size: 1.1rem;\">{{ dataLeng?.edit_customer_info }}</span> <br> -->\r\n           {{ dataLeng?.if_there }}\r\n          </p>\r\n          <div *ngIf=\"delFlg == 1\">\r\n            <span (click)=\"sendEmailtoAdmin()\" style=\"color:blue;\">\r\n              Send email to admin\r\n            </span>\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"delFlg == 0\" class=\"rowitem\" (click)=\"delClientInfo(0)\">\r\n        <ion-col size=\"1\">\r\n          <ion-icon name=\"trash-outline\" style=\"font-size: 1.4rem;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"11\">\r\n           <span style=\"font-size: 1.1rem;\">{{ dataLeng?.delete_customer_info }}</span> \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n  <div *ngIf=\"delFlg == 0\">\r\n    <ion-list *ngFor=\"let clinfo of data;\" lines=\"none\">\r\n      <ion-item-sliding>\r\n        <ion-item >\r\n          <p><b>{{ dataLeng?.individual_contract_no }}: </b><br> \r\n            {{ clinfo.individual_contract_no }}</p>\r\n        </ion-item>\r\n        <ion-item >\r\n          <p><b>{{ dataLeng?.customer_name }}:</b><br> \r\n            {{ clinfo.client_name }}</p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p><b>{{ dataLeng?.project_name }}:</b><br> \r\n            {{ clinfo.project_name }}</p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p><b>{{ dataLeng?.contract_period }}:</b> <br> \r\n            {{ clinfo.start_contract_date | date }} ~ {{ clinfo.end_contract_date | date }} </p>\r\n        </ion-item>\r\n        <ion-item >\r\n          <p><b>{{ dataLeng?.contract_type }}:</b><br> \r\n            {{ getContractTypeById(clinfo.contract_type) }}  </p>\r\n        </ion-item>\r\n        <ion-item >\r\n          <p><b>During working hours:</b><br> \r\n            {{ clinfo.min_width_time }}h ~ {{ clinfo.max_width_time }}h </p>\r\n        </ion-item>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </div>\r\n  <!-- <div *ngIf=\"delFlg == 1\">\r\n    <ion-list lines=\"none\" class=\"alertview-blk\">\r\n      <ion-item class=\"alert-blk\" color=\"alertColor\" >\r\n        <p>\r\n          {{ dataLeng?.the_application_deadline }}\r\n          \r\n        </p>\r\n        \r\n      </ion-item>\r\n    </ion-list>\r\n  </div> -->\r\n \r\n  <div *ngIf=\"delFlg == 0\">\r\n    <ion-list lines=\"none\" style=\"margin-bottom: 20px;\">\r\n      <ion-item *ngFor=\"let p of wkPattern; let i=index;\">\r\n        <ion-checkbox slot=\"start\" color=\"primary\" ></ion-checkbox>\r\n        Break Time {{ p.pattern }} <br/>\r\n        {{ p.start_time }}~{{ p.end_time }} Break Time {{ p.break_time }} {{ p.working_time }}h  \r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n    <div style=\"border-bottom: 2px dashed #dddddd; margin: 0 15px 15px 15px;\">&nbsp;</div>\r\n    <ion-list class=\"btn-container\" lines=\"none\">\r\n      <ion-item lines=\"none\">\r\n        <div class=\"addnewblg\">\r\n            <ion-button color=\"secondary\" class=\"add-transport-btn\" (click)=\"showCustmers()\" >\r\n                + {{ dataLeng?.add_customer }}\r\n            </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      \r\n    </ion-list>\r\n  \r\n\r\n  <div *ngIf=\"showClStatus == 1\" class=\"table-responsive\">\r\n    <ion-list lines=\"none\" *ngFor=\"let cl of showClients; let i = index \">\r\n      <ion-item>Client Name: {{ cl.client_name }}</ion-item>\r\n      <ion-item>Project Name: {{ cl.project_name }}</ion-item>\r\n      <ion-item>Contract Type: {{ cl.contract_type }}</ion-item>\r\n      <ion-item>Contract Start Date: {{ cl.start_contract_date | date: 'yyyy/MM/dd EEEE' }}</ion-item>\r\n      <ion-item>Contract End Date: {{ cl.end_contract_date | date: 'yyyy/MM/dd EEEE' }}</ion-item>\r\n      <ion-item>Max Time: {{ cl.max_width_time }}H</ion-item>\r\n      <ion-item>Min Time {{ cl.min_width_time }}H</ion-item>\r\n      <ion-item> \r\n        <div class=\"addnewblg\">\r\n          <ion-button class=\"add-transport-btn\" (click)=\"addCustomer(i)\">Select</ion-button>\r\n        </div></ion-item>\r\n    </ion-list>\r\n    \r\n  </div>\r\n\r\n  \r\n  \r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/client/client-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/client/client-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: ClientPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageRoutingModule", function () { return ClientPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.page */ "./src/app/pages/client/client.page.ts");
            var routes = [
                {
                    path: '',
                    component: _client_page__WEBPACK_IMPORTED_MODULE_3__["ClientPage"]
                }
            ];
            var ClientPageRoutingModule = /** @class */ (function () {
                function ClientPageRoutingModule() {
                }
                return ClientPageRoutingModule;
            }());
            ClientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], ClientPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/client/client.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pages/client/client.module.ts ***!
          \***********************************************/
        /*! exports provided: ClientPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function () { return ClientPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/pages/client/client-routing.module.ts");
            /* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client.page */ "./src/app/pages/client/client.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var ClientPageModule = /** @class */ (function () {
                function ClientPageModule() {
                }
                return ClientPageModule;
            }());
            ClientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _client_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientPageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_client_page__WEBPACK_IMPORTED_MODULE_6__["ClientPage"]]
                })
            ], ClientPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/client/client.page.scss": 
        /*!***********************************************!*\
          !*** ./src/app/pages/client/client.page.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.titlefont {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #707070;\n}\n\nb {\n  color: #707077;\n}\n\np {\n  margin-top: 0px;\n}\n\n.topblk {\n  border: 1px solid #4ac9af;\n  padding: 5px;\n  background-color: #f2fffd;\n  margin: 15px;\n  border-radius: 20px;\n}\n\n.rowitem {\n  background-color: #f2fffd;\n  border-top: 1px dashed #4ac9af;\n  padding-top: 5px;\n}\n\n.btn-container {\n  margin: 15px;\n}\n\n.addnewblg {\n  text-align: center;\n  color: #7f7270;\n  width: 100%;\n}\n\n.add-transport-btn {\n  border: 1px solid #9f9f9f;\n  color: #000000;\n  border-radius: 8px;\n  font-size: 1rem;\n  margin: 15px 0;\n  text-transform: capitalize;\n  width: 100%;\n}\n\n.alert-blk {\n  font-size: 19px;\n  color: #717070;\n  font-weight: 500;\n  background: #fff9f2;\n  font-size: 1.2rem;\n  line-height: 23px;\n}\n\n.alertview-blk {\n  padding: 5px;\n  border: 1px solid #ffaa46;\n  margin: 15px 15px 40px 15px;\n  border-radius: 20px;\n  background: #fff9f2;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 0px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px 12px 8px 0;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.middlewidth {\n  min-width: 200px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50L0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxjbGllbnRcXGNsaWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NsaWVudC9jbGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixjQUFBO0FDSXpDOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRExBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1FKOztBRExBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ1FKOztBRExBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1FKOztBRExFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ1FKOztBRExFO0VBQ0UsZ0JBQUE7QUNRSjs7QURORTtFQUNFLGdCQUFBO0FDU0o7O0FEUEU7RUFDRSxXQUFBO0FDVUo7O0FEUEE7RUFBbUIseUJBQUE7QUNXbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbGllbnQvY2xpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taGVscHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NiZTlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XHJcbn1cclxuLnRpdGxlZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuYiB7XHJcbiAgICBjb2xvcjogIzcwNzA3NztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4udG9wYmxrIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YWM5YWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZmZkO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ucm93aXRlbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmZmZmQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM0YWM5YWY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLmFkZG5ld2JsZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzdmNzI3MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZGQtdHJhbnNwb3J0LWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGVydC1ibGt7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogIzcxNzA3MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOWYyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxufVxyXG5cclxuLmFsZXJ0dmlldy1ibGt7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYTQ2O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggNDBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY5ZjI7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLm1pbndpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAxMzVweDtcclxuICB9XHJcbiAgLm1pZGRsZXdpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmZpcnN0V2lkdGh7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn0iLCIuYnRuLWhlbHAge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2NiZTlmZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG59XG5cbi50aXRsZWZvbnQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbmIge1xuICBjb2xvcjogIzcwNzA3Nztcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvcGJsayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWM5YWY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZmZmZDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucm93aXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmZmZmQ7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzRhYzlhZjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5hZGRuZXdibGcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjN2Y3MjcwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC10cmFuc3BvcnQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzlmOWY5ZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDE1cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxlcnQtYmxrIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzcxNzA3MDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjlmMjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uYWxlcnR2aWV3LWJsayB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWE0NjtcbiAgbWFyZ2luOiAxNXB4IDE1cHggNDBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmOWYyO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNkZGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDA7XG59XG5cbi5taW53aWR0aCB7XG4gIG1pbi13aWR0aDogMTM1cHg7XG59XG5cbi5taWRkbGV3aWR0aCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5maXJzdFdpZHRoIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/client/client.page.ts": 
        /*!*********************************************!*\
          !*** ./src/app/pages/client/client.page.ts ***!
          \*********************************************/
        /*! exports provided: ClientPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPage", function () { return ClientPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clientinfo.service */ "./src/app/services/clientinfo.service.ts");
            /* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
            /* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
            /* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
            /* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
            var ClientPage = /** @class */ (function () {
                function ClientPage(auth, toastService, route, router, clientService, langServe, langSwitch, authServe, http) {
                    var _this = this;
                    this.auth = auth;
                    this.toastService = toastService;
                    this.route = route;
                    this.router = router;
                    this.clientService = clientService;
                    this.langServe = langServe;
                    this.langSwitch = langSwitch;
                    this.authServe = authServe;
                    this.http = http;
                    this.postData = {
                        year: '',
                        month: '',
                        member_id: '',
                        token: '',
                        workreport_client_id: '',
                        language: '',
                        idname: '',
                        pages: '',
                        account: ''
                    };
                    this.route.queryParams.subscribe(function (params) {
                        if (_this.router.getCurrentNavigation().extras.state) {
                            _this.projectInfo = _this.router.getCurrentNavigation().extras.state.special;
                            _this.clientrpflg = _this.router.getCurrentNavigation().extras.state.clientrpflg;
                            _this.wkPattern = _this.router.getCurrentNavigation().extras.state.workingPattern;
                            _this.wkingHour = _this.router.getCurrentNavigation().extras.state.workingHour;
                            _this.postData.year = _this.router.getCurrentNavigation().extras.state.year;
                            _this.postData.month = _this.router.getCurrentNavigation().extras.state.month;
                            _this.data = _this.projectInfo;
                            if (_this.wkPattern.length > 0) {
                                _this.delFlg = 0;
                                console.log(_this.wkPattern, _this.delFlg, " client view");
                            }
                            else {
                                _this.delFlg = 1;
                                console.log(_this.wkPattern, _this.delFlg, " client view");
                            }
                        }
                        _this.auth.userData$.subscribe(function (res) {
                            _this.authUser = res;
                            _this.postData.member_id = _this.authUser.member_id;
                            _this.postData.token = _this.authUser['access-token'];
                            _this.postData.idname = _this.authUser.account;
                            console.log(res, "login data client");
                        });
                    });
                }
                ClientPage.prototype.ngOnInit = function () {
                    if (!this.postData.year || this.postData.year.length == 0) {
                        this.newDate = new Date().getFullYear();
                        this.newMonth = new Date().getMonth();
                        this.postData.year = this.newDate;
                        this.postData.month = this.newMonth + 1;
                        // console.log(this.newDate + this.newMonth + "current year");
                    }
                    this.languageDefault();
                };
                ClientPage.prototype.languageDefault = function () {
                    var _this = this;
                    // console.log("language selecct", this.postData);
                    this.langSwitch.langSwitchData$.subscribe(function (res) {
                        _this.postData.language = res.language;
                        //console.log(this.postData.language, 'assign');
                        if (!_this.postData.language) {
                            _this.postData.language = 'en';
                            //console.log(this.postData.language, 'default');
                        }
                        _this.postData.pages = 'work_report';
                        _this.langServe.languageData(_this.postData).subscribe(function (res) {
                            console.log(res.data, ' work_report');
                            _this.dataLeng = res.data;
                        });
                    });
                };
                ClientPage.prototype.sendEmailtoAdmin = function () {
                    var _this = this;
                    this.authServe.sendEmailtoAdmin(this.postData).subscribe(function (res) {
                        console.log(res, "Send email status");
                        if (res.status == 1) {
                            _this.toastService.presentToast("Email sent already.");
                        }
                        else {
                            _this.toastService.presentToast("Something was wrong.");
                        }
                    });
                };
                //add client info request member_id, year and month
                ClientPage.prototype.showCustmers = function () {
                    var _this = this;
                    console.log("Add Client Info", this.postData);
                    this.authServe.showClientListByUser(this.postData).subscribe(function (res) {
                        console.log(res, _this.data, "show client list");
                        _this.showClients = res;
                        _this.showClStatus = 1;
                        if (_this.data.length == _this.showClients.length) {
                            _this.toastService.presentToast(_this.showClients.length + " customer and already showed.");
                        }
                        else {
                            _this.toastService.presentToast("Something was wrong!");
                        }
                    });
                };
                ClientPage.prototype.addCustomer = function (i) {
                    var _this = this;
                    console.log(this.postData, this.showClients[i], "get id");
                    var clients = this.showClients[i];
                    this.authServe.addClientInfo(clients, this.postData).subscribe(function (res) {
                        console.log(res, "Add Customer Result");
                        if (res.status == 1) {
                            _this.showClStatus = 0;
                            _this.router.navigate(['/home/workreport'], { queryParams: { 'year': _this.postData.year, 'month': _this.postData.month, 'client_id': clients.client_id, 'client_name': clients.client_name, 'client_report_flg': clients.client_report_flg, 'contract_type': clients.contract_type, 'end_contract_date': clients.end_contract_date,
                                    'individual_contract_id': clients.individual_contract_id, 'individual_contract_no': clients.individual_contract_no, 'max_width_time': clients.max_width_time, 'member_name': clients.member_name,
                                    'member_no_str': clients.member_no_str, 'min_width_time': clients.min_width_time, 'project_id': clients.project_id, 'project_name': clients.project_name, 'start_contract_date': clients.start_contract_date, 'status': clients.status, 'unit_name': clients.unit_name
                                } });
                        }
                        else if (res.status == 2) {
                            _this.toastService.presentToast("Client info is already exist.");
                        }
                    });
                };
                ClientPage.prototype.downloadWrkPDF = function (routeDld) {
                    /* this.authServe.downloadWrkPDF(this.postData).subscribe( (res: any) => {
                      console.log(res, "download pdf")
                    } ); */
                    var url = "https://stgessence.phoenix.xyz" + routeDld + "?member_id=" + this.postData.member_id + "&idname=" + this.postData.account + "&lang=" + this.postData.language + "&auth_token=" + this.postData.token + "&year=" + this.postData.year + "&month=" + this.postData.month + "&short_comp_name=yts";
                    return this.http.get(url, { responseType: 'Bold' });
                };
                //remove client info
                ClientPage.prototype.delClientInfo = function (clid) {
                    var _this = this;
                    this.postData.workreport_client_id = this.data[clid].workreport_client_id;
                    console.log(this.postData, "Delete Client");
                    this.authServe.removeClientInfo(this.postData).subscribe(function (res) {
                        console.log(res, "remove client info");
                        if (res.status == 1) {
                            _this.toastService.presentToast(res.message);
                            _this.delFlg = 1;
                        }
                        else {
                            _this.toastService.presentToast("Something was wrong!");
                        }
                    });
                };
                ClientPage.prototype.getContractTypeById = function (contractId) {
                    if (contractId == 1) {
                        this.contractTypeName = "Monthly Contract";
                    }
                    else if (contractId == 2) {
                        this.contractTypeName = "Fixed Contract";
                    }
                    else if (contractId == 3) {
                        this.contractTypeName = "Time Contract";
                    }
                    else {
                        this.contractTypeName = "-";
                    }
                    return this.contractTypeName;
                };
                return ClientPage;
            }());
            ClientPage.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_4__["ClientinfoService"] },
                { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
                { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"] },
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] }
            ]; };
            ClientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-client',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/client/client.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.page.scss */ "./src/app/pages/client/client.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                    src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_4__["ClientinfoService"],
                    src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
                    src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"],
                    src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                    src_app_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]])
            ], ClientPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-client-client-module-es2015.js.map
//# sourceMappingURL=pages-client-client-module-es5.js.map
//# sourceMappingURL=pages-client-client-module-es5.js.map