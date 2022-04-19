(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-right: 5px;\">\r\n      <ion-back-button defaultHref=\"/home/feed\" text=\"\" style=\"color: #707070;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"btn-help\">\r\n      <span style=\"color: #3ea0e6;\">Help</span> \r\n      <ion-icon name=\"help-circle-outline\" style=\"width: 23px; height: 23px; color: #3ea0e6;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1>Angular 10 Forms Example</h1>\r\n  <form [formGroup]=\"skillsForm\" (ngSubmit)=\"onSubmit()\">\r\n \r\n    <p>\r\n      <label for=\"name\">Name </label>\r\n      <input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n    </p>\r\n\r\n    <div formArrayName=\"skills\">\r\n      <div *ngFor=\"let skill of skills.controls; let i=index\">\r\n        <div [formGroupName]=\"i\">\r\n          {{i}}\r\n          skill name :\r\n          <input type=\"text\"  formControlName=\"skill\" ><br>\r\n          <!-- <input type=\"text\"  formControlName=\"skill\" [(ngModel)]=\"namedly\"><br> -->\r\n          exp:\r\n          <input type=\"text\" formControlName=\"exp\">\r\n          \r\n          <button  (click)=\"removeSkill(i)\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <p>\r\n        <button (click)=\"addSkills()\">Add</button>\r\n      </p>\r\n    </div>\r\n\r\n    <div formArrayName=\"tranexp\">\r\n      <label *ngIf=\"tranexp.errors?.required\">\r\n        Add Employees.\r\n      </label>\r\n      <div *ngFor=\"let tran of tranexp.controls; let i=index\">\r\n        <div [formGroupName]=\"i\">\r\n          IS Invalid - {{ getValidity(i) }} \r\n          <br>\r\n          {{i}}\r\n          tranexp name :\r\n          <input type=\"text\"  formControlName=\"skill\" [ngClass]=\"{'has-error': tran.controls.skill.invalid}\" ><br>\r\n          <label *ngIf=\"getValidity(i) == true || tran.controls.skill.invalid\" >Must be fill</label><br>\r\n          <!-- <input type=\"text\"  formControlName=\"skill\" [(ngModel)]=\"namedly\"><br> -->\r\n          exp:\r\n          <input type=\"text\" formControlName=\"exp\" [ngClass]=\"{'has-error': tran.controls.exp.invalid}\">\r\n          <label *ngIf=\"getValidity(i) == true || tran.controls.exp.invalid\" >Must be fill</label><br>\r\n          <button  (click)=\"removeTexpense(i)\">Remove</button>\r\n        </div>\r\n      </div>\r\n      <p>\r\n        <button (click)=\"addTexpense()\">Add</button>\r\n      </p>\r\n    </div>\r\n   \r\n      <p>\r\n        <button type=\"submit\">Submit</button>\r\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n      </p>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/pages/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-help {\n  padding: 0px 10px;\n  background: #cbe9ff;\n  border-radius: 13px;\n  margin: 5px;\n  border: 1px solid #3ea0e6;\n}\n\n.titlefont {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #707070;\n}\n\nb {\n  color: #707077;\n}\n\np {\n  margin-top: 0px;\n}\n\n.topblk {\n  border: 1px solid #4ac9af;\n  padding: 5px;\n  background-color: #f2fffd;\n  margin: 15px;\n  border-radius: 20px;\n}\n\n.rowitem {\n  background-color: #f2fffd;\n  border-top: 1px dashed #4ac9af;\n  padding-top: 5px;\n}\n\n.is-invalid, .has-error {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Q6XFxQaG9lbml4XFxkZXZtb2JpbGVcXEFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixjQUFBO0FDSXpDOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0kscUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1oZWxwe1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2JlOWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlYTBlNjtcclxufVxyXG4udGl0bGVmb250e1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5iIHtcclxuICAgIGNvbG9yOiAjNzA3MDc3O1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi50b3BibGsge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRhYzlhZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmZmZmQ7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5yb3dpdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZmZmZDtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzRhYzlhZjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5pcy1pbnZhbGlkLCAuaGFzLWVycm9ye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59IiwiLmJ0bi1oZWxwIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNjYmU5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2VhMGU2O1xufVxuXG4udGl0bGVmb250IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5iIHtcbiAgY29sb3I6ICM3MDcwNzc7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50b3BibGsge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGFjOWFmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmZmZmQ7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnJvd2l0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZmZkO1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM0YWM5YWY7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pcy1pbnZhbGlkLCAuaGFzLWVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let EditProfilePage = class EditProfilePage {
    constructor(fb) {
        this.fb = fb;
        this.submitted = false;
        this.skillsForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            skills: this.fb.array([]),
            tranexp: this.fb.array([])
        });
    }
    ngOnInit() {
        this.data = { skills: [{ skill: 'my skill1', exp: 'photoshop' }, { skill: 'my skill2', exp: 'php, mysql' }, { skill: 'my skill3', exp: 'Angular 8 mobile' }, { skill: '', exp: '' }] };
        //this.skillsForm.controls.name.setValue('abc');
        for (let i = 0; i < this.data.skills.length; i++) {
            let formGroup = this.fb.group({
                skill: this.data.skills[i].skill,
                exp: this.data.skills[i].exp,
            });
            this.skills.push(formGroup);
        }
        // console.log(this.skills);
        for (let i = 0; i < this.data.skills.length; i++) {
            let formGroup = this.fb.group({
                skill: this.data.skills[i].skill,
                exp: this.data.skills[i].exp,
            });
            this.tranexp.push(formGroup);
        }
        console.log(this.tranexp);
    }
    // convenience getter for easy access to form fields
    get f() { return this.skillsForm.controls; }
    getValidity(i) {
        return this.skillsForm.get('tranexp').controls[i].invalid;
    }
    //read only formarray
    get skills() {
        return this.skillsForm.get("skills");
    }
    //read only formarray
    get tranexp() {
        return this.skillsForm.get("tranexp");
    }
    newSkill() {
        return this.fb.group({
            skill: '',
            exp: '',
        });
    }
    newTexpense() {
        return this.fb.group({
            skill: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            exp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    addTexpense() {
        this.tranexp.push(this.newTexpense());
    }
    addSkills() {
        this.skills.push(this.newSkill());
    }
    removeSkill(i) {
        this.skills.removeAt(i);
    }
    removeTexpense(i) {
        this.tranexp.removeAt(i);
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.skillsForm.invalid) {
            return;
        }
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skillsForm.value, null, 4));
        console.log(this.skillsForm.value);
    }
    onReset() {
        this.submitted = false;
        this.skillsForm.reset();
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es2015.js.map