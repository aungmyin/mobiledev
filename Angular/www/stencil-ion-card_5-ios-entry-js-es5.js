(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-card_5-ios-entry-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js": 
        /*!*******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js ***!
          \*******************************************************************/
        /*! exports provided: ion_card, ion_card_content, ion_card_header, ion_card_subtitle, ion_card_title */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card", function () { return Card; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_content", function () { return CardContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_header", function () { return CardHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_subtitle", function () { return CardSubtitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_title", function () { return CardTitle; });
            /* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
            /* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
            /* harmony import */ var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-c2dc54d9.js */ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js");
            var cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background, var(--ion-background-color, #fff));--color:var(--ion-color-step-600, #666666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}";
            var cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background, var(--ion-background-color, #fff));--color:var(--ion-color-step-550, #737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}";
            var Card = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, a button tag will be rendered and the card will be tappable.
                     */
                    this.button = false;
                    /**
                     * The type of the button. Only used when an `onclick` or `button` property is present.
                     */
                    this.type = 'button';
                    /**
                     * If `true`, the user cannot interact with the card.
                     */
                    this.disabled = false;
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                }
                class_1.prototype.isClickable = function () {
                    return (this.href !== undefined || this.button);
                };
                class_1.prototype.renderCard = function (mode) {
                    var clickable = this.isClickable();
                    if (!clickable) {
                        return [
                            Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)
                        ];
                    }
                    var _a = this, href = _a.href, routerDirection = _a.routerDirection;
                    var TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
                    var attrs = (TagType === 'button')
                        ? { type: this.type }
                        : {
                            download: this.download,
                            href: this.href,
                            rel: this.rel,
                            target: this.target
                        };
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: function (ev) { return Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, routerDirection); } }), Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), clickable && mode === 'md' && Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
                };
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() }) }, this.renderCard(mode)));
                };
                return class_1;
            }());
            Card.style = {
                /*STENCIL:MODE:ios*/ ios: cardIosCss,
                /*STENCIL:MODE:md*/ md: cardMdCss
            };
            var cardContentIosCss = "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}";
            var cardContentMdCss = "ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}";
            var CardContent = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["card-content-" + mode] = true,
                            _a) }));
                };
                return class_2;
            }());
            CardContent.style = {
                /*STENCIL:MODE:ios*/ ios: cardContentIosCss,
                /*STENCIL:MODE:md*/ md: cardContentMdCss
            };
            var cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}";
            var cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
            var CardHeader = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the card header will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     */
                    this.translucent = false;
                }
                class_3.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = { 'card-header-translucent': this.translucent, 'ion-inherit-color': true }, _a[mode] = true, _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                return class_3;
            }());
            CardHeader.style = {
                /*STENCIL:MODE:ios*/ ios: cardHeaderIosCss,
                /*STENCIL:MODE:md*/ md: cardHeaderMdCss
            };
            var cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
            var cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}";
            var CardSubtitle = /** @class */ (function () {
                function class_4(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_4.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "3", class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = { 'ion-inherit-color': true }, _a[mode] = true, _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                return class_4;
            }());
            CardSubtitle.style = {
                /*STENCIL:MODE:ios*/ ios: cardSubtitleIosCss,
                /*STENCIL:MODE:md*/ md: cardSubtitleMdCss
            };
            var cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}";
            var cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";
            var CardTitle = /** @class */ (function () {
                function class_5(hostRef) {
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_5.prototype.render = function () {
                    var _a;
                    var mode = Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, Object(_theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = { 'ion-inherit-color': true }, _a[mode] = true, _a)) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                return class_5;
            }());
            CardTitle.style = {
                /*STENCIL:MODE:ios*/ ios: cardTitleIosCss,
                /*STENCIL:MODE:md*/ md: cardTitleMdCss
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=stencil-ion-card_5-ios-entry-js-es2015.js.map
//# sourceMappingURL=stencil-ion-card_5-ios-entry-js-es5.js.map
//# sourceMappingURL=stencil-ion-card_5-ios-entry-js-es5.js.map