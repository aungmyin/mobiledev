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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js": 
        /*!**************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
          \**************************************************************************/
        /*! exports provided: a, d */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return attachComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return detachComponent; });
            var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return __awaiter(_this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (delegate) {
                                return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                            }
                            if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                                throw new Error('framework delegate is missing');
                            }
                            el = (typeof component === 'string')
                                ? container.ownerDocument && container.ownerDocument.createElement(component)
                                : component;
                            if (cssClasses) {
                                cssClasses.forEach(function (c) { return el.classList.add(c); });
                            }
                            if (componentProps) {
                                Object.assign(el, componentProps);
                            }
                            container.appendChild(el);
                            if (!el.componentOnReady) return [3 /*break*/, 2];
                            return [4 /*yield*/, el.componentOnReady()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, el];
                    }
                });
            }); };
            var detachComponent = function (delegate, element) {
                if (element) {
                    if (delegate) {
                        var container = element.parentElement;
                        return delegate.removeViewFromDom(container, element);
                    }
                    element.remove();
                }
                return Promise.resolve();
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
          \**************************************************************/
        /*! exports provided: a, b, c, h */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return hapticSelectionStart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return hapticSelectionChanged; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return hapticSelectionEnd; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return hapticSelection; });
            /**
             * Check to see if the Haptic Plugin is available
             * @return Returns `true` or false if the plugin is available
             */
            /**
             * Trigger a selection changed haptic event. Good for one-time events
             * (not for gestures)
             */
            var hapticSelection = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.selection();
                }
            };
            /**
             * Tell the haptic engine that a gesture for a selection change is starting.
             */
            var hapticSelectionStart = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionStart();
                }
            };
            /**
             * Tell the haptic engine that a selection changed during a gesture.
             */
            var hapticSelectionChanged = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionChanged();
                }
            };
            /**
             * Tell the haptic engine we are done with a gesture. This needs to be
             * called lest resources are not properly recycled.
             */
            var hapticSelectionEnd = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionEnd();
                }
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/index-729ec402.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
          \*************************************************************/
        /*! exports provided: s */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () { return sanitizeDOMString; });
            /**
             * Does a simple sanitization of all elements
             * in an untrusted string
             */
            var sanitizeDOMString = function (untrustedString) {
                try {
                    if (typeof untrustedString !== 'string' || untrustedString === '') {
                        return untrustedString;
                    }
                    /**
                     * Create a document fragment
                     * separate from the main DOM,
                     * create a div to do our work in
                     */
                    var documentFragment_1 = document.createDocumentFragment();
                    var workingDiv = document.createElement('div');
                    documentFragment_1.appendChild(workingDiv);
                    workingDiv.innerHTML = untrustedString;
                    /**
                     * Remove any elements
                     * that are blocked
                     */
                    blockedTags.forEach(function (blockedTag) {
                        var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
                        for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                            var element = getElementsToRemove[elementIndex];
                            if (element.parentNode) {
                                element.parentNode.removeChild(element);
                            }
                            else {
                                documentFragment_1.removeChild(element);
                            }
                            /**
                             * We still need to sanitize
                             * the children of this element
                             * as they are left behind
                             */
                            var childElements = getElementChildren(element);
                            /* tslint:disable-next-line */
                            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                                sanitizeElement(childElements[childIndex]);
                            }
                        }
                    });
                    /**
                     * Go through remaining elements and remove
                     * non-allowed attribs
                     */
                    // IE does not support .children on document fragments, only .childNodes
                    var dfChildren = getElementChildren(documentFragment_1);
                    /* tslint:disable-next-line */
                    for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
                        sanitizeElement(dfChildren[childIndex]);
                    }
                    // Append document fragment to div
                    var fragmentDiv = document.createElement('div');
                    fragmentDiv.appendChild(documentFragment_1);
                    // First child is always the div we did our work in
                    var getInnerDiv = fragmentDiv.querySelector('div');
                    return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
                }
                catch (err) {
                    console.error(err);
                    return '';
                }
            };
            /**
             * Clean up current element based on allowed attributes
             * and then recursively dig down into any child elements to
             * clean those up as well
             */
            var sanitizeElement = function (element) {
                // IE uses childNodes, so ignore nodes that are not elements
                if (element.nodeType && element.nodeType !== 1) {
                    return;
                }
                for (var i = element.attributes.length - 1; i >= 0; i--) {
                    var attribute = element.attributes.item(i);
                    var attributeName = attribute.name;
                    // remove non-allowed attribs
                    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
                        element.removeAttribute(attributeName);
                        continue;
                    }
                    // clean up any allowed attribs
                    // that attempt to do any JS funny-business
                    var attributeValue = attribute.value;
                    /* tslint:disable-next-line */
                    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
                        element.removeAttribute(attributeName);
                    }
                }
                /**
                 * Sanitize any nested children
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var i = 0; i < childElements.length; i++) {
                    sanitizeElement(childElements[i]);
                }
            };
            /**
             * IE doesn't always support .children
             * so we revert to .childNodes instead
             */
            var getElementChildren = function (el) {
                return (el.children != null) ? el.children : el.childNodes;
            };
            var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
            var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js": 
        /*!***********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
          \***********************************************************************/
        /*! exports provided: S */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function () { return SPINNERS; });
            var spinners = {
                'bubbles': {
                    dur: 1000,
                    circles: 9,
                    fn: function (dur, index, total) {
                        var animationDelay = (dur * index / total) - dur + "ms";
                        var angle = 2 * Math.PI * index / total;
                        return {
                            r: 5,
                            style: {
                                'top': 9 * Math.sin(angle) + "px",
                                'left': 9 * Math.cos(angle) + "px",
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'circles': {
                    dur: 1000,
                    circles: 8,
                    fn: function (dur, index, total) {
                        var step = index / total;
                        var animationDelay = (dur * step) - dur + "ms";
                        var angle = 2 * Math.PI * step;
                        return {
                            r: 5,
                            style: {
                                'top': 9 * Math.sin(angle) + "px",
                                'left': 9 * Math.cos(angle) + "px",
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'circular': {
                    dur: 1400,
                    elmDuration: true,
                    circles: 1,
                    fn: function () {
                        return {
                            r: 20,
                            cx: 48,
                            cy: 48,
                            fill: 'none',
                            viewBox: '24 24 48 48',
                            transform: 'translate(0,0)',
                            style: {}
                        };
                    }
                },
                'crescent': {
                    dur: 750,
                    circles: 1,
                    fn: function () {
                        return {
                            r: 26,
                            style: {}
                        };
                    }
                },
                'dots': {
                    dur: 750,
                    circles: 3,
                    fn: function (_, index) {
                        var animationDelay = -(110 * index) + 'ms';
                        return {
                            r: 6,
                            style: {
                                'left': 9 - (9 * index) + "px",
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'lines': {
                    dur: 1000,
                    lines: 12,
                    fn: function (dur, index, total) {
                        var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
                        var animationDelay = (dur * index / total) - dur + "ms";
                        return {
                            y1: 17,
                            y2: 29,
                            style: {
                                'transform': transform,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'lines-small': {
                    dur: 1000,
                    lines: 12,
                    fn: function (dur, index, total) {
                        var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
                        var animationDelay = (dur * index / total) - dur + "ms";
                        return {
                            y1: 12,
                            y2: 20,
                            style: {
                                'transform': transform,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                }
            };
            var SPINNERS = spinners;
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
          \*************************************************************/
        /*! exports provided: c, g, h, o */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return createColorClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return getClassMap; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return hostContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () { return openURL; });
            var hostContext = function (selector, el) {
                return el.closest(selector) !== null;
            };
            /**
             * Create the mode and color classes for the component based on the classes passed in
             */
            var createColorClasses = function (color) {
                var _a;
                return (typeof color === 'string' && color.length > 0) ? (_a = {
                        'ion-color': true
                    },
                    _a["ion-color-" + color] = true,
                    _a) : undefined;
            };
            var getClassList = function (classes) {
                if (classes !== undefined) {
                    var array = Array.isArray(classes) ? classes : classes.split(' ');
                    return array
                        .filter(function (c) { return c != null; })
                        .map(function (c) { return c.trim(); })
                        .filter(function (c) { return c !== ''; });
                }
                return [];
            };
            var getClassMap = function (classes) {
                var map = {};
                getClassList(classes).forEach(function (c) { return map[c] = true; });
                return map;
            };
            var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
            var openURL = function (url, ev, direction) { return __awaiter(_this, void 0, void 0, function () {
                var router;
                return __generator(this, function (_a) {
                    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
                        router = document.querySelector('ion-router');
                        if (router) {
                            if (ev != null) {
                                ev.preventDefault();
                            }
                            return [2 /*return*/, router.push(url, direction)];
                        }
                    }
                    return [2 /*return*/, false];
                });
            }); };
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map