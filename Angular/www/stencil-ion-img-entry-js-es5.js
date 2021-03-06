(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-ion-img-entry-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-img.entry.js": 
        /*!************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
          \************************************************************/
        /*! exports provided: ion_img */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_img", function () { return Img; });
            /* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ "./node_modules/@ionic/core/dist/esm/index-2cd7e630.js");
            /* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-a175fa73.js");
            var imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
            var Img = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.onLoad = function () {
                        _this.ionImgDidLoad.emit();
                    };
                    this.onError = function () {
                        _this.ionError.emit();
                    };
                    this.ionImgWillLoad = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionImgWillLoad", 7);
                    this.ionImgDidLoad = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionImgDidLoad", 7);
                    this.ionError = Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionError", 7);
                }
                class_1.prototype.srcChanged = function () {
                    this.addIO();
                };
                class_1.prototype.componentDidLoad = function () {
                    this.addIO();
                };
                class_1.prototype.addIO = function () {
                    var _this = this;
                    if (this.src === undefined) {
                        return;
                    }
                    if ('IntersectionObserver' in window) {
                        this.removeIO();
                        this.io = new IntersectionObserver(function (data) {
                            // because there will only ever be one instance
                            // of the element we are observing
                            // we can just use data[0]
                            if (data[0].isIntersecting) {
                                _this.load();
                                _this.removeIO();
                            }
                        });
                        this.io.observe(this.el);
                    }
                    else {
                        // fall back to setTimeout for Safari and IE
                        setTimeout(function () { return _this.load(); }, 200);
                    }
                };
                class_1.prototype.load = function () {
                    this.loadError = this.onError;
                    this.loadSrc = this.src;
                    this.ionImgWillLoad.emit();
                };
                class_1.prototype.removeIO = function () {
                    if (this.io) {
                        this.io.disconnect();
                        this.io = undefined;
                    }
                };
                class_1.prototype.render = function () {
                    return (Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "src": ["srcChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            Img.style = imgCss;
            /***/ 
        })
    }]);
//# sourceMappingURL=stencil-ion-img-entry-js-es2015.js.map
//# sourceMappingURL=stencil-ion-img-entry-js-es5.js.map
//# sourceMappingURL=stencil-ion-img-entry-js-es5.js.map