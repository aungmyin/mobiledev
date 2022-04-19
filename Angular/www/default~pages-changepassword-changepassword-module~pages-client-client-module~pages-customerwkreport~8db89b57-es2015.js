(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clientinfo/clientinfo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clientinfo/clientinfo.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <ion-item >\r\n      <h3>Client Information</h3>\r\n    </ion-item>\r\n    <ion-list>\r\n      <ion-item>{{ postData.year }} {{ postData.month }}</ion-item>\r\n    </ion-list>\r\n    <ion-list *ngFor=\"let clinfo of client_info; let i = index\">\r\n      <ion-item-sliding>\r\n        <ion-item >\r\n          <p>Individual Contract No.: {{ clinfo?.individual_contract_no }}</p>\r\n        </ion-item>\r\n        <ion-item >\r\n          <p>Company Name: {{ clinfo?.client_name }}</p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p>Project Name: {{ clinfo?.project_name }}</p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p>Contract Period: {{ clinfo?.start_contract_date | date }} to {{ clinfo?.end_contract_date | date }} </p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p>Contract Type: {{ contractTypeName }} </p>\r\n        </ion-item>\r\n        <ion-item>\r\n          <p>During working hours: {{ workingHour?.min_width_time }}h ~ {{ workingHour?.max_width_time }}h </p>\r\n        </ion-item>\r\n        \r\n      <!--<ion-item>\r\n          <p>Contract End: \r\n            <ion-datetime displayFormat=\"YYYY-MM-DD\" value=\"{{ clinfo?.end_contract_date}}\"></ion-datetime>\r\n          </p>\r\n        </ion-item>-->\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option >Unread</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n      \r\n    </ion-list>\r\n    <ion-list>\r\n      <ion-item>\r\n        <h4>Working Hours:</h4>\r\n      </ion-item>\r\n      <ion-item>\r\n        <div *ngFor=\"let p of workingPattern; let i=index;\" >\r\n          <p *ngIf=\"p.pattern_flg == 1\">\r\n            {{ p.pattern }} {{ p.start_time }} ~ {{ p.end_time }} Break Time: {{ p.break_time }}min {{ p.working_time }}h\r\n          </p>\r\n          \r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list *ngFor=\"let w of working_hours; let i = index\">\r\n      <ion-item>\r\n        <ion-checkbox slot=\"start\" color=\"primary\" ></ion-checkbox>\r\n        Break Time {{ w.pattern }} <br/>\r\n        {{ w.start_time }}~{{ w.end_time }} Break Time {{ w.break_time }} {{ w.working_time }}h  </ion-item>\r\n    </ion-list>\r\n\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-workreport-info/customer-workreport-info.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-workreport-info/customer-workreport-info.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n  <ion-refresher-content \r\n  pullingIcon=\"chevron-down-circle-outline\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\"></ion-refresher-content>\r\n</ion-refresher>\r\n<form>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Customer Name</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"customerName\" type=\"text\" value=\"{{ customerWorkReport?.client_name }}\" [(ngModel)]=\"postData.customerName\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Project Name</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"projectName\" value=\"{{projectInfo?.project_name}}\" type=\"email\" [(ngModel)]=\"postData.projectName\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Contract Period</ion-label>\r\n      <ion-input value=\"{{projectInfo?.start_contract_date | date}} ~ {{projectInfo?.end_contract_date | date}}\" autocomplete=\"off\" name=\"contractPeriod\" type=\"text\" [(ngModel)]=\"postData.contractPeriod\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Customer Work Report: </ion-label>\r\n      <ion-select slot=\"end\" value=\"{{projectInfo?.client_report_flg}}\" name=\"custWkReport\" placeholder=\"Select One\" >\r\n        <ion-select-option *ngFor=\"let r of report_flgs\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n      </ion-select> \r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Client Work Report (PDF)</ion-label>\r\n      <ion-input slot=\"end\" name=\"contractPeriod\" type=\"file\" accept=\"image/*\" [(ngModel)]=\"postData.contractPeriod\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Actual Working Hours (Total)</ion-label>\r\n      <ion-input value=\"{{projectInfo?.customer_working_time}}\" autocomplete=\"off\" name=\"actWorkHour\" type=\"text\" [(ngModel)]=\"postData.actWorkHour\"></ion-input>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n  <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"success\" >Store</ion-button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"expandable-wrapper\" [class.expanded]=\"expanded\" >\r\n  <ion-content>\r\n\r\n  </ion-content>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/faq/faq.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/faq/faq.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 15px;\">\r\n  <h1 style=\"color: #37c3a7; font-weight: 700;\" [innerHtml]=\"userGuide?.faq\"></h1>\r\n  \r\n  <div class=\"graylight\">\r\n    <h2 [innerHtml]=\"userGuide?.customer_information_not_exist\"></h2>\r\n    <h3 [innerHtml]=\"userGuide?.customer_information_not_exist_answer_header_mobile\"></h3>\r\n    <div class=\"datastyle\" [innerHtml]=\"userGuide?.customer_information_not_exist_answer_text_mobile\"></div>\r\n  </div>\r\n\r\n  <div class=\"whitebg\">\r\n    <h2 [innerHtml]=\"userGuide?.inputtime_of_workingoutside\"></h2>\r\n    <h3 [innerHtml]=\"userGuide?.inputtime_of_workingoutside_answer_header_mobile\"></h3>\r\n    <div class=\"datastyle\" [innerHtml]=\"userGuide?.inputtime_of_workingoutside_answer_text_mobile\"></div>\r\n  </div>\r\n\r\n  <div class=\"graylight\">\r\n    <h2 [innerHtml]=\"userGuide?.inputtime_of_workspansmonth\"></h2>\r\n    <h3 [innerHtml]=\"userGuide?.inputtime_of_workspansmonth_answer_header_mobile\"></h3>\r\n    <div class=\"datastyle\" [innerHtml]=\"userGuide?.inputtime_of_workspansmonth_answer_text_mobile\"></div>\r\n  </div>\r\n\r\n  <div class=\"whitebg\">\r\n    <h2 [innerHtml]=\"userGuide?.unable_uploading_workreport_pdf_answer_header_mobile\"></h2>\r\n    <div class=\"datastyle\" [innerHtml]=\"userGuide?.unable_uploading_workreport_pdf_answer_text_mobile\"></div>\r\n  </div>\r\n\r\n  <div class=\"graylight\">\r\n    <h2 [innerHtml]=\"userGuide?.midnightbreak_at_nightshift\"></h2>\r\n    <h3 [innerHtml]=\"userGuide?.midnightbreak_at_nightshift_answer_header_mobile\"></h3>\r\n    <div class=\"datastyle\" [innerHtml]=\"userGuide?.midnightbreak_at_nightshift_answer_text_mobile\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-card/feed-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-card/feed-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngFor=\"let feed of feedData; let i = index\">\r\n  <ion-card-content>\r\n    <button (click)=\"feedDeleteAction(feed.feed_id, i)\" class=\"right\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </button>\r\n    <p [innerHTML]=\"feed.feed+' '+feed.feed_id\" ></p>\r\n   <!--<app-timeago [created]=\"feed.created\" ></app-timeago>--> \r\n   <p>{{ feed.created | date }}</p>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-update/feed-update.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-update/feed-update.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\r\n  <ion-textarea [(ngModel)]=\"postData.feed\" placeholder=\"Write your thought {{loginUser.name}} ...\"></ion-textarea>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button color=\"primary\" (click)=\"feedUpdateAction()\" >\r\n    Update\r\n  </ion-button>\r\n</ion-item>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo-large/logo-large.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo-large/logo-large.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/phoenix-logo.png\" alt=\"User Manage logo\" class=\"logo-display\"/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"assets/phoenix-logo.png\" alt=\"User Manage logo\" />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-info/member-info.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-info/member-info.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\r\n  <ion-item lines=\"none\" >\r\n    <p>{{ dataLeng?.application }} <br>\r\n      <span style=\"font-size: 1.5em; font-weight: bold; color: #707070;\">{{ dataLeng?.workreport }}  {{ dataLeng?.application }} {{ postData.year}}/{{ postData.month }}</span> \r\n    </p>\r\n\r\n  </ion-item>\r\n</ion-list>\r\n <ion-grid>\r\n <ion-row>\r\n   <ion-col color=\"primary\" >\r\n     <ion-select class=\"borderOnewidth\" [(ngModel)]=\"postData.year\" value=\"{{ postData.year }}\" style=\"width: 100%\"  name=\"year\" placeholder=\"-\" >\r\n       <ion-select-option *ngFor=\"let y of yearlist\" value=\"{{ y.value }}\">{{ y.value }}</ion-select-option>\r\n     </ion-select>\r\n   </ion-col>\r\n   <ion-col size='1'><p class=\"postline\">/</p></ion-col>\r\n   <ion-col >\r\n     <ion-select class=\"borderOnewidth\" [(ngModel)]=\"postData.month\" value=\"{{ postData.month }}\" style=\"width: 100%\" name=\"month\" placeholder=\"-\" >\r\n       <ion-select-option *ngFor=\"let m of monthlist\" value=\"{{ m.value }}\">{{ m.value }}</ion-select-option>\r\n     </ion-select>\r\n   </ion-col>\r\n   <ion-col size='4' >\r\n    <!-- <ion-button expand=\"block\"  share=\"round\" [ngStyle]=\"{'background-color':'#f2fffd'}\" color=\"white\" class=\"bd1-color\"  >Search</ion-button> -->\r\n     <ion-button expand=\"block\" fill=\"outline\" (click)=\"searchWkReportAction()\" [ngStyle]=\"{'background-color':'#f2fffd'}\" [ngStyle]=\"{'color':'#707070!important'}\" [ngStyle]=\"{'border-radius':'20px'}\">{{ dataLeng?.search }}</ion-button>\r\n   </ion-col>\r\n </ion-row>\r\n</ion-grid>\r\n\r\n<form [formGroup]=\"workReportForm\" (ngSubmit)=\"onSubmit()\">\r\n<ion-list lines=\"none\">\r\n  <ion-item >\r\n    <p class=\"fontstyle\">{{ dataLeng?.status }}: <span class=\"statusVal\">{{ mbInfo?.status_name }}</span></p>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"alertview-blk\">\r\n  <ion-item class=\"alert-blk\" color=\"alertColor\" >\r\n    <p>\r\n      {{ dataLeng?.the_application_deadline }}\r\n    </p>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list lines=\"none\" class=\"nextview-blk\" (click)=\"goMoreInfoClient('/home/client')\">\r\n  <ion-item class=\"link-pages\" color=\"newColor\" >\r\n    {{ dataLeng?.customer_information }}\r\n    <ion-icon slot=\"end\" style=\"font-size: 24px;\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-list class=\"bottomline\" lines=\"none\">\r\n  <ion-item >\r\n    <p class=\"fontstyle\"></p>{{ dataLeng?.transportation }}: \r\n    <ion-select slot=\"end\" *ngIf=\"postData.language == 'en'\" value=\"{{mbInfo?.dairy_transrate_flg}}\" placeholder=\"Select One\" >\r\n      <ion-select-option *ngFor=\"let t of tran_expen\" value=\"{{ t.id }}\">{{ t.value }}</ion-select-option>\r\n    </ion-select> \r\n    <ion-select slot=\"end\" *ngIf=\"postData.language == 'jp'\" value=\"{{mbInfo?.dairy_transrate_flg}}\" placeholder=\"Select One\" >\r\n      <ion-select-option *ngFor=\"let t of tran_expen_jp\" value=\"{{ t.id }}\">{{ t.value }}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-list>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\"> \r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" class=\"firstWidth\">\r\n          <div class=\"btn-style\" [ngClass]=\"{\r\n            'active': workreport_switch\r\n          }\" (click)=\"changeDisplayClick('workreport')\">\r\n          {{ dataLeng?.work_report }}\r\n          </div>\r\n        </th>\r\n        <th scope=\"col\" class=\"minwidth\" (click)=\"changeDisplayClick('transporatiion')\">\r\n          <div class=\"btn-style\" [ngClass]=\"{\r\n            'active': trasport_switch\r\n          }\" style=\"min-width: 250px;\">\r\n          {{ dataLeng?.transportation }}\r\n          </div>\r\n        </th>\r\n        <th scope=\"col\" *ngIf=\"clientInfo1 == 1\" class=\"minwidth\" (click)=\"changeDisplayClick('customer')\">\r\n          <div class=\"btn-style\" [ngClass]=\"{\r\n            'active': customer_switch\r\n          }\" style=\"min-width: 230px;\">\r\n          {{ dataLeng?.customer_workreport }}\r\n          </div>\r\n        </th>\r\n        <th *ngIf=\"clientInfo2 == 1\" scope=\"col\" class=\"minwidth\" (click)=\"changeDisplayClick('customer2')\">\r\n          <div class=\"btn-style\" [ngClass]=\"{\r\n            'active': customer_switch2\r\n          }\" style=\"min-width: 230px;\">\r\n          {{ dataLeng?.customer_workreport }} 2\r\n          </div>\r\n        </th>\r\n        <!-- <th scope=\"col\" *ngIf=\"mbInfo?.sales_bill_flg == 1\" class=\"minwidth\" (click)=\"changeDisplayClick('settlement')\">\r\n          <div class=\"btn-style\" [ngClass]=\"{\r\n            'active': settle_switch\r\n          }\" style=\"min-width: 230px;\">\r\n          Settlement Expense\r\n          </div> \r\n        </th> -->\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n</div>\r\n\r\n<!-- Start Workreport list -->\r\n<div id=\"workreport_blk\" *ngIf=\"workreport_switch == true\">\r\n  <ion-list lines=\"none\" class=\"filter-blk\">\r\n    <ion-item class=\"filter-pages\" color=\"newColor\" >\r\n      {{ dataLeng?.filter }}:\r\n      <ion-icon slot=\"end\" name=\"chevron-up-outline\" style=\"font-size: 15px;\"></ion-icon>\r\n      <!-- <ion-icon slot=\"end\" name=\"chevron-down-outline\" style=\"font-size: 13px;\"></ion-icon> -->\r\n    </ion-item>\r\n    <ul class=\"checklist\" *ngIf=\"postData.language == 'en'\">\r\n      <li *ngFor=\"let entry of checkBoxList; let n = index \">\r\n        <div (click)=\"onClickDays(n)\">\r\n          <ion-checkbox class=\"checkbox-style\"  slot=\"start\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n          {{entry.val}}\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"checklist\" *ngIf=\"postData.language == 'jp'\">\r\n      <li *ngFor=\"let entry of checkBoxListjp; let n = index  \">\r\n        <div (click)=\"onClickDays(n)\">\r\n          <ion-checkbox class=\"checkbox-style\"  slot=\"start\" [(ngModel)]=\"entry.isChecked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\r\n          {{entry.val}}\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <!-- <ul class=\"checklist\">\r\n      <li (click)=\"onClickDays(2)\">\r\n        <ion-icon slot=\"start\" name=\"list-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'en'\">List</ion-label>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'jp'\">リスト</ion-label>\r\n      </li>\r\n      <li>\r\n        <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'en'\">Calendar</ion-label>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'jp'\">カレンダー</ion-label>\r\n      </li>\r\n    </ul> -->\r\n    <div style=\"border-top: 1px dashed #f0f0f0;clear: both; height: 5px;\">&nbsp;</div>\r\n    <ul class=\"checklist\">\r\n      <li (click)=\"AllToggleFunction(1)\">\r\n        <ion-icon slot=\"start\" name=\"expand-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'en'\">Expand dates</ion-label>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'jp'\">日付を展開する</ion-label>\r\n      </li>\r\n      <li (click)=\"AllToggleFunction(2)\">\r\n        <ion-icon slot=\"start\" name=\"contract-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'en'\">Collapse dates</ion-label>\r\n        <ion-label style=\"margin-left: 5px;\" *ngIf=\"postData.language == 'jp'\">崩壊日</ion-label>\r\n      </li>\r\n    </ul>\r\n    <!-- <ion-item *ngFor=\"let entry of checkBoxList\">\r\n      <ion-label>{{entry.val}}</ion-label>\r\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n    </ion-item> --> \r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ul class=\"checklist\">\r\n        <li>\r\n          <ion-label style=\"color: #cccccc;\" *ngIf=\"postData.language == 'en'\">Jump to: </ion-label>\r\n          <ion-label style=\"color: #cccccc;\" *ngIf=\"postData.language == 'jp'\">にジャンプ: </ion-label>\r\n        </li>\r\n        <li>\r\n          <ion-label (click)=\"scrolltoElement('totalblk')\"><u>{{ dataLeng?.total }}</u></ion-label>\r\n        </li>\r\n        <li>\r\n          <ion-label (click)=\"scrolltoElement('resultblk')\"><u>{{ dataLeng?.result }}</u></ion-label>\r\n        </li>\r\n      </ul>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div style=\"margin: 15px;\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item class=\"showDate\" *ngIf=\"notEnterMsg == false\">\r\n        <p>\r\n          Showing dates with Working Hours Not Entered<br>\r\n          <u (click)=\"onClickDays(2)\" style=\"font-weight: 300;\">View all dates</u> \r\n        </p>\r\n        \r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  \r\n  <div formArrayName=\"work_report_detail\">\r\n    <div *ngFor=\"let item of work_report_detail.controls ; let i = index \">\r\n      <div [formGroupName]=\"i\">\r\n        <!-- <h2>{{ item.value.report_date | date: 'yyyy/MM/dd EEEE' }}</h2> -->\r\n        <ion-list lines=\"none\" class=\"date-container bg-bluelight\" *ngIf=\"(item.value.atendance_type != 1) && ( (startNEndTimeCheck(item.value.start_time) == true) || (startNEndTimeCheck(item.value.end_time) == true) ) && (isWeekEnd(item.value.report_date) == false) && (notEnter == false)\" >\r\n        \r\n          <ion-item tappable (click)=\"myWkToggleFunction('mywk' + i, i)\" class=\"date-blk\" color=\"newColor\" >\r\n            <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n            <p>\r\n              <span class=\"datetitle\">{{ item.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n              <span>{{ dataLeng?.wkhour_not_entered }}</span>\r\n              <!-- <span *ngIf=\"item.value.atendance_type == 1\"> Public Holiday </span> -->\r\n            </p>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkdown' + i }}\" style=\"font-size: 24px;color: #707070;\"  name=\"chevron-down-outline\"></ion-icon>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkup' + i }}\" style=\"font-size: 24px;color: #707070;display: none;\"  name=\"chevron-up-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-grid id=\"{{ 'mywk' + i }}\" class=\"total-blk\" [ngStyle]=\"!item.open ? {'display': 'none'} : {'display': 'block'}\"  >\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime\" type=\"text\" (ionChange)=\"mouseOutWkAttendance(item.value.start_time, item.value.end_time, item.value.total_break_time, i)\" formControlName=\"start_time\"></ion-input>\r\n                <label class=\"has-error\" *ngIf=\"item.controls.start_time.invalid\" >Not Entered</label>\r\n              </ion-col>\r\n              <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"mouseOutWkAttendance(item.value.start_time, item.value.end_time, item.value.total_break_time, i)\" formControlName=\"end_time\"></ion-input>\r\n                <label class=\"has-error\" *ngIf=\"item.controls.end_time.invalid\" >Not Entered</label>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n    \r\n                <ion-select class=\"dropdownstyle\" formControlName=\"pattern\" (ionChange)=\"changePattern($event, i)\" selectedText=\"{{ displayPattern(item.value.pattern) }}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                  <ion-select-option  value=\"\">-</ion-select-option>\r\n                  <ion-select-option *ngFor=\"let p of workPatternExist; let pt = index\" value=\"{{ p.pattern }}\">{{ displayPattern(p.pattern) }}</ion-select-option>\r\n                </ion-select>\r\n                <!-- <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-input class=\"worktime borderRadius\" (ionChange)=\"mouseOverReduceBreakTime(item.value.total_break_time, item.value.total_work_time, item.value.o, i)\" type=\"text\" formControlName=\"total_break_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.total_break_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                minutes\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"mouseOutNightOverTime(item.value.night_break_time, item.value.night_work_time, i)\" formControlName=\"night_break_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.night_break_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                minutes\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"total_work_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.total_work_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.over_work_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            \r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.late_night_working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"mouseOverResetNightBT(i)\" formControlName=\"night_work_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.night_work_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col> \r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"deduction_time\"></ion-input>\r\n                <label *ngIf=\"item.controls.deduction_time.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span>  \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"atendance_type\" selectedText=\"{{ selectedValueAttendance(item.value.atendance_type, 'en') }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"atendance_type\" selectedText=\"{{ selectedValueAttendance(item.value.atendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n                <label *ngIf=\"item.controls.atendance_type.invalid\" >Must be fill</label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"reason\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-list>\r\n\r\n        <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"(item.value.start_time != '00:00') && (isWeekEnd(item.value.report_date) == false) && (entered == false)\">\r\n          <ion-item tappable (click)=\"myWkToggleFunction('mywk' + i, i)\" class=\"date-gray-blk\" color=\"newColor\" >\r\n            <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n            <p>\r\n              <span class=\"datetitle\">{{ item.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n              <span> {{ dataLeng?.entered_working_hour }} </span>\r\n            </p>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkdown' + i }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkup' + i }}\" style=\"font-size: 24px;color: #707070; display: none;\"  name=\"chevron-up-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-grid id=\"{{ 'mywk' + i }}\" class=\"total-blk\" [ngStyle]=\"!item.open ? {'display': 'none'} : {'display': 'block'}\"  >\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime\" type=\"text\" (ionChange)=\"mouseOutWkAttendance(item.value.start_time, item.value.end_time, item.value.total_break_time, i)\" formControlName=\"start_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime\" type=\"text\" (ionChange)=\"mouseOutWkAttendance(item.value.start_time, item.value.end_time, item.value.total_break_time, i)\" formControlName=\"end_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-select class=\"dropdownstyle\" formControlName=\"pattern\" (ionChange)=\"changePattern($event, i)\" selectedText=\"{{ displayPattern(item.value.pattern) }}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                  <ion-select-option  value=\"\">-</ion-select-option>\r\n                  <ion-select-option *ngFor=\"let p of workPatternExist; let pt = index\" value=\"{{ p.pattern }}\">{{ displayPattern(p.pattern) }}</ion-select-option>\r\n                </ion-select>\r\n                <label *ngIf=\"item.controls.pattern.invalid\" style=\"color: red;\">Please select pattern</label>\r\n                <!-- <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"mouseOverReduceBreakTime(item.value.total_break_time, item.value.total_work_time, item.value.over_work_time, i)\" formControlName=\"total_break_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                minutes\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"nightOverTime(item.value.start_time, item.value.end_time, item.value.night_break_time, item.value.night_work_time, i)\" formControlName=\"night_break_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"5\">\r\n                minutes\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"total_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            \r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.late_night_working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" (ionChange)=\"mouseOverResetNightBT(i)\" formControlName=\"night_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"deduction_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"atendance_type\" selectedText=\"{{ selectedValueAttendance(item.value.atendance_type, 'en') }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"atendance_type\" selectedText=\"{{ selectedValueAttendance(item.value.atendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-input style=\"border: 1px solid #e4e4e4; color: #707070\" type=\"text\" formControlName=\"reason\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-list>\r\n\r\n        <ion-list lines=\"none\" class=\"date-weekend-container\" *ngIf=\"(item.value.atendance_type == 1) && (isWeekEnd(item.value.report_date) == true)  && ( weekEnd == false)\">\r\n          <ion-item tappable (click)=\"myWkToggleFunction('mywk' + i, i)\" class=\"date-weekend-blk\" color=\"newColor\" >\r\n            <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n            <p>\r\n              <span class=\"datetitle\">{{ item.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n              <span>{{ dataLeng?.no_entries }}</span>\r\n            </p>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkdown' + i }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkup' + i }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-grid id=\"{{ 'mywk' + i }}\" class=\"total-blk\" [ngStyle]=\"!item.open ? {'display': 'none', 'transition': '2s'} : {'display': 'block', 'transition': '2s'}\"  >\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\"></ion-col>\r\n              <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n              <ion-col size=\"3\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col> \r\n              <ion-col size=\"7\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"total_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            \r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.late_night_working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" value=\"{{ item.value.atendance_type }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" value=\"{{ item.value.atendance_type }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"reason\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-list>\r\n\r\n        <!-- Start Public Holiday -->\r\n        <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"(holidayCheck(item.value.atendance_type) == true) && (isWeekEnd(item.value.report_date) == false) && ( weekEnd == false)\">\r\n          <ion-item tappable (click)=\"myWkToggleFunction('mywk' + i, i)\" class=\"date-gray-blk\" color=\"newColor\" >\r\n            <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n            <p>\r\n              <span class=\"datetitle\">{{ item.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n              <span> {{ holidayNameSwitch(item.value.atendance_type, postData.language) }}</span>\r\n              \r\n            </p>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkdown' + i }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n            <ion-icon slot=\"end\" id=\"{{ 'wkup' + i }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-grid id=\"{{ 'mywk' + i }}\" class=\"total-blk\" [ngStyle]=\"!item.open ? {'display': 'none', 'transition': '2s'} : {'display': 'block', 'transition': '2s'}\"  >\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\"></ion-col>\r\n              <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n              <ion-col size=\"3\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col> \r\n              <ion-col size=\"7\"></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"2\"></ion-col>\r\n              <ion-col size=\"5\">\r\n                \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"total_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            \r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.late_night_working_hours }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"3\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"4\"></ion-col>\r\n            </ion-row> -->\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" value=\"{{ item.value.atendance_type }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n                <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" value=\"{{ item.value.atendance_type }}\" placeholder=\"-\" >\r\n                  <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n              </ion-col> \r\n              <ion-col size=\"7\">\r\n                <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"reason\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-list>\r\n        <!-- End Public Holiday -->\r\n      </div>\r\n      \r\n    </div> \r\n  </div>\r\n\r\n  <ion-list id=\"totalblk\" lines=\"none\" class=\"date-white-container\">\r\n    <ion-item class=\"date-white-blk\" color=\"newColor\" >\r\n      <span style=\"font-size: 20px;\">{{ dataLeng?.total }}</span>\r\n      <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-up-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-grid class=\"total-blk\">\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.working_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.mng_total_work_time }}</ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.over_time }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.mng_over_work_time }}</ion-col>\r\n      </ion-row> -->\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.late_night_working_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.mng_night_work_time }}</ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.deduction_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.mng_deduction_time }}</ion-col>\r\n      </ion-row> -->\r\n    </ion-grid> \r\n  </ion-list>\r\n\r\n  <ion-list id=\"resultblk\" lines=\"none\" class=\"date-white-container\">\r\n    <ion-item tappable (click)=\"toggleSection(32)\" [ngClass]=\"{'section-active': total, 'section': !total}\" class=\"date-white-blk\" color=\"newColor\" >\r\n      <span style=\"font-size: 20px;\">{{ dataLeng?.result }}</span>\r\n      <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-up-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-grid class=\"total-blk\">\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.working_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_operated_time }}</ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.over_time }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_over_work_time }}</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.overtime_payment }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_salary_time }}</ion-col>\r\n      </ion-row>-->\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.late_night_working_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_night_work_time }}</ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.deduction_hours }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_deduction_time }}</ion-col>\r\n      </ion-row> -->\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.exercise_of_paid_holidays }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_holiday }}</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.exercise_of_paid_half_holidays }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_harf_holiday }}</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.total }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_total_holiday }}</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.absenteeism_days }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_absence_num }}</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\">{{ dataLeng?.closing_dates }}</ion-col>\r\n        <ion-col size=\"4\" class=\"textcenter\">{{ work_reports?.rslt_special_holiday }}</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">&nbsp;</ion-col>\r\n      <ion-col size=\"6\" >\r\n        <div class=\"bd1-color\" (click)=\"downloadWorkReportExcel('https://stgessence.phoenix.xyz', '/general/excel/mobile_download/download_excel.php', 'workreport')\">\r\n          <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n          {{ dataLeng?.download }} Excel <!-- workreport excel download -->\r\n        </div>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-list>\r\n    <div formArrayName=\"member_info\" style=\"margin: 15px;\">\r\n      <div *ngFor=\"let mbitem of member_info.controls ; let i = index \">\r\n        <div [formGroupName]=\"i\">\r\n          <ion-textarea formControlName=\"new_note\" style=\"border: 1px solid #dddddd;border-radius: 15px; padding: 5px\" ></ion-textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin: 15px;\">\r\n      <pre>{{ mbInfo?.note }}\r\n      </pre>\r\n      \r\n    </div>\r\n  </ion-list>\r\n</div>\r\n<!-- End Workreport list -->\r\n\r\n<!-- Start Transporation Expense -->\r\n<div formArrayName=\"transport_expense_detail\" id=\"transportext\" *ngIf=\"trasport_switch == true\">\r\n  <div *ngFor=\"let item of transport_expense_detail.controls ; let i = index \">\r\n    <div [formGroupName]=\"i\">\r\n      <ion-list lines=\"none\" class=\"date-container bg-bluelight\"  >\r\n        <ion-item tappable  class=\"date-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p style=\"margin: 7px auto;\">\r\n            <span class=\"datetitle\">{{ dataLeng?.transportation }}</span>\r\n            <!-- <br>\r\n            {{ te.use_date | date: 'yyyy/MM/dd EEEE' }} -->\r\n          </p>\r\n        </ion-item>\r\n        <ion-grid class=\"total-blk\"  >\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.date }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-datetime class=\"worktime borderRadius\" displayFormat=\"MMM DD, YYYY\" formControlName=\"use_date\" display-timezone=\"utc\"></ion-datetime>\r\n              <label *ngIf=\"item.controls.use_date.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.destination }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"destination\"  [ngClass]=\"{ 'has-error': item.controls.destination.invalid }\" value=\"{{ item.value.destination }}\"></ion-input>\r\n              <label *ngIf=\"item.controls.destination.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.transportation }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-select class=\"worktime borderRadius\" formControlName=\"transport_type\" value=\"transport\" selectedText=\"{{ selectedValueTran(item.value.transport_type, 'en') }}\" *ngIf=\"postData.language == 'en'\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let s of transporation\" value=\"{{ s.id }}\">{{ s.value }}</ion-select-option>\r\n              </ion-select>\r\n              <ion-select class=\"worktime borderRadius\" formControlName=\"transport_type\" value=\"{{ item.value.transport_type }}\" selectedText=\"{{ selectedValueTran(item.value.transport_type, 'jp') }}\" *ngIf=\"postData.language == 'jp'\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let s of transporationjp\" value=\"{{ s.id }}\">{{ s.value }}</ion-select-option>\r\n              </ion-select>\r\n              <label *ngIf=\"item.controls.transport_type.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.depature }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"from_area\" ></ion-input>\r\n              <label *ngIf=\"item.controls.from_area.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.arrival }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"to_area\" ></ion-input>\r\n              <label *ngIf=\"item.controls.to_area.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.oneway_roundtrip }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'en'\"  formControlName=\"rourte_type\" selectedText=\"{{ selectedValueRoute(item.value.rourte_type, 'en') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let r of route_type\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n              </ion-select>\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'jp'\"  formControlName=\"rourte_type\" selectedText=\"{{ selectedValueRoute(item.value.rourte_type, 'jp') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let r of route_type_jp\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n              </ion-select>\r\n              <label *ngIf=\"item.controls.rourte_type.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.voucher }}</span>  \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'en'\"  formControlName=\"print_flg\" selectedText=\"{{ selectedValueYesNo(item.value.print_flg, 'en') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let d of tran_expen\" value=\"{{ d.id }}\">{{ d.value }}</ion-select-option>\r\n              </ion-select>\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"print_flg\" selectedText=\"{{ selectedValueYesNo(item.value.print_flg, 'jp') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let d of tran_expen_jp\" value=\"{{ d.id }}\">{{ d.value }}</ion-select-option>\r\n              </ion-select>\r\n              <label *ngIf=\"item.controls.print_flg.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.billing }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'en'\" (ionChange)=\"changeTranTotalorCustom($event, i)\" formControlName=\"demand_type\" selectedText=\"{{ selectedValueBilling(item.value.demand_type, 'en') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let d of deman_type\" value=\"{{ d.id }}\">{{ d.value }}</ion-select-option>\r\n              </ion-select>\r\n              <ion-select class=\"worktime borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"demand_type\" selectedText=\"{{ selectedValueBilling(item.value.demand_type, 'jp') }}\" cancelText=\"Cancel\" okText=\"Ok\" placeholder=\"Select One\" >\r\n                <ion-select-option *ngFor=\"let d of deman_type_jp\" value=\"{{ d.id }}\">{{ d.value }}</ion-select-option>\r\n              </ion-select>\r\n              <label *ngIf=\"item.controls.demand_type.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input type=\"number\" class=\"worktime borderRadius\" (ionChange)=\"changeCustomerBill($event, i)\" formControlName=\"amount\"></ion-input>\r\n              <label *ngIf=\"item.controls.amount.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n           <ion-input type=\"hidden\" id=\"customerBilling\" value=\"{{ res_total }}\"></ion-input>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.action }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-button color=\"white\" class=\"del-btn\" (click)=\"removeTranExpense(i)\" >\r\n                <ion-icon slot=\"start\" name=\"trash-outline\" style=\"font-size: 1.2rem;\"></ion-icon>\r\n                {{ dataLeng?.remove }}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-list>\r\n      \r\n    </div>\r\n  </div>\r\n  <ion-list class=\"btn-container\" lines=\"none\">\r\n    <ion-item lines=\"none\">\r\n      <div class=\"addnewblg\">\r\n          <ion-button color=\"secondary\" class=\"add-transport-btn\" (click)=\"addTranExpense()\" >\r\n              {{ dataLeng?.add_transportation_expense }}\r\n          </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"totol-container\">\r\n    <ion-list class=\"total-container\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>{{ dataLeng?.total_amount }}</ion-col>\r\n          <ion-col>\r\n            <ion-input type=\"number\" class=\"worktime borderRadius\" style=\"padding: 5px !important\"   value=\"{{ postData.custom_total }}\"></ion-input>\r\n          </ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'en'\" >JPY</ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'jp'\" >円</ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row>\r\n          <ion-col>{{ dataLeng?.customer_billing }} </ion-col>\r\n          <ion-col>\r\n            <ion-input type=\"number\" class=\"worktime borderRadius\" style=\"padding: 5px !important\" value=\"{{ postData.custom_bill }}\" ></ion-input>\r\n          </ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'en'\" >JPY</ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'jp'\" >円</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">&nbsp;</ion-col>\r\n          <ion-col size=\"6\" style=\"padding-top: 15px;\">\r\n            <div class=\"bd1-color\" (click)=\"downloadWorkReportExcel('https://stgessence.phoenix.xyz', '/general/excel/mobile_download/download_excel.php', 'transport')\">\r\n              <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n              {{ dataLeng?.download }} Excel <!-- transporatiion download -->\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">&nbsp;</ion-col>\r\n          <ion-col size=\"6\" style=\"padding-top: 25px;\">\r\n            &nbsp;\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-list>\r\n  </div>\r\n</div> <!-- End Transporation Expense -->\r\n\r\n<!-- Start Settlement Expense -->\r\n<div formArrayName=\"expense_report_detail\" id=\"settletext\" *ngIf=\"settle_switch == true\">\r\n  <div *ngFor=\"let item of expense_report_detail.controls ; let i = index \">\r\n    <div [formGroupName]=\"i\">\r\n      <ion-list lines=\"none\" class=\"date-container bg-bluedark\"  >\r\n        <ion-item tappable  class=\"date-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p style=\"margin: 7px auto;\">\r\n            <span class=\"datetitle\">{{ dataLeng?.settlement_expense }} </span>\r\n            <!-- <br>\r\n            {{ te.use_date | date: 'yyyy/MM/dd EEEE' }} -->\r\n          </p>\r\n        </ion-item>\r\n        <ion-grid class=\"total-blk\"  >\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.date }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-datetime class=\"worktime borderRadius\" displayFormat=\"MMM DD, YYYY\" formControlName=\"ex_use_date\" display-timezone=\"gmt\"></ion-datetime>\r\n              <label *ngIf=\"item.controls.ex_use_date.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.purpose }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"ex_purpose\"  [ngClass]=\"{ 'has-error': item.controls.ex_purpose.invalid }\" value=\"{{ item.value.ex_purpose }}\"></ion-input>\r\n              <label *ngIf=\"item.controls.ex_purpose.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.payee }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"ex_payee\"  [ngClass]=\"{ 'has-error': item.controls.ex_payee.invalid }\" value=\"{{ item.value.ex_payee }}\"></ion-input>\r\n              <label *ngIf=\"item.controls.ex_payee.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.attended }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"ex_attendee\" [ngClass]=\"{ 'has-error': item.controls.ex_attendee.invalid }\"></ion-input>\r\n              <label *ngIf=\"item.controls.ex_attendee.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"ex_amount\" [ngClass]=\"{ 'has-error': item.controls.ex_amount.invalid }\"></ion-input>\r\n              <label *ngIf=\"item.controls.ex_amount.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.receipt_no }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"ex_receipt_no\" [ngClass]=\"{ 'has-error': item.controls.ex_receipt_no.invalid }\"></ion-input>\r\n              <label *ngIf=\"item.controls.ex_receipt_no.invalid\" class=\"has-error\" >Must be fill</label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"margin-top: 5px;\">{{ dataLeng?.action }}</span> \r\n            </ion-col> \r\n            <ion-col size=\"6\">\r\n              <ion-button color=\"white\" class=\"del-btn\" (click)=\"removeSettleExpense(i)\" >\r\n                <ion-icon slot=\"start\" name=\"trash-outline\" style=\"font-size: 1.2rem;\"></ion-icon>\r\n                {{ dataLeng?.remove }}\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-list>\r\n      \r\n    </div>\r\n  </div>\r\n  <ion-list class=\"btn-container\" lines=\"none\">\r\n    <ion-item lines=\"none\">\r\n      <div class=\"addnewblg\">\r\n          <ion-button color=\"secondary\" class=\"add-transport-btn\" (click)=\"addSettleExpense()\" >\r\n            {{ dataLeng?.add_settlement_expense }} \r\n          </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n  <div class=\"totol-container\">\r\n    <ion-list class=\"total-container\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>{{ dataLeng?.total_amount }}</ion-col>\r\n          <ion-col>\r\n            <ion-input type=\"number\" class=\"worktime borderRadius\" style=\"padding: 5px !important\"  value=\"{{ expenReport.ex_total_amount }}\"></ion-input>\r\n          </ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'en'\" >JPY</ion-col>\r\n          <ion-col class=\"textcenter\" size=\"2\" *ngIf=\"postData.language == 'jp'\" >円</ion-col>\r\n        </ion-row>\r\n        \r\n       </ion-grid>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">&nbsp;</ion-col>\r\n      <ion-col size=\"6\" >\r\n        <div class=\"bd1-color\" (click)=\"downloadWorkReportExcel('https://stgessence.phoenix.xyz', '/general/excel/mobile_download/download_excel.php', 'transport')\">\r\n          <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n          {{ dataLeng?.download }} Excel <!-- settlement excel download -->\r\n        </div>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div> <!-- End Settlement Expense -->\r\n\r\n<!-- Start cusomer report block display -->\r\n<div id=\"customerWorkReport\" *ngIf=\"customer_switch == true\">\r\n  <div class=\"topblg\"  *ngFor=\"let c of customerWorkReport; let i = index\">\r\n    <ion-list lines=\"none\" class=\"date-white-container\" *ngIf=\"i == 0\">\r\n      <ion-item tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 500;color: #707070;\">{{ dataLeng?.detail }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"!customerWorkReport?.open\" name=\"chevron-down-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-grid class=\"detail-box\" [ngStyle]=\"!customerWorkReport?.open ? {'display': 'none'} : {'display': 'block'}\">\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.customer_name }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.client_name }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.project_name }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.project_name }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.contract_period }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.start_contract_date | date: 'yyyy/MM/dd' }} ~ {{ c.end_contract_date | date: 'yyyy/MM/dd' }}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-list>\r\n    \r\n    <ion-list lines=\"none\" *ngIf=\"i == 0\">\r\n      <ion-item>\r\n        <b style=\"color: #707070;\">{{ dataLeng?.customer_workreport }}</b>\r\n        <ion-select slot=\"end\" id=\"customerWkDropdown\" value=\"{{ postData.mySelect }}\" [(ngModel)]=\"postData.mySelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{ c.client_report_flg === 1 ? 'Yes' : 'No' }}\" (ngModelChange)='onOptionsSelected(postData.mySelect)' class=\"dropdownstyle borderRadius dropdown\" style=\"padding: 7px 13px;\" >\r\n          <ion-select-option *ngFor=\"let t of tran_expen; let i of index\" selected=\"true\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n        </ion-select>\r\n        \r\n      </ion-item>\r\n      <ion-item>\r\n        <p>{{ dataLeng?.if_there }} </p>\r\n          \r\n      </ion-item>\r\n    </ion-list>\r\n    \r\n    <!-- new customer attendance -->\r\n    <div *ngIf=\"(i == 0) && (customerSelectOpt == 0)\">\r\n      <div formArrayName=\"customer_work_report_detail\" id=\"customer_attend_list\" *ngIf=\"customerSelectOpt == 0\" >\r\n        <div class=\"datelist\" *ngFor=\"let items of customer_work_report_detail.controls; let r = index;\">\r\n          <div [formGroupName]=\"r\">\r\n            <!-- start Date not entered -->\r\n            <ion-list lines=\"none\" class=\"date-container bg-bluelight\" *ngIf=\"(items.value.customer_attendance_type != 1) && (items.value.customer_start_time == '00:00') && (isWeekEnd(items.value.report_date) == false) \" >\r\n              <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-blk\" color=\"newColor\" >\r\n                <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n                <p>\r\n                  <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                  <span> {{ dataLeng?.wkhour_not_entered }}</span>\r\n                </p>\r\n                <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n                <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_start_time\" (ionChange)=\"mouseOutWkAttendance(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_break_time, i)\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_end_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <!-- <ion-select class=\"dropdownstyle\" value=\"{{ items.value.customer_attendance_type }}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let p of workPatternExist\" value=\"{{ p.pattern }}\">勤務時間_パタン{{ p.pattern }}</ion-select-option>\r\n                    </ion-select> \r\n                    <ion-select class=\"dropdownstyle\" formControlName=\"pattern\" (ionChange)=\"changePattern($event, i)\" selectedText=\"{{ displayPattern(items.value.pattern) }}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                      <ion-select-option  value=\"\">-</ion-select-option>\r\n                      <ion-select-option *ngFor=\"let p of workPatternExist; let pt = index\" value=\"{{ pt }}\">{{ displayPattern(p.pattern) }}</ion-select-option>\r\n                    </ion-select>-->\r\n                    <!-- <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_break_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    minutes\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_night_break_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    minutes\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row>\r\n        \r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\"  selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n    \r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <!-- end Date not entered -->\r\n\r\n            <!-- Start Public Holiday -->\r\n            <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"(holidayCheck(items.value.customer_attendance_type) == true) && (isWeekEnd(items.value.report_date) == false) && ( weekEnd == false)\">\r\n              <ion-item tappable (click)=\"myWkToggleFunction('mywk' + r, r)\" class=\"date-gray-blk\" color=\"newColor\" >\r\n                <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n                <p>\r\n                  <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                  <span> {{ holidayNameSwitch(items.value.customer_attendance_type, postData.language) }}</span>\r\n                  \r\n                </p>\r\n                <ion-icon slot=\"end\" id=\"{{ 'wkdown' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n                <ion-icon slot=\"end\" id=\"{{ 'wkup' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-grid id=\"{{ 'mywk' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none', 'transition': '2s'} : {'display': 'block', 'transition': '2s'}\"  >\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\"></ion-col>\r\n                  <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n                  <ion-col size=\"3\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col> \r\n                  <ion-col size=\"7\"></ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row>\r\n                <!-- <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row> -->\r\n                \r\n                \r\n                <!-- <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row> -->\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" value=\"{{ items.value.customer_attendance_type }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" value=\"{{ items.value.customer_attendance_type }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                    {{ items.value.clt_holiday_name }}\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <!-- End Public Holiday -->\r\n\r\n            <!-- Weekend Date Started -->\r\n          <ion-list lines=\"none\" class=\"date-weekend-container\" *ngIf=\"items.value.customer_start_time == '00:00' && isWeekEnd(items.value.report_date) == true\" >\r\n            <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-weekend-blk\" color=\"newColor\" >\r\n              <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n              <p>\r\n                <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                <span>{{ dataLeng?.no_entries }}</span>\r\n              </p>\r\n              <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col> \r\n                <ion-col size=\"7\"></ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\"></ion-col>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-list>\r\n          <!-- Weekend Date End-->\r\n\r\n          <!-- Date entered Started -->\r\n          <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"items.value.customer_start_time != '00:00' && isWeekEnd(items.value.report_date) == false\" >\r\n            <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-gray-blk\" color=\"newColor\" >\r\n              <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n              <p>\r\n                <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                <span> {{ dataLeng?.entered_working_hour }}</span>\r\n              </p>\r\n              <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_start_time\" (ionChange)=\"customer_mouseOutWkAttendance(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_end_time\" (ionChange)=\"customer_mouseOutWkAttendance(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <!-- <ion-select class=\"worktime borderRadius\" value=\"2\" placeholder=\"Select One\" >\r\n                    <ion-select-option >Stardard Hour</ion-select-option>\r\n                    <ion-select-option >Stardard Hour</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_break_time\" (ionChange)=\"customer_nightOverTime(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_night_break_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  minutes\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_night_break_time\" (ionChange)=\"customer_nightOverTime(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_night_break_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  minutes\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" readonly formControlName=\"customer_total_work_time\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\"></ion-col>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\"  selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-list>\r\n          <!--  Date entered End-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"displayswitch\" *ngIf=\"customerSelectOpt == 1\">\r\n    <form [formGroup]=\"myUploadForm\" > \r\n    <ion-grid style=\"border-bottom: 1px dashed #000000; margin: 15px; padding-bottom: 15px;\">\r\n      <ion-row>\r\n        <ion-col >\r\n          <ion-input type=\"file\" accept=\"application/pdf\" formControlName=\"file\" (change)=\"onFileChange($event)\"></ion-input>\r\n          <span *ngIf=\"fileName_dly == 0 && customerWorkReport[0].filename\">\r\n            {{ customerWorkReport[0].filename }}\r\n          </span>\r\n          \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <div class=\"bd1-color\"  (click)=\"onUploadPDF(customerWorkReport)\">\r\n            <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n            Upload PDF\r\n            \r\n          </div>\r\n          <!-- <ion-button shape=\"round\" fill=\"outline\" (click)=\"onUploadPDF(customerWorkReport)\">\r\n            <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n            Upload PDF\r\n          </ion-button> -->\r\n          <div *ngIf=\"fpdf.file.touched && fpdf.file.invalid\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"fpdf.file.errors.required\">File is required.</div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"bd1-color\" (click)=\"onRemovePdf_customerwk(customerWorkReport)\" style=\"border: 1px solid #feaa46; color: #feaa46;\">\r\n            <ion-icon slot=\"start\"class=\"icon-style\" style=\"color: #feaa46;\" name=\"trash-outline\"></ion-icon>\r\n            <!-- {{ dataLeng?.remove }} --> Remove\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</form>\r\n    <ion-list lines=\"none\" class=\"date-white-container\" >\r\n      <ion-item style=\"border-bottom: 2px solid #ebebeb;\" tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 700;color: #707070; font-size: 1.3rem;\">{{ dataLeng?.total }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n          <!-- <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon> -->\r\n      </ion-item>\r\n      <ion-item >\r\n        <p style=\"width: 100%\">\r\n          <span style=\"float: left;font-weight: 700;color: #707070; padding: 10px 5px;\">{{ dataLeng?.actual_working_hour }}</span>\r\n          <span style=\"float: right;padding: 10px 24px;\">{{ totalWkHour }} </span>\r\n        </p>\r\n      </ion-item>\r\n    </ion-list>\r\n    <p>&nbsp;</p>\r\n  </div>\r\n  <!-- if cusomer report 0 display -->\r\n  <div class=\"displayswitch\" *ngIf=\"customerSelectOpt == 0\">\r\n    <ion-list lines=\"none\" class=\"date-white-container\" >\r\n      <ion-item style=\"border-bottom: 2px solid #ebebeb;\" tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 700;color: #707070; font-size: 1.3rem;\">{{ dataLeng?.total }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"!customerWorkReport?.open\" name=\"chevron-down-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item [ngStyle]=\"!customerWorkReport?.open ? {'display': 'none'} : {'display': 'block'}\">\r\n        <p style=\"width: 100%\">\r\n          <span style=\"float: left;font-weight: 700;color: #707070; padding: 10px 5px;\">{{ dataLeng?.actual_working_hour }}</span>\r\n          <span style=\"float: right;padding: 10px 24px;\">00:00</span>\r\n        </p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <p>&nbsp;</p>\r\n</div>\r\n<!-- End cusomer report block display -->\r\n\r\n<!-- Start cusomer report2 block display -->\r\n<div id=\"customerWorkReport2\" *ngIf=\"customer_switch2 == true\">\r\n  <div class=\"topblg\"  *ngFor=\"let c of customerWorkReport; let i = index\">\r\n    <ion-list lines=\"none\" class=\"date-white-container\" *ngIf=\"i == 1\">\r\n      <ion-item tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 500;color: #707070;\">{{ dataLeng?.detail }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"!customerWorkReport?.open\" name=\"chevron-down-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-grid class=\"detail-box\" [ngStyle]=\"!customerWorkReport?.open ? {'display': 'none'} : {'display': 'block'}\">\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.customer_name }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.client_name }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.project_name }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.project_name }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"5\"><b style=\"color: #707070;\">{{ dataLeng?.contract_period }}</b></ion-col>\r\n          <ion-col size=\"7\">{{ c.start_contract_date | date: 'yyyy/MM/dd' }} ~ {{ c.end_contract_date | date: 'yyyy/MM/dd' }}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-list>\r\n    \r\n    <ion-list lines=\"none\" *ngIf=\"i == 1\">\r\n      <ion-item>\r\n        <b style=\"color: #707070;\">{{ dataLeng?.customer_workreport }}</b>\r\n        <ion-select slot=\"end\" id=\"customerWkDropdown\" value=\"{{ postData.mySelect }}\" [(ngModel)]=\"postData.mySelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{ c.client_report_flg === 1 ? 'Yes' : 'No' }}\" (ngModelChange)='onOptionsSelected2(postData.mySelect)' class=\"dropdownstyle borderRadius dropdown\" style=\"padding: 7px 13px;\" >\r\n          <ion-select-option *ngFor=\"let t of tran_expen; let i of index\" selected=\"true\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n        </ion-select>\r\n        \r\n      </ion-item>\r\n      <ion-item>\r\n        <p>{{ dataLeng?.if_there }} </p>\r\n          \r\n      </ion-item>\r\n    </ion-list>\r\n    \r\n    <!-- new customer attendance -->\r\n    <div *ngIf=\"(i == 1) && (customerSelectOpt2 == 0)\">\r\n      <div formArrayName=\"customer_work_report_detail2\" id=\"customer_attend_list2\" *ngIf=\"customerSelectOpt2 == 0\" >\r\n        <div class=\"datelist\" *ngFor=\"let items of customer_work_report_detail2.controls; let r = index;\">\r\n          <div [formGroupName]=\"r\">\r\n            <!-- start Date not entered -->\r\n            <ion-list lines=\"none\" class=\"date-container bg-bluelight\" *ngIf=\"(items.value.customer_attendance_type !=1) && (items.value.customer_start_time == '00:00') && (isWeekEnd(items.value.report_date) == false)\" >\r\n              <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-blk\" color=\"newColor\" >\r\n                <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n                <p>\r\n                  <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                  <span> {{ dataLeng?.wkhour_not_entered }}</span>\r\n                </p>\r\n                <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n                <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_start_time\" ></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_end_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <!-- <ion-select class=\"dropdownstyle\" value=\"{{ items.value.customer_attendance_type }}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let p of workPatternExist\" value=\"{{ p.pattern }}\">勤務時間_パタン{{ p.pattern }}</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_break_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    minutes\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_night_break_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    minutes\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row>\r\n        \r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\"  selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n    \r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <!-- end Date not entered -->\r\n\r\n            <!-- Start Public Holiday -->\r\n            <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"(holidayCheck(items.value.customer_attendance_type) == true) && (isWeekEnd(items.value.report_date) == false) && ( weekEnd == false)\">\r\n              <ion-item tappable (click)=\"myWkToggleFunction('mywk' + r, r)\" class=\"date-gray-blk\" color=\"newColor\" >\r\n                <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n                <p>\r\n                  <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                  <span> {{ holidayNameSwitch(items.value.customer_attendance_type, postData.language) }}</span>\r\n                  \r\n                </p>\r\n                <ion-icon slot=\"end\" id=\"{{ 'wkdown' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n                <ion-icon slot=\"end\" id=\"{{ 'wkup' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-grid id=\"{{ 'mywk' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none', 'transition': '2s'} : {'display': 'block', 'transition': '2s'}\"  >\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\"></ion-col>\r\n                  <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n                  <ion-col size=\"3\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col> \r\n                  <ion-col size=\"7\"></ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"2\"></ion-col>\r\n                  <ion-col size=\"5\">\r\n                    \r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row>\r\n                <!-- <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.amount }} {{ dataLeng?.over_time }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"over_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row> -->\r\n                \r\n                \r\n                <!-- <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.deduction }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"3\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"night_work_time\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\"></ion-col>\r\n                </ion-row> -->\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" value=\"{{ items.value.customer_attendance_type }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" value=\"{{ items.value.customer_attendance_type }}\" placeholder=\"-\" >\r\n                      <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                  </ion-col> \r\n                  <ion-col size=\"7\">\r\n                    <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                    {{ items.value.clt_holiday_name }}\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <!-- End Public Holiday -->\r\n\r\n            <!-- Weekend Date Started -->\r\n          <ion-list lines=\"none\" class=\"date-weekend-container\" *ngIf=\"items.value.customer_start_time == '00:00' && isWeekEnd(items.value.report_date) == true\" >\r\n            <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-weekend-blk\" color=\"newColor\" >\r\n              <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n              <p>\r\n                <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                <span>{{ dataLeng?.no_entries }}</span>\r\n              </p>\r\n              <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col size=\"1\" style=\"text-align: center;\"></ion-col>\r\n                <ion-col size=\"3\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col> \r\n                <ion-col size=\"7\"></ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\"></ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_total_work_time\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\"></ion-col>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-list>\r\n          <!-- Weekend Date End-->\r\n\r\n          <!-- Date entered Started -->\r\n          <ion-list lines=\"none\" class=\"date-gray-container\" *ngIf=\"items.value.customer_start_time != '00:00' && isWeekEnd(items.value.report_date) == false\" >\r\n            <ion-item tappable (click)=\"myToggleFunction('myid' + r, r)\"  class=\"date-gray-blk\" color=\"newColor\" >\r\n              <ion-icon slot=\"start\" style=\"color: #707070;\" name=\"alert-outline\"></ion-icon>\r\n              <p>\r\n                <span class=\"datetitle\">{{ items.value.report_date | date: 'yyyy/MM/dd EEEE' }}</span><br>\r\n                <span> {{ dataLeng?.entered_working_hour }}</span>\r\n              </p>\r\n              <ion-icon slot=\"end\" id=\"{{ 'down' + r }}\" style=\"font-size: 24px;color: #707070;\" name=\"chevron-down-outline\"></ion-icon>\r\n              <ion-icon slot=\"end\" id=\"{{ 'up' + r }}\" style=\"font-size: 24px;color: #707070; display: none;\" name=\"chevron-up-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-grid id=\"{{ 'myid' + r }}\" class=\"total-blk\" [ngStyle]=\"!items.open ? {'display': 'none'} : {'display': 'block'}\">\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.work_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_start_time\" (ionChange)=\"customer_mouseOutWkAttendance(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"1\" style=\"text-align: center;\">-</ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime\" type=\"text\" formControlName=\"customer_end_time\" (ionChange)=\"customer_mouseOutWkAttendance(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <!-- <ion-select class=\"worktime borderRadius\" value=\"2\" placeholder=\"Select One\" >\r\n                    <ion-select-option >Stardard Hour</ion-select-option>\r\n                    <ion-select-option >Stardard Hour</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-input style=\"border: 1px solid #e4e4e4; text-align: center;\" type=\"number\" value=\"333\"></ion-input> -->\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_break_time\" (ionChange)=\"customer_nightOverTime(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_night_break_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  minutes\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.night_break_time }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"2\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_night_break_time\" (ionChange)=\"customer_nightOverTime(items.value.customer_start_time, items.value.customer_end_time, items.value.customer_night_break_time, items.value.customer_break_time, r)\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"5\">\r\n                  minutes\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.working_hours }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"3\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" readonly formControlName=\"customer_total_work_time\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\"></ion-col>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.attendance_type }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'en'\" formControlName=\"customer_attendance_type\"  selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'en') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                  <ion-select class=\"dropdownstyle borderRadius\" *ngIf=\"postData.language == 'jp'\" formControlName=\"customer_attendance_type\" selectedText=\"{{ selectedValueAttendance(items.value.customer_attendance_type, 'jp') }}\" placeholder=\"-\" >\r\n                    <ion-select-option *ngFor=\"let t of attendance_type_jp\" value=\"{{ t.id }}\" >{{ t.value }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <span style=\"margin-top: 5px;\">{{ dataLeng?.reason }}</span> \r\n                </ion-col> \r\n                <ion-col size=\"7\">\r\n                  <ion-input class=\"worktime borderRadius\" type=\"text\" formControlName=\"customer_reason\"></ion-input>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-list>\r\n          <!--  Date entered End-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <div class=\"displayswitch\" *ngIf=\"customerSelectOpt2 == 1\">\r\n\r\n    <ion-grid style=\"border-bottom: 1px dashed #000000; margin: 15px; padding-bottom: 15px;\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <div class=\"bd1-color\">\r\n            <ion-icon slot=\"start\"class=\"icon-style\" name=\"cloud-download-outline\"></ion-icon>\r\n            Upload PDF\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div class=\"bd1-color\" style=\"border: 1px solid #feaa46; color: #feaa46;\">\r\n            <ion-icon slot=\"start\"class=\"icon-style\" style=\"color: #feaa46;\" name=\"trash-outline\"></ion-icon>\r\n            {{ dataLeng?.remove }}\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-list lines=\"none\" class=\"date-white-container\" >\r\n      <ion-item style=\"border-bottom: 2px solid #ebebeb;\" tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 700;color: #707070; font-size: 1.3rem;\">{{ dataLeng?.total }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"!customerWorkReport?.open\" name=\"chevron-down-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item [ngStyle]=\"!customerWorkReport?.open ? {'display': 'none'} : {'display': 'block'}\">\r\n        <p style=\"width: 100%\">\r\n          <span style=\"float: left;font-weight: 700;color: #707070; padding: 10px 5px;\">{{ dataLeng?.actual_working_hour }}</span>\r\n          <span style=\"float: right;padding: 10px 24px;\">0</span>\r\n        </p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <!-- if cusomer report 0 display -->\r\n  <div class=\"displayswitch\" *ngIf=\"customerSelectOpt2 == 0\">\r\n    <ion-list lines=\"none\" class=\"date-white-container\" >\r\n      <ion-item style=\"border-bottom: 2px solid #ebebeb;\" tappable (click)=\"toggleSectionc()\" [ngClass]=\"{'section-active': customerWorkReport?.open, 'section': !customerWorkReport?.open}\" class=\"customer-blk\" color=\"newColor\" >\r\n        <!-- <ion-item tappable (click)=\"toggleSection(90)\"  class=\"date-blk\" color=\"newColor\" > -->\r\n          <p>\r\n            <span style=\"font-weight: 700;color: #707070; font-size: 1.3rem;\">{{ dataLeng?.total }}</span>\r\n          </p>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"!customerWorkReport?.open\" name=\"chevron-down-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\" style=\"font-size: 24px;color: #707070;\" *ngIf=\"customerWorkReport?.open\" name=\"chevron-up-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item [ngStyle]=\"!customerWorkReport?.open ? {'display': 'none'} : {'display': 'block'}\">\r\n        <p style=\"width: 100%\">\r\n          <span style=\"float: left;font-weight: 700;color: #707070; padding: 10px 5px;\">{{ dataLeng?.actual_working_hour }}</span>\r\n          <span style=\"float: right;padding: 10px 24px;\">00:00</span>\r\n        </p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</div>\r\n<!-- End cusomer report2 block display -->\r\n<!-- <p>\r\n  <button type=\"submit\">Submit</button>\r\n</p> -->\r\n<ion-footer style=\"position: fixed; bottom: 0;\">\r\n  <ion-toolbar class=\"footerbar\" color=\"newColor\">\r\n    <ion-grid class=\"footerbar\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" id=\"store\" class=\"ftbtnColor\" (click)=\"onStoreClick()\" color=\"ftbtnColor\">Store</ion-button>\r\n        </ion-col>\r\n        <ion-col >\r\n          <ion-button type=\"submit\" class=\"ftbtngrayColor\" (click)=\"onApplyReportClick()\" id=\"applyReport\" color=\"ftbtnColor\">Apply</ion-button>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"mbInfo?.sales_bill_flg == 1\">\r\n          <ion-button type=\"submit\" class=\"ftbtngrayColor\" (click)=\"onApplyExpenseClick()\" id=\"applyExpense\" color=\"ftbtnColor\">Expense</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\r\n  <ion-item lines=\"none\">\r\n    <h3>My Profile</h3>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n      <img class=\"itemcenter\" class=\"img-container\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADmCAMAAACJZRt4AAAAhFBMVEUAAAD////s7Ozt7e3+/v7r6+v19fXy8vLw8PD39/ecnJx4eHh0dHSzs7Pa2tro6OiRkZFeXl5qamouLi5ISEjOzs6Dg4NCQkKJiYnCwsJPT0+ioqJxcXEjIyPJycmqqqoeHh7V1dU1NTUTExNXV1ewsLC8vLyOjo5lZWUwMDAODg4nJyfS9eDQAAALsklEQVR4nO1dbXeiPBAlRPOiK/heFau13brd7f//fw/UWkEC5OVGsE/vpzl7zhJuMTM3k8kk6KUgIaU0JN/NosG3Jtf6K/yQsyWXoR+GYf/bWWEQduI9/FgB7cQvyI/1Q+5erZvMOc6kZB8Wy3D6Ny6o9znn+fksWu/Hq+3m+SX4wstsPh0mxwVNuaYUvb1B6CnOifRjhevB9j2oxfvbeBR9vMy9BPH0VcV6PKmnlcdksCAy/YSdJycIiZKNPrEz5oMF44R0V6GEgvH10pzYGcMdes7BvCXlZDG0Z3bC9siBf21UnOMyWrkyO+FPDPMvEHJp1BrNMdQyzI+Ed4UcIXKAY3bCuM9EBxQKJdzBh1RjGDP3Oef6BP7LB7UPehGjbSoUIr18tS96MWstiHMCn2vXGIt2yAk58k0twzGVLbdWKCE7AJ1/HebxrRWKIOPbUMuwErbe0irOyV3DWgaLp4Pdb9OGnGBefaQKK2IjySzI8eimn+2E9/g2CiW5PbUMr5L6ViiCv7XDLQim5t7ScGUTPbbFLQge+2YTzzCIs3V71DLs/JEj/uVWExLpTaE4ZxHcMZT6KwUDhUL577aZZZj4UCiUPrTN64QHD0E8nrXN6oyZFFhyRD61zemCx1hAFUqXuKVCOhY4hULjp7b5FPHYgykUKjoz386YwYI474ifzOOBNDsLDXKEdCK+XWPSrFV0FEoHdIkKQ+muUFjrerIKibNC4S2vA+qwa1oBNZATUdsM6tB3I8dbXJs247HBZTbMudZyCnqYSnuFwlvKBenj1VqhdHvCnRDXZGtrgzjrnOoqY0aqXWYdOb97byisaslV/WrFru331kNkoVBC0ukocMFT9R5QZZxjN9yjcsPKOIiLQ9vvrI+YGJKTN9o3RWBeSU495/hN9rtROBoqFPT40+R4iBnrhYvR6hn98ICbKBTwpsCfrBpWfOTjMrD+3qIisw5jZb1KRRBnwIHfX8tFolxG2PV9TPXJAbXJXnLlX5X0DQqFGzFkugqFctig2z6vXpMgF/mRtkLZooZ8lbUrqhgXb5ZMT6EQ2IdbNNSlUTJFDRWo9g9U5FAzLuKN2xW4vOGS6ZAjEjRcyq2ZHO7b9bUUCijGHbje/icqVz8uR/KytwTFuIFmFS/tY8YLAg2FAlKVc6lbc8BRi+Lj9Zq8HMRBy4HIoLgclD+cN5KjmHVc6rv0yQnIkNm6rkGhcMy5jtiorhwUe8YNCiXErHVW2rwyi6Lyo9fngK7inFhARqlc+KstCdLQ6/ogziCK4Vl7un2ugEDr/l/15DCycmBILp36GFwtHItzThwhYyz0fcnJYqCV+dXpwitvifFbRK9yJ2eBJN+Q1ygUjK+cG/0iP8ZFrVtldRAnGJ88NCcXQwZOJ4SoJofZbEzMyaGWWQNeJJf/7WPm9d6ohvxz7mOwYZUKBeSRE/OzN7DMRqVCEaBpnXDjOIdL2+SXBnlyHLRrZUEOFcWzsiI1OQaSeGNzcihvmdV3qxUKymVNjU/pU4xez1ClUELQ8/+ae0vcjll06a9SUCiw9HavnAxtiHN/UEMHI5GPc5dBYPtWC93a+C9yf1FD5yd8gRwsPzo2bK1AYM4ynfAsT+7y24cdaHxR7UrUWXvUyEEwY7k5d/GWwB3HhZm3lLhfZeoulQoFWMb2ZpRDwdYqiQujHDnkXmBdMV3JktDy95w3y5ED/vBToaBPDlxkdrx4s9ycg9ZD7fTnnMRWPiZcoVBAueYzaKjpLdFFZkuVQmGwnfAPTKRenINt8pwxVQVxiS580SInYOuBM+ZKcuiqpZFGPBB9eCuEvyqFwl6a/6MZqurNLhaNkeH7hBelQoEPE4xlvVfh9Ak/aMBUCsXDOG+qkqwvS2KS99dgqiDuY6CXRVWbFsop1j1/4Wbk0o/XV9XGpzLd22mTHDmfc+6EaST59eng3v6fr+FSciWFQpE1lld4H0RZh1zOT9na+BVZjViCUqH4HDAINsvBfjQ67sfTJ78DBaog7pnc7fC/IfelUNp+KRSUCgUuv9rBi1Kh3MFpOR08S1UQv6MDLnXYKMnh6o0veN9Mt8PhrwzDDBdrO/2NPxmSYatUKOCDjs/LUfTZ656zNICXrKz//WEPP8+8UuZQkGLvOYlrq+4/rVBwyXbYn8xYpVA4bgEyXcjmwvSLhW2VvFcFcVDBXhBMYmK4y0OQecW1ihzFFKz+y/YJTOtQeoTHqMkXqXd5EI/eamYryxWlqP67Fbs8gETU0bym7WJxRGyYqXd5mLvXitz61XPAOm+rLtVwLkP5J6xbLn/mVaR7WmWgJidcf/TcaFdOabmzW6vrUFyLxFXn80wt91puWlUp6/TUgyOvs+WYg5YVlbLE5a+WoO6+cNsZmeTOIxZKNVwKUTaOviTnMp2m/phXkXMQYBxGLnSadmtRIJf/xVs/M3H3JRet4vLDzGd/i5Wy1uX9xlU19ZZ9wN0Unlc4EcJtJ90Ic9XMeZHQsyaXFGZHgZz1qkejH6OJZV/EF1WTo5blpAOULzmTsy55Lmqk4lkebncIi6N8yZdlWVO0LD7l6iyPVd3ERiJ5feRzLFMeRxEWvOXVnqDNIxNl3wwXi1q6lKJfKx3ItbkfyeRksa5llSEesnpyNqV7EuhLzpZVqLsqPy6fNjZ/5IRBfcnJsqqPvMpxlPuhmP/JBmBeGazWlquG08ahxYpjhNPMl4SDzW5hdF31UiJnPpV3HsiF0rzaodwOokzOOMREXsiZp/lGpYik6Idi+tDYw5zrM/M2KTr9UIwzfJHb/X4VlvHqq+zXVB3bTLuvrE12dHQtYjznZGl2qJqamV7jNfERxI1F7pKUnqIiZ1yZO3K6mVFlCfPSCkVGWNmxzfgGtrX7raEFSwhjd/JL8Tx1xzZjeZCY3zBWZ1nc2pHO+/LzlJ1JzRuHPBwkaGlArfJDS+XzlORskmtvBwm4DlwwYXXqRuqTszulMR9lm9vK5+lY6f9lcmeX5xioc/lVPWWtxgg2g12UFZh8PIUxI4sdXq33ryrmcFVPWT+F454wMuop27urSrC5rPBNleTgZ2z84VBxNVZN13vsiTOPGLMKL1XX9f5OGsO/V+qBunt57uCeiQwLi6736arjLn6Yy5pek3Xk7qEweFbXjrHuXp578JiRqCNXPedSvLb97k1IanpgN90cKH3UPQPxVvv2DTcH0m5fFPJY3w+o8XI9WK9eH4iEGzm77cjbYN2wL6hxcyCyZQMUg6bdJY27jWVXr0Vs+ipadxujOr5i8VsjqaFBjsLamwPxoNM4Te9uY/w5fEfMaO0JdC2FcrZ68A4KbniKqU4eVO8meNGty42fpMY7NyqU3P5Bh77dk9RLkGrdbfyxNdHrzPpnFusmr3XJpVZHfOaD0PElmgrlYnUi3v3mWr5EU6F8WbQLWkVDlxgplJxWaV1nDow2W4zIWezmYrFWXXkFI0f6La5eHyPD2keDOfdptZZ5eCt1VcEolJxFZUtZo8T0TbUVSsGKW4jn75FNc2gLci3kopfMYsvdilyPkOimfuVxV7EDB1QohT2gG368MRFWVR8mCuXKAl77V4t5xHS7SToplKvf5k32zUeybjcAGsSLFqpNfjUGxOUIlBM5ymKvF6ovpdtZUfs592FRFnmj94vbvpW1QilZnr7ekhNVrZp3hXJlCdaHz71BlgJyeivrIF6yODkCO9LOR+XbkFsklwWiGPT5VpH6NuQbKhSVxdfOeYjhgnBYXaqDQlFbu6F948rlkWf6GPfXdopzZSv9fHIxsJh/myQipq2L/AZxtSW4JIfEoKXQZLDObi3BvYFHcif/ki6LjuNpw7L2fZrykox7ODoJUCh1VvoJGSNicUyW0/nf3EGBl+fNdjXeryNwxb4HhdJgpRRPZ/Zydb8y/Vi+xwUplM5asCDeReu7k/P/22/LgiuUTlme4lw3rB9y92p97znXkff4USg/Qfz/Q67tmfGjUOys7x3nfsjdp9X71uT+A3HVKVzMRgPGAAAAAElFTkSuQmCC\">\r\n  </ion-item>\r\n  <ion-list-header>\r\n    <h3 style=\"margin: 0 auto;\">{{ UserProfile?.last_name }} {{ UserProfile?.first_name }}</h3>\r\n  </ion-list-header>\r\n  <ion-item lines=\"none\">\r\n    <p style=\"margin: 0 auto;\"><b>{{ dataLeng?.account_label }}:</b> {{ authorityName  }}</p>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <!--<a routerLink='/changepassword'>Change Password</a>-->\r\n    <p style=\"margin: 0 auto; padding-bottom: 20px;\">\r\n      <ion-button expand=\"block\" fill=\"outline\" [ngStyle]=\"{'font-size':'16px'}\" [ngStyle]=\"{'background-color':'#ffffff'}\" [ngStyle]=\"{'color':'#707070!important'}\" [ngStyle]=\"{'border-radius':'20px'}\" (click)=\"changePasswordAction()\" >{{ dataLeng?.change_password }}</ion-button>\r\n    </p>\r\n  </ion-item>\r\n    \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.company_name }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.company_name }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.employee_no }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.member_no }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.employee_name }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.last_name  }} {{ UserProfile?.first_name }}</ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.employee_name_kana }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.last_name_kana  }} {{ UserProfile?.first_name_kana }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.gender }}:</ion-col>\r\n      <ion-col>\r\n        <span>{{ UserProfile?.gender_label }}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.birthday }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.birthday | date }} {{ calculateDiff(UserProfile?.birthday, 0) }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.postal_code }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.postal_code1  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.address }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.address1  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.address2 }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.address2  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.account }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.account  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.email_address }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.email1  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.email_address2 }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.email2  }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.employment_status }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.employment_status }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.own_department }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.own_depart }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.phone_number }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.tel }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.mobile_phone_number }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.ph_mobile }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.mobile_phone_number2 }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.ph_mobile_private }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.sales_representative }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.sales_rep_name }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.hire_date }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.hired_date | date }} {{ calculateDiff(UserProfile?.hired_date, 1) }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.position }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.position_name }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.authority }}: </ion-col>\r\n      <ion-col>{{ UserProfile?.authority_type_name }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.social_number }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.social_securty_num }}</ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"space-10\">{{ dataLeng?.note }}:</ion-col>\r\n      <ion-col>{{ UserProfile?.note }} </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n  <ion-slide>\r\n    <app-logo></app-logo>\r\n    <h2>Welcome to Phoenix</h2>\r\n    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h2>Manage Workreport</h2>\r\n    <p>Dolore ullam cupiditate est aspernatur repellat veritatis, expedita</p>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h2>General User Guide</h2>\r\n    <p>sint pariatur mollitia tempora error dolorum aliquam aut deleniti</p>\r\n  </ion-slide>\r\n</ion-slides>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\" color=\"primary\" (click)='navigateToLoginPage()' >Start</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeago/timeago.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeago/timeago.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  {{ newDate | date }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transportation-expense/transportation-expense.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transportation-expense/transportation-expense.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"primary\" (click)=\"addAction()\">+ Add</ion-button>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\" #addtable> \r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"minwidth\">Date</th>\r\n          <th scope=\"col\" class=\"minwidth\">Destination</th>\r\n          <th scope=\"col\" class=\"minwidth\">Transportation</th>\r\n          <th scope=\"col\" class=\"minwidth\">Departure</th>\r\n          <th scope=\"col\" class=\"minwidth\">Arrival</th>\r\n          <th scope=\"col\" class=\"minwidth\">One Way/Round Trip</th>\r\n          <th scope=\"col\" class=\"minwidth\">Voucher</th>\r\n          <th scope=\"col\" class=\"minwidth\">Amount</th>\r\n          <th scope=\"col\" class=\"minwidth\">Billing</th>\r\n          <th scope=\"col\" class=\"minwidth\">Action</th>\r\n        </tr>\r\n      </thead>\r\n    <tr *ngFor=\"let t of tranSportExpense; let i = index\" >\r\n      <td>{{ t.use_date | date }}</td>\r\n      <td>{{t.destination}}</td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.transport_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let tp of transport_expen\" value=\"{{ tp.id }}\">{{ tp.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>{{t.from_area}}</td>\r\n      <td>{{t.to_area}}</td>\r\n      <td >\r\n        <ion-select slot=\"end\" value=\"{{t.rourte_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let r of tran_expen\" value=\"{{ r.id }}\">{{ r.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.print_flg}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let p of print_flgs\" value=\"{{ p.id }}\">{{ p.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td>{{t.amount}}</td>\r\n      <td>\r\n        <ion-select slot=\"end\" value=\"{{t.demand_type}}\" placeholder=\"Select One\" >\r\n          <ion-select-option *ngFor=\"let b of demend_types\" value=\"{{ b.id }}\">{{ b.value }}</ion-select-option>\r\n        </ion-select> \r\n      </td>\r\n      <td><ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"warning\" (click)=\"removeAction()\">Remove</ion-button></td>\r\n    </tr>\r\n  </table>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Total Amount</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"totalAmount\" type=\"text\" [(ngModel)]=\"postData.totalAmount\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Customer Billing</ion-label>\r\n      <ion-input autocomplete=\"off\" name=\"customerBilling\" type=\"text\" [(ngModel)]=\"postData.customerBilling\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" share=\"round\" style=\"margin: 10px\" color=\"success\" (click)=\"storeAction()\">Store</ion-button>\r\n    <p>&nbsp;</p>\r\n  </ion-list>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-guide/user-guide.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-guide/user-guide.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 15px;\">\r\n  <h1 [innerHtml]=\"userGuide?.user_guide\"></h1>\r\n  <div class=\"bluegreen\">\r\n    <div [innerHtml]=\"userGuide?.header_1\"></div>\r\n    <div [innerHtml]=\"userGuide?.header_2\"></div>\r\n  </div>\r\n\r\n  <div class=\"graylight\">\r\n    <h2 [innerHtml]=\"userGuide?.notice\"></h2>\r\n    <ul [innerHtml]=\"userGuide?.notice_list\"></ul>\r\n  </div>\r\n\r\n  <div class=\"whitebg\">\r\n    <h2 [innerHtml]=\"userGuide?.basic_operation\"></h2>\r\n    <div [innerHtml]=\"userGuide?.login_guide\"></div>\r\n    <div class=\"remainer\" [innerHtml]=\"userGuide?.navigation_permission\"></div>\r\n    <div class=\"warning\" [innerHtml]=\"userGuide?.logout_warning\"></div>\r\n  </div>\r\n\r\n  <div class=\"whitebg\">\r\n    <h2 [innerHtml]=\"userGuide?.workreport_operation\"></h2>\r\n    <div [innerHtml]=\"userGuide?.work_report_operation_guide\"></div>\r\n  </div>\r\n\r\n  <div class=\"graylight\">\r\n    <h2 [innerHtml]=\"userGuide?.customer_operation\"></h2>\r\n    <div [innerHtml]=\"userGuide?.customer_operation_guide\"></div>\r\n  </div>\r\n  \r\n  <div class=\"whitebg\">\r\n    <h2 [innerHtml]=\"userGuide?.transpotation_expense\"></h2>\r\n    <div [innerHtml]=\"userGuide?.transpotation_expense_guide\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-detail-info/workreport-detail-info.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-detail-info/workreport-detail-info.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item style=\"background: blueviolet;\">\r\n  <h3>Work Report Date: {{ wkreport_detail_date | date }}</h3>\r\n</ion-item>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\"> \r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" class=\"firstWidth\">#</th>\r\n        <th scope=\"col\" class=\"minwidth\">Work Hour</th>\r\n        <th scope=\"col\" class=\"minwidth\">Break Time</th>\r\n        <th scope=\"col\" class=\"minwidth\">Night Break</th>\r\n        <th scope=\"col\" class=\"minwidth\">Working Time</th>\r\n        <th scope=\"col\" class=\"minwidth\">Over Time</th>\r\n        <th scope=\"col\" class=\"minwidth\">Night Work Time</th>\r\n        <th scope=\"col\" class=\"minwidth\">Deducation</th>\r\n        <th scope=\"col\" >Att Type</th>\r\n        <th scope=\"col\" class=\"minwidth\">Reason</th>\r\n      </tr>\r\n    </thead>\r\n  <tr *ngFor=\"let r of wkreport_detail; let i = index\" >\r\n    <td>{{ r.report_date | date: 'MM/dd' }}</td>\r\n    <td>\r\n      <div *ngIf=\"r.atendance_type == 0\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-select class=\"borderOnewidth\" style=\"width: 100%\" value=\"{{r.atendance_type}}\" name=\"custWkReport\" placeholder=\"-\" >\r\n                <ion-select-option *ngFor=\"let p of workPatternExist\" value=\"{{ p.pattern }}\">勤務時間_パタン{{ p.pattern }}</ion-select-option>\r\n              </ion-select> \r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-input class=\"borderOneCol\" name=\"starttime\"  value=\"{{r.start_time}}\" type=\"text\"></ion-input>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-input  class=\"borderOneCol\" name=\"endtime\"  value=\"{{r.end_time}}\" type=\"text\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"totalbreaktime\"  value=\"{{r.total_break_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"night_breaktime\"  value=\"{{r.night_break_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"total_work_time\"  value=\"{{r.total_work_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"orver_work_time\"  value=\"{{r.orver_work_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"night_work_time\"  value=\"{{r.night_work_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-input slot=\"col\" class=\"borderOnewidth\" name=\"deduction_time\"  value=\"{{r.deduction_time}}\" type=\"text\"></ion-input>\r\n    </td>\r\n    <td>\r\n      <ion-select style=\"width: 150px\" class=\"borderOnewidth\" value=\"{{r.atendance_type}}\" name=\"custWkReport\" placeholder=\"Select One\" >\r\n        <ion-select-option *ngFor=\"let a of attendance_type\" value=\"{{ a.id }}\">{{ a.value }}</ion-select-option>\r\n      </ion-select> \r\n    </td>\r\n    <td>\r\n      <ion-textarea  name=\"deduction_time\" style=\"border: 1px solid #cccccc;\" value=\"{{r.reason}}\" type=\"text\"></ion-textarea>\r\n    </td>\r\n  </tr>\r\n</table>\r\n</div>\r\n\r\n<ion-list>\r\n  <ion-item><h3>Total</h3></ion-item>\r\n</ion-list>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" >Working Hours</th>\r\n        <th scope=\"col\" >Overtime (Total)\t</th>\r\n        <th scope=\"col\" >Night Work Hours</th>\r\n        <th scope=\"col\" >Deduct Hours</th>\r\n      </tr>\r\n    </thead>\r\n      <tr>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_total_work_time}}\" name=\"totalWH\" [(ngModel)]=\"postData.totalWH\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_orver_work_time}}\" name=\"totalOverTime\" [(ngModel)]=\"postData.totalOverTime\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_night_work_time}}\" name=\"totalNight\" [(ngModel)]=\"postData.totalNight\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.mng_deduction_time}}\" name=\"totalDeduct\" [(ngModel)]=\"postData.totalDeduct\"></ion-input></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n\r\n<ion-list>\r\n  <ion-item><h3>Result</h3></ion-item>\r\n</ion-list>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\" >Working Hours</th>\r\n        <th scope=\"col\" >Overtime (Total)\t</th>\r\n        <th scope=\"col\" >Overtime (Payments)</th>\r\n        <th scope=\"col\" >Night Work Hours</th>\r\n        <th scope=\"col\" >Deduct Hours</th>\r\n        <th scope=\"col\" class=\"minwidth\">Exercise of Paid Holidays</th>\r\n        <th scope=\"col\" class=\"minwidth\">Exercise of Paid Half Holiday</th>\r\n        <th scope=\"col\" >Total</th>\r\n        <th scope=\"col\" >Absenteeism Days</th>\r\n        <th scope=\"col\" >Closing Dates</th>\r\n      </tr>\r\n    </thead>\r\n      <tr>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_operated_time}}\" name=\"rstWH\" [(ngModel)]=\"postData.rstWH\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_orver_work_time}}\" name=\"rstOvt\" [(ngModel)]=\"postData.rstOvt\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_salary_time}}\" name=\"rstOvtPay\" [(ngModel)]=\"postData.rstOvtPay\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_night_work_time}}\" name=\"rstNgWH\" [(ngModel)]=\"postData.rstNgWH\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_deduction_time}}\" name=\"rstDeHr\" [(ngModel)]=\"postData.rstDeHr\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_holiday}}\" name=\"rstPaidHld\" [(ngModel)]=\"postData.rstPaidHld\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_harf_holiday}}\" name=\"rstPaidHfHld\" [(ngModel)]=\"postData.rstPaidHfHld\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_total_holiday}}\" name=\"rstTotal\" [(ngModel)]=\"postData.rstTotal\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_absence_num}}\" name=\"rstAbsDay\" [(ngModel)]=\"postData.rstAbsDay\"></ion-input></td>\r\n        <td><ion-input type=\"text\" class=\"borderOne\" value=\"{{wkReport?.rslt_special_holiday}}\" name=\"rstCloseDate\" [(ngModel)]=\"postData.rstCloseDate\"></ion-input></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-search/workreport-search.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-search/workreport-search.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <ion-list>\r\n  <ion-item lines=\"none\" >\r\n    <p>{{ dataLeng?.application }} <br>\r\n      <span style=\"font-size: 1.5em; font-weight: bold; color: #707070;\">{{ dataLeng?.workreport }}  {{ dataLeng?.application }} {{ postData.year}}/{{ postData.month }}</span> \r\n    </p>\r\n\r\n  </ion-item>\r\n</ion-list>\r\n <ion-grid>\r\n <ion-row>\r\n   <ion-col color=\"primary\" >\r\n     <ion-select class=\"borderOnewidth\" [(ngModel)]=\"postData.year\" value=\"{{ postData.year }}\" style=\"width: 100%\"  name=\"year\" placeholder=\"-\" >\r\n       <ion-select-option *ngFor=\"let y of yearlist\" value=\"{{ y.value }}\">{{ y.value }}</ion-select-option>\r\n     </ion-select>\r\n   </ion-col>\r\n   <ion-col size='1'><p class=\"postline\">/</p></ion-col>\r\n   <ion-col >\r\n     <ion-select class=\"borderOnewidth\" [(ngModel)]=\"postData.month\" value=\"{{ postData.month }}\" style=\"width: 100%\" name=\"month\" placeholder=\"-\" >\r\n       <ion-select-option *ngFor=\"let m of monthlist\" value=\"{{ m.value }}\">{{ m.value }}</ion-select-option>\r\n     </ion-select>\r\n   </ion-col>\r\n   <ion-col size='4' >\r\n    <!-- <ion-button expand=\"block\"  share=\"round\" [ngStyle]=\"{'background-color':'#f2fffd'}\" color=\"white\" class=\"bd1-color\"  >Search</ion-button> -->\r\n     <ion-button expand=\"block\" fill=\"outline\" (click)=\"searchWkReportAction()\" [ngStyle]=\"{'background-color':'#f2fffd'}\" [ngStyle]=\"{'color':'#707070!important'}\" [ngStyle]=\"{'border-radius':'20px'}\">{{ dataLeng?.search }}</ion-button>\r\n   </ion-col>\r\n </ion-row>\r\n</ion-grid>\r\n\r\n");

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/components/clientinfo/clientinfo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/clientinfo/clientinfo.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50aW5mby9jbGllbnRpbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/clientinfo/clientinfo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/clientinfo/clientinfo.component.ts ***!
  \***************************************************************/
/*! exports provided: ClientinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientinfoComponent", function() { return ClientinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clientinfo.service */ "./src/app/services/clientinfo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ClientinfoComponent = class ClientinfoComponent {
    constructor(authService, route, clientInfoService) {
        this.authService = authService;
        this.route = route;
        this.clientInfoService = clientInfoService;
        this.postData = {
            year: '',
            month: '',
            member_id: ''
        };
    }
    ngOnInit() {
        //for getting parameters
        this.route.queryParams.subscribe(params => {
            this.postData.year = params["year"];
            this.postData.month = params["month"];
            //console.log(this.postData.year + this.postData.month + " parameter");
        });
        if (!this.postData.year) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            // console.log(this.newDate + this.newMonth + "current year");
        }
        this.clientInfoService.clientData$.subscribe((res) => {
            this.client_info = "";
            this.client_info = res.project_infos;
            // console.log(res.project_info);
        });
    }
    //get content
    getWorkReportDetailByEmpID() {
        this.postData.member_id = this.loginUser.email;
        if (this.postData.member_id) {
            this.clientInfoService.clientData(this.postData).subscribe((res) => {
                // console.log(res);
                this.clientInfoService.changeClientData(res);
                this.project_info = res.customer_work_report;
                this.indiv_contractid = res.project_info.project_infos[0];
                this.workingHour = res.work_report;
                this.workingPattern = res.project_info.working_hour;
                console.log(this.workingPattern);
                this.getContractTypeById(res.customer_work_report[0]['client_report_flg']);
                //this.working_hours = res.customer_work_report.project_info.working_hour;
            });
        }
    }
    getContractTypeById(contractId) {
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
            this.contractTypeName = "";
        }
    }
};
ClientinfoComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_3__["ClientinfoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClientinfoComponent.prototype, "loginUser", void 0);
ClientinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clientinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clientinfo/clientinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clientinfo.component.scss */ "./src/app/components/clientinfo/clientinfo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_clientinfo_service__WEBPACK_IMPORTED_MODULE_3__["ClientinfoService"]])
], ClientinfoComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed-card/feed-card.component */ "./src/app/components/feed-card/feed-card.component.ts");
/* harmony import */ var _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed-update/feed-update.component */ "./src/app/components/feed-update/feed-update.component.ts");
/* harmony import */ var _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeago/timeago.component */ "./src/app/components/timeago/timeago.component.ts");
/* harmony import */ var _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _member_info_member_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./member-info/member-info.component */ "./src/app/components/member-info/member-info.component.ts");
/* harmony import */ var _clientinfo_clientinfo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clientinfo/clientinfo.component */ "./src/app/components/clientinfo/clientinfo.component.ts");
/* harmony import */ var _workreport_detail_info_workreport_detail_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workreport-detail-info/workreport-detail-info.component */ "./src/app/components/workreport-detail-info/workreport-detail-info.component.ts");
/* harmony import */ var _customer_workreport_info_customer_workreport_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-workreport-info/customer-workreport-info.component */ "./src/app/components/customer-workreport-info/customer-workreport-info.component.ts");
/* harmony import */ var _transportation_expense_transportation_expense_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transportation-expense/transportation-expense.component */ "./src/app/components/transportation-expense/transportation-expense.component.ts");
/* harmony import */ var _workreport_search_workreport_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workreport-search/workreport-search.component */ "./src/app/components/workreport-search/workreport-search.component.ts");
/* harmony import */ var _logo_large_logo_large_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logo-large/logo-large.component */ "./src/app/components/logo-large/logo-large.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-guide/user-guide.component */ "./src/app/components/user-guide/user-guide.component.ts");






















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_4__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _logo_large_logo_large_component__WEBPACK_IMPORTED_MODULE_19__["LogoLargeComponent"], _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_8__["FeedCardComponent"], _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_9__["FeedUpdateComponent"], _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"], _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_11__["ExpandableComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _member_info_member_info_component__WEBPACK_IMPORTED_MODULE_13__["MemberInfoComponent"], _clientinfo_clientinfo_component__WEBPACK_IMPORTED_MODULE_14__["ClientinfoComponent"], _workreport_detail_info_workreport_detail_info_component__WEBPACK_IMPORTED_MODULE_15__["WorkreportDetailInfoComponent"], _customer_workreport_info_customer_workreport_info_component__WEBPACK_IMPORTED_MODULE_16__["CustomerWorkreportInfoComponent"],
            _transportation_expense_transportation_expense_component__WEBPACK_IMPORTED_MODULE_17__["TransportationExpenseComponent"], _workreport_search_workreport_search_component__WEBPACK_IMPORTED_MODULE_18__["WorkreportSearchComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FaqComponent"], _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_21__["UserGuideComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_4__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _logo_large_logo_large_component__WEBPACK_IMPORTED_MODULE_19__["LogoLargeComponent"], _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_8__["FeedCardComponent"], _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_9__["FeedUpdateComponent"], _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"], _expandable_expandable_component__WEBPACK_IMPORTED_MODULE_11__["ExpandableComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _member_info_member_info_component__WEBPACK_IMPORTED_MODULE_13__["MemberInfoComponent"], _clientinfo_clientinfo_component__WEBPACK_IMPORTED_MODULE_14__["ClientinfoComponent"], _workreport_detail_info_workreport_detail_info_component__WEBPACK_IMPORTED_MODULE_15__["WorkreportDetailInfoComponent"], _customer_workreport_info_customer_workreport_info_component__WEBPACK_IMPORTED_MODULE_16__["CustomerWorkreportInfoComponent"],
            _transportation_expense_transportation_expense_component__WEBPACK_IMPORTED_MODULE_17__["TransportationExpenseComponent"], _workreport_search_workreport_search_component__WEBPACK_IMPORTED_MODULE_18__["WorkreportSearchComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FaqComponent"], _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_21__["UserGuideComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/customer-workreport-info/customer-workreport-info.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/customer-workreport-info/customer-workreport-info.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXItd29ya3JlcG9ydC1pbmZvL2N1c3RvbWVyLXdvcmtyZXBvcnQtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/customer-workreport-info/customer-workreport-info.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/customer-workreport-info/customer-workreport-info.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomerWorkreportInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerWorkreportInfoComponent", function() { return CustomerWorkreportInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customer-workreport-info.service */ "./src/app/services/customer-workreport-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CustomerWorkreportInfoComponent = class CustomerWorkreportInfoComponent {
    constructor(authService, route, customerService, toastService) {
        this.authService = authService;
        this.route = route;
        this.customerService = customerService;
        this.toastService = toastService;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            customerName: '',
            projectName: '',
            contractPeriod: '',
            custWkReport: '',
            actWorkHour: ''
        };
        this.items = [];
        this.tran_expen = [];
        this.report_flgs = [];
    }
    ngOnInit() {
        //for getting parameters
        this.route.queryParams.subscribe(params => {
            this.postData.year = params["year"];
            this.postData.month = params["month"];
            //console.log(this.postData.year + this.postData.month + " parameter");
        });
        if (!this.postData.year) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            // console.log(this.newDate + this.newMonth + "current year");
        }
        /* this.customerService.customerData$.subscribe((res: any) => {
           console.log(res);
           this.customerWorkReport = res.customer_work_report[0];
           this.projectInfo = res.project_info.project_infos[0];
         }); */
        this.postData.member_id = this.loginUser.email;
        console.log(this.loginUser.member_id);
        this.customerService.getcustomerData(this.postData).subscribe((res) => {
            //dthis.customerWorkReport = res.customer_work_report[0];
            //this.projectInfo = res.project_info.project_infos[0];
            console.log(res);
        }, (error) => {
            this.toastService.presentToast('Network Issue.');
        });
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
    }
    doRefresh(event) {
        console.log('Begin async operation');
        // this.authService.userData$.subscribe((res: any) => {
        // this.authUser = res;
        // console.log(this.authUser);
        this.getWorkReportDetailByEmpID();
        event.target.complete();
        //});
        setTimeout(() => {
            console.log('Async operation has ended');
        }, 3000);
    }
    getWorkReportDetailByEmpID() {
        //console.log(this.loginUser);
        this.postData.member_id = this.loginUser.email;
        this.customerService.getcustomerData(this.postData).subscribe((res) => {
            this.customerWorkReport = res.customer_work_report[0];
            this.projectInfo = res.project_info.project_infos[0];
            console.log(res);
        }, (error) => {
            this.toastService.presentToast('Network Issue.');
        });
    }
};
CustomerWorkreportInfoComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_4__["CustomerWorkreportInfoService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CustomerWorkreportInfoComponent.prototype, "loginUser", void 0);
CustomerWorkreportInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-workreport-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-workreport-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer-workreport-info/customer-workreport-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-workreport-info.component.scss */ "./src/app/components/customer-workreport-info/customer-workreport-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_4__["CustomerWorkreportInfoService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
], CustomerWorkreportInfoComponent);



/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expandable-wrapper {\n  height: 0;\n  transition: height 0.3s;\n}\n\n.expanded {\n  height: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGFuZGFibGVcXGV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kYWJsZS13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xyXG59XHJcbi5leHBhbmRlZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmV4cGFuZGFibGUtd3JhcHBlciB7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG59XG5cbi5leHBhbmRlZCB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandableComponent = class ExpandableComponent {
    constructor() { }
    ngOnInit() {
        //console.log(this.expanded);
        // console.log(this.expandHeight);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ExpandableComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpandableComponent);



/***/ }),

/***/ "./src/app/components/faq/faq.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/faq/faq.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.bluegreen {\n  background-color: #cbe9ff;\n  border: 1px solid #77b3df;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.graylight {\n  background-color: #f8f9fb;\n  border: 0px solid #c6c6c7;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.whitebg {\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.datastyle {\n  font-size: 17px;\n  line-height: 25px;\n}\n\nh2 {\n  color: #37c3a7;\n}\n\n.remainer {\n  background-color: #ffe8a3;\n  border: 1px solid #d6d6d6;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.warning {\n  background-color: #f80a0a;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmFxXFxmYXEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWhlbHB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjYmU5ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG59XHJcblxyXG4uYmx1ZWdyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZTlmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3N2IzZGY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5ncmF5bGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZiO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2M2YzZjNztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLndoaXRlYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmRhdGFzdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5oMntcclxuICAgIGNvbG9yOiAjMzdjM2E3O1xyXG59XHJcblxyXG4ucmVtYWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGEzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4ud2FybmluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODBhMGE7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSIsIi5idG4taGVscCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcbn1cblxuLmJsdWVncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmU5ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3N2IzZGY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmdyYXlsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmI7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNmM2Yzc7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLndoaXRlYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5kYXRhc3R5bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMzdjM2E3O1xufVxuXG4ucmVtYWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGEzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MGEwYTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_faq_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/faq.service */ "./src/app/services/faq.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");






let FaqComponent = class FaqComponent {
    constructor(faqService, authService, langSwitch, langServe) {
        this.faqService = faqService;
        this.authService = authService;
        this.langSwitch = langSwitch;
        this.langServe = langServe;
        this.postData = {
            filename: 'faq',
            language: '',
            token: '',
            pages: ''
        };
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.authUser = res;
            this.postData.token = res['access-token'];
            //this.getUserGuide();
            this.languageDefault();
        });
    }
    languageDefault() {
        console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            console.log(this.postData.language, res, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'faq';
            this.langServe.languageData(this.postData).subscribe((res) => {
                console.log(res.data, ' work_report');
                this.userGuide = res.data;
            });
        });
    }
};
FaqComponent.ctorParameters = () => [
    { type: src_app_services_faq_service__WEBPACK_IMPORTED_MODULE_3__["FaqService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faqs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/faq/faq.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.component.scss */ "./src/app/components/faq/faq.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_faq_service__WEBPACK_IMPORTED_MODULE_3__["FaqService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
], FaqComponent);



/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".right {\n  float: right;\n}\n.right ion-icon {\n  font-size: 18px;\n}\nion-card-content p {\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkLWNhcmQvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmVlZC1jYXJkXFxmZWVkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC1jYXJkL2ZlZWQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0UsZUFBQTtBQ0VOO0FERUk7RUFDRSx5QkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWVkLWNhcmQvZmVlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgcHtcclxuICAgICAgY29sb3I6IzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iLCIucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.ts ***!
  \*************************************************************/
/*! exports provided: FeedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCardComponent", function() { return FeedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");




let FeedCardComponent = class FeedCardComponent {
    constructor(feedService, alert) {
        this.feedService = feedService;
        this.alert = alert;
        this.postData = {
            user_id: "",
            token: "",
            feed_id: ""
        };
    }
    ngOnInit() {
        this.feedService.feedData$.subscribe((res) => {
            this.feedData = res;
        });
    }
    feedDeleteAction(feedID, feedIndex) {
        this.postData.user_id = this.loginUser.user_id;
        this.postData.token = this.loginUser.token;
        this.postData.feed_id = feedID;
        //console.log(this.postData);
        this.alert.presentAlertConfirm("Delete feed", "Are you sure?").then((res) => {
            //console.log(res.role);
            if (res.role === 'okay') {
                this.makeFeedDelete(this.postData, feedIndex);
            }
            else {
            }
        });
    }
    makeFeedDelete(postData, feedIndex) {
        this.feedService.feedDelete(this.postData).subscribe((res) => {
            if (res.success) {
                console.log("change in feedData$ ");
                this.feedService.deleteFeedData(feedIndex);
            }
        });
    }
};
FeedCardComponent.ctorParameters = () => [
    { type: src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedCardComponent.prototype, "loginUser", void 0);
FeedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-card/feed-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-card.component.scss */ "./src/app/components/feed-card/feed-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
], FeedCardComponent);



/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC11cGRhdGUvZmVlZC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUpdateComponent", function() { return FeedUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");




let FeedUpdateComponent = class FeedUpdateComponent {
    constructor(feedService, toastService) {
        this.feedService = feedService;
        this.toastService = toastService;
        this.postData = {
            user_id: "",
            token: "",
            feed: ""
        };
    }
    ngOnInit() {
        console.log("hello");
    }
    validateInputs() {
        console.log(this.postData);
        let feed = this.postData.feed;
        return (this.postData.feed &&
            feed.length > 0);
    }
    feedUpdateAction() {
        this.postData.user_id = this.loginUser.user_id;
        this.postData.token = this.loginUser.token;
        if (this.validateInputs()) {
            this.feedService.feedUpdate(this.postData).subscribe((res) => {
                this.postData.feed = '';
                //console.log(res.feedData);
                this.feedService.updateFeedData(res.feedData);
            });
        }
        else {
            this.toastService.presentToast("feed can't empty");
        }
    }
};
FeedUpdateComponent.ctorParameters = () => [
    { type: src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedUpdateComponent.prototype, "loginUser", void 0);
FeedUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed-update/feed-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed-update.component.scss */ "./src/app/components/feed-update/feed-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
], FeedUpdateComponent);



/***/ }),

/***/ "./src/app/components/logo-large/logo-large.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/logo-large/logo-large.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-display {\n  width: 100%;\n  margin: 0 15px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvLWxhcmdlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ28tbGFyZ2VcXGxvZ28tbGFyZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby1sYXJnZS9sb2dvLWxhcmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUFhLGtCQUFBO0FDRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvLWxhcmdlL2xvZ28tbGFyZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1kaXNwbGF5e1xyXG4gICAgd2lkdGg6IDEwMCU7IG1hcmdpbjogMCAxNXB4IDAgMDtcclxufSIsIi5sb2dvLWRpc3BsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/logo-large/logo-large.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/logo-large/logo-large.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoLargeComponent", function() { return LogoLargeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoLargeComponent = class LogoLargeComponent {
    constructor() { }
    ngOnInit() { }
};
LogoLargeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo-large',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo-large.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo-large/logo-large.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo-large.component.scss */ "./src/app/components/logo-large/logo-large.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoLargeComponent);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 330px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDMzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoComponent);



/***/ }),

/***/ "./src/app/components/member-info/member-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/member-info/member-info.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fontstyle {\n  font-weight: 600;\n}\n\n.statusVal {\n  color: #feac4b;\n}\n\n.nextview-blk {\n  padding: 5px;\n  border: 1px solid #6cd4c0;\n  margin: 15px;\n  border-radius: 20px;\n  background: #f2fffd;\n}\n\n.bd1-color {\n  border: 1px solid #3ea0e6;\n  border-radius: 10px;\n  font-size: 17px;\n  padding: 12px 5px 12px 5px;\n  color: #707070;\n  margin-top: 0;\n  text-transform: capitalize;\n}\n\n.borderOnewidth {\n  border: 1px solid #eeeeee;\n  border-radius: 8px;\n  max-width: 100%;\n  box-shadow: 1px 1px 1px 1px rgba(238, 238, 238, 0.5);\n}\n\n.alertview-blk {\n  padding: 5px;\n  border: 1px solid #ffaa46;\n  margin: 15px 15px 40px 15px;\n  border-radius: 20px;\n  background: #fff9f2;\n}\n\n.filter-blk {\n  padding: 5px;\n  border: 1px solid #f0f0f0;\n  margin: 15px;\n  border-radius: 20px;\n}\n\n.date-container {\n  /* background: #d6f2ec; */\n  border: 1px solid #f0f0f0;\n  margin: 15px;\n  border-radius: 20px;\n  padding: 0;\n}\n\n.textcenter {\n  text-align: center;\n}\n\n.total-container {\n  border-top: 1px dashed #000000;\n  margin: 15px;\n  padding-top: 15px;\n}\n\n.date-gray-container {\n  background: #f2f2f2;\n  border: 1px solid #f0f0f0;\n  margin: 15px;\n  border-radius: 20px;\n  padding: 0px;\n}\n\n.date-weekend-container {\n  background: #e3e3e3;\n  border: 1px solid #f0f0f0;\n  margin: 15px;\n  border-radius: 20px;\n  padding: 0px;\n}\n\n.date-white-container {\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n  margin: 15px;\n  border-radius: 20px;\n  padding: 0px;\n}\n\n.datetitle {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #7f7270;\n}\n\n.hideclass {\n  display: none;\n}\n\n.dropdownstyle {\n  border: 1px solid #e4e4e4;\n  color: #707070;\n  padding: 5px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.textcenter {\n  text-align: center;\n}\n\n/* .round {\n    --width: 84px;\n    height: 43px;\n    --border-radius: 10px;\n    --vertical-align: middle;\n    --padding-start: 15px;\n    --padding-end: 15px;\n    --background-color: #ffffff;\n    font-size: 20px;\n} */\n\n.bd1-color {\n  border: 1px solid #2ec1a3;\n  border-radius: 10px;\n  background-color: #ffffff;\n  font-size: 0.9rem;\n  padding: 8px 5px 8px 5px;\n  color: #2ec1a3;\n  margin-bottom: 10px;\n}\n\n.icon-style {\n  color: #2ec1a3;\n  font-size: 17px;\n  margin: 1px 5px -3px 16px;\n}\n\n.btn-container {\n  margin: 15px;\n}\n\n.worktime {\n  border: 1px solid #e4e4e4;\n  text-align: center;\n  color: #707070;\n  padding: 5px;\n}\n\n.del-btn {\n  border: 1px solid #feaa48;\n  color: #feaa48;\n  border-radius: 8px;\n}\n\n.addnewblg {\n  text-align: center;\n  color: #7f7270;\n  width: 100%;\n}\n\n.bg-bluelight {\n  background: #d6f2ec;\n}\n\n.bg-bluedark {\n  background: #37c3a7;\n}\n\n.add-transport-btn {\n  border: 1px solid #9f9f9f;\n  color: #000000;\n  border-radius: 8px;\n  font-size: 1rem;\n  margin: 15px 0;\n  text-transform: capitalize;\n}\n\n.borderRadius {\n  border-radius: 8px !important;\n}\n\n.date-blk {\n  background: #d6f2ec;\n  padding: 5px;\n}\n\n.customer-blk {\n  background: #ffffff;\n  padding: 5px;\n}\n\n.date-gray-blk {\n  background: #f2f2f2;\n  padding: 5px;\n}\n\n.date-weekend-blk {\n  background: #e3e3e3;\n  padding: 5px;\n}\n\n.date-white-blk {\n  background: #ffffff;\n  border-bottom: 1px solid #ebebeb;\n  padding: 5px;\n}\n\n.detail-box {\n  margin: 0 15px 0 15px;\n}\n\n.total-blk {\n  padding: 15px;\n  font-size: 1.15rem;\n  background: #ffffff;\n}\n\n.total-close-blk {\n  padding: 15px;\n  font-size: 1.15rem;\n  background: #ffffff;\n  display: none;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 3px;\n  --padding-end: 10px;\n  --padding-bottom: 3px;\n  --padding-start: 0;\n  font-size: inherit;\n  border-radius: 5px;\n}\n\n.bottomline {\n  border-bottom: 2px dashed #717070;\n  margin: 0 15px;\n}\n\n.link-pages {\n  font-size: 21px;\n  color: #717070;\n  font-weight: 500;\n  background: #f2fffd;\n  font-size: 1.2rem;\n}\n\n.alert-blk {\n  font-size: 19px;\n  color: #717070;\n  font-weight: 500;\n  background: #fff9f2;\n  font-size: 1.2rem;\n  line-height: 23px;\n}\n\nul.checklist {\n  list-style-type: none;\n  margin: 0 0 0 11px;\n  padding: 0;\n  width: 100%;\n}\n\n.checklist li {\n  list-style: none;\n  float: left;\n  padding: 9px;\n  vertical-align: middle;\n  font-size: 16.3px;\n}\n\n.checkbox-style {\n  width: 17px;\n  height: 17px;\n}\n\n.filter-pages {\n  font-size: 21px;\n  color: #717070;\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 0px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px 12px 8px 0;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.middlewidth {\n  min-width: 200px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.btn-style {\n  border: 1px solid #707070;\n  background-color: #ffffff;\n  padding: 8px;\n  min-width: 150px;\n  border-radius: 20px;\n  font-size: 1.2rem;\n  color: #707070;\n  font-weight: lighter;\n}\n\n.active {\n  border: 1px solid #18bc9c;\n  color: #4fc2a8;\n}\n\n.showDate {\n  text-align: center;\n  font-size: 1rem;\n  border-top: 1px dashed #000;\n  padding: 5px 5px 0 5px;\n  color: #777071;\n}\n\n.dropdown::-webkit-input-placeholder {\n  /* Edge */\n  color: red;\n  --placeholder-color: #000000 !important;\n}\n\n.dropdown::-moz-placeholder {\n  color: red;\n  --placeholder-color: #000000 !important;\n}\n\n.dropdown::-ms-input-placeholder {\n  color: red;\n  --placeholder-color: #000000 !important;\n}\n\n.dropdown::placeholder {\n  color: red;\n  --placeholder-color: #000000 !important;\n}\n\n.select-ios .select-placeholder {\n  color: #000;\n  font-size: 15px;\n}\n\nion-select {\n  --opacity: 1 !important;\n  --placeholder-color: #000000 !important;\n}\n\n.has-error {\n  color: red;\n  font-size: 13px;\n}\n\n.ftbtnColor {\n  background-color: #6fd3bf;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #6fd3bf;\n  width: 90%;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.ftbtngrayColor {\n  background-color: #2d9f88;\n  border-radius: 13px;\n  margin: 5px auto;\n  border: 1px solid #2d9f88;\n  width: 95%;\n  color: #ffffff;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n}\n\n.footerbar {\n  background: #37c3a7;\n}\n\n.file-input {\n  top: 0;\n  left: 0;\n  width: 400px;\n  height: 50px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW1iZXItaW5mby9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW1iZXItaW5mb1xcbWVtYmVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVtYmVyLWluZm8vbWVtYmVyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLG9EQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0cseUJBQUE7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUNJLGFBQUE7QUNPSjs7QURKQTtFQUNJLHlCQUFBO0VBQTJCLGNBQUE7RUFBZ0IsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGtCQUFBO0FDV2pGOztBRFJBO0VBQ0ksa0JBQUE7QUNXSjs7QURSQTs7Ozs7Ozs7O0dBQUE7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVUo7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDVUo7O0FEUEE7RUFDSSxZQUFBO0FDVUo7O0FEUEE7RUFDSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLFlBQUE7QUNhbkU7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2FKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2FKOztBRFZBO0VBQ0ksbUJBQUE7QUNhSjs7QURWQTtFQUNJLG1CQUFBO0FDYUo7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNhSjs7QURWQTtFQUNJLDZCQUFBO0FDYUo7O0FEVkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ2lCSjs7QURmQTtFQUNJLHFCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbUJKOztBRGpCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ29CSjs7QURsQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNxQko7O0FEbEJBO0VBQ0ksaUNBQUE7RUFDQSxjQUFBO0FDcUJKOztBRGxCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNzQko7O0FEcEJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDdUJKOztBRHBCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDdUJKOztBRHBCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDdUJKOztBRHBCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3VCSjs7QURwQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ3VCSjs7QURwQkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDdUJKOztBRHBCRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUN1Qko7O0FEcEJFO0VBQ0UsZ0JBQUE7QUN1Qko7O0FEckJFO0VBQ0UsZ0JBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsV0FBQTtBQ3lCSjs7QUR0QkE7RUFBbUIseUJBQUE7QUMwQm5COztBRHhCQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDMkJKOztBRHhCQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQzJCSjs7QUR4QkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQzJCSjs7QUR4QkE7RUFBdUMsU0FBQTtFQUNuQyxVQUFBO0VBQ0EsdUNBQUE7QUM0Qko7O0FEcEJBO0VBQ0ksVUFBQTtFQUNBLHVDQUFBO0FDNkJKOztBRC9CQTtFQUNJLFVBQUE7RUFDQSx1Q0FBQTtBQzZCSjs7QUQvQkE7RUFDSSxVQUFBO0VBQ0EsdUNBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUM4Qko7O0FENUJBO0VBQ0ksdUJBQUE7RUFDQSx1Q0FBQTtBQytCSjs7QUQ1QkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQytCSjs7QUQ1QkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDK0JKOztBRDdCQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDZ0NKOztBRDdCQTtFQUNJLG1CQUFBO0FDZ0NKOztBRDlCQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2lDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVtYmVyLWluZm8vbWVtYmVyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udHN0eWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3RhdHVzVmFse1xyXG4gICAgY29sb3I6ICNmZWFjNGI7XHJcbn1cclxuLm5leHR2aWV3LWJsa3tcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Y2Q0YzA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZmZmZDtcclxufVxyXG5cclxuLmJkMS1jb2xvciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEycHggNXB4IDEycHggNXB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5ib3JkZXJPbmV3aWR0aHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDIzOCwyMzgsMjM4LDAuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDIzOCwyMzgsMjM4LDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyMzgsMjM4LDIzOCwwLjUpO1xyXG4gIH1cclxuXHJcbi5hbGVydHZpZXctYmxre1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWE0NjtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4IDQwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOWYyO1xyXG59XHJcblxyXG4uZmlsdGVyLWJsa3tcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZGF0ZS1jb250YWluZXIge1xyXG4gICAvKiBiYWNrZ3JvdW5kOiAjZDZmMmVjOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dGNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3RhbC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmRhdGUtZ3JheS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5kYXRlLXdlZWtlbmQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZGF0ZS13aGl0ZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5kYXRldGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzdmNzI3MDtcclxufVxyXG5cclxuLmhpZGVjbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd25zdHlsZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0OyBjb2xvcjogIzcwNzA3MDsgcGFkZGluZzogNXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRleHRjZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAucm91bmQge1xyXG4gICAgLS13aWR0aDogODRweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0gKi9cclxuXHJcbi5iZDEtY29sb3Ige1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlYzFhMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDhweCA1cHg7XHJcbiAgICBjb2xvcjogIzJlYzFhMztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXN0eWxle1xyXG4gICAgY29sb3I6ICMyZWMxYTM7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDFweCA1cHggLTNweCAxNnB4O1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi53b3JrdGltZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICM3MDcwNzA7IHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRlbC1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlYWE0ODtcclxuICAgIGNvbG9yOiAjZmVhYTQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYWRkbmV3YmxnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjN2Y3MjcwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iZy1ibHVlbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZjJlYztcclxufVxyXG5cclxuLmJnLWJsdWVkYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMzN2MzYTc7XHJcbn1cclxuXHJcbi5hZGQtdHJhbnNwb3J0LWJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYm9yZGVyUmFkaXVzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZS1ibGsge1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZjJlYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY3VzdG9tZXItYmxrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmRhdGUtZ3JheS1ibGsge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZGF0ZS13ZWVrZW5kLWJsayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5kYXRlLXdoaXRlLWJsayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmRldGFpbC1ib3gge1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMCAxNXB4O1xyXG59XHJcbi50b3RhbC1ibGsge1xyXG4gICAgcGFkZGluZzogMTVweDsgXHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi50b3RhbC1jbG9zZS1ibGt7XHJcbiAgICBwYWRkaW5nOiAxNXB4OyBcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zYy1pb24taW5wdXQtaW9zLWh7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYm90dG9tbGluZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICM3MTcwNzA7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5cclxuLmxpbmstcGFnZXN7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogIzcxNzA3MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmZmZkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuLmFsZXJ0LWJsa3tcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjNzE3MDcwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY5ZjI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG59XHJcbnVsLmNoZWNrbGlzdHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwIDAgMTFweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoZWNrbGlzdCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAxNi4zcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1zdHlsZSB7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxufVxyXG5cclxuLmZpbHRlci1wYWdlc3tcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGNvbG9yOiAjNzE3MDcwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweCA4cHggMDtcclxuICB9XHJcblxyXG4gIC5taW53aWR0aHtcclxuICAgIG1pbi13aWR0aDogMTM1cHg7XHJcbiAgfVxyXG4gIC5taWRkbGV3aWR0aHtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5maXJzdFdpZHRoe1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9XHJcblxyXG4uYnRuLXN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE4YmM5YztcclxuICAgIGNvbG9yOiAjNGZjMmE4O1xyXG59XHJcblxyXG4uc2hvd0RhdGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMwMDA7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDAgNXB4O1xyXG4gICAgY29sb3I6ICM3NzcwNzE7XHJcbn1cclxuXHJcbi5kcm9wZG93bjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3QtaW9zIC5zZWxlY3QtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICAgIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGFzLWVycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmZ0YnRuQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmZkM2JmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmZkM2JmO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmZ0YnRuZ3JheUNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkOWY4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJkOWY4ODtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5mb290ZXJiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM3YzNhNztcclxufVxyXG4uZmlsZS1pbnB1dHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iLCIuZm9udHN0eWxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN0YXR1c1ZhbCB7XG4gIGNvbG9yOiAjZmVhYzRiO1xufVxuXG4ubmV4dHZpZXctYmxrIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmNkNGMwO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmZmZmQ7XG59XG5cbi5iZDEtY29sb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmc6IDEycHggNXB4IDEycHggNXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ib3JkZXJPbmV3aWR0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC41KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC41KTtcbn1cblxuLmFsZXJ0dmlldy1ibGsge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFhNDY7XG4gIG1hcmdpbjogMTVweCAxNXB4IDQwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjlmMjtcbn1cblxuLmZpbHRlci1ibGsge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmRhdGUtY29udGFpbmVyIHtcbiAgLyogYmFja2dyb3VuZDogI2Q2ZjJlYzsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGV4dGNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmRhdGUtZ3JheS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmRhdGUtd2Vla2VuZC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmRhdGUtd2hpdGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kYXRldGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3ZjcyNzA7XG59XG5cbi5oaWRlY2xhc3Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcGRvd25zdHlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGV4dGNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogLnJvdW5kIHtcbiAgICAtLXdpZHRoOiA4NHB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59ICovXG4uYmQxLWNvbG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJlYzFhMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDhweCA1cHggOHB4IDVweDtcbiAgY29sb3I6ICMyZWMxYTM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uLXN0eWxlIHtcbiAgY29sb3I6ICMyZWMxYTM7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAxcHggNXB4IC0zcHggMTZweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi53b3JrdGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRlbC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVhYTQ4O1xuICBjb2xvcjogI2ZlYWE0ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYWRkbmV3YmxnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzdmNzI3MDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZy1ibHVlbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZDZmMmVjO1xufVxuXG4uYmctYmx1ZWRhcmsge1xuICBiYWNrZ3JvdW5kOiAjMzdjM2E3O1xufVxuXG4uYWRkLXRyYW5zcG9ydC1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZjlmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMTVweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJvcmRlclJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZS1ibGsge1xuICBiYWNrZ3JvdW5kOiAjZDZmMmVjO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jdXN0b21lci1ibGsge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kYXRlLWdyYXktYmxrIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZGF0ZS13ZWVrZW5kLWJsayB7XG4gIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRhdGUtd2hpdGUtYmxrIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRldGFpbC1ib3gge1xuICBtYXJnaW46IDAgMTVweCAwIDE1cHg7XG59XG5cbi50b3RhbC1ibGsge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi50b3RhbC1jbG9zZS1ibGsge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zYy1pb24taW5wdXQtaW9zLWgge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJvdHRvbWxpbmUge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICM3MTcwNzA7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4ubGluay1wYWdlcyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICM3MTcwNzA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6ICNmMmZmZmQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYWxlcnQtYmxrIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzcxNzA3MDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjlmMjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG51bC5jaGVja2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMCAwIDAgMTFweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVja2xpc3QgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE2LjNweDtcbn1cblxuLmNoZWNrYm94LXN0eWxlIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbn1cblxuLmZpbHRlci1wYWdlcyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICM3MTcwNzA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNkZGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDA7XG59XG5cbi5taW53aWR0aCB7XG4gIG1pbi13aWR0aDogMTM1cHg7XG59XG5cbi5taWRkbGV3aWR0aCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5maXJzdFdpZHRoIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5idG4tc3R5bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMThiYzljO1xuICBjb2xvcjogIzRmYzJhODtcbn1cblxuLnNob3dEYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzAwMDtcbiAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcbiAgY29sb3I6ICM3NzcwNzE7XG59XG5cbi5kcm9wZG93bjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEVkZ2UgKi9cbiAgY29sb3I6IHJlZDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd246LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6IHJlZDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd246OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJlZDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWlvcyAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5oYXMtZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mdGJ0bkNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZDNiZjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzZmZDNiZjtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZnRidG5ncmF5Q29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5Zjg4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmQ5Zjg4O1xuICB3aWR0aDogOTUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZm9vdGVyYmFyIHtcbiAgYmFja2dyb3VuZDogIzM3YzNhNztcbn1cblxuLmZpbGUtaW5wdXQge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/member-info/member-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/member-info/member-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemberInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberInfoComponent", function() { return MemberInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/member-info.service */ "./src/app/services/member-info.service.ts");
/* harmony import */ var src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/customer-workreport-info.service */ "./src/app/services/customer-workreport-info.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_workreport_download_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/workreport-download.service */ "./src/app/services/workreport-download.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















let MemberInfoComponent = class MemberInfoComponent {
    constructor(authService, customerInfo, memberService, route, router, langServe, langSwitch, fb, toastService, tmplCompiler, wkDownloadExcel, http, sanitizer, httpp) {
        this.authService = authService;
        this.customerInfo = customerInfo;
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.langServe = langServe;
        this.langSwitch = langSwitch;
        this.fb = fb;
        this.toastService = toastService;
        this.tmplCompiler = tmplCompiler;
        this.wkDownloadExcel = wkDownloadExcel;
        this.http = http;
        this.sanitizer = sanitizer;
        this.httpp = httpp;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            token: '',
            idname: '',
            mySelect: '',
            mySelect2: '',
            language: '',
            pages: '',
            custom_bill: '',
            custom_total: '',
            account: '',
            workreport_id: '',
            short_comp: ''
        };
        this.clientData = {
            client_id: '',
            client_name: '',
            client_report_flg: '',
            contract_type: '',
            end_contract_date: '',
            individual_contract_id: '',
            individual_contract_no: '',
            max_width_time: '',
            member_name: '',
            member_no_str: '',
            min_width_time: '',
            project_id: '',
            project_name: '',
            start_contract_date: '',
            status: '',
            unit_name: ''
        };
        this.nextClicked = 0;
        this.panelOpenState = false;
        this.items = [];
        this.tran_expen = [];
        this.tran_expen_jp = [];
        this.own_depart = [];
        this.itemExpandedHeight = 200;
        this.showDetails = false;
        this.customerSelectOpt = 1;
        this.customerSelectOpt2 = 1;
        this.trasport_switch = false;
        this.customer_switch = false;
        this.customer_switch2 = false;
        this.workreport_switch = true;
        this.settle_switch = false;
        this.notEnter = false;
        this.weekEnd = false;
        this.entered = false;
        this.notEnterMsg = true;
        this.current_value = 0;
        this.submitted = false;
        this.route_type_jp = [];
        this.res_total = 0;
        this.default_wktime = 0;
        this.fileName_dly = 0;
        this.totalWkHour = 0;
        this.workReportForm = this.fb.group({
            member_info: this.fb.array([]),
            /* customer_info: this.fb.group({
              client_report_flg: ['', [Validators.required]],
              mng_clt_total_work_time: [''],
              individual_contract_id: ['', [Validators.required]],
              customerwkReport: this.fb.array([])
            }), */
            work_report: this.fb.array([]),
            customer_work_report: this.fb.array([]),
            customer_work_report_detail: this.fb.array([]),
            customer_work_report_detail2: this.fb.array([]),
            daily_transportation_id: '',
            transport_expense_detail: this.fb.array([]),
            project_info: this.fb.array([]),
            work_report_detail: this.fb.array([]),
            expense_report_detail: this.fb.array([]),
            expense_report_id: '',
            customer_report_file: this.fb.array([])
        });
        this.myUploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    }
    ngOnInit() {
        //for getting parameters
        this.route.queryParams.subscribe(params => {
            this.postData.year = params["year"];
            this.postData.month = params["month"];
            this.clientData.client_id = params['client_id'];
            this.clientData.client_name = params['client_name'];
            this.clientData.client_report_flg = params['client_report_flg'];
            this.clientData.contract_type = params['contract_type'];
            this.clientData.end_contract_date = params['end_contract_date'];
            this.clientData.start_contract_date = params['start_contract_date'];
            this.clientData.individual_contract_id = params['individual_contract_id'];
            this.clientData.individual_contract_no = params['individual_contract_no'];
            this.clientData.max_width_time = params['max_width_time'];
            this.clientData.member_no_str = params['member_no_str'];
            this.clientData.min_width_time = params['min_width_time'];
            this.clientData.project_id = params['project_id'];
            this.clientData.project_name = params['project_name'];
            this.clientData.status = params['status'];
            this.clientData.unit_name = params['unit_name'];
            console.log(params['client_name'], "parameter");
            //to display the selected tab
            this.changeDisplayClick(params["tabs"]);
        });
        if (!this.validateInputs()) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            //console.log(this.newDate + this.newMonth + "mb info");
        }
        //dropDownSwitch();
        this.authService.userData$.subscribe((res) => {
            //console.log(res);
            this.displayUserData = res;
            this.postData.member_id = this.displayUserData['member_id'];
            this.postData.token = this.displayUserData['access-token'];
            this.postData.account = this.displayUserData['name'];
            this.postData.short_comp = this.displayUserData['company'];
        });
        //this.tmplCompiler.clearCache();
        this.searchWkReportAction();
        this.items = [
            { expanded: false },
            { expanded: false }
        ];
        this.route_type = [
            {
                id: 0,
                value: 'One-Way'
            },
            {
                id: 1,
                value: 'Round-Trip'
            }
        ];
        this.route_type_jp = [
            {
                id: 0,
                value: '片道'
            },
            {
                id: 1,
                value: '往復'
            }
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
        this.tran_expen_jp = [
            {
                id: 0,
                value: '無'
            },
            {
                id: 1,
                value: '有'
            }
        ];
        this.deman_type = [
            {
                id: 0,
                value: 'in house'
            },
            {
                id: 1,
                value: 'Customer'
            }
        ];
        this.deman_type_jp = [
            {
                id: 0,
                value: '社内請求'
            },
            {
                id: 1,
                value: '客先請求'
            }
        ];
        this.transporation = [
            {
                id: 0,
                value: '-'
            },
            {
                id: 1,
                value: 'Bus'
            },
            {
                id: 2,
                value: 'Train'
            },
            {
                id: 3,
                value: 'Taxi'
            },
            {
                id: 4,
                value: 'Air plane'
            },
            {
                id: 5,
                value: 'Other'
            }
        ];
        this.transporationjp = [
            {
                id: 0,
                value: '-'
            },
            {
                id: 1,
                value: 'バス'
            },
            {
                id: 2,
                value: '電車'
            },
            {
                id: 3,
                value: 'タクシー'
            },
            {
                id: 4,
                value: '飛行機'
            },
            {
                id: 5,
                value: 'その他'
            }
        ];
        this.checkBoxList = [
            { val: 'Work hour not entered', isChecked: false },
            { val: 'Weekend', isChecked: false },
            { val: 'All', isChecked: true }
        ];
        this.checkBoxListjp = [
            { val: '入力されていません', isChecked: false },
            { val: '週末', isChecked: false },
            { val: 'すべて', isChecked: true }
        ];
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
        this.attendance_type_jp = [
            {
                id: 0,
                value: '-'
            },
            {
                id: 1,
                value: '公休日'
            },
            {
                id: 2,
                value: 'シフト休'
            },
            {
                id: 3,
                value: '有休'
            },
            {
                id: 4,
                value: '半休'
            },
            {
                id: 5,
                value: '欠勤'
            },
            {
                id: 6,
                value: '遅刻'
            },
            {
                id: 7,
                value: '早退'
            },
            {
                id: 8,
                value: '特休'
            },
            {
                id: 9,
                value: '休日出勤'
            },
            {
                id: 10,
                value: '振休'
            },
            {
                id: 11,
                value: 'その他'
            }
        ];
        this.own_depart = [
            { id: 0,
                value: 'Not prducted'
            },
            { id: 1,
                value: 'Not applied'
            },
            { id: 2,
                value: 'Applied'
            },
            { id: 3,
                value: 'Remand'
            },
            { id: 4,
                value: 'Accepted'
            }
        ];
        this.yearlist = [
            { id: 0,
                value: 2010
            },
            { id: 1,
                value: 2011
            },
            { id: 2,
                value: 2012
            },
            { id: 3,
                value: 2013
            },
            { id: 4,
                value: 2014
            },
            { id: 5,
                value: 2015
            },
            { id: 6,
                value: 2016
            },
            { id: 7,
                value: 2017
            },
            { id: 8,
                value: 2018
            },
            { id: 9,
                value: 2019
            },
            { id: 10,
                value: 2020
            },
            { id: 11,
                value: 2021
            },
            { id: 12,
                value: 2022
            },
            { id: 13,
                value: 2023
            },
            { id: 14,
                value: 2024
            },
            { id: 15,
                value: 2025
            },
            { id: 16,
                value: 2026
            },
            { id: 17,
                value: 2027
            },
            { id: 18,
                value: 2028
            },
            { id: 19,
                value: 2029
            },
            { id: 20,
                value: 2030
            }
        ];
        this.monthlist = [
            { id: 1,
                value: 1
            },
            { id: 2,
                value: 2
            },
            { id: 3,
                value: 3
            },
            { id: 4,
                value: 4
            },
            { id: 5,
                value: 5
            },
            { id: 6,
                value: 6
            },
            { id: 7,
                value: 7
            },
            { id: 8,
                value: 8
            },
            { id: 9,
                value: 9
            },
            { id: 10,
                value: 10
            },
            { id: 11,
                value: 11
            },
            { id: 12,
                value: 12
            }
        ];
        this.languageDefault();
    }
    //read only formarray
    get project_info() {
        return this.workReportForm.get("project_info");
    }
    //read only formarrayproject_info: this.fb.array([]),
    get working_pattern() {
        return this.workReportForm.get("working_pattern");
    }
    //read only formarray work_report_detail
    get work_report_detail() {
        return this.workReportForm.get("work_report_detail");
    }
    //read only formarray expense_report_detail
    get expense_report_detail() {
        return this.workReportForm.get("expense_report_detail");
    }
    //read only formarray
    get member_info() {
        return this.workReportForm.get("member_info");
    }
    //read only formarraywork_report
    get work_report() {
        return this.workReportForm.get("work_report");
    }
    //read only formarrayfilesource
    get fpdf() {
        return this.myUploadForm.controls;
    }
    //read only formarray
    get transport_expense_detail() {
        return this.workReportForm.get("transport_expense_detail");
    }
    //read only formarray
    get customer_work_report_detail() {
        return this.workReportForm.get("customer_work_report_detail");
    }
    //read only formarray
    get customer_work_report_detail2() {
        return this.workReportForm.get("customer_work_report_detail2");
    }
    //read only formarray
    get customerwkReport() {
        return this.workReportForm.get("customer_info.customerwkReport");
    }
    newTranExpense() {
        return this.fb.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            demand_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            daily_transportation_detail_id: '',
            destination: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            from_area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            print_flg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            rourte_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            to_area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            transport_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            use_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
        });
    }
    newSettleExpense() {
        return this.fb.group({
            ex_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            ex_attendee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            ex_payee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            ex_purpose: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            ex_receipt_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            ex_use_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            expense_report_detail_id: ''
        });
    }
    addTranExpense() {
        this.transport_expense_detail.push(this.newTranExpense());
    }
    addSettleExpense() {
        this.expense_report_detail.push(this.newSettleExpense());
    }
    removeTranExpense(t) {
        this.transport_expense_detail.removeAt(t);
        let customerBill = 0;
        let customTotal = 0;
        for (let i = 0; i < this.tranExpen.transport_expense_detail.length; i++) {
            if (this.tranExpen.transport_expense_detail[i].demand_type == 1) {
                if (i != t) {
                    customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
                }
            }
            //transporation all total
            if (i != t) {
                customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
            }
        }
        this.postData.custom_bill = "";
        this.postData.custom_total = "";
        var newCustomBill = customerBill;
        var newCustomToal = customTotal;
        this.postData.custom_bill = newCustomBill.toString();
        this.postData.custom_total = newCustomToal.toString();
    }
    removeSettleExpense(i) {
        this.expense_report_detail.removeAt(i);
    }
    selectedValueTran(id = '', lang = '') {
        if (id == '') {
            return '';
        }
        else {
            if (lang == 'en')
                return this.transporation[id].value;
            else
                return this.transporationjp[id].value;
        }
    }
    selectedValueAttendance(id = '', lang = '') {
        //console.log(id, lang, "select attendance");
        if (id == '') {
            return '';
        }
        else {
            if (lang == 'en')
                return this.attendance_type[id].value;
            else
                return this.attendance_type_jp[id].value;
        }
    }
    selectedValueYesNo(id = 0, lang = '') {
        if (Object(util__WEBPACK_IMPORTED_MODULE_10__["isString"])(id)) {
            return '';
        }
        else {
            if (lang == 'en')
                return this.tran_expen[id].value;
            else
                return this.tran_expen_jp[id].value;
        }
    }
    selectedValueBilling(id = 0, lang = '') {
        //console.log(typeof(id), id, "what is ?");
        if (Object(util__WEBPACK_IMPORTED_MODULE_10__["isString"])(id)) {
            return '';
        }
        else {
            if (lang == 'en') {
                return this.deman_type[id].value;
            }
            else {
                return this.deman_type_jp[id].value;
            }
        }
    }
    customerBillTotal(total = 0) {
        console.log(total, "total ");
        this.res_total += total;
        return this.res_total;
    }
    getCustomerBilling() {
        this.sample = 0;
        this.sample = document.getElementById("customerBilling").value;
        console.log(this.sample, "get value by id");
        return this.sample;
    }
    selectedValueRoute(id = 0, lang = '') {
        if (Object(util__WEBPACK_IMPORTED_MODULE_10__["isString"])(id)) {
            return '';
        }
        else {
            if (lang == 'en')
                return this.route_type[id].value;
            else
                return this.route_type_jp[id].value;
        }
    }
    validateInputs() {
        return (this.postData.year &&
            this.postData.month);
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            //console.log(this.postData.language, 'assign');
            //this.pubHoliday = '祝日';
            if (!this.postData.language) {
                this.postData.language = 'en';
                // this.pubHoliday = 'Public holiday';
                //console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'work_report';
            this.langServe.languageData(this.postData).subscribe((res) => {
                console.log(res.data, ' work_report language');
                this.dataLeng = res.data;
            });
        });
    }
    onOptionsSelected(event) {
        //const value = event.target.value;
        //this.selected = value;
        this.customerSelectOpt = event;
        console.log(event, "Customer Attendance list 1");
    }
    onOptionsSelected2(event) {
        //const value = event.target.value;
        //this.selected = value;
        this.customerSelectOpt2 = event;
        console.log(event);
    }
    onClickDays(choice) {
        if (choice == 0) {
            this.checkBoxList = [
                { val: 'Work hour not entered', isChecked: true },
                { val: 'Weekend', isChecked: false },
                { val: 'All', isChecked: false }
            ];
            //Display not entered
            this.notEnter = false;
            this.weekEnd = true;
            this.entered = true;
            this.notEnterMsg = false;
        }
        else if (choice == 1) {
            this.checkBoxList = [
                { val: 'Work hour not entered', isChecked: false },
                { val: 'Weekend', isChecked: true },
                { val: 'All', isChecked: false }
            ];
            //Display weekend
            this.notEnter = true;
            this.weekEnd = false;
            this.entered = true;
            this.notEnterMsg = true;
        }
        else {
            this.checkBoxList = [
                { val: 'Work hour not entered', isChecked: false },
                { val: 'Weekend', isChecked: false },
                { val: 'All', isChecked: true }
            ];
            //Display not entered
            this.notEnter = false;
            this.weekEnd = false;
            this.entered = false;
            this.notEnterMsg = true;
        }
        //console.log(choice);
    }
    scrolltoElement(placetogo) {
        document.getElementById(placetogo).scrollIntoView();
        console.log(this.postData.mySelect + " and assign");
    }
    myToggleFunction(ID, index) {
        var x = document.getElementById(ID);
        var d = document.getElementById("down" + index);
        var p = document.getElementById("up" + index);
        if (x.style.display === "none") {
            x.style.display = "block";
            d.style.display = "none";
            p.style.display = "block";
        }
        else {
            x.style.display = "none";
            d.style.display = "block";
            p.style.display = "none";
        }
    }
    myWkToggleFunction(ID, index) {
        var x = document.getElementById(ID);
        var d = document.getElementById("wkdown" + index);
        var p = document.getElementById("wkup" + index);
        if (x.style.display === "none") {
            x.style.display = "block";
            d.style.display = "none";
            p.style.display = "block";
        }
        else {
            x.style.display = "none";
            d.style.display = "block";
            p.style.display = "none";
        }
    }
    AllToggleFunction(inputNo) {
        for (let index = 0; index < 30; index++) {
            var x = document.getElementById("mywk" + index);
            var d = document.getElementById("wkdown" + index);
            var p = document.getElementById("wkup" + index);
            if (x) { //check id is exist or not
                if (x.style.display === "none") {
                    x.style.display = "block";
                    d.style.display = "none";
                    p.style.display = "block";
                }
                else {
                    x.style.display = "none";
                    d.style.display = "block";
                    p.style.display = "none";
                }
            }
        }
    }
    toggleSection(index) {
        this.information[index].open = !this.information[index].open;
    }
    toggleSectionCustomer(index) {
        //this.customerWorkReport.customer_workreport_items[index].open = !this.customerWorkReport.customer_workreport_items[index].open;
    }
    toggleSection2(index) {
        this.showDetails = !this.showDetails;
    }
    toggleSectionc() {
        this.customerWorkReport.open = !this.customerWorkReport.open;
    }
    changeDisplayClick(whichblk) {
        if (whichblk == 'customer') {
            this.trasport_switch = false;
            this.customer_switch = true;
            this.customer_switch2 = false;
            this.settle_switch = false;
            this.workreport_switch = false;
        }
        else if (whichblk == 'customer2') {
            this.trasport_switch = false;
            this.customer_switch = false;
            this.customer_switch2 = true;
            this.settle_switch = false;
            this.workreport_switch = false;
        }
        else if (whichblk == 'transporatiion') {
            this.trasport_switch = true;
            this.customer_switch = false;
            this.customer_switch2 = false;
            this.settle_switch = false;
            this.workreport_switch = false;
        }
        else if (whichblk == 'settlement') {
            this.trasport_switch = false;
            this.customer_switch = false;
            this.customer_switch2 = false;
            this.settle_switch = true;
            this.workreport_switch = false;
        }
        else {
            this.trasport_switch = false;
            this.customer_switch = false;
            this.customer_switch2 = false;
            this.settle_switch = false;
            this.workreport_switch = true;
        }
    }
    memberNoFormat(mbno) {
        if (mbno < 10) {
            this.fmmemberNo = "000" + mbno;
        }
        else if (mbno < 100) {
            this.fmmemberNo = "00" + mbno;
        }
        else if (mbno < 1000) {
            this.fmmemberNo = "0" + mbno;
        }
        else {
            this.fmmemberNo = mbno;
        }
        return this.fmmemberNo;
    }
    statusDly(status) {
        if (status == 0) {
            this.status_dly = "Not prducted";
        }
        else if (status == 1) {
            this.status_dly = "Not applied";
        }
        else if (status == 2) {
            this.status_dly = "Applied";
        }
        else if (status == 3) {
            this.status_dly = "Remand";
        }
        else if (status == 4) {
            this.status_dly = "Accepted";
        }
        else {
            this.status_dly = "-";
        }
    }
    getWorkReportByCurrentDate() {
        this.postData.member_id = this.loginUser['email'];
        this.postData.token = this.loginUser['access-token'];
        this.memberService.memberData(this.postData).subscribe((res) => {
            console.log(res.member_info);
        });
    }
    isWeekEnd(wkday) {
        var date = new Date(wkday);
        return date.getDay() === 6 || date.getDay() === 0;
    }
    goMoreInfoClient(urls) {
        this.postData.member_id = this.loginUser.member_id;
        this.postData.token = this.loginUser['access-token'];
        console.log(this.postData);
        //search by date again
        this.customerInfo.getcustomerData(this.postData).subscribe((res) => {
            this.newData = res;
            this.customerWorkReport = res.customer_work_report[0];
            this.clientRpFlg = res.customer_work_report;
            // this.workingPattern = res.project_info.working_hour;
            this.workingHour = res.work_report;
            console.log(this.workPatternExist);
            this.customerInfo.updateCustomerData(res);
            let navigationExtras = {
                state: {
                    special: this.newData.project_info,
                    clientrpflg: this.clientRpFlg,
                    workingPattern: this.workPatternExist,
                    workingHour: this.workingHour,
                    year: this.postData.year,
                    month: this.postData.month
                }
            };
            this.router.navigate([urls], navigationExtras);
        });
    }
    downloadPdfUrl() {
        const url = "https://wrkessence.phoenix.xyz/general/excel/mobile_download/test.php?member_id=" + this.postData.member_id + "&idname=" + this.postData.idname + "&year=" + this.postData.year + "&month=" + this.postData.month + "&auth_token=" + this.postData.token;
        return url;
    }
    //logout action
    logoutAction() {
        this.authService.logout();
    }
    searchWkReportAction() {
        this.postData.member_id = this.loginUser['member_id'];
        this.postData.token = this.loginUser['access-token'];
        //this.postData.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjE5Mi4xNjguMTEzLjExMyIsImVtYWlsIjoiay5tYWVubyIsImNvbXBhbnkiOiJ5dHMiLCJjb21wYW55X25hbWUiOiJcdTMwYTRcdTMwYThcdTMwZWRcdTMwZmNcdTMwYzZcdTMwYTRcdTMwZWJcdTMwYmFcdTY4MmFcdTVmMGZcdTRmMWFcdTc5M2UiLCJhY2Nlc3NfbGV2ZWwiOjQsImlhdCI6MTYwNjk3MjQxNywiZXhwIjoxNjA3MTQ1MjE3fQ.P97RhRKcPsJC-_-hBNL2gpT6CVvW9a_632X5JRXJlDI';
        console.log(this.postData, " wk report search");
        if (this.validateInputs()) {
            this.memberService.memberData(this.postData).subscribe((res) => {
                console.log(res, "all data");
                if (res.status == 0) { //logout if session expired
                    this.logoutAction();
                }
                this.comp_sName = res.company_name_short;
                this.mbInfo = res.member_info;
                this.workPattern = res.project_info;
                this.customerWorkReport = res.customer_work_report;
                this.information = res.work_report_detail;
                this.project_patten = res.project_info;
                console.log(this.mbInfo, "member info");
                //transporation expense
                this.tranExpen = res.transport_expense;
                this.expenReport = res.expense_report;
                this.work_reports = res.work_report;
                this.totalWkHour = this.work_reports.mng_total_work_time;
                //console.log( this.work_reports.mng_total_work_time, " totalWkHour");
                this.postData.workreport_id = res.workreport_id;
                console.log(this.information, " Work Pattern form");
                this.customer_wk_count = 0;
                //clear the old data
                this.member_info.clear();
                let mformGroup = this.fb.group({
                    account: this.postData.account,
                    workreport_id: this.postData.workreport_id,
                    new_note: ''
                });
                this.member_info.push(mformGroup);
                //clear the old data
                this.work_report_detail.clear();
                for (let i = 0; i < this.information.length; i++) {
                    let formGroup = this.fb.group({
                        atendance_type: this.information[i].atendance_type,
                        atendance_type_mail: this.information[i].atendance_type_mail,
                        pattern: this.information[i].pattern,
                        //start_time: [this.information[i].start_time, [Validators.required, Validators.min(1)]],
                        start_time: [this.information[i].start_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        end_time: [this.information[i].end_time, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        holiday_flg: this.information[i].holiday_flg,
                        holiday_name: this.information[i].holiday_name,
                        report_date: this.information[i].report_date,
                        total_break_time: this.information[i].total_break_time,
                        night_break_time: this.information[i].night_break_time,
                        total_work_time: this.information[i].total_work_time,
                        over_work_time: this.information[i].over_work_time,
                        night_work_time: this.information[i].night_work_time,
                        deduction_time: this.information[i].deduction_time,
                        reason: this.information[i].reason,
                        workreport_detail_id: this.information[i].workreport_detail_id,
                    });
                    this.work_report_detail.push(formGroup);
                }
                //clear the old data of
                this.work_report.clear();
                let wkformGroup = this.fb.group({
                    end_time: this.work_reports.end_time,
                    max_width_time: this.work_reports.max_width_time,
                    min_width_time: this.work_reports.min_width_time,
                    mng_deduction_time: this.hourTominutes(this.work_reports.mng_deduction_time),
                    mng_night_work_time: this.hourTominutes(this.work_reports.mng_night_work_time),
                    mng_orver_work_time: this.hourTominutes(this.work_reports.mng_over_work_time),
                    mng_total_work_time: this.hourTominutes(this.work_reports.mng_total_work_time),
                    rslt_absence_num: this.work_reports.rslt_absence_num,
                    rslt_deduction_time: this.hourTominutes(this.work_reports.rslt_deduction_time),
                    rslt_harf_holiday: this.work_reports.rslt_harf_holiday,
                    rslt_holiday: this.work_reports.rslt_holiday,
                    rslt_night_work_time: this.hourTominutes(this.work_reports.rslt_night_work_time),
                    rslt_operated_time: this.hourTominutes(this.work_reports.rslt_operated_time),
                    rslt_orver_work_time: this.hourTominutes(this.work_reports.rslt_over_work_time),
                    rslt_salary_time: this.hourTominutes(this.work_reports.rslt_salary_time),
                    rslt_special_holiday: this.work_reports.rslt_special_holiday,
                    rslt_total_holiday: this.work_reports.rslt_total_holiday,
                    start_time: this.work_reports.start_time,
                    working_time: this.work_reports.working_time
                });
                this.work_report.push(wkformGroup);
                this.transport_expense_detail.clear();
                this.workReportForm.controls.daily_transportation_id.setValue(this.tranExpen.daily_transportation_id);
                var customHold = 0;
                this.postData.custom_total = this.tranExpen.total_amount;
                for (let i = 0; i < this.tranExpen.transport_expense_detail.length; i++) {
                    if (this.tranExpen.transport_expense_detail[i].demand_type == 1) {
                        customHold = customHold + parseInt(this.tranExpen.transport_expense_detail[i].amount);
                    }
                    let tformGroup = this.fb.group({
                        amount: [this.tranExpen.transport_expense_detail[i].amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        demand_type: [this.tranExpen.transport_expense_detail[i].demand_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        daily_transportation_detail_id: this.tranExpen.transport_expense_detail[i].daily_transportation_detail_id,
                        destination: [this.tranExpen.transport_expense_detail[i].destination, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        from_area: [this.tranExpen.transport_expense_detail[i].from_area, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        print_flg: [this.tranExpen.transport_expense_detail[i].print_flg, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        rourte_type: [this.tranExpen.transport_expense_detail[i].rourte_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        to_area: [this.tranExpen.transport_expense_detail[i].to_area, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        transport_type: [this.tranExpen.transport_expense_detail[i].transport_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        use_date: [this.tranExpen.transport_expense_detail[i].use_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        custom_bill: this.customerBilling
                    });
                    this.transport_expense_detail.push(tformGroup);
                }
                this.postData.custom_bill = customHold.toString();
                //project info data holder
                this.project_info.clear();
                let wkPattern = [];
                console.log(res.project_info.length, "project info length");
                for (let i = 0; i < res.project_info.length; i++) {
                    for (let c = 0; c < res.project_info[i].working_hour.length; c++) {
                        //work pattern start
                        if (i == 0) {
                            this.customerSelectOpt = res.project_info[i].client_report_flg;
                        }
                        if (i == 1) {
                            this.customerSelectOpt2 = res.project_info[i].client_report_flg;
                        }
                        console.log(this.customerSelectOpt, "CUstomer list 1");
                        //if((res.project_info[i].working_hour[c].pattern_flg == 1) && (i == 0) ) {
                        if ((res.project_info[i].working_hour[c].pattern_flg == 1)) {
                            this.innerPattern = {
                                break_time: res.project_info[i].working_hour[c].break_time,
                                end_time: res.project_info[i].working_hour[c].end_time,
                                pattern: res.project_info[i].working_hour[c].pattern,
                                start_time: res.project_info[i].working_hour[c].start_time,
                                working_time: res.project_info[i].working_hour[c].working_time
                            };
                            wkPattern.push(this.innerPattern);
                        }
                    }
                    let formGroup = this.fb.group({
                        client_id: res.project_info[i].client_id,
                        client_name: res.project_info[i].client_name,
                        client_report_flg: res.project_info[i].client_report_flg,
                        contract_type: res.project_info[i].contract_type,
                        end_contract_date: res.project_info[i].end_contract_date,
                        individual_contract_id: res.project_info[i].individual_contract_id,
                        individual_contract_no: res.project_info[i].individual_contract_no,
                        max_width_time: res.project_info[i].max_width_time,
                        min_width_time: res.project_info[i].min_width_time,
                        mng_clt_total_work_time: this.hourTominutes(res.project_info[i].mng_clt_total_work_time),
                        project_id: res.project_info[i].project_id,
                        project_name: res.project_info[i].project_name,
                        start_contract_date: res.project_info[i].start_contract_date,
                        working_time: res.project_info[i].working_time,
                        workreport_client_id: res.project_info[i].workreport_client_id,
                    });
                    this.project_info.push(formGroup);
                } //END: project info data holder 
                this.workPatternExist = wkPattern;
                console.log(this.workPatternExist, "pattern exist");
                //console.log( this.customerWorkReport.length, "customer length");
                this.customer_work_report_detail.clear();
                this.customer_work_report_detail2.clear();
                console.log(this.customer_wk_count, this.customerWorkReport, "Customer wk count");
                //customer workreport more than 1 or not
                for (let c = 0; c < this.customerWorkReport.length; c++) {
                    //More than 1 customer detail attendance
                    if (c == 0) { //array index 0
                        if (res.project_info.length > 0) {
                            this.clientInfo1 = 1;
                        }
                        // if(this.customerSelectOpt == 1){
                        //   for(let i=0; i < this.information.length; i++){
                        //     let cformGroup = this.fb.group({
                        //       clt_holiday_flg: this.information[i].holiday_flg,
                        //       clt_holiday_name: this.information[i].holiday_name,
                        //       customer_attendance_type: this.information[i].attendance_type,
                        //       customer_start_time: this.information[i].start_time,
                        //       customer_end_time: this.information[i].end_time,
                        //       report_date: this.information[i].report_date,
                        //       customer_break_time: this.information[i].break_time,
                        //       customer_night_break_time: this.information[i].night_break_time,
                        //       customer_total_work_time: this.information[i].total_work_time,
                        //       over_work_time: this.information[i].over_work_time,
                        //       night_work_time: this.information[i].customer_night_work_time,
                        //       customer_reason: this.information[i].customer_reason,
                        //       workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id,
                        //     });
                        //     this.customer_work_report_detail.push(cformGroup);
                        //   }
                        // } else {
                        // }
                        for (let i = 0; i < this.customerWorkReport[c].customer_workreport_items.length; i++) {
                            let cformGroup = this.fb.group({
                                clt_holiday_flg: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_flg,
                                clt_holiday_name: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_name,
                                customer_attendance_type: this.customerWorkReport[c].customer_workreport_items[i].customer_attendance_type,
                                customer_start_time: this.customerWorkReport[c].customer_workreport_items[i].customer_start_time,
                                customer_end_time: this.customerWorkReport[c].customer_workreport_items[i].customer_end_time,
                                report_date: this.customerWorkReport[c].customer_workreport_items[i].report_date,
                                customer_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_break_time,
                                customer_night_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_break_time,
                                customer_total_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_total_work_time,
                                over_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_over_work_time,
                                night_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_work_time,
                                customer_reason: this.customerWorkReport[c].customer_workreport_items[i].customer_reason,
                                workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id,
                            });
                            this.customer_work_report_detail.push(cformGroup);
                        }
                        console.log(this.customer_work_report_detail, "customer attendance list");
                    }
                    else if (c == 1) {
                        if (res.project_info.length > 0) {
                            this.clientInfo2 = 1;
                        }
                        for (let i = 0; i < this.customerWorkReport[c].customer_workreport_items.length; i++) {
                            let cformGroup = this.fb.group({
                                clt_holiday_flg: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_flg,
                                clt_holiday_name: this.customerWorkReport[c].customer_workreport_items[i].clt_holiday_name,
                                customer_attendance_type: this.customerWorkReport[c].customer_workreport_items[i].customer_attendance_type,
                                customer_start_time: this.customerWorkReport[c].customer_workreport_items[i].customer_start_time,
                                customer_end_time: this.customerWorkReport[c].customer_workreport_items[i].customer_end_time,
                                report_date: this.customerWorkReport[c].customer_workreport_items[i].report_date,
                                customer_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_break_time,
                                customer_night_break_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_break_time,
                                customer_total_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_total_work_time,
                                over_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_over_work_time,
                                night_work_time: this.customerWorkReport[c].customer_workreport_items[i].customer_night_work_time,
                                customer_reason: this.customerWorkReport[c].customer_workreport_items[i].customer_reason,
                                workreport_client_detail_id: this.customerWorkReport[c].customer_workreport_items[i].workreport_client_detail_id
                            });
                            this.customer_work_report_detail2.push(cformGroup);
                        }
                    }
                    this.customer_wk_count = c;
                }
                //settlement expense start
                this.expense_report_detail.clear();
                //expense report id
                this.workReportForm.controls.expense_report_id.setValue(this.expenReport.expense_report_id);
                for (let i = 0; i < this.expenReport.expense_report_detail.length; i++) {
                    let eformGroup = this.fb.group({
                        ex_amount: [this.expenReport.expense_report_detail[i].ex_amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        ex_attendee: [this.expenReport.expense_report_detail[i].ex_attendee, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        ex_payee: [this.expenReport.expense_report_detail[i].ex_payee, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        ex_purpose: [this.expenReport.expense_report_detail[i].ex_purpose.trim(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        ex_receipt_no: [this.expenReport.expense_report_detail[i].ex_receipt_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        ex_use_date: [this.expenReport.expense_report_detail[i].ex_use_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                        expense_report_detail_id: this.expenReport.expense_report_detail[i].expense_report_detail_id
                    });
                    this.expense_report_detail.push(eformGroup);
                }
                //console.log(this.expense_report_detail)
                // console.log(this.customer_wk_count, "customer work report 1 multi");
                this.memberService.updateMemberData(res);
            }, (error) => {
                this.toastService.presentToast('Network Issue. Try again!');
            });
        }
        else {
            this.toastService.presentToast("date can't empty");
        }
        this.router.navigate(['/home/workreport'], { queryParams: { 'year': this.postData.year, 'month': this.postData.month } });
    }
    //encrypt the string
    str_encrypt(string) {
        let result = '';
        let key = 'Phoenix2021';
        let k = string.length;
        for (let i = 0; i < k; i++) {
            let char = string.substr(i, 1);
            let keyChar = key.substr((i % key.length) - 1, 1);
            char = String.fromCharCode(char.charCodeAt(0) + keyChar.charCodeAt(0));
            result += char;
        }
        return btoa(result);
    }
    addSecond(hourmin) {
        let res_hms = hourmin + ":00";
        return res_hms;
    }
    startNEndTimeCheck(time_status) {
        let status = false;
        if ((time_status == '00:00') || (time_status == '00:0') || (time_status == '00:') || (time_status == '00') || (time_status == '0') || (time_status == '')) {
            status = true;
            //console.log(status, time_status, " time");
        }
        return status;
    }
    mouseOutWkAttendance(startTime, endTime, breakTime = 0, i, nBreakTime = 0) {
        this.default_wktime = 0;
        var ToverTime = '';
        var ovth = '';
        var ovtm = '';
        var selectID = "0";
        let deductionVal;
        let deductionHour;
        let attendanceType1 = 0;
        if (this.information[i].pattern == "A") {
            selectID = "0";
        }
        else if (this.information[i].pattern == "B") {
            selectID = "1";
        }
        else if (this.information[i].pattern == "C") {
            selectID = "2";
        }
        else if (this.information[i].pattern == "D") {
            selectID = "3";
        }
        else if (this.information[i].pattern == "E") {
            selectID = "4";
        }
        else if (this.information[i].pattern == "F") {
            selectID = "5";
        }
        let tWkHour = this.diff_time_convert(startTime, endTime, breakTime);
        //console.log( this.hourTominutes(tWkHour),this.hourTominutes(this.workPatternExist[selectID].working_time), "Pattern Key")
        if (this.hourTominutes(tWkHour) > 480) {
            var ToverTimeHour = 0;
            var ToverTimeMin = 0;
            ToverTimeHour = Math.floor((this.hourTominutes(tWkHour) - 480) / 60);
            ToverTimeMin = Math.floor((this.hourTominutes(tWkHour) - 480) % 60);
            if (ToverTimeHour.toString().length == 1) {
                ovth = "0" + ToverTimeHour;
            }
            else {
                ovth = "" + ToverTimeHour;
            }
            if (ToverTimeMin.toString().length == 1) {
                ovtm = "0" + ToverTimeMin;
            }
            else {
                ovtm = "" + ToverTimeMin;
            }
            ToverTime = ovth + ":" + ovtm;
        }
        else {
            ToverTime = "00:00";
        }
        console.log(this.hourTominutes('22:00'), this.hourTominutes(endTime), this.hourTominutes('01:00'), "22:00 endTime 01:00");
        let nightBreakTime = "00:00";
        let NBtime = this.calc_late_night(startTime, endTime);
        if (nBreakTime > 0) { //if night break time greater than 0, reduce from total wktime
            NBtime = NBtime - nBreakTime;
        }
        console.log(this.minsToHour(NBtime), NBtime, nBreakTime, "Night BT Calculate");
        //deduction calculation
        if ((this.hourTominutes(startTime) == this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is equal with pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = 7;
        }
        else if ((this.hourTominutes(startTime) < this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is smaller than pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = 7;
            console.log(attendanceType1, "attendance Change");
        }
        else if ((this.hourTominutes(startTime) > this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is greater than pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = this.information[i].atendance_type;
        }
        else {
            deductionHour = this.information[i].deduction_time;
            attendanceType1 = this.information[i].atendance_type;
        }
        let curAttnRow = this.work_report_detail.controls[i].patchValue({
            atendance_type: attendanceType1,
            start_time: startTime,
            end_time: endTime,
            night_break_time: nBreakTime,
            night_work_time: this.minsToHour(NBtime),
            total_work_time: this.diff_time_convert(startTime, endTime, breakTime),
            over_work_time: ToverTime,
            deduction_time: deductionHour,
        });
        //update total working time
        this.updateTotalWorkTime();
        //Default total_work_time flg
        this.default_wktime = i;
    }
    customer_mouseOutWkAttendance(startTime, endTime, breakTime = 0, i, nBreakTime = 0) {
        this.default_wktime = 0;
        var ToverTime = '';
        var ovth = '';
        var ovtm = '';
        var selectID = "0";
        let deductionVal;
        let deductionHour;
        let attendanceType1 = 0;
        if (this.information[i].pattern == "A") {
            selectID = "0";
        }
        else if (this.information[i].pattern == "B") {
            selectID = "1";
        }
        else if (this.information[i].pattern == "C") {
            selectID = "2";
        }
        else if (this.information[i].pattern == "D") {
            selectID = "3";
        }
        else if (this.information[i].pattern == "E") {
            selectID = "4";
        }
        else if (this.information[i].pattern == "F") {
            selectID = "5";
        }
        let tWkHour = this.diff_time_convert(startTime, endTime, breakTime);
        //console.log( this.hourTominutes(tWkHour),this.hourTominutes(this.workPatternExist[selectID].working_time), "Pattern Key")
        if (this.hourTominutes(tWkHour) > 480) {
            var ToverTimeHour = 0;
            var ToverTimeMin = 0;
            ToverTimeHour = Math.floor((this.hourTominutes(tWkHour) - 480) / 60);
            ToverTimeMin = Math.floor((this.hourTominutes(tWkHour) - 480) % 60);
            if (ToverTimeHour.toString().length == 1) {
                ovth = "0" + ToverTimeHour;
            }
            else {
                ovth = "" + ToverTimeHour;
            }
            if (ToverTimeMin.toString().length == 1) {
                ovtm = "0" + ToverTimeMin;
            }
            else {
                ovtm = "" + ToverTimeMin;
            }
            ToverTime = ovth + ":" + ovtm;
        }
        else {
            ToverTime = "00:00";
        }
        console.log(this.hourTominutes('22:00'), this.hourTominutes(endTime), this.hourTominutes('01:00'), "22:00 endTime 01:00");
        let nightBreakTime = "00:00";
        let NBtime = this.calc_late_night(startTime, endTime);
        if (nBreakTime > 0) { //if night break time greater than 0, reduce from total wktime
            NBtime = NBtime - nBreakTime;
        }
        console.log(this.minsToHour(NBtime), NBtime, nBreakTime, "Night BT Calculate");
        //deduction calculation
        if ((this.hourTominutes(startTime) == this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is equal with pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = 7;
        }
        else if ((this.hourTominutes(startTime) < this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is smaller than pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = 7;
            console.log(attendanceType1, "attendance Change");
        }
        else if ((this.hourTominutes(startTime) > this.hourTominutes(this.workPatternExist[selectID].start_time))
            && (this.hourTominutes(tWkHour) < this.hourTominutes(this.workPatternExist[selectID].working_time))) { //startTime is greater than pattern start time
            deductionVal = this.hourTominutes(this.workPatternExist[selectID].working_time) - this.hourTominutes(tWkHour);
            deductionHour = this.minsToHour(deductionVal);
            attendanceType1 = this.information[i].atendance_type;
        }
        else {
            deductionHour = this.information[i].deduction_time;
            attendanceType1 = this.information[i].atendance_type;
        }
        let curAttnRow = this.customer_work_report_detail.controls[i].patchValue({
            customer_attendance_type: attendanceType1,
            customer_start_time: startTime,
            customer_end_time: endTime,
            customer_night_break_time: nBreakTime,
            customer_total_work_time: this.diff_time_convert(startTime, endTime, breakTime)
        });
        //update total working time
        //this.updateTotalWorkTime();
        //Default total_work_time flg
        this.default_wktime = i;
    }
    calc_late_night(start_time, end_time) {
        let late_night_hour = 0;
        let late_night_min = 0;
        let s_time = start_time.split(":");
        let s_hour = parseInt(s_time[0]);
        let s_min = parseInt(s_time[1]);
        let e_time = end_time.split(":");
        let e_hour = parseInt(e_time[0]);
        let e_min = parseInt(e_time[1]);
        if ((start_time == '00:00') && (end_time == '00:00')) {
            return 0;
        }
        if (s_hour == e_hour) {
            late_night_hour = 7;
        }
        if (s_hour >= 22) {
            if (e_hour == 0)
                late_night_hour = 24 - s_hour;
            else if (s_hour < e_hour)
                late_night_hour = e_hour - s_hour;
            else if (e_hour <= s_hour)
                if (e_hour < 5)
                    late_night_hour = e_hour + (24 - s_hour);
                else
                    late_night_hour = 5 + (24 - s_hour);
        }
        else if ((5 < s_hour) && (s_hour < 22)) {
            if (e_hour < s_hour) {
                if (e_hour <= 5)
                    late_night_hour = 2 + e_hour;
                else
                    late_night_hour = 7;
            }
            else {
                if ((24 > e_hour) && (e_hour >= 22))
                    late_night_hour = e_hour - 22;
                else if (e_hour < 22)
                    late_night_hour = 0;
            }
        }
        else if (s_hour <= 5) {
            if (e_hour < s_hour)
                late_night_hour = (5 - s_hour) + 2 + e_hour;
            else if (e_hour <= 5)
                late_night_hour = e_hour - s_hour;
            else
                late_night_hour = 5 - s_hour;
        }
        else if (s_hour == 0) {
            if (e_hour < 5)
                late_night_hour = e_hour;
            else
                late_night_hour = 5;
        }
        if (22 <= s_hour) {
            if (s_min == 0) {
                late_night_min = e_min;
            }
            else {
                if (e_hour >= 5) {
                    late_night_hour = late_night_hour - 1;
                    late_night_min = 60 - s_min;
                }
                else {
                    late_night_hour = late_night_hour - 1;
                    late_night_min = e_min + (60 - s_min);
                }
            }
        }
        else if (s_hour < 5) {
            if (s_min == 0) {
                late_night_min = e_min;
            }
            else {
                if (e_hour >= 5) {
                    late_night_hour = late_night_hour - 1;
                    late_night_min = 60 - s_min;
                }
                else {
                    late_night_hour = late_night_hour - 1;
                    late_night_min = e_min + (60 - s_min);
                }
            }
        }
        else {
            if (e_hour < 5)
                late_night_min = e_min;
            else if (e_hour >= 22)
                late_night_min = e_min;
        }
        let mints = (late_night_hour * 60) + late_night_min;
        if (mints >= 25200)
            mints = 25200;
        return mints;
    }
    minsToHour(mins) {
        var hourss = 0;
        var minss = 0;
        var ovth = '';
        var ovtm = '';
        hourss = Math.floor(mins / 60);
        minss = mins % 60;
        console.log(minss, "min to format");
        if (hourss.toString().length == 1) {
            ovth = "0" + hourss;
        }
        else if (hourss < 1) {
            ovth = "00";
        }
        else {
            ovth = "" + hourss;
        }
        if (minss.toString().length == 1) {
            ovtm = "0" + minss;
        }
        else {
            ovtm = "" + minss;
        }
        return ovth + ":" + ovtm;
    }
    nightOverTime(startTime, endTime, nightBreak, totalNightBreak, c) {
        let nightTotalwk = 0;
        console.log(nightBreak, totalNightBreak, "NBT show");
        let nighTotal = this.hourTominutes(this.work_report_detail.value[c].night_work_time);
        let totalWk = this.hourTominutes(this.work_report_detail.value[c].total_work_time);
        if (nightBreak > 0)
            nightTotalwk = nighTotal - nightBreak;
        else {
            //var newNbTotal =  (this.hourTominutes(this.work_report_detail.value[c].night_work_time) + this.work_report_detail.value[c].night_break_time);
            nightTotalwk = this.calc_late_night(startTime, endTime);
        }
        if (nightBreak > 0) {
            totalWk = totalWk - nightBreak;
        }
        else {
            totalWk = this.totalWorkTime(startTime, endTime, nightBreak, this.work_report_detail.value[c].total_break_time);
            //totalWk = totalWk - this.work_report_detail.value[c].break_time;
            console.log(this.work_report_detail.value[c].total_break_time, "wk min Total4");
        }
        console.log(this.minsToHour(this.work_report_detail.value[c].night_break_time), this.work_report_detail.value[c].night_work_time, "night overT result");
        //add and update value to work_report object
        this.work_report_detail.controls[c].patchValue({
            night_break_time: nightBreak,
            night_work_time: this.minsToHour(nightTotalwk),
            total_work_time: this.minsToHour(totalWk),
        });
        //update total working time
        this.updateTotalWorkTime();
    }
    customer_nightOverTime(startTime, endTime, nightBreak, breakTime = 0, c) {
        let Totalwkmin = 0;
        console.log(nightBreak, "NBT show");
        let start_Time = this.hourTominutes(startTime);
        let end_Time = this.hourTominutes(endTime);
        if (end_Time > start_Time)
            Totalwkmin = end_Time - start_Time;
        else {
            Totalwkmin = start_Time - end_Time;
        }
        if (nightBreak > 0) {
            Totalwkmin = Totalwkmin - nightBreak;
        }
        if (breakTime > 0) {
            Totalwkmin = Totalwkmin - breakTime;
        }
        //add and update value to work_report object
        this.customer_work_report_detail.controls[c].patchValue({
            customer_total_work_time: this.minsToHour(Totalwkmin),
        });
        //update total working time
        //this.updateTotalWorkTime();
    }
    holidayCheck(attenID) {
        // console.log(attenID, "hello")
        let res = false;
        if (attenID == 1) {
            res = true;
        }
        else if (attenID == 2) {
            res = true;
        }
        else if (attenID == 3) {
            res = true;
        }
        else if (attenID == 10) {
            res = true;
        }
        else if (attenID == 8) {
            res = true;
        }
        return res;
    }
    holidayNameSwitch(attenID, lang = 'en') {
        let holiday = '';
        if ((attenID == 1) && (lang == 'en')) {
            holiday = 'Public holiday';
        }
        else if ((attenID == 1) && (lang == 'jp')) {
            holiday = '祝日';
        }
        else if ((attenID == 2) && (lang == 'en')) {
            holiday = 'Shift Holiday';
        }
        else if ((attenID == 2) && (lang == 'jp')) {
            holiday = 'シフト休';
        }
        else if ((attenID == 3) && (lang == 'en')) {
            holiday = 'Paid Holiday';
        }
        else if ((attenID == 3) && (lang == 'jp')) {
            holiday = '有給休暇';
        }
        else if ((attenID == 8) && (lang == 'en')) {
            holiday = 'Special Holiday';
        }
        else if ((attenID == 3) && (lang == 'jp')) {
            holiday = '特別休日';
        }
        else if ((attenID == 10) && (lang == 'en')) {
            holiday = 'Substitute Holiday';
        }
        else if ((attenID == 3) && (lang == 'jp')) {
            holiday = '代替休日';
        }
        return holiday;
    }
    totalWorkTime(startTime, endTime, nightBreak = 0, bkTime = 0) {
        let totalWkmin;
        totalWkmin = ((1440 - this.hourTominutes(startTime)) + this.hourTominutes(endTime)) - (parseInt(nightBreak) + parseInt(bkTime));
        console.log(totalWkmin, "total wk min3");
        return totalWkmin;
    }
    mouseOutNightOverTime(nightBreak, totalNightBreak, c) {
        var tNightBreak = nightBreak;
        console.log(nightBreak, this.information[c].night_break_time, this.work_report_detail.value[c].night_work_time, "hello");
        //nightBreak = (this.hourTominutes(this.information[c].night_work_time) + this.information[c].night_break_time ) - nightBreak;
        nightBreak = this.hourTominutes(this.work_report_detail.value[c].night_work_time) - nightBreak;
        console.log(nightBreak, "night overT result");
        var renewHour = Math.floor(nightBreak / 60);
        var renewMin = nightBreak % 60;
        var TrenewHour = "";
        if (renewHour < 1) {
            renewHour = 0;
        }
        TrenewHour = "" + Math.floor(renewHour);
        var TrenewMin = "";
        TrenewMin = renewMin + '';
        if (renewHour.toString().length == 1) {
            TrenewHour = "0" + TrenewHour;
        }
        if (renewMin.toString().length == 1) {
            TrenewMin = "0" + TrenewMin;
        }
        TrenewHour = TrenewHour + ":" + TrenewMin;
        //add and update value to work_report object
        this.work_report_detail.controls[c].patchValue({
            night_break_time: nightBreak,
            night_work_time: TrenewHour
        });
        //get total working time
        let totalNightWorkTime = 0;
        for (let i = 0; i < this.work_report_detail.length; i++) {
            totalNightWorkTime = totalNightWorkTime + this.hourTominutes(this.work_report_detail.value[i].night_work_time);
        }
        console.log(totalNightWorkTime - tNightBreak, " total night working time");
        //add and update value to work_report object
        this.work_report.controls[0].patchValue({
            mng_night_work_time: totalNightWorkTime,
            rslt_night_work_time: totalNightWorkTime
        });
    }
    //reduce breaktime from workhour
    mouseOverReduceBreakTime(bkTime, tWktime, overTimeNew, i) {
        var reduceh = 0;
        var reducemin = 0;
        var tWorkHour = '';
        var tWorkMin = '';
        //calculate TOTAL working hour
        if (this.default_wktime == i) {
            reduceh = Math.floor((this.hourTominutes(this.work_report_detail.value[i].total_work_time) - bkTime) / 60);
            reducemin = (this.hourTominutes(this.work_report_detail.value[i].total_work_time) - bkTime) % 60;
            //this.default_wktime = 0;
        }
        else {
            reduceh = Math.floor((this.hourTominutes(this.information[i].total_work_time) - bkTime) / 60);
            reducemin = (this.hourTominutes(this.information[i].total_work_time) - bkTime) % 60;
        }
        if (reduceh.toString().length == 1) {
            tWorkHour = "0" + reduceh;
        }
        else {
            tWorkHour = "" + reduceh;
        }
        if (reducemin.toString().length == 1) {
            tWorkMin = "0" + reducemin;
        }
        else {
            tWorkMin = "" + reducemin;
        }
        var reduceh2 = 0;
        var reducemin2 = 0;
        let tWorkHour2 = "";
        let tWorkMin2 = "";
        //OVER TIME CALCULATION
        if (this.hourTominutes(overTimeNew) >= bkTime) {
            overTimeNew = this.hourTominutes(overTimeNew) - bkTime;
            reduceh2 = Math.floor(overTimeNew / 60);
            reducemin2 = overTimeNew % 60;
            if (reduceh.toString().length == 1) {
                tWorkHour2 = "0" + reduceh2;
            }
            else {
                tWorkHour2 = "" + reduceh2;
            }
            if (reducemin.toString().length == 1) {
                tWorkMin2 = "0" + reducemin2;
            }
            else {
                tWorkMin2 = "" + reducemin2;
            }
        }
        else {
            tWorkHour2 = "00";
            tWorkMin2 = "00";
        }
        //add and update value to work_report object
        this.work_report_detail.controls[i].patchValue({
            total_work_time: tWorkHour + ":" + tWorkMin,
            over_work_time: tWorkHour2 + ":" + tWorkMin2
        });
        //update total working time
        this.updateTotalWorkTime();
    }
    //reduce breaktime from workhour
    customer_mouseOverReduceBreakTime(bkTime, tWktime, overTimeNew, i) {
        var reduceh = 0;
        var reducemin = 0;
        var tWorkHour = '';
        var tWorkMin = '';
        //calculate TOTAL working hour
        if (this.default_wktime == i) {
            reduceh = Math.floor((this.hourTominutes(this.customer_work_report_detail.value[i].customer_total_work_time) - bkTime) / 60);
            reducemin = (this.hourTominutes(this.customer_work_report_detail.value[i].customer_total_work_time) - bkTime) % 60;
            //this.default_wktime = 0;
            console.log(reduceh, reducemin, i, "BreakTime reduce");
        }
        else {
            reduceh = Math.floor((this.hourTominutes(this.customerWorkReport[0].customer_workreport_items[i].customer_total_work_time) - bkTime) / 60);
            reducemin = (this.hourTominutes(this.customerWorkReport[0].customer_workreport_items[i].customer_total_work_time) - bkTime) % 60;
        }
        if (reduceh.toString().length == 1) {
            tWorkHour = "0" + reduceh;
        }
        else {
            tWorkHour = "" + reduceh;
        }
        if (reducemin.toString().length == 1) {
            tWorkMin = "0" + reducemin;
        }
        else {
            tWorkMin = "" + reducemin;
        }
        var reduceh2 = 0;
        var reducemin2 = 0;
        let tWorkHour2 = "";
        let tWorkMin2 = "";
        //OVER TIME CALCULATION
        if (this.hourTominutes(overTimeNew) >= bkTime) {
            overTimeNew = this.hourTominutes(overTimeNew) - bkTime;
            reduceh2 = Math.floor(overTimeNew / 60);
            reducemin2 = overTimeNew % 60;
            if (reduceh.toString().length == 1) {
                tWorkHour2 = "0" + reduceh2;
            }
            else {
                tWorkHour2 = "" + reduceh2;
            }
            if (reducemin.toString().length == 1) {
                tWorkMin2 = "0" + reducemin2;
            }
            else {
                tWorkMin2 = "" + reducemin2;
            }
        }
        else {
            tWorkHour2 = "00";
            tWorkMin2 = "00";
        }
        //add and update value to work_report object
        this.customer_work_report_detail.controls[i].patchValue({
            customer_total_work_time: tWorkHour + ":" + tWorkMin,
        });
        //update total working time
        this.updateTotalWorkTime();
    }
    mintoHourFormat(minuts) {
        var reduceh = 0;
        var reducemin = 0;
        var tWorkHour = '';
        var tWorkMin = '';
        //calculate working hour
        reduceh = Math.floor(minuts / 60);
        reducemin = minuts % 60;
        console.log(reduceh, reducemin, "min to hour");
        // return tWorkHour+":"+tWorkMin;
    }
    //to reset to night breaktime
    mouseOverResetNightBT(r) {
        // this.work_report_detail.controls[r].patchValue({
        //   night_break_time: 0
        // });
        //get total working time
        let totalNightWorkTime = 0;
        for (let i = 0; i < this.work_report_detail.length; i++) {
            totalNightWorkTime = totalNightWorkTime + this.hourTominutes(this.work_report_detail.value[i].night_work_time);
        }
        console.log(totalNightWorkTime, " total night working time");
        //add and update value to work_report object
        this.work_report.controls[0].patchValue({
            mng_night_work_time: totalNightWorkTime,
            rslt_night_work_time: totalNightWorkTime
        });
    }
    hourTominutes(hours) {
        let stTime = hours.split(':'); // split it at the colons
        var hour1 = parseInt(stTime[0]) * 60;
        var minute1 = parseInt(stTime[1]);
        return hour1 + minute1;
    }
    diff_time_convert(st_time, ed_time, bkTime, NbkTime = 0) {
        let stTime = st_time.split(':'); // split it at the colons
        var hour1 = stTime[0];
        var minute1 = stTime[1];
        let endTime = ed_time.split(':'); // split it at the colons
        var hourend = endTime[0];
        var minute2 = endTime[1];
        var hour2 = 0;
        if (hourend < hour1) {
            hour2 = (24 - hour1) + parseInt(hourend);
            console.log(hour1, hourend, "greater than hour1");
            //compare second minute is less than first minute
            if (minute1 > minute2) {
                minute2 = minute2 + 60;
                hour2 = hour2 - 1;
                var res_minute = minute2 - minute1;
                var res_hour = hour2;
            }
            else {
                var res_minute = minute2 - minute1;
                var res_hour = hour2;
            }
        }
        else {
            hour2 = parseInt(hourend);
            //compare second minute is less than first minute
            if (minute1 > minute2) {
                minute2 = minute2 + 60;
                hour2 = hour2 - 1;
                var res_minute = minute2 - minute1;
                var res_hour = hour2 - hour1;
            }
            else {
                var res_minute = minute2 - minute1;
                var res_hour = hour2 - hour1;
            }
        }
        var res_hourf = "";
        var res_minf = "";
        if (res_hour.toString().length == 1) {
            res_hourf = "0" + res_hour + ":";
        }
        else {
            res_hourf = res_hour + ":";
        }
        if (res_minute.toString().length == 1) {
            res_minf = "0" + res_minute;
        }
        else {
            res_minf = res_minute + "";
        }
        var newHourMin = res_hourf + res_minf;
        var newSpTime = newHourMin.split(':');
        var renewMin = 0;
        var renewHour = 0;
        if (newSpTime[1] > bkTime) {
            renewMin = parseInt(newSpTime[1]) - bkTime;
            renewHour = parseInt(newSpTime[0]);
        }
        else {
            renewMin = (parseInt(newSpTime[1]) + 60) - bkTime;
            renewHour = parseInt(newSpTime[0]) - 1;
            if (renewMin == 60) {
                renewMin = 0;
                renewHour = renewHour + 1;
            }
            else if (renewMin > 60) {
                renewMin = renewMin - 60;
                renewHour = renewHour + 1;
            }
        }
        var TrenewHour = "";
        TrenewHour = "" + renewHour;
        var TrenewMin = "";
        TrenewMin = renewMin + '';
        if (renewHour.toString().length == 1) {
            TrenewHour = "0" + TrenewHour;
        }
        if (renewMin.toString().length == 1) {
            TrenewMin = "0" + TrenewMin;
        }
        console.log(TrenewHour, TrenewMin, " check value");
        //return this.reduce_breaktime(res_hourf, res_minf, bkTime);   
        return TrenewHour + ":" + TrenewMin;
    }
    reduce_breaktime(rhourmin, bKTime) {
        var resMin = 0;
        return rhourmin + ":" + resMin;
    }
    //select change pattern in work attendance and auto fill
    changePattern(selectedVal, ID) {
        console.log('Selected', selectedVal.detail.value, ID);
        let selectID = "";
        let overTimeChange = '';
        if (selectedVal.detail.value == "A") {
            selectID = "0";
        }
        else if (selectedVal.detail.value == "B") {
            selectID = "1";
        }
        else if (selectedVal.detail.value == "C") {
            selectID = "2";
        }
        else if (selectedVal.detail.value == "D") {
            selectID = "3";
        }
        else if (selectedVal.detail.value == "E") {
            selectID = "4";
        }
        else if (selectedVal.detail.value == "F") {
            selectID = "5";
        }
        else {
            selectID = "";
        }
        //check workingtime is greater than 480 min or not
        if (selectID != '') {
            if (this.hourTominutes(this.workPatternExist[selectID].working_time) > 480) {
                overTimeChange = (this.hourTominutes(this.workPatternExist[selectID].working_time) - 480) + "";
                console.info(overTimeChange, "OverTime Change");
                overTimeChange = this.minsToHour(overTimeChange) + '';
            }
            else {
                overTimeChange = this.work_report_detail.value[ID].over_work_time + "";
            }
        }
        let reportDate = this.work_report_detail.value[ID].report_date;
        if (selectedVal.detail.value.length > 0) {
            console.log("empty selected 2", overTimeChange, selectID);
            // console.log('Selected id', selectID);
            let curList = this.work_report_detail.controls[ID].patchValue({
                pattern: this.workPatternExist[selectID].pattern,
                start_time: this.workPatternExist[selectID].start_time,
                end_time: this.workPatternExist[selectID].end_time,
                total_break_time: this.workPatternExist[selectID].break_time,
                total_work_time: this.workPatternExist[selectID].working_time,
                over_work_time: overTimeChange,
                deduction_time: "00:00",
            });
        }
        else {
            let curList = this.work_report_detail.controls[ID].patchValue({
                pattern: '',
                start_time: '00:00',
                end_time: '00:00',
                total_break_time: '0',
                total_work_time: '00:00',
                over_work_time: '00:00',
                deduction_time: "00:00",
            });
            console.log("empty selected");
        }
        //update total working time
        this.updateTotalWorkTime();
        //submit invalid
        //console.info(this.work_report_detail.value[ID].reason.invalid ) ;
    }
    //on change get current customer bill total
    changeCustomerBill(e, t) {
        console.log(e.detail.value, "events");
        let customerBill = 0;
        let customTotal = 0;
        for (let i = 0; i < this.tranExpen.transport_expense_detail.length; i++) {
            if (this.tranExpen.transport_expense_detail[i].demand_type == 1) {
                customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
                console.log(customerBill, "custom new bill");
            }
            //transporation all total
            customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
            console.log(customTotal, "custom new total");
        }
        this.postData.custom_bill = "";
        this.postData.custom_total = "";
        customerBill = customerBill + parseInt(e.detail.value);
        customTotal = customTotal + parseInt(e.detail.value);
        this.postData.custom_bill = customerBill.toString();
        this.postData.custom_total = customTotal.toString();
        //return  this.postData.custom_bill = newCustomBill.toString();
    }
    changeTranTotalorCustom(e, t) {
        console.log(e.detail.value, "events");
        let customerBill = 0;
        let customTotal = 0;
        for (let i = 0; i < this.tranExpen.transport_expense_detail.length; i++) {
            if (this.tranExpen.transport_expense_detail[i].demand_type == 1) {
                customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
                console.log(customerBill, "custom new bill");
            }
            //transporation all total
            customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
        }
        this.postData.custom_bill = "";
        this.postData.custom_total = "";
        this.postData.custom_bill = customerBill.toString();
        this.postData.custom_total = customTotal.toString();
    }
    //on change get current customer bill total
    changeTransportationBill(e, t) {
        console.log(e.detail.value, "events");
        let customerBill = 0;
        let customTotal = 0;
        for (let i = 0; i < this.tranExpen.transport_expense_detail.length; i++) {
            if (this.tranExpen.transport_expense_detail[i].demand_type == 1) {
                if (i != t) {
                    customerBill = customerBill + this.tranExpen.transport_expense_detail[i].amount;
                    console.log(customerBill, "custom new bill");
                }
            }
            //transporation all total
            if (i != t) {
                customTotal = customTotal + this.tranExpen.transport_expense_detail[i].amount;
            }
        }
        this.postData.custom_bill = "";
        this.postData.custom_total = "";
        var newCustomBill = customerBill + parseInt(e.detail.value);
        var newCustomToal = customTotal + parseInt(e.detail.value);
        this.postData.custom_bill = newCustomBill.toString();
        this.postData.custom_total = newCustomToal.toString();
        return this.postData.custom_bill = newCustomBill.toString();
    }
    displayPattern(pt) {
        // console.log(pt,"display pattern");
        let dly_msg = '';
        if ((pt.length > 0) && (pt != '0')) {
            dly_msg = "勤務時間_パタン " + pt;
        }
        else {
            dly_msg = "-";
        }
        return dly_msg;
    }
    updateTotalWorkTime() {
        //get total working time
        let totalWorkTime = 0;
        let totalOverWorkTime = 0;
        let totalDeducTime = 0;
        for (let i = 0; i < this.work_report_detail.length; i++) {
            totalWorkTime = totalWorkTime + this.hourTominutes(this.work_report_detail.value[i].total_work_time);
            totalOverWorkTime = totalOverWorkTime + this.hourTominutes(this.work_report_detail.value[i].over_work_time);
            totalDeducTime = totalDeducTime + this.hourTominutes(this.work_report_detail.value[i].deduction_time);
            // console.log(this.work_report_detail.value[i].total_work_time, i, " total working time");
        }
        console.log(totalWorkTime, " total working time");
        //add and update value to work_report object
        this.work_report.controls[0].patchValue({
            mng_deduction_time: totalDeducTime,
            rslt_deduction_time: totalDeducTime,
            mng_total_work_time: totalWorkTime,
            rslt_operated_time: totalWorkTime,
            mng_orver_work_time: totalOverWorkTime,
            rslt_orver_work_time: totalOverWorkTime
        });
        //update value to project-> object
        if (this.project_info.controls.length > 0) {
            this.project_info.controls[0].patchValue({
                mng_clt_total_work_time: totalWorkTime
            });
        }
    }
    addProject() {
        if (this.clientData.client_id.length > 0) {
            this.project_info.controls[0].setValue({
                client_id: this.clientData.client_id,
                client_name: this.clientData.client_name,
                client_report_flg: this.clientData.client_report_flg,
                contract_type: this.clientData.contract_type,
                end_contract_date: this.clientData.end_contract_date,
                individual_contract_id: this.clientData.individual_contract_id,
                individual_contract_no: this.clientData.individual_contract_id,
                max_width_time: this.clientData.individual_contract_id,
                min_width_time: this.clientData.individual_contract_id,
                mng_clt_total_work_time: '',
                project_id: this.clientData.project_id,
                project_name: this.clientData.project_name,
                start_contract_date: this.clientData.start_contract_date,
                working_time: '',
                workreport_client_id: ''
            });
        }
    }
    onSubmit() {
        //update total working time
        this.updateTotalWorkTime();
        this.submitted = true;
        // this.workReportForm.removeControl('customer_work_report_detail');
        console.log(this.workReportForm.value, "Store before");
        // stop here if form is invalid
        if (this.workReportForm.invalid) {
            console.log(this.workReportForm.invalid);
            return;
        }
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillsForm.value, null, 4));
        if (this.nextClicked == 1) {
            if (this.customerSelectOpt == 1) {
                this.customer_work_report_detail.clear();
                this.project_info.controls[0].patchValue({
                    client_report_flg: 1
                });
            }
            // save change work report detail
            this.authService.updateWorkReportDetail(this.workReportForm.value, this.postData).subscribe((res) => {
                console.log(res, " Store Change");
                if (res.error) {
                    //if have some error
                    this.toastService.presentToast(res.error);
                }
                else if (res.message) {
                    //if have some error
                    this.toastService.presentToast(res.message);
                }
                else {
                    //if successfully save
                    this.toastService.presentToast(res.msg);
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue. Try again!');
            });
        }
        else if (this.nextClicked == 2) {
            console.log(this.customerSelectOpt, "Customer Wkreport 1");
            //PDF upload, need to remove customer_work_report_detail
            if (this.customerSelectOpt == 1) {
                this.customer_work_report_detail.clear();
                this.project_info.controls[0].patchValue({
                    client_report_flg: 1
                });
            }
            // Apply change work report detail
            this.authService.applyWorkReportDetail(this.workReportForm.value, this.postData).subscribe((res) => {
                console.log(res, " Apply Change");
                if (res.error) {
                    //if have some error
                    this.toastService.presentToast(res.error);
                }
                else if (res.message) {
                    //if have some error
                    this.toastService.presentToast(res.message);
                }
                else {
                    //if successfully save
                    this.toastService.presentToast(res.msg);
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue. Try again!');
            });
        }
        else {
            // Apply Expense of work report detail
            this.authService.applyExpense(this.workReportForm.value, this.postData).subscribe((res) => {
                console.log(res, " Apply Expsense");
                if (res.error) {
                    //if have some error
                    this.toastService.presentToast(res.error);
                }
                else if (res.message) {
                    //if have some error
                    this.toastService.presentToast(res.message);
                }
                else {
                    //if successfully save
                    this.toastService.presentToast(res.msg);
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue. Try again!');
            });
        }
        console.log(this.workReportForm.value);
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const files = event.target.files[0];
            this.myUploadForm.patchValue({
                file: files
            });
        }
        console.log(this.myUploadForm);
    }
    onUploadPDF(pjinfo) {
        console.log(pjinfo[0], this.postData);
        const formData = new FormData();
        formData.append('file', this.myUploadForm.get('file').value);
        formData.append("member_id", this.postData.member_id);
        formData.append("project_id", pjinfo[0].project_id);
        formData.append("individual_contract_id", pjinfo[0].individual_contract_id);
        formData.append("workreport_client_id", pjinfo[0].workreport_client_id);
        //member_id, project_id, individual_contract_id, workreport_client_id, file and token
        this.authService.uploadPDFWorkReportDetail(formData, this.postData).subscribe((res) => {
            console.log(res, " pdf upload result");
            if (res.status = 1) {
                //if successfully uploaded
                this.toastService.presentToast(res.message);
            }
            else {
                //if have some error
                this.toastService.presentToast(res.message);
            }
        });
    }
    //Customer workreport pdf remove
    onRemovePdf_customerwk(pjinfo2) {
        console.log(pjinfo2[0], this.customer_work_report_detail, "Remove PDF");
        this.authService.removePDFCustomerWorkreport(pjinfo2[0].workreport_client_id, this.postData).subscribe((res) => {
            this.fileName_dly = 1;
            console.log(res, "PDF Removed");
            if (res.status = 1) {
                //if successfully removed
                this.toastService.presentToast(res.message);
            }
            else {
                //if have some error
                this.toastService.presentToast(res.message);
            }
        });
    }
    onStoreClick() {
        this.nextClicked = 1;
    }
    onApplyReportClick() {
        this.nextClicked = 2;
    }
    onApplyExpenseClick() {
        this.nextClicked = 3;
    }
    downloadWorkReportExcel(urls, routeDld, Redir) {
        console.log(this.str_encrypt(this.postData.member_id.toString()), " Download Workreport");
        let url = "https://stgessence.phoenix.xyz" + routeDld + "?member_id=" + this.str_encrypt(this.postData.member_id.toString()) + "&idname=" + this.str_encrypt(this.postData.account) + "&lang=" + this.str_encrypt(this.postData.language) + "&auth_token=" + this.postData.token + "&year=" + this.str_encrypt(this.postData.year) + "&month=" + this.str_encrypt(this.postData.month) + "&short_comp_name=" + this.str_encrypt(this.postData.short_comp) + "&redirect=" + this.str_encrypt(Redir);
        var popout = window.open(url, 'psplayer', "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=auto,min-height=1500");
        window.setTimeout(function () {
            // This hides the address bar:
            popout.scrollTo(0, 1);
        }, 0);
        window.setTimeout(function () {
            // This hides the address bar:
            popout.close();
        }, 3000);
    }
    downloadFile(response, fileName) {
        const blob = new Blob([response.body], { type: response.headers.get('content-type') });
        fileName = fileName || response.headers.get('content-disposition').split(';')[0];
        const file = new File([blob], fileName, { type: response.headers.get('content-type') });
        //saveAs(file);
    }
    gotoPagesAction(urls, tabsopen) {
        this.router.navigate([urls], { queryParams: { year: this.postData.year, month: this.postData.month, tabs: tabsopen } });
    }
};
MemberInfoComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_5__["CustomerWorkreportInfoService"] },
    { type: src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__["MemberInfoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] },
    { type: src_app_services_workreport_download_service__WEBPACK_IMPORTED_MODULE_11__["WorkreportDownloadService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberInfoComponent.prototype, "loginUser", void 0);
MemberInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/member-info/member-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-info.component.scss */ "./src/app/components/member-info/member-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_customer_workreport_info_service__WEBPACK_IMPORTED_MODULE_5__["CustomerWorkreportInfoService"],
        src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_4__["MemberInfoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"],
        src_app_services_workreport_download_service__WEBPACK_IMPORTED_MODULE_11__["WorkreportDownloadService"],
        src_app_services_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]])
], MemberInfoComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-padding {\n  padding: 5px;\n}\n\n.img-container {\n  width: 170px;\n  margin: 0 auto;\n  border-radius: 100px;\n  border: 1px solid #707070;\n  height: 170px;\n}\n\n.bd1-color {\n  border: 1px solid #3ea0e6;\n  border-radius: 10px;\n  background-color: white;\n  font-size: 14px;\n  padding: 8px 5px 7px 5px;\n  color: #3ea0e6;\n}\n\n.space-10 {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbn1cclxuXHJcbi5iZDEtY29sb3Ige1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDdweCA1cHg7XHJcbiAgICBjb2xvcjogIzNlYTBlNjtcclxufVxyXG5cclxuLnNwYWNlLTEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5idG4tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmJkMS1jb2xvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCA1cHggN3B4IDVweDtcbiAgY29sb3I6ICMzZWEwZTY7XG59XG5cbi5zcGFjZS0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");







let ProfileComponent = class ProfileComponent {
    constructor(profileService, router, authService, langServe, langSwitch) {
        this.profileService = profileService;
        this.router = router;
        this.authService = authService;
        this.langServe = langServe;
        this.langSwitch = langSwitch;
        this.postData = {
            language: '',
            pages: '',
            token: '',
            email: '',
            member_id: ''
        };
        this.author_type = [];
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            //console.log(res.email);
            this.displayUserData = res;
            this.postData.token = res['access-token'];
            this.getCurrentUserProfile();
        });
        this.authority(this.loginUser);
        this.languageDefault();
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            //console.log(this.postData.language, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                //console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'employee_detail';
            this.langServe.languageData(this.postData).subscribe((res) => {
                // console.log(res.data, ' title');
                this.dataLeng = res.data;
            });
        });
    }
    getCurrentUserProfile() {
        this.postData.token = this.displayUserData['access-token'];
        this.postData.email = this.displayUserData.member_id;
        //console.log(this.postData, "user id");
        this.profileService.profileData(this.postData).subscribe((res) => {
            console.log(res.show_detail, "profile show detail");
            this.UserProfile = res.show_detail;
            //member no format
            this.memberNoFormat(res.show_detail.member_no);
            // authority type display text
            this.authority(this.UserProfile.authority_type);
            // employment type display by text
            this.employmentType(this.UserProfile.employment_type);
            //employment status display by text dfdf
            this.employmentStatus(this.UserProfile.employment_status);
        });
    }
    //format date
    calculateDiff(data, addOne) {
        let date = new Date(data);
        let currentDate = new Date();
        let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
        days = Math.floor(days / 365) + addOne;
        return '(' + days + ') Years';
    }
    //different between 2 date
    dateDiffInDays(date1, date2) {
        // round to the nearest whole number
        return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
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
        this.router.navigate(['home/changepassword']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSwitchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProfileComponent.prototype, "loginUser", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_6__["LanguageSwitchService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 160px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvRDpcXFBob2VuaXhcXGRldm1vYmlsZVxcQW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXtcclxuICAgIHBhZGRpbmc6IDE2MHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsImlvbi1zbGlkZSB7XG4gIHBhZGRpbmc6IDE2MHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLXNsaWRlIGgyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
};
SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlidesComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLoginPage() {
        // router naviage to login page
        this.router.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/components/start/start.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StartComponent);



/***/ }),

/***/ "./src/app/components/timeago/timeago.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWFnby90aW1lYWdvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/timeago/timeago.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.ts ***!
  \*********************************************************/
/*! exports provided: TimeagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeagoComponent", function() { return TimeagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeagoComponent = class TimeagoComponent {
    constructor() { }
    ngOnInit() {
        this.newDate = this.conVertTime(this.created);
    }
    conVertTime(time) {
        return new Date(time * 1000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TimeagoComponent.prototype, "created", void 0);
TimeagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeago',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeago.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeago/timeago.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeago.component.scss */ "./src/app/components/timeago/timeago.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimeagoComponent);



/***/ }),

/***/ "./src/app/components/transportation-expense/transportation-expense.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/transportation-expense/transportation-expense.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.borderOne {\n  border: 1px solid #000000;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc3BvcnRhdGlvbi1leHBlbnNlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRyYW5zcG9ydGF0aW9uLWV4cGVuc2VcXHRyYW5zcG9ydGF0aW9uLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNwb3J0YXRpb24tZXhwZW5zZS90cmFuc3BvcnRhdGlvbi1leHBlbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7QUNFSjs7QURDQTtFQUFtQix5QkFBQTtBQ0duQjs7QUREQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc3BvcnRhdGlvbi1leHBlbnNlL3RyYW5zcG9ydGF0aW9uLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICAubWlud2lkdGh7XHJcbiAgICBtaW4td2lkdGg6IDEzNXB4O1xyXG4gIH1cclxuICAuZmlyc3RXaWR0aHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfVxyXG5cclxuLmJvcmRlck9uZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn0iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ubWlud2lkdGgge1xuICBtaW4td2lkdGg6IDEzNXB4O1xufVxuXG4uZmlyc3RXaWR0aCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uYm9yZGVyT25lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/transportation-expense/transportation-expense.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/transportation-expense/transportation-expense.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TransportationExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationExpenseComponent", function() { return TransportationExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/transportation-expense.service */ "./src/app/services/transportation-expense.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TransportationExpenseComponent = class TransportationExpenseComponent {
    constructor(authService, tranSportSerivce, route, renderer, transportService) {
        this.authService = authService;
        this.tranSportSerivce = tranSportSerivce;
        this.route = route;
        this.renderer = renderer;
        this.transportService = transportService;
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
    }
    ngOnInit() {
        //for getting parameters
        this.route.queryParams.subscribe(params => {
            this.postData.year = params["year"];
            this.postData.month = params["month"];
            console.log(this.postData.year + this.postData.month + " parameter");
        });
        if (!this.postData.year || this.postData.year.length == 0) {
            this.newDate = new Date().getFullYear();
            this.newMonth = new Date().getMonth();
            this.postData.year = this.newDate;
            this.postData.month = this.newMonth + 1;
            // console.log(this.newDate + this.newMonth + "current year");
        }
        this.tranSportExpense = "";
        this.tranSportSerivce.transportExpenseData$.subscribe((res) => {
            //console.log(res);
            if (res.use_date == null) {
                this.tranSportExpense = '';
            }
            else {
                this.tranSportExpense = res;
            }
        });
        this.tran_expen = [
            {
                id: 0,
                value: 'One-Way'
            },
            {
                id: 1,
                value: 'Round-Trip'
            }
        ];
        this.demend_types = [
            {
                id: 0,
                value: 'in house'
            },
            {
                id: 1,
                value: 'customer'
            }
        ];
        this.print_flgs = [
            {
                id: 0,
                value: 'No'
            },
            {
                id: 1,
                value: 'Yes'
            }
        ];
        this.transport_expen = [
            {
                id: 0,
                value: '-'
            },
            {
                id: 1,
                value: 'Bus'
            },
            {
                id: 2,
                value: 'Train'
            },
            {
                id: 3,
                value: 'Taxi'
            },
            {
                id: 4,
                value: 'Air Plane'
            },
            {
                id: 5,
                value: 'Other'
            }
        ];
    }
    /* getTransporationExpen() {
       this.postData.member_id = this.displayUserData['email'];
       //console.log(this.postData + "Post Datas");
       this.transportService.transportExpenseData( this.postData ).subscribe( (res: any) => {
         //console.log(res);
         this.tranSportExpense = res.transport_expense;
         //console.log(this.tranSportExpense);
       });
     } */
    storeAction() {
    }
    removeAction() {
        console.log("remove");
    }
    addAction() {
        let count = 0;
        let currentDate = new Date();
        console.log("add html");
        this.compareTranEx = this.tran_expen;
        const p = this.renderer.createElement('tr');
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
    }
};
TransportationExpenseComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_3__["TransportationExpenseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_3__["TransportationExpenseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addtable', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TransportationExpenseComponent.prototype, "table", void 0);
TransportationExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transportation-expense',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transportation-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transportation-expense/transportation-expense.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transportation-expense.component.scss */ "./src/app/components/transportation-expense/transportation-expense.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_3__["TransportationExpenseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_services_transportation_expense_service__WEBPACK_IMPORTED_MODULE_3__["TransportationExpenseService"]])
], TransportationExpenseComponent);



/***/ }),

/***/ "./src/app/components/user-guide/user-guide.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-guide/user-guide.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.bluegreen {\n  background-color: #cbe9ff;\n  border: 1px solid #77b3df;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.graylight {\n  background-color: #f8f9fb;\n  border: 0px solid #c6c6c7;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.whitebg {\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.remainer {\n  background-color: #ffe8a3;\n  border: 1px solid #d6d6d6;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n}\n\n.warning {\n  background-color: #f80a0a;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px 0;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWd1aWRlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXItZ3VpZGVcXHVzZXItZ3VpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1ndWlkZS91c2VyLWd1aWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZ3VpZGUvdXNlci1ndWlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taGVscHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NiZTlmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZWEwZTY7XHJcbn1cclxuXHJcbi5ibHVlZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JlOWZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3YjNkZjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmdyYXlsaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmI7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYzZjNmM3O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4ud2hpdGViZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4ucmVtYWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGEzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4ud2FybmluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODBhMGE7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSIsIi5idG4taGVscCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcbn1cblxuLmJsdWVncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmU5ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3N2IzZGY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmdyYXlsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmI7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjNmM2Yzc7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLndoaXRlYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5yZW1haW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU4YTM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgwYTBhO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/user-guide/user-guide.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-guide/user-guide.component.ts ***!
  \***************************************************************/
/*! exports provided: UserGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuideComponent", function() { return UserGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");






let UserGuideComponent = class UserGuideComponent {
    constructor(httpService, authService, langSwitch, langServe) {
        this.httpService = httpService;
        this.authService = authService;
        this.langSwitch = langSwitch;
        this.langServe = langServe;
        this.postData = {
            language: '',
            pages: '',
            token: '',
            email: '',
            member_id: ''
        };
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
            this.postData.token = res['access-token'];
            this.languageDefault();
        });
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            //console.log(this.postData.language, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                //console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'user_guide';
            this.langServe.languageData(this.postData).subscribe((res) => {
                console.log(res.data, ' title');
                this.userGuide = res.data;
            });
        });
    }
};
UserGuideComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserGuideComponent.prototype, "loginUser", void 0);
UserGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-guide-com',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-guide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-guide/user-guide.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-guide.component.scss */ "./src/app/components/user-guide/user-guide.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitchService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]])
], UserGuideComponent);



/***/ }),

/***/ "./src/app/components/workreport-detail-info/workreport-detail-info.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/workreport-detail-info/workreport-detail-info.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: auto;\n  margin: 15px;\n  padding-bottom: 20px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: center;\n  padding: 8px;\n}\n\n.minwidth {\n  min-width: 135px;\n}\n\n.middlewidth {\n  min-width: 200px;\n}\n\n.firstWidth {\n  width: auto;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.borderOne {\n  border: 1px solid #000000;\n  padding: 3px;\n}\n\n.borderOneCol {\n  border: 1px solid #000000;\n  padding: 1px;\n}\n\n.borderOnewidth {\n  border: 1px solid #000000;\n  padding: 3px;\n  width: 87px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrcmVwb3J0LWRldGFpbC1pbmZvL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdvcmtyZXBvcnQtZGV0YWlsLWluZm9cXHdvcmtyZXBvcnQtZGV0YWlsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29ya3JlcG9ydC1kZXRhaWwtaW5mby93b3JrcmVwb3J0LWRldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0FDR0o7O0FEQUE7RUFBbUIseUJBQUE7QUNJbkI7O0FERkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya3JlcG9ydC1kZXRhaWwtaW5mby93b3JrcmVwb3J0LWRldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1pbndpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAxMzVweDtcclxuICB9XHJcbiAgLm1pZGRsZXdpZHRoe1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmZpcnN0V2lkdGh7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cclxuXHJcbi5ib3JkZXJPbmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcbi5ib3JkZXJPbmVDb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcbi5ib3JkZXJPbmV3aWR0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IDg3cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59IiwiLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm1pbndpZHRoIHtcbiAgbWluLXdpZHRoOiAxMzVweDtcbn1cblxuLm1pZGRsZXdpZHRoIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmZpcnN0V2lkdGgge1xuICB3aWR0aDogYXV0bztcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmJvcmRlck9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmJvcmRlck9uZUNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmJvcmRlck9uZXdpZHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogODdweDtcbiAgaGVpZ2h0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/workreport-detail-info/workreport-detail-info.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/workreport-detail-info/workreport-detail-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WorkreportDetailInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportDetailInfoComponent", function() { return WorkreportDetailInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_workreport_detail_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/workreport-detail-info.service */ "./src/app/services/workreport-detail-info.service.ts");




let WorkreportDetailInfoComponent = class WorkreportDetailInfoComponent {
    constructor(authService, wkrpInfoService) {
        this.authService = authService;
        this.wkrpInfoService = wkrpInfoService;
        this.postData = {
            year: '2020',
            month: '5',
            workreport_id: '29558',
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
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
            this.getWorkReportDetailByEmpID();
        });
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
    }
    getWorkReportDetailByEmpID() {
        this.postData.member_id = this.displayUserData.email;
        this.wkrpInfoService.wkrpDetailData(this.postData).subscribe((res) => {
            //console.log(res);
            this.wkreport_detail = res.work_report_detail;
            this.wkReport = res.work_report;
            this.workPattern = res.project_info.working_hour;
            //to display exist work pattern
            for (let index = 0; index < 6; index++) {
                if (this.workPattern[index]['pattern_flg'] == 1) {
                    this.workPatternExist[index] = this.workPattern[index];
                }
            }
            console.log(this.workPatternExist);
            this.wkreport_detail_date = res.work_report_detail[0]['report_date'];
        });
    }
};
WorkreportDetailInfoComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_workreport_detail_info_service__WEBPACK_IMPORTED_MODULE_3__["WorkreportDetailInfoService"] }
];
WorkreportDetailInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workreport-detail-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workreport-detail-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-detail-info/workreport-detail-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workreport-detail-info.component.scss */ "./src/app/components/workreport-detail-info/workreport-detail-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_workreport_detail_info_service__WEBPACK_IMPORTED_MODULE_3__["WorkreportDetailInfoService"]])
], WorkreportDetailInfoComponent);



/***/ }),

/***/ "./src/app/components/workreport-search/workreport-search.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/workreport-search/workreport-search.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-style {\n  border: 1px solid #000000 !important;\n  margin-top: 3px !important;\n  text-align: center !important;\n}\n\n.btn-style-search {\n  margin: 5px 10px 10px;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: 300px;\n  margin: 15px;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.borderOnewidth {\n  border: 1px solid #eeeeee;\n  border-radius: 8px;\n  max-width: 100%;\n  box-shadow: 1px 1px 1px 1px rgba(238, 238, 238, 0.5);\n}\n\n.btn-style-search {\n  width: 90%;\n  margin: 0px;\n}\n\n.postline {\n  margin: 7px 12px 7px 8px;\n  font-size: 23px;\n  text-align: center;\n}\n\n.maintitle {\n  font-size: 22px;\n}\n\n.bd1-color {\n  border: 1px solid #3ea0e6;\n  border-radius: 10px;\n  font-size: 17px;\n  padding: 12px 5px 12px 5px;\n  color: #707070;\n  margin-top: 0;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrcmVwb3J0LXNlYXJjaC9EOlxcUGhvZW5peFxcZGV2bW9iaWxlXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx3b3JrcmVwb3J0LXNlYXJjaFxcd29ya3JlcG9ydC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29ya3JlcG9ydC1zZWFyY2gvd29ya3JlcG9ydC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENFO0VBQW1CLHlCQUFBO0FDR3JCOztBRERFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFHQSxvREFBQTtBQ0lKOztBREZFO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNLTjs7QURGRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEU7RUFDSSxlQUFBO0FDTU47O0FESEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93b3JrcmVwb3J0LXNlYXJjaC93b3JrcmVwb3J0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1zdHlsZS1zZWFyY2h7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfVxyXG5cclxuICAuYm9yZGVyT25ld2lkdGh7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyMzgsMjM4LDIzOCwwLjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyMzgsMjM4LDIzOCwwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMjM4LDIzOCwyMzgsMC41KTtcclxuICB9XHJcbiAgLmJ0bi1zdHlsZS1zZWFyY2h7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvc3RsaW5le1xyXG4gICAgbWFyZ2luOiA3cHggMTJweCA3cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubWFpbnRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuLmJkMS1jb2xvciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEycHggNXB4IDEycHggNXB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuIiwiLmlucHV0LXN0eWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc3R5bGUtc2VhcmNoIHtcbiAgbWFyZ2luOiA1cHggMTBweCAxMHB4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmJvcmRlck9uZXdpZHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUpO1xufVxuXG4uYnRuLXN0eWxlLXNlYXJjaCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucG9zdGxpbmUge1xuICBtYXJnaW46IDdweCAxMnB4IDdweCA4cHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uYmQxLWNvbG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMnB4IDVweCAxMnB4IDVweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/workreport-search/workreport-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/workreport-search/workreport-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkreportSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportSearchComponent", function() { return WorkreportSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/member-info.service */ "./src/app/services/member-info.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language-switch.service */ "./src/app/services/language-switch.service.ts");








let WorkreportSearchComponent = class WorkreportSearchComponent {
    constructor(route, auth, toastService, router, memberService, langServe, langSwitch) {
        this.route = route;
        this.auth = auth;
        this.toastService = toastService;
        this.router = router;
        this.memberService = memberService;
        this.langServe = langServe;
        this.langSwitch = langSwitch;
        this.postData = {
            year: '',
            month: '',
            member_id: '',
            token: '',
            language: '',
            pages: ''
        };
        this.yearlist = [];
        this.monthlist = [];
    }
    ngOnInit() {
        //console.log(this.loginUser + "wkrp search");
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
            console.log(this.postData.year + this.postData.month + "current year");
        }
        this.yearlist = [
            { id: 0,
                value: 2010
            },
            { id: 1,
                value: 2011
            },
            { id: 2,
                value: 2012
            },
            { id: 3,
                value: 2013
            },
            { id: 4,
                value: 2014
            },
            { id: 5,
                value: 2015
            },
            { id: 6,
                value: 2016
            },
            { id: 7,
                value: 2017
            },
            { id: 8,
                value: 2018
            },
            { id: 9,
                value: 2019
            },
            { id: 10,
                value: 2020
            },
            { id: 11,
                value: 2021
            },
            { id: 12,
                value: 2022
            },
            { id: 13,
                value: 2023
            },
            { id: 14,
                value: 2024
            },
            { id: 15,
                value: 2025
            },
            { id: 16,
                value: 2026
            },
            { id: 17,
                value: 2027
            },
            { id: 18,
                value: 2028
            },
            { id: 19,
                value: 2029
            },
            { id: 20,
                value: 2030
            }
        ];
        this.monthlist = [
            { id: 1,
                value: 1
            },
            { id: 2,
                value: 2
            },
            { id: 3,
                value: 3
            },
            { id: 4,
                value: 4
            },
            { id: 5,
                value: 5
            },
            { id: 6,
                value: 6
            },
            { id: 7,
                value: 7
            },
            { id: 8,
                value: 8
            },
            { id: 9,
                value: 9
            },
            { id: 10,
                value: 10
            },
            { id: 11,
                value: 11
            },
            { id: 12,
                value: 12
            }
        ];
        this.languageDefault();
    }
    languageDefault() {
        // console.log("language selecct", this.postData);
        this.langSwitch.langSwitchData$.subscribe((res) => {
            this.postData.language = res.language;
            //console.log(this.postData.language, 'assign');
            if (!this.postData.language) {
                this.postData.language = 'en';
                //console.log(this.postData.language, 'default');
            }
            this.postData.pages = 'work_report';
            this.langServe.languageData(this.postData).subscribe((res) => {
                // console.log(res.data, ' work_report');
                this.dataLeng = res.data;
            });
        });
    }
    searchWkReportAction() {
        this.postData.member_id = this.loginUser['email'];
        this.postData.token = this.loginUser['access-token'];
        //console.log(this.postData);
        if (this.validateInputs()) {
            this.memberService.memberData(this.postData).subscribe((res) => {
                this.memberService.updateMemberData(res);
            });
        }
        else {
            this.toastService.presentToast("date can't empty");
        }
        this.router.navigate(['/home/workreport'], { queryParams: { 'year': this.postData.year, 'month': this.postData.month } });
    }
    validateInputs() {
        return (this.postData.year &&
            this.postData.month);
    }
    formatMemberNo(mbno) {
        if (this.memberNo.toString().length == 3) {
            this.memberNo = "0" + this.memberNo;
        }
        else if (this.memberNo.toString().length == 2) {
            this.memberNo = "00" + this.memberNo;
        }
        else if (this.memberNo.toString().length == 1) {
            this.memberNo = "000" + this.memberNo;
        }
        else {
            this.memberNo = this.memberNo;
        }
        return this.memberNo;
    }
    getMemberDetailByEmpID() {
        this.postData.member_id = this.authUser.email;
        this.project_info = '';
        console.log(this.postData);
        this.memberService.memberData(this.postData).subscribe((res) => {
            console.log(res);
            this.project_info = res.project_info.project_infos;
            this.wkReportDetail = res.work_report_detail;
            this.mbInfo = res.member_info;
            this.formatMemberNo(this.mbInfo.member_no);
            //console.log(this.memberNo.toString().length);
            this.compareTranEx = this.mbInfo['dairy_transrate_flg'];
        });
    }
};
WorkreportSearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_3__["MemberInfoService"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"] },
    { type: src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WorkreportSearchComponent.prototype, "loginUser", void 0);
WorkreportSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workreport-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workreport-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/workreport-search/workreport-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workreport-search.component.scss */ "./src/app/components/workreport-search/workreport-search.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_member_info_service__WEBPACK_IMPORTED_MODULE_3__["MemberInfoService"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
        src_app_services_language_switch_service__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchService"]])
], WorkreportSearchComponent);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlertConfirm(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let choice;
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Okay',
                        role: 'okay'
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss().then(data => {
                choice = data;
            });
            return choice;
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/clientinfo.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/clientinfo.service.ts ***!
  \************************************************/
/*! exports provided: ClientinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientinfoService", function() { return ClientinfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let ClientinfoService = class ClientinfoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.clientData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeClientData(data) {
        this.clientData$.next(data);
    }
    clientData(data) {
        return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_detail", data);
    }
    updateClientData(newdata) {
        this.changeClientData(newdata);
    }
};
ClientinfoService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ClientinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], ClientinfoService);



/***/ }),

/***/ "./src/app/services/customer-workreport-info.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/customer-workreport-info.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomerWorkreportInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerWorkreportInfoService", function() { return CustomerWorkreportInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let CustomerWorkreportInfoService = class CustomerWorkreportInfoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.customerData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeCustomerData(data) {
        //console.log(data);
        this.customerData$.next(data);
    }
    getcustomerData(data) {
        return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_detail", data);
    }
    updateCustomerData(newdata) {
        //console.log(newdata);
        this.changeCustomerData(newdata);
    }
};
CustomerWorkreportInfoService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
CustomerWorkreportInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], CustomerWorkreportInfoService);



/***/ }),

/***/ "./src/app/services/faq.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/faq.service.ts ***!
  \*****************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let FaqService = class FaqService {
    constructor(httpService) {
        this.httpService = httpService;
        this.faqData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changefaqData(data) {
        this.faqData$.next(data);
    }
    faqData(postData) {
        return this.httpService.getUserGuide('public_lang/get_hflr', postData);
    }
};
FaqService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], FaqService);



/***/ }),

/***/ "./src/app/services/feed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FeedService = class FeedService {
    constructor(httpService) {
        this.httpService = httpService;
        this.feedData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](['']);
    }
    //update data
    changeFeedData(data) {
        this.feedData$.next(data);
    }
    //get latest data
    getCurrentFeedData() {
        return this.feedData$.getValue();
    }
    deleteFeedData(feedIndex) {
        let data = [];
        let currentFeedData = this.getCurrentFeedData();
        currentFeedData.splice(feedIndex, 1);
        let newUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newUpdateData);
    }
    updateFeedData(newFeed) {
        let data = [];
        data.push(newFeed);
        let currentFeedData = this.getCurrentFeedData();
        let newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    }
    feedData(postData) {
        return this.httpService.post("feed", postData);
    }
    feedDelete(postData) {
        return this.httpService.post("feedDelete", postData);
    }
    feedUpdate(postData) {
        return this.httpService.post("feedUpdate", postData);
    }
};
FeedService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], FeedService);



/***/ }),

/***/ "./src/app/services/language-switch.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/language-switch.service.ts ***!
  \*****************************************************/
/*! exports provided: LanguageSwitchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchService", function() { return LanguageSwitchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LanguageSwitchService = class LanguageSwitchService {
    constructor() {
        this.langSwitchData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeLangSwitchData(data) {
        this.langSwitchData$.next(data);
    }
    updateLangSwitchData(newdata) {
        this.changeLangSwitchData(newdata);
    }
};
LanguageSwitchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LanguageSwitchService);



/***/ }),

/***/ "./src/app/services/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let LanguageService = class LanguageService {
    constructor(httpService) {
        this.httpService = httpService;
        this.languageData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeLanguageData(data) {
        this.languageData$.next(data);
    }
    languageData(data) {
        return this.httpService.getLanguageData("public_lang/get_hflr", data);
    }
    updateLangData(newdata) {
        this.changeLanguageData(newdata);
    }
};
LanguageService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], LanguageService);



/***/ }),

/***/ "./src/app/services/member-info.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/member-info.service.ts ***!
  \*************************************************/
/*! exports provided: MemberInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberInfoService", function() { return MemberInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let MemberInfoService = class MemberInfoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.memberData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    //update data
    changeMemberData(data) {
        this.memberData$.next(data);
    }
    memberData(data) {
        // return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_detail", data);
        return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_create", data);
    }
    //get latest data
    getCurrentMbData() {
        return this.memberData$.getValue();
    }
    updateMemberData(newdata) {
        //let data = [];
        // data.push(newdata);
        //let currentMbData = this.getCurrentMbData();
        //let newMbUpdateData = data.concat(currentMbData);
        //let newMbUpdateData = currentMbData;
        console.log(newdata);
        this.changeMemberData(newdata);
    }
};
MemberInfoService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
MemberInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], MemberInfoService);



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let ProfileService = class ProfileService {
    constructor(httpService) {
        this.httpService = httpService;
        this.profileData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeProfileData(data) {
        this.profileData$.next(data);
    }
    profileData(postData) {
        return this.httpService.getUserData("/employee_detail/employee_info", postData);
    }
};
ProfileService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], ProfileService);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ }),

/***/ "./src/app/services/transportation-expense.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/transportation-expense.service.ts ***!
  \************************************************************/
/*! exports provided: TransportationExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationExpenseService", function() { return TransportationExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let TransportationExpenseService = class TransportationExpenseService {
    constructor(httpService) {
        this.httpService = httpService;
        this.transportExpenseData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    changeTransportData(data) {
        this.transportExpenseData$.next(data);
    }
    transportExpenseData(data) {
        console.log(data);
        return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_detail", data);
    }
    updateTransportExpense(newdata) {
        this.changeTransportData(newdata);
    }
};
TransportationExpenseService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
TransportationExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], TransportationExpenseService);



/***/ }),

/***/ "./src/app/services/workreport-detail-info.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/workreport-detail-info.service.ts ***!
  \************************************************************/
/*! exports provided: WorkreportDetailInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportDetailInfoService", function() { return WorkreportDetailInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let WorkreportDetailInfoService = class WorkreportDetailInfoService {
    constructor(httpService) {
        this.httpService = httpService;
        this.wkrpDetailData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    wkrpDetailData(data) {
        return this.httpService.getWorkReportDetail("basic_user/basic_user_workreport_detail", data);
    }
};
WorkreportDetailInfoService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
WorkreportDetailInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], WorkreportDetailInfoService);



/***/ }),

/***/ "./src/app/services/workreport-download.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/workreport-download.service.ts ***!
  \*********************************************************/
/*! exports provided: WorkreportDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportDownloadService", function() { return WorkreportDownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let WorkreportDownloadService = class WorkreportDownloadService {
    constructor(httpService) {
        this.httpService = httpService;
        this.workReportDownload$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['']);
    }
    workReportDownload(data) {
        this.workReportDownload$.next(data);
    }
    workReportDownloadExcel(data) {
        return this.httpService.getWorkReportDownloadExcel("basic_user/workreport_download_data", data);
    }
};
WorkreportDownloadService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
WorkreportDownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], WorkreportDownloadService);



/***/ })

}]);
//# sourceMappingURL=default~pages-changepassword-changepassword-module~pages-client-client-module~pages-customerwkreport~8db89b57-es2015.js.map