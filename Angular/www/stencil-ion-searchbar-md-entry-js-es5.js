var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-searchbar-md-entry-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js ***!
          \*********************************************************************/
        /*! exports provided: ion_searchbar */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_searchbar", function () { return Searchbar; });
            /* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
            /* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
            /* harmony import */ var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d8b49b57.js */ "./node_modules/@ionic/core/dist/esm/helpers-d8b49b57.js");
            /* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");
            var searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:17px;font-weight:400;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
            var searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}";
            var Searchbar = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.isCancelVisible = false;
                    this.shouldAlignLeft = true;
                    this.focused = false;
                    this.noAnimate = true;
                    /**
                     * If `true`, enable searchbar animation.
                     */
                    this.animated = false;
                    /**
                     * Set the input's autocomplete property.
                     */
                    this.autocomplete = 'off';
                    /**
                     * Set the input's autocorrect property.
                     */
                    this.autocorrect = 'off';
                    /**
                     * Set the cancel button icon. Only applies to `md` mode.
                     * Defaults to `"arrow-back-sharp"`.
                     */
                    this.cancelButtonIcon = _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonIcon', 'arrow-back-sharp');
                    /**
                     * Set the the cancel button text. Only applies to `ios` mode.
                     */
                    this.cancelButtonText = 'Cancel';
                    /**
                     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
                     */
                    this.debounce = 250;
                    /**
                     * If `true`, the user cannot interact with the input.
                     */
                    this.disabled = false;
                    /**
                     * Set the input's placeholder.
                     * `placeholder` can accept either plaintext or HTML as a string.
                     * To display characters normally reserved for HTML, they
                     * must be escaped. For example `<Ionic>` would become
                     * `&lt;Ionic&gt;`
                     *
                     * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
                     */
                    this.placeholder = 'Search';
                    /**
                     * Sets the behavior for the cancel button. Defaults to `"never"`.
                     * Setting to `"focus"` shows the cancel button on focus.
                     * Setting to `"never"` hides the cancel button.
                     * Setting to `"always"` shows the cancel button regardless
                     * of focus state.
                     */
                    this.showCancelButton = 'never';
                    /**
                     * If `true`, enable spellcheck on the input.
                     */
                    this.spellcheck = false;
                    /**
                     * Set the type of the input.
                     */
                    this.type = 'search';
                    /**
                     * the value of the searchbar.
                     */
                    this.value = '';
                    /**
                     * Clears the input field and triggers the control change.
                     */
                    this.onClearInput = function (ev) {
                        _this.ionClear.emit();
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
                        // wait for 4 frames
                        setTimeout(function () {
                            var value = _this.getValue();
                            if (value !== '') {
                                _this.value = '';
                                _this.ionInput.emit();
                            }
                        }, 16 * 4);
                    };
                    /**
                     * Clears the input field and tells the input to blur since
                     * the clearInput function doesn't want the input to blur
                     * then calls the custom cancel function if the user passed one in.
                     */
                    this.onCancelSearchbar = function (ev) {
                        if (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        _this.ionCancel.emit();
                        _this.onClearInput();
                        if (_this.nativeInput) {
                            _this.nativeInput.blur();
                        }
                    };
                    /**
                     * Update the Searchbar input value when the input changes
                     */
                    this.onInput = function (ev) {
                        var input = ev.target;
                        if (input) {
                            _this.value = input.value;
                        }
                        _this.ionInput.emit(ev);
                    };
                    /**
                     * Sets the Searchbar to not focused and checks if it should align left
                     * based on whether there is a value in the searchbar or not.
                     */
                    this.onBlur = function () {
                        _this.focused = false;
                        _this.ionBlur.emit();
                        _this.positionElements();
                    };
                    /**
                     * Sets the Searchbar to focused and active on input focus.
                     */
                    this.onFocus = function () {
                        _this.focused = true;
                        _this.ionFocus.emit();
                        _this.positionElements();
                    };
                    this.ionInput = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionInput", 7);
                    this.ionChange = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
                    this.ionCancel = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionCancel", 7);
                    this.ionClear = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionClear", 7);
                    this.ionBlur = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
                    this.ionFocus = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
                    this.ionStyle = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
                }
                class_1.prototype.debounceChanged = function () {
                    this.ionChange = Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
                };
                class_1.prototype.valueChanged = function () {
                    var inputEl = this.nativeInput;
                    var value = this.getValue();
                    if (inputEl && inputEl.value !== value) {
                        inputEl.value = value;
                    }
                    this.ionChange.emit({ value: value });
                };
                class_1.prototype.showCancelButtonChanged = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        _this.positionElements();
                        Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_this);
                    });
                };
                class_1.prototype.connectedCallback = function () {
                    this.emitStyle();
                };
                class_1.prototype.componentDidLoad = function () {
                    var _this = this;
                    this.positionElements();
                    this.debounceChanged();
                    setTimeout(function () {
                        _this.noAnimate = false;
                    }, 300);
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'searchbar': true
                    });
                };
                /**
                 * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
                 * `input.focus()`.
                 */
                class_1.prototype.setFocus = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (this.nativeInput) {
                                this.nativeInput.focus();
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Returns the native `<input>` element used under the hood.
                 */
                class_1.prototype.getInputElement = function () {
                    return Promise.resolve(this.nativeInput);
                };
                /**
                 * Positions the input search icon, placeholder, and the cancel button
                 * based on the input value and if it is focused. (ios only)
                 */
                class_1.prototype.positionElements = function () {
                    var value = this.getValue();
                    var prevAlignLeft = this.shouldAlignLeft;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    var shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
                    this.shouldAlignLeft = shouldAlignLeft;
                    if (mode !== 'ios') {
                        return;
                    }
                    if (prevAlignLeft !== shouldAlignLeft) {
                        this.positionPlaceholder();
                    }
                    if (this.animated) {
                        this.positionCancelButton();
                    }
                };
                /**
                 * Positions the input placeholder
                 */
                class_1.prototype.positionPlaceholder = function () {
                    var inputEl = this.nativeInput;
                    if (!inputEl) {
                        return;
                    }
                    var isRTL = document.dir === 'rtl';
                    var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
                    if (this.shouldAlignLeft) {
                        inputEl.removeAttribute('style');
                        iconEl.removeAttribute('style');
                    }
                    else {
                        // Create a dummy span to get the placeholder width
                        var doc = document;
                        var tempSpan_1 = doc.createElement('span');
                        tempSpan_1.innerText = this.placeholder || '';
                        doc.body.appendChild(tempSpan_1);
                        // Get the width of the span then remove it
                        Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["r"])(function () {
                            var textWidth = tempSpan_1.offsetWidth;
                            tempSpan_1.remove();
                            // Calculate the input padding
                            var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
                            // Calculate the icon margin
                            var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
                            // Set the input padding start and icon margin start
                            if (isRTL) {
                                inputEl.style.paddingRight = inputLeft;
                                iconEl.style.marginRight = iconLeft;
                            }
                            else {
                                inputEl.style.paddingLeft = inputLeft;
                                iconEl.style.marginLeft = iconLeft;
                            }
                        });
                    }
                };
                /**
                 * Show the iOS Cancel button on focus, hide it offscreen otherwise
                 */
                class_1.prototype.positionCancelButton = function () {
                    var isRTL = document.dir === 'rtl';
                    var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
                    var shouldShowCancel = this.shouldShowCancelButton();
                    if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
                        var cancelStyle = cancelButton.style;
                        this.isCancelVisible = shouldShowCancel;
                        if (shouldShowCancel) {
                            if (isRTL) {
                                cancelStyle.marginLeft = '0';
                            }
                            else {
                                cancelStyle.marginRight = '0';
                            }
                        }
                        else {
                            var offset = cancelButton.offsetWidth;
                            if (offset > 0) {
                                if (isRTL) {
                                    cancelStyle.marginLeft = -offset + 'px';
                                }
                                else {
                                    cancelStyle.marginRight = -offset + 'px';
                                }
                            }
                        }
                    }
                };
                class_1.prototype.getValue = function () {
                    return this.value || '';
                };
                class_1.prototype.hasValue = function () {
                    return this.getValue() !== '';
                };
                /**
                 * Determines whether or not the cancel button should be visible onscreen.
                 * Cancel button should be shown if one of two conditions applies:
                 * 1. `showCancelButton` is set to `always`.
                 * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
                 */
                class_1.prototype.shouldShowCancelButton = function () {
                    if ((this.showCancelButton === 'never') || (this.showCancelButton === 'focus' && !this.focused)) {
                        return false;
                    }
                    return true;
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _a;
                    var animated = this.animated && _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('animated', true);
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    var clearIcon = this.clearIcon || (mode === 'ios' ? 'close-circle' : 'close-sharp');
                    var searchIcon = this.searchIcon || (mode === 'ios' ? 'search-outline' : 'search-sharp');
                    var cancelButton = (this.showCancelButton !== 'never') && (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "cancel", type: "button", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, mode === 'md'
                        ? Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: this.cancelButtonIcon, lazy: false })
                        : this.cancelButtonText)));
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "search", "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['searchbar-animated'] = animated, _a['searchbar-disabled'] = this.disabled, _a['searchbar-no-animate'] = animated && this.noAnimate, _a['searchbar-has-value'] = this.hasValue(), _a['searchbar-left-aligned'] = this.shouldAlignLeft, _a['searchbar-has-focus'] = this.focused, _a['searchbar-should-show-cancel'] = this.shouldShowCancelButton(), _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "searchbar-input-container" }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-label": "search text", disabled: this.disabled, ref: function (el) { return _this.nativeInput = el; }, class: "searchbar-input", inputMode: this.inputmode, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": "reset", type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))), mode === 'ios' && cancelButton));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "debounce": ["debounceChanged"],
                            "value": ["valueChanged"],
                            "showCancelButton": ["showCancelButtonChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            Searchbar.style = {
                /*STENCIL:MODE:ios*/ ios: searchbarIosCss,
                /*STENCIL:MODE:md*/ md: searchbarMdCss
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=stencil-ion-searchbar-md-entry-js-es2015.js.map
//# sourceMappingURL=stencil-ion-searchbar-md-entry-js-es5.js.map
//# sourceMappingURL=stencil-ion-searchbar-md-entry-js-es5.js.map