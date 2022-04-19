(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transportationexpenses-transportationexpenses-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transportationexpenses/transportationexpenses.page.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transportationexpenses/transportationexpenses.page.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-menu-button style=\"color:#707070\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-workreport-search [loginUser]=\"authUser\"></app-workreport-search>\r\n  <ion-item style=\"background: blueviolet;\">\r\n    <h3>Transportation Expenses</h3>\r\n  </ion-item>\r\n  <ion-item>\r\n    {{postData.year}} {{postData.month}}\r\n  </ion-item>\r\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content \r\n    pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <app-transportation-expense ></app-transportation-expense> -->\r\n  <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"primary\" (click)=\"addAction()\">+ Add</ion-button>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\" #addtable> \r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"minwidth\">Date</th>\r\n          <th scope=\"col\" class=\"minwidth\">Destination</th>\r\n          <th scope=\"col\" class=\"minwidth\">Transportation</th>\r\n          <th scope=\"col\" class=\"minwidth\">Departure</th>\r\n          <th scope=\"col\" class=\"minwidth\">Arrival</th>\r\n          <th scope=\"col\" class=\"minwidth\">One Way/Round Trip</th>\r\n          <th scope=\"col\" class=\"minwidth\">Voucher</th>\r\n          <th scope=\"col\" class=\"minwidth\">Amount</th>\r\n          <th scope=\"col\" class=\"minwidth\">Billing</th>\r\n          <th scope=\"col\" class=\"minwidth\">Action</th>\r\n        </tr>\r\n      </thead>\r\n    <tr *ngFor=\"let t of tranSportExpense; let i = index\" >\r\n      <td>{{ t.use_date | date }}</td>\r\n      <td>{{t.destination}}</td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.transport_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let tp of transport_expen\" value=\"{{ tp.id }}\">{{ tp.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>{{t.from_area}}</td>\r\n      <td>{{t.to_area}}</td>\r\n      <td >\r\n        <ion-select slot=\"end\" value=\"{{t.rourte_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let r of tran_expen\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.print_flg}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let p of print_flgs\" value=\"{{ p.id }}\">{{ p.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>{{t.amount}}</td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.demand_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let b of demend_types\" value=\"{{ b.id }}\">{{ b.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td><ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"warning\" (click)=\"removeAction()\">Remove</ion-button></td>\r\n    </tr>\r\n  </table>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Total Amount</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"totalAmount\" type=\"text\" [(ngModel)]=\"postData.totalAmount\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Customer Billing</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"customerBilling\" type=\"text\" [(ngModel)]=\"postData.customerBilling\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"success\" (click)=\"storeAction()\">Store</ion-button>\r\n    <p>&nbsp;</p>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/transportationexpenses/transportationexpenses-routing.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/pages/transportationexpenses/transportationexpenses-routing.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: TransportationexpensesPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationexpensesPageRoutingModule", function () { return TransportationexpensesPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _transportationexpenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transportationexpenses.page */ "./src/app/pages/transportationexpenses/transportationexpenses.page.ts");
            var routes = [
                {
                    path: '',
                    component: _transportationexpenses_page__WEBPACK_IMPORTED_MODULE_3__["TransportationexpensesPage"]
                }
            ];
            var TransportationexpensesPageRoutingModule = /** @class */ (function () {
                function TransportationexpensesPageRoutingModule() {
                }
                return TransportationexpensesPageRoutingModule;
            }());
            TransportationexpensesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], TransportationexpensesPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/transportationexpenses/transportationexpenses.module.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/pages/transportationexpenses/transportationexpenses.module.ts ***!
          \*******************************************************************************/
        /*! exports provided: TransportationexpensesPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationexpensesPageModule", function () { return TransportationexpensesPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
            /* harmony import */ var _transportationexpenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transportationexpenses-routing.module */ "./src/app/pages/transportationexpenses/transportationexpenses-routing.module.ts");
            /* harmony import */ var _transportationexpenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transportationexpenses.page */ "./src/app/pages/transportationexpenses/transportationexpenses.page.ts");
            /* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
            var TransportationexpensesPageModule = /** @class */ (function () {
                function TransportationexpensesPageModule() {
                }
                return TransportationexpensesPageModule;
            }());
            TransportationexpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _transportationexpenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransportationexpensesPageRoutingModule"],
                        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                    ],
                    declarations: [_transportationexpenses_page__WEBPACK_IMPORTED_MODULE_6__["TransportationexpensesPage"]]
                })
            ], TransportationexpensesPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/transportationexpenses/transportationexpenses.page.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/pages/transportationexpenses/transportationexpenses.page.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.borderOne {\n  border: 1px solid #000000;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNwb3J0YXRpb25leHBlbnNlcy9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxwYWdlc1xcdHJhbnNwb3J0YXRpb25leHBlbnNlc1xcdHJhbnNwb3J0YXRpb25leHBlbnNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyYW5zcG9ydGF0aW9uZXhwZW5zZXMvdHJhbnNwb3J0YXRpb25leHBlbnNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBRENBO0VBQW1CLHlCQUFBO0FDR25COztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFuc3BvcnRhdGlvbmV4cGVuc2VzL3RyYW5zcG9ydGF0aW9uZXhwZW5zZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1pbndpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAxMzVweDtcclxuICB9XHJcbiAgLmZpcnN0V2lkdGh7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cclxuXHJcbi5ib3JkZXJPbmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59IiwiLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm1pbndpZHRoIHtcbiAgbWluLXdpZHRoOiAxMzVweDtcbn1cblxuLmZpcnN0V2lkdGgge1xuICB3aWR0aDogYXV0bztcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmJvcmRlck9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/transportationexpenses/transportationexpenses.page.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/pages/transportationexpenses/transportationexpenses.page.ts ***!
          \*****************************************************************************/
        /*! exports provided: TransportationexpensesPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationexpensesPage", function () { return TransportationexpensesPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transportation-expense.service */ "./src/app/services/transportation-expense.service.ts");
            /* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
            var TransportationexpensesPage = /** @class */ (function () {
                function TransportationexpensesPage(authService, router, route, transportServ, toastService, renderer) {
                    var _this = this;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.transportServ = transportServ;
                    this.toastService = toastService;
                    this.renderer = renderer;
                    this.postData = {
                        year: '',
                        month: '',
                        tran_date: '',
                        member_id: '',
                        totalAmount: '',
                        customerBilling: ''
                    };
                    this.tran_expen = [];
                    this.transport_expen = [];
                    this.demend_types = [];
                    this.print_flgs = [];
                    this.route.queryParams.subscribe(function (params) {
                        if (_this.router.getCurrentNavigation().extras.state) {
                            _this.tranSportExpense = _this.router.getCurrentNavigation().extras.state.special;
                            _this.postData.year = _this.router.getCurrentNavigation().extras.state.year;
                            _this.postData.month = _this.router.getCurrentNavigation().extras.state.month;
                            console.log(_this.tranSportExpense);
                        }
                    });
                }
                TransportationexpensesPage.prototype.ngOnInit = function () {
                    //for getting parameters
                    if (!this.postData.year || this.postData.year.length == 0) {
                        this.newDate = new Date().getFullYear();
                        this.newMonth = new Date().getMonth();
                        this.postData.year = this.newDate;
                        this.postData.month = this.newMonth + 1;
                        // console.log(this.newDate + this.newMonth + "current year");
                    }
                    /* this.authService.userData$.subscribe((res: any) => {
                      this.authUser = res;
                      this.getTransportData();
                    }); */
                };
                TransportationexpensesPage.prototype.doRefresh = function (event) {
                    var _this = this;
                    console.log('Begin async operation');
                    this.authService.userData$.subscribe(function (res) {
                        //console.log("hello Transport " + res.email);
                        _this.getTransportData();
                        event.target.complete();
                    });
                    setTimeout(function () {
                        console.log('Async operation has ended');
                    }, 3000);
                };
                TransportationexpensesPage.prototype.getTransportData = function () {
                    var _this = this;
                    this.postData.member_id = this.authUser.email;
                    console.log(this.postData);
                    if (this.postData.member_id) {
                        //console.log(this.postData.member_id + "mb id have exist");
                        this.transportServ.transportExpenseData(this.postData).subscribe(function (res) {
                            //console.log(res.transport_expense); //refresh data
                            _this.transportServ.updateTransportExpense(res.transport_expense);
                        }, function (error) {
                            _this.toastService.presentToast('Network Issue.');
                        });
                    }
                    else {
                        this.toastService.presentToast("loading ...");
                    }
                };
                TransportationexpensesPage.prototype.removeAction = function () {
                    console.log("remove");
                };
                TransportationexpensesPage.prototype.storeAction = function () {
                    console.log("store action");
                };
                TransportationexpensesPage.prototype.addAction = function () {
                    var count = 0;
                    var currentDate = new Date();
                    console.log("add html");
                    this.compareTranEx = this.tran_expen;
                    var p = this.renderer.createElement('tr');
                    p.className = "aClassName" + count;
                    p.innerHTML = "<td ><ion-datetime value='" + currentDate + "' displayFormat='dd-MM-YYYY' ></ion-datetime></td>";
                    p.innerHTML += "<td ><ion-input type='text' name='destination' ></ion-input></td>";
                    p.innerHTML += "<td ><ion-select name='selectone' value='1' placeholder='Select One'><ion-select-option value='1' selected>Bus</ion-select-option><ion-select-option value='2'>Train</ion-select-option><ion-select-option value='3'>Taxi</ion-select-option><ion-select-option value='4'>Air Plane</ion-select-option><ion-select-option value='5'>Other</ion-select-option></ion-select></td>";
                    p.innerHTML += "<td ><ion-input type='text' name='destination' ></ion-input></td>";
                    p.innerHTML += "<td ><ion-input type='text' name='destination' ></ion-input></td>";
                    p.innerHTML += "<td ><ion-select name='rourte_type' value='1' placeholder='Select One'><ion-select-option value='1' selected>One-way</ion-select-option><ion-select-option value='2'>Round-Trip</ion-select-option></ion-select></td>";
                    p.innerHTML += "<td ><ion-select name='print_flg' value='1' placeholder='Select One'><ion-select-option value='1' selected>No</ion-select-option><ion-select-option value='2'>Yes</ion-select-option></ion-select></td>";
                    p.innerHTML += "<td ><ion-input type='text' name='destination' ></ion-input></td>";
                    p.innerHTML += "<td ><ion-select name='demand_type' value='1' placeholder='Select One'><ion-select-option value='1' selected>in house</ion-select-option><ion-select-option value='2'>Customer</ion-select-option></ion-select></td>";
                    p.innerHTML += "<td ><ion-button expand='block' share='round' style='margin: 10px' color='warning' (click)='removeAction()' >Remove</ion-input></td>";
                    this.renderer.appendChild(this.table.nativeElement, p);
                };
                return TransportationexpensesPage;
            }());
            TransportationexpensesPage.ctorParameters = function () { return [
                { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_4__["TransportationExpenseService"] },
                { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addtable', { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], TransportationexpensesPage.prototype, "table", void 0);
            TransportationexpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-transportationexpenses',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transportationexpenses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/transportationexpenses/transportationexpenses.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transportationexpenses.page.scss */ "./src/app/pages/transportationexpenses/transportationexpenses.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
                    src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_4__["TransportationExpenseService"],
                    src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
            ], TransportationexpensesPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-transportationexpenses-transportationexpenses-module-es2015.js.map
//# sourceMappingURL=pages-transportationexpenses-transportationexpenses-module-es5.js.map
//# sourceMappingURL=pages-transportationexpenses-transportationexpenses-module-es5.js.map