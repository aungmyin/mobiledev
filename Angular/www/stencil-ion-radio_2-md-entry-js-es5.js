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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-radio_2-md-entry-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js ***!
          \*******************************************************************/
        /*! exports provided: ion_radio, ion_radio_group */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio", function () { return Radio; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio_group", function () { return RadioGroup; });
            /* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
            /* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
            /* harmony import */ var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d8b49b57.js */ "./node_modules/@ionic/core/dist/esm/helpers-d8b49b57.js");
            /* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");
            var radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}";
            var radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";
            var Radio = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-rb-" + radioButtonIds++;
                    this.radioGroup = null;
                    /**
                     * If `true`, the radio is selected.
                     */
                    this.checked = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot interact with the radio.
                     */
                    this.disabled = false;
                    this.updateState = function () {
                        if (_this.radioGroup) {
                            _this.checked = _this.radioGroup.value === _this.value;
                        }
                    };
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionStyle = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
                    this.ionFocus = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
                }
                class_1.prototype.connectedCallback = function () {
                    if (this.value === undefined) {
                        this.value = this.inputId;
                    }
                    var radioGroup = this.radioGroup = this.el.closest('ion-radio-group');
                    if (radioGroup) {
                        this.updateState();
                        radioGroup.addEventListener('ionChange', this.updateState);
                    }
                };
                class_1.prototype.disconnectedCallback = function () {
                    var radioGroup = this.radioGroup;
                    if (radioGroup) {
                        radioGroup.removeEventListener('ionChange', this.updateState);
                        this.radioGroup = null;
                    }
                };
                class_1.prototype.componentWillLoad = function () {
                    this.emitStyle();
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'radio-checked': this.checked,
                        'interactive-disabled': this.disabled,
                    });
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    var labelId = inputId + '-lbl';
                    var label = Object(_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a['in-item'] = Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), _a['interactive'] = true, _a['radio-checked'] = checked, _a['radio-disabled'] = disabled, _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-icon" }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-inner" })), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "color": ["emitStyle"],
                            "checked": ["emitStyle"],
                            "disabled": ["emitStyle"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var radioButtonIds = 0;
            Radio.style = {
                /*STENCIL:MODE:ios*/ ios: radioIosCss,
                /*STENCIL:MODE:md*/ md: radioMdCss
            };
            var RadioGroup = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-rg-" + radioGroupIds++;
                    this.labelId = this.inputId + "-lbl";
                    /**
                     * If `true`, the radios can be deselected.
                     */
                    this.allowEmptySelection = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    this.onClick = function (ev) {
                        var selectedRadio = ev.target && ev.target.closest('ion-radio');
                        if (selectedRadio) {
                            var currentValue = _this.value;
                            var newValue = selectedRadio.value;
                            if (newValue !== currentValue) {
                                _this.value = newValue;
                            }
                            else if (_this.allowEmptySelection) {
                                _this.value = undefined;
                            }
                        }
                    };
                    this.ionChange = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
                }
                class_2.prototype.valueChanged = function (value) {
                    this.ionChange.emit({ value: value });
                };
                class_2.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var el, header, label;
                        return __generator(this, function (_a) {
                            el = this.el;
                            header = el.querySelector('ion-list-header') || el.querySelector('ion-item-divider');
                            if (header) {
                                label = header.querySelector('ion-label');
                                if (label) {
                                    this.labelId = label.id = this.name + '-lbl';
                                }
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                class_2.prototype.render = function () {
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "radiogroup", "aria-labelledby": this.labelId, onClick: this.onClick, class: Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "watchers", {
                    get: function () {
                        return {
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var radioGroupIds = 0;
            /***/ 
        })
    }]);
//# sourceMappingURL=stencil-ion-radio_2-md-entry-js-es2015.js.map
//# sourceMappingURL=stencil-ion-radio_2-md-entry-js-es5.js.map
//# sourceMappingURL=stencil-ion-radio_2-md-entry-js-es5.js.map