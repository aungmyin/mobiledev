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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-item-option_3-md-entry-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js": 
        /*!*************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js ***!
          \*************************************************************************/
        /*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_option", function () { return ItemOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_options", function () { return ItemOptions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function () { return ItemSliding; });
            /* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
            /* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
            /* harmony import */ var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d8b49b57.js */ "./node_modules/@ionic/core/dist/esm/helpers-d8b49b57.js");
            /* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");
            var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
            var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";
            var ItemOption = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the user cannot interact with the item option.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the option will expand to take up the available width and cover any other options.
                     */
                    this.expandable = false;
                    /**
                     * The type of the button.
                     */
                    this.type = 'button';
                    this.onClick = function (ev) {
                        var el = ev.target.closest('ion-item-option');
                        if (el) {
                            ev.preventDefault();
                        }
                    };
                }
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, disabled = _b.disabled, expandable = _b.expandable, href = _b.href;
                    var TagType = href === undefined ? 'button' : 'a';
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            download: this.download,
                            href: this.href,
                            target: this.target
                        };
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['item-option-disabled'] = disabled, _a['item-option-expandable'] = expandable, _a['ion-activatable'] = true, _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "horizontal-wrapper" }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon-only" }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })), mode === 'md' && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            ItemOption.style = {
                /*STENCIL:MODE:ios*/ ios: itemOptionIosCss,
                /*STENCIL:MODE:md*/ md: itemOptionMdCss
            };
            var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
            var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
            var ItemOptions = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
                     *
                     */
                    this.side = 'end';
                    this.ionSwipe = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSwipe", 7);
                }
                /** @internal */
                class_2.prototype.fireSwipeEvent = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.ionSwipe.emit({
                                side: this.side
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    var isEnd = Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["item-options-" + mode] = true,
                            _a['item-options-start'] = !isEnd,
                            _a['item-options-end'] = isEnd,
                            _a) }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            ItemOptions.style = {
                /*STENCIL:MODE:ios*/ ios: itemOptionsIosCss,
                /*STENCIL:MODE:md*/ md: itemOptionsMdCss
            };
            var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
            var SWIPE_MARGIN = 30;
            var ELASTIC_FACTOR = 0.55;
            var openSlidingItem;
            var ItemSliding = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.item = null;
                    this.openAmount = 0;
                    this.initialOpenAmount = 0;
                    this.optsWidthRightSide = 0;
                    this.optsWidthLeftSide = 0;
                    this.sides = 0 /* None */;
                    this.optsDirty = true;
                    this.state = 2 /* Disabled */;
                    /**
                     * If `true`, the user cannot interact with the sliding item.
                     */
                    this.disabled = false;
                    this.ionDrag = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDrag", 7);
                }
                class_3.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.enable(!this.disabled);
                    }
                };
                class_3.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.item = this.el.querySelector('ion-item');
                                    return [4 /*yield*/, this.updateOptions()];
                                case 1:
                                    _b.sent();
                                    _a = this;
                                    return [4 /*yield*/, Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./index-e44ebcc6.js */ "./node_modules/@ionic/core/dist/esm/index-e44ebcc6.js"))];
                                case 2:
                                    _a.gesture = (_b.sent()).createGesture({
                                        el: this.el,
                                        gestureName: 'item-swipe',
                                        gesturePriority: 100,
                                        threshold: 5,
                                        canStart: function (ev) { return _this.canStart(ev); },
                                        onStart: function () { return _this.onStart(); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function (ev) { return _this.onEnd(ev); },
                                    });
                                    this.disabledChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_3.prototype.disconnectedCallback = function () {
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                    this.item = null;
                    this.leftOptions = this.rightOptions = undefined;
                    if (openSlidingItem === this.el) {
                        openSlidingItem = undefined;
                    }
                };
                /**
                 * Get the amount the item is open in pixels.
                 */
                class_3.prototype.getOpenAmount = function () {
                    return Promise.resolve(this.openAmount);
                };
                /**
                 * Get the ratio of the open amount of the item compared to the width of the options.
                 * If the number returned is positive, then the options on the right side are open.
                 * If the number returned is negative, then the options on the left side are open.
                 * If the absolute value of the number is greater than 1, the item is open more than
                 * the width of the options.
                 */
                class_3.prototype.getSlidingRatio = function () {
                    return Promise.resolve(this.getSlidingRatioSync());
                };
                /**
                 * Open the sliding item.
                 *
                 * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
                 */
                class_3.prototype.open = function (side) {
                    return __awaiter(this, void 0, void 0, function () {
                        var optionsToOpen, isStartOpen, isEndOpen;
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (this.item === null) {
                                return [2 /*return*/];
                            }
                            optionsToOpen = this.getOptions(side);
                            if (!optionsToOpen) {
                                return [2 /*return*/];
                            }
                            /**
                             * If side is not set, we need to infer the side
                             * so we know which direction to move the options
                             */
                            if (side === undefined) {
                                side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
                            }
                            // In RTL we want to switch the sides
                            side = Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["i"])(side) ? 'end' : 'start';
                            isStartOpen = this.openAmount < 0;
                            isEndOpen = this.openAmount > 0;
                            /**
                             * If a side is open and a user tries to
                             * re-open the same side, we should not do anything
                             */
                            if (isStartOpen && optionsToOpen === this.leftOptions) {
                                return [2 /*return*/];
                            }
                            if (isEndOpen && optionsToOpen === this.rightOptions) {
                                return [2 /*return*/];
                            }
                            this.closeOpened();
                            this.state = 4 /* Enabled */;
                            requestAnimationFrame(function () {
                                _this.calculateOptsWidth();
                                var width = (side === 'end') ? _this.optsWidthRightSide : -_this.optsWidthLeftSide;
                                openSlidingItem = _this.el;
                                _this.setOpenAmount(width, false);
                                _this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Close the sliding item. Items can also be closed from the [List](../list).
                 */
                class_3.prototype.close = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.setOpenAmount(0, true);
                            return [2 /*return*/];
                        });
                    });
                };
                /**
                 * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
                 */
                class_3.prototype.closeOpened = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (openSlidingItem !== undefined) {
                                openSlidingItem.close();
                                openSlidingItem = undefined;
                                return [2 /*return*/, true];
                            }
                            return [2 /*return*/, false];
                        });
                    });
                };
                /**
                 * Given an optional side, return the ion-item-options element.
                 *
                 * @param side This side of the options to get. If a side is not provided it will
                 * return the first one available.
                 */
                class_3.prototype.getOptions = function (side) {
                    if (side === undefined) {
                        return this.leftOptions || this.rightOptions;
                    }
                    else if (side === 'start') {
                        return this.leftOptions;
                    }
                    else {
                        return this.rightOptions;
                    }
                };
                class_3.prototype.updateOptions = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var options, sides, i, option, side;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    options = this.el.querySelectorAll('ion-item-options');
                                    sides = 0;
                                    // Reset left and right options in case they were removed
                                    this.leftOptions = this.rightOptions = undefined;
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < options.length)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, options.item(i).componentOnReady()];
                                case 2:
                                    option = _a.sent();
                                    side = Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["i"])(option.side) ? 'end' : 'start';
                                    if (side === 'start') {
                                        this.leftOptions = option;
                                        sides |= 1 /* Start */;
                                    }
                                    else {
                                        this.rightOptions = option;
                                        sides |= 2 /* End */;
                                    }
                                    _a.label = 3;
                                case 3:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    this.optsDirty = true;
                                    this.sides = sides;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_3.prototype.canStart = function (gesture) {
                    /**
                     * If very close to start of the screen
                     * do not open left side so swipe to go
                     * back will still work.
                     */
                    var rtl = document.dir === 'rtl';
                    var atEdge = (rtl) ? (window.innerWidth - gesture.startX) < 15 : gesture.startX < 15;
                    if (atEdge) {
                        return false;
                    }
                    var selected = openSlidingItem;
                    if (selected && selected !== this.el) {
                        this.closeOpened();
                        return false;
                    }
                    return !!(this.rightOptions || this.leftOptions);
                };
                class_3.prototype.onStart = function () {
                    openSlidingItem = this.el;
                    if (this.tmr !== undefined) {
                        clearTimeout(this.tmr);
                        this.tmr = undefined;
                    }
                    if (this.openAmount === 0) {
                        this.optsDirty = true;
                        this.state = 4 /* Enabled */;
                    }
                    this.initialOpenAmount = this.openAmount;
                    if (this.item) {
                        this.item.style.transition = 'none';
                    }
                };
                class_3.prototype.onMove = function (gesture) {
                    if (this.optsDirty) {
                        this.calculateOptsWidth();
                    }
                    var openAmount = this.initialOpenAmount - gesture.deltaX;
                    switch (this.sides) {
                        case 2 /* End */:
                            openAmount = Math.max(0, openAmount);
                            break;
                        case 1 /* Start */:
                            openAmount = Math.min(0, openAmount);
                            break;
                        case 3 /* Both */: break;
                        case 0 /* None */: return;
                        default:
                            console.warn('invalid ItemSideFlags value', this.sides);
                            break;
                    }
                    var optsWidth;
                    if (openAmount > this.optsWidthRightSide) {
                        optsWidth = this.optsWidthRightSide;
                        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
                    }
                    else if (openAmount < -this.optsWidthLeftSide) {
                        optsWidth = -this.optsWidthLeftSide;
                        openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
                    }
                    this.setOpenAmount(openAmount, false);
                };
                class_3.prototype.onEnd = function (gesture) {
                    var velocity = gesture.velocityX;
                    var restingPoint = (this.openAmount > 0)
                        ? this.optsWidthRightSide
                        : -this.optsWidthLeftSide;
                    // Check if the drag didn't clear the buttons mid-point
                    // and we aren't moving fast enough to swipe open
                    var isResetDirection = (this.openAmount > 0) === !(velocity < 0);
                    var isMovingFast = Math.abs(velocity) > 0.3;
                    var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
                    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
                        restingPoint = 0;
                    }
                    var state = this.state;
                    this.setOpenAmount(restingPoint, true);
                    if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
                        this.rightOptions.fireSwipeEvent();
                    }
                    else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
                        this.leftOptions.fireSwipeEvent();
                    }
                };
                class_3.prototype.calculateOptsWidth = function () {
                    this.optsWidthRightSide = 0;
                    if (this.rightOptions) {
                        this.rightOptions.style.display = 'flex';
                        this.optsWidthRightSide = this.rightOptions.offsetWidth;
                        this.rightOptions.style.display = '';
                    }
                    this.optsWidthLeftSide = 0;
                    if (this.leftOptions) {
                        this.leftOptions.style.display = 'flex';
                        this.optsWidthLeftSide = this.leftOptions.offsetWidth;
                        this.leftOptions.style.display = '';
                    }
                    this.optsDirty = false;
                };
                class_3.prototype.setOpenAmount = function (openAmount, isFinal) {
                    var _this = this;
                    if (this.tmr !== undefined) {
                        clearTimeout(this.tmr);
                        this.tmr = undefined;
                    }
                    if (!this.item) {
                        return;
                    }
                    var style = this.item.style;
                    this.openAmount = openAmount;
                    if (isFinal) {
                        style.transition = '';
                    }
                    if (openAmount > 0) {
                        this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                            ? 8 /* End */ | 32 /* SwipeEnd */
                            : 8 /* End */;
                    }
                    else if (openAmount < 0) {
                        this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                            ? 16 /* Start */ | 64 /* SwipeStart */
                            : 16 /* Start */;
                    }
                    else {
                        this.tmr = setTimeout(function () {
                            _this.state = 2 /* Disabled */;
                            _this.tmr = undefined;
                        }, 600);
                        openSlidingItem = undefined;
                        style.transform = '';
                        return;
                    }
                    style.transform = "translate3d(" + -openAmount + "px,0,0)";
                    this.ionDrag.emit({
                        amount: openAmount,
                        ratio: this.getSlidingRatioSync()
                    });
                };
                class_3.prototype.getSlidingRatioSync = function () {
                    if (this.openAmount > 0) {
                        return this.openAmount / this.optsWidthRightSide;
                    }
                    else if (this.openAmount < 0) {
                        return this.openAmount / this.optsWidthLeftSide;
                    }
                    else {
                        return 0;
                    }
                };
                class_3.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['item-sliding-active-slide'] = (this.state !== 2 /* Disabled */),
                            _a['item-sliding-active-options-end'] = (this.state & 8 /* End */) !== 0,
                            _a['item-sliding-active-options-start'] = (this.state & 16 /* Start */) !== 0,
                            _a['item-sliding-active-swipe-end'] = (this.state & 32 /* SwipeEnd */) !== 0,
                            _a['item-sliding-active-swipe-start'] = (this.state & 64 /* SwipeStart */) !== 0,
                            _a) }));
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_3, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            var swipeShouldReset = function (isResetDirection, isMovingFast, isOnResetZone) {
                // The logic required to know when the sliding item should close (openAmount=0)
                // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
                // and it ended up being too complicated to be written manually without errors
                // so the truth table is attached below: (0=false, 1=true)
                // isResetDirection | isMovingFast | isOnResetZone || shouldClose
                //         0        |       0      |       0       ||    0
                //         0        |       0      |       1       ||    1
                //         0        |       1      |       0       ||    0
                //         0        |       1      |       1       ||    0
                //         1        |       0      |       0       ||    0
                //         1        |       0      |       1       ||    1
                //         1        |       1      |       0       ||    1
                //         1        |       1      |       1       ||    1
                // The resulting expression was generated by resolving the K-map (Karnaugh map):
                return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
            };
            ItemSliding.style = itemSlidingCss;
            /***/ 
        })
    }]);
//# sourceMappingURL=stencil-ion-item-option_3-md-entry-js-es2015.js.map
//# sourceMappingURL=stencil-ion-item-option_3-md-entry-js-es5.js.map
//# sourceMappingURL=stencil-ion-item-option_3-md-entry-js-es5.js.map