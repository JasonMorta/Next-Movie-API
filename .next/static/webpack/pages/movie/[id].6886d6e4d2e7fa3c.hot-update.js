"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./pages/movie/[id].js":
/*!*****************************!*\
  !*** ./pages/movie/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GlobalLayout */ \"./components/GlobalLayout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar size = \"original\";\nvar img_url = \"https://image.tmdb.org/t/p/\";\nvar embed = \"https://www.youtube.com/embed/\";\n//Use this array to replay the month integer wit a string\nvar month = [\n    null,\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n//convert milliseconds to Hours, Minutes and seconds\nfunction padTo2Digits(num) {\n    return num.toString().padStart(2, \"0\");\n}\nfunction convertMsToTime(milliseconds) {\n    var seconds = Math.floor(milliseconds / 1000);\n    var minutes = Math.floor(seconds / 60);\n    var hours = Math.floor(minutes / 60);\n    seconds = seconds % 60;\n    minutes = minutes % 60;\n    //hours = hours % 24;\n    return \"\".concat(padTo2Digits(hours), \":\").concat(padTo2Digits(minutes), \":\").concat(padTo2Digits(seconds));\n}\n//Render the movie details when selected\nfunction Movie(param) {\n    var results = param.results;\n    //console.log(results)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preview_movie_outer_container\",\n            style: {\n                backgroundImage: \"url(\".concat(img_url + size + results.backdrop_path, \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: results.original_title\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"movie_preview\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"preview-image\",\n                                    src: img_url + size + results.poster_path,\n                                    width: 320,\n                                    height: 500\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: results.tagline ? results.tagline : results.original_title\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: results.overview\n                                    }, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 58,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Release Date:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \\n               \".concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[2], \"\\n               \").concat(month[parseInt(results.release_date.replaceAll(\"-\", \" \").split(\" \")[1])], \"\\n               \").concat(results.release_date.replaceAll(\"-\", \" \").split(\" \")[0])\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Status:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.status\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Genre:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            results.genres.map(function(item) {\n                                                return \"\".concat(item.name, \", \");\n                                            }),\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 67,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Runtime:\"\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            convertMsToTime(\"\".concat(results.runtime, \"00000\"))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 55,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"iframe\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"100%\",\n                                    height: \"100%\",\n                                    src: embed + results.videos.results[0].key\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                    lineNumber: 74,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                                lineNumber: 73,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 8\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n                    lineNumber: 43,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"I:\\\\Web Dev Bootcamp\\\\3. Full Stack Web Developer\\\\Task 11 NEXT II\\\\Task11\\\\Next-Movie-API\\\\pages\\\\movie\\\\[id].js\",\n        lineNumber: 40,\n        columnNumber: 11\n    }, this);\n}\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQXJCUSxPQUFPLENBQUMyQixPQUFPLEVBQUMsT0FBSyxDQUFDLENBQUM7Ozs7Ozs0Q0FBSzs7Ozs7O29DQUlqRTswQ0FDTiw4REFBQzFCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxRQUFROzBDQUNoQiw0RUFBQzBCLFFBQU07b0NBRVBsQixLQUFLLEVBQUMsTUFBTTtvQ0FDWkMsTUFBTSxFQUFDLE1BQU07b0NBQ2JILEdBQUcsRUFBRXRCLEtBQUssR0FBQ2MsT0FBTyxDQUFDNkIsTUFBTSxDQUFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOEIsR0FBRzs7Ozs7d0NBRS9COzs7OztvQ0FDTjs7Ozs7OzRCQUNSOzs7Ozt3QkFDRTs7Ozs7O2dCQUNIOzs7OztZQUVZO0NBRXZCO0FBbkRRL0IsS0FBQUEsS0FBSzs7QUFvRGQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS5qcz82MTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HbG9iYWxMYXlvdXQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuLy8gVGhlIFtpZF0uanMgd2lsbCBnZW5lcmF0ZSB0aGUgY29udGVudCBvZiBhbnkgIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuLy9TdG9yZSB0aGUgbW92aWUgc3RpbmcgaW50byB2YXJpYWJsZXNcclxubGV0IGJhc2VVUkwgICAgID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiO1xyXG5sZXQgbGFuZyAgICAgICAgPSBcIiZsYW5ndWFnZT1lbi1VU1wiO1xyXG5sZXQgQVBJX0tFWSAgICAgPSBcIj9hcGlfa2V5PThjZjFlZTg4ZmNmZjA4Y2FjNDcwMmE1M2NlN2JjNDcwXCI7XHJcbmxldCBzaXplICAgICAgICA9IFwib3JpZ2luYWxcIjtcclxubGV0IGltZ191cmwgICAgID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIlxyXG5sZXQgZW1iZWQgICAgICAgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYFxyXG5cclxuLy9Vc2UgdGhpcyBhcnJheSB0byByZXBsYXkgdGhlIG1vbnRoIGludGVnZXIgd2l0IGEgc3RyaW5nXHJcbmNvbnN0IG1vbnRoID0gW251bGwsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl07XHJcblxyXG4vL2NvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIEhvdXJzLCBNaW51dGVzIGFuZCBzZWNvbmRzXHJcbmZ1bmN0aW9uIHBhZFRvMkRpZ2l0cyhudW0pIHtcclxuICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydE1zVG9UaW1lKG1pbGxpc2Vjb25kcykge1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XHJcbiAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XHJcbiAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XHJcbiAgIC8vaG91cnMgPSBob3VycyAlIDI0O1xyXG4gICByZXR1cm4gYCR7cGFkVG8yRGlnaXRzKGhvdXJzKX06JHtwYWRUbzJEaWdpdHMobWludXRlcyl9OiR7cGFkVG8yRGlnaXRzKFxyXG4gc2Vjb25kcyxcclxuKX1gO1xyXG59XHJcblxyXG4vL1JlbmRlciB0aGUgbW92aWUgZGV0YWlscyB3aGVuIHNlbGVjdGVkXHJcbmZ1bmN0aW9uIE1vdmllKHtyZXN1bHRzfSkge1xyXG4gICAvL2NvbnNvbGUubG9nKHJlc3VsdHMpXHJcblxyXG4gICByZXR1cm4gPEdsb2JhbExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpZXdfbW92aWVfb3V0ZXJfY29udGFpbmVyJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWdfdXJsK3NpemUrcmVzdWx0cy5iYWNrZHJvcF9wYXRofSlgIH19PlxyXG4gICAgICA8aDE+e3Jlc3VsdHMub3JpZ2luYWxfdGl0bGUgfTwvaDE+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZV9wcmV2aWV3JyA+XHJcbiAgICAgICAgXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5uZXItY29udGFpbmVyJz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX2ltZyc+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJldmlldy1pbWFnZSdcclxuICAgICAgICAgICAgICBzcmM9e2ltZ191cmwrc2l6ZStyZXN1bHRzLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgICAgIHdpZHRoPXszMjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9Lz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgIDxoMj57cmVzdWx0cy50YWdsaW5lID8gcmVzdWx0cy50YWdsaW5lOnJlc3VsdHMub3JpZ2luYWxfdGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgPHA+e3Jlc3VsdHMub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5SZWxlYXNlIERhdGU6PC9iPlxyXG4gICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgJHtyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzJdfVxyXG4gICAgICAgICAgICAgICAke21vbnRoW3BhcnNlSW50KHJlc3VsdHMucmVsZWFzZV9kYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiIFwiKS5zcGxpdChcIiBcIilbMV0pXX1cclxuICAgICAgICAgICAgICAgJHtyZXN1bHRzLnJlbGVhc2VfZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIikuc3BsaXQoXCIgXCIpWzBdfWBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPlN0YXR1czo8L2I+IHtyZXN1bHRzLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxiPkdlbnJlOjwvYj4ge3Jlc3VsdHMuZ2VucmVzLm1hcChpdGVtPT5gJHtpdGVtLm5hbWV9LCBgKX0gPC9wPlxyXG4gICAgICAgICAgICAgICA8cD48Yj5SdW50aW1lOjwvYj4ge2NvbnZlcnRNc1RvVGltZShgJHtyZXN1bHRzLnJ1bnRpbWV9MDAwMDBgKX08L3A+XHJcbiAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lmcmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIiBcclxuICAgICAgICAgICAgICAgICAgc3JjPXtlbWJlZCtyZXN1bHRzLnZpZGVvcy5yZXN1bHRzWzBdLmtleX0gPlxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvR2xvYmFsTGF5b3V0PlxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVxyXG5cclxuLy9TaW5jZSB3ZSBkb24ndCBrbm93IHdoYXQgdGhpIGlkIHdpbGwgYmUgd2UnbGwgdXNlIHNvbWV0aGluZyBjYWxsZWQgYSB3aWxkY2FyZCB0byByZW5kZXIgdGhlIHBhZ2Ugb2YgdGhlIHNlbGVjdGVkIG1vdmllLlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7Ly9jb250ZXh0IGhvbGRzIHRoZSBkYXRhIHRoYXRzIHBhc3NlZCB3aXRoIHRoZSB1cmxcclxuICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeS8vdGhpcyB3aWxsIGFsc28gaG9sZCB0aGUgaWQgb2YgdGhlIG1vdmllcyBzZWxlY3RlZCBvbiB0aGUgaG9tZSBwYWdlLlxyXG5cclxuICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHtpZH0ke0FQSV9LRVl9JHtsYW5nfSZhcHBlbmRfdG9fcmVzcG9uc2U9dmlkZW9zLCBpbWFnZXNgKVxyXG4gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG4gICByZXR1cm57cHJvcHM6IHtyZXN1bHRzOnJlcXVlc3R9fVxyXG4gICBcclxuXHJcbiAgIC8vY29uc29sZS50YWJsZSh1cmwpXHJcbiAgXHJcbiB9XHJcbiBcclxuIl0sIm5hbWVzIjpbIkdsb2JhbExheW91dCIsIkltYWdlIiwic2l6ZSIsImltZ191cmwiLCJlbWJlZCIsIm1vbnRoIiwicGFkVG8yRGlnaXRzIiwibnVtIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImNvbnZlcnRNc1RvVGltZSIsIm1pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJNb3ZpZSIsInJlc3VsdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tkcm9wX3BhdGgiLCJoMSIsIm9yaWdpbmFsX3RpdGxlIiwic3JjIiwicG9zdGVyX3BhdGgiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwidGFnbGluZSIsInAiLCJvdmVydmlldyIsImJyIiwiYiIsInJlbGVhc2VfZGF0ZSIsInJlcGxhY2VBbGwiLCJzcGxpdCIsInBhcnNlSW50Iiwic3RhdHVzIiwiZ2VucmVzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJydW50aW1lIiwiaWZyYW1lIiwidmlkZW9zIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[id].js\n"));

/***/ })

});