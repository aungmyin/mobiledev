(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloads-downloads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>downloads</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p>\r\n    Place your website url to load into Angular\r\n  </p>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/downloads/downloads-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/downloads/downloads-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DownloadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageRoutingModule", function() { return DownloadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads.page */ "./src/app/pages/downloads/downloads.page.ts");




const routes = [
    {
        path: '',
        component: _downloads_page__WEBPACK_IMPORTED_MODULE_3__["DownloadsPage"]
    }
];
let DownloadsPageRoutingModule = class DownloadsPageRoutingModule {
};
DownloadsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DownloadsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/downloads/downloads.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloads/downloads.module.ts ***!
  \*****************************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _downloads_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloads-routing.module */ "./src/app/pages/downloads/downloads-routing.module.ts");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downloads.page */ "./src/app/pages/downloads/downloads.page.ts");








let DownloadsPageModule = class DownloadsPageModule {
};
DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _downloads_routing_module__WEBPACK_IMPORTED_MODULE_6__["DownloadsPageRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_7__["DownloadsPage"]]
    })
], DownloadsPageModule);



/***/ }),

/***/ "./src/app/pages/downloads/downloads.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/downloads/downloads.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/downloads/downloads.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/downloads/downloads.page.ts ***!
  \***************************************************/
/*! exports provided: DownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPage", function() { return DownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DownloadsPage = class DownloadsPage {
    constructor(http, sanitizer, router) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ngOnInit() {
        // let url = "https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=" + this.postData.member_id + "&idname=" + this.postData.account + "&lang=" + this.postData.language + "&auth_token=" + this.postData.token + "&year=" + this.postData.year + "&month=" + this.postData.month + "&short_comp_name=yts";
        //this.DownloadExcel = "https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=152&idname=k.maeno&lang=en&auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJZZWxsb3cgVGFpbHMiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNzkxODUxMiwiZXhwIjoxNjA4MDkxMzEyfQ.Z44H5i9VM7c_5S2M7sDNj7nnm7uRZSy5Y5IpqqjqQYo&year=2020&month=11";
        this.http.get('https://stgessence.phoenix.xyz/general/excel/mobile_download/workreport_download.php?member_id=152&idname=k.maeno&lang=en&auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJZZWxsb3cgVGFpbHMiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNzkxODUxMiwiZXhwIjoxNjA4MDkxMzEyfQ.Z44H5i9VM7c_5S2M7sDNj7nnm7uRZSy5Y5IpqqjqQYo&year=2020&month=11', { responseType: 'text' }).subscribe(res => {
            this.KisshtHtml = this.sanitizer.bypassSecurityTrustUrl(res);
        });
        //window.open(url,"_self");
        //window.location.href='home/workreport';
    }
};
DownloadsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-downloads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./downloads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/downloads/downloads.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./downloads.page.scss */ "./src/app/pages/downloads/downloads.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DownloadsPage);



/***/ })

}]);
//# sourceMappingURL=pages-downloads-downloads-module-es2015.js.map